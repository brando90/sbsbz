import { lstatSync, readdirSync, readFileSync } from "node:fs";
import { resolve, relative, join, extname } from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

function filesUnder(directory) {
  if (!lstatSync(directory).isDirectory()) throw new Error(`Not a directory: ${directory}`);
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Website assets cannot be symlinks: ${path}`);
    if (entry.isDirectory()) return filesUnder(path);
    if (!entry.isFile()) throw new Error(`Not a regular file: ${path}`);
    return [path];
  });
}

export function checkPhotoSources(root) {
  // Git errors must fail the build; an untracked local download is not a backup.
  const tracked = new Set(execFileSync("git", ["ls-files", "-z"], {
    cwd: root, encoding: "utf8",
  }).split("\0"));
  const photos = new Map();
  const photoRoot = resolve(root, "client/public/photos");
  for (const path of filesUnder(photoRoot)) {
    const name = relative(photoRoot, path).split("\\").join("/");
    const repoPath = relative(root, path).split("\\").join("/");
    if (!tracked.has(repoPath)) throw new Error(`Photo is not tracked in Git: ${repoPath}. Add it with git add.`);
    const bytes = readFileSync(path);
    if (!bytes.length) throw new Error(`Photo is empty: ${repoPath}`);
    photos.set(name, bytes);
  }

  const references = new Set();
  for (const path of filesUnder(resolve(root, "client/src"))) {
    if (![".ts", ".tsx", ".js", ".jsx", ".css"].includes(extname(path))) continue;
    const source = readFileSync(path, "utf8");
    const remotePhoto = source.match(/(?:https?:)?\/\/[^\s"'`<>]+\.(?:avif|gif|jpe?g|png|svg|webp)(?:[?#][^\s"'`<>]*)?/i);
    if (remotePhoto) throw new Error(`External image address in ${relative(root, path)}. Save the image in client/public/photos instead.`);
    for (const match of source.matchAll(/["'`]photos\/([^"'`]+)["'`]/g)) {
      const name = match[1];
      if (!photos.has(name)) throw new Error(`Missing tracked photo: photos/${name} (${relative(root, path)})`);
      references.add(name);
    }
  }
  if (!references.size) throw new Error("No local photo references found. Keep literal photos/filename references so the build can verify them.");
  console.log(`Photo sources verified: ${photos.size} tracked files, ${references.size} referenced files.`);
  return photos;
}

export function checkPhotoOutput(root, photos) {
  for (const [name, expected] of photos) {
    const path = resolve(root, "dist/public/photos", name);
    if (!lstatSync(path).isFile() || !readFileSync(path).equals(expected)) {
      throw new Error(`Published photo differs from its source: ${name}`);
    }
  }
  console.log(`Published photo copies verified: ${photos.size} files.`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  checkPhotoSources(resolve(import.meta.dirname, ".."));
}
