import { copyFileSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { checkPhotoSources, checkPhotoOutput } from "./check-photos.mjs";

const root = resolve(import.meta.dirname, "..");
const photos = checkPhotoSources(root);
const build = spawnSync(process.execPath, [
  resolve(root, "node_modules/vite/bin/vite.js"),
  "build", "--base", process.env.PAGES_BASE || "/sbsbz/",
], { cwd: root, stdio: "inherit", env: { ...process.env, NODE_ENV: "production" } });
if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);

const output = resolve(root, "dist/public");
for (const route of ["about", "classes", "events", "join", "404"]) {
  mkdirSync(resolve(output, route), { recursive: true });
  copyFileSync(resolve(output, "index.html"), resolve(output, route, "index.html"));
}
copyFileSync(resolve(output, "index.html"), resolve(output, "404.html"));
writeFileSync(resolve(output, ".nojekyll"), "");
rmSync(resolve(output, "__manus__"), { recursive: true, force: true });
checkPhotoOutput(root, photos);
