import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, copyFileSync, rmSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { checkPhotoSources, checkPhotoOutput } from "./check-photos.mjs";

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), "sbsbz-photos-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, "client/public/photos"), { recursive: true });
  mkdirSync(join(root, "client/src"), { recursive: true });
  const photo = join(root, "client/public/photos/dance.jpg");
  const page = join(root, "client/src/Home.tsx");
  writeFileSync(photo, Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0xff, 0xd9]));
  writeFileSync(page, 'const image = import.meta.env.BASE_URL + "photos/dance.jpg";');
  execFileSync("git", ["init", "--quiet"], { cwd: root });
  execFileSync("git", ["add", "client"], { cwd: root });
  return { root, photo, page };
}

test("accepts tracked photo sources and identical production copies", t => {
  const { root, photo } = fixture(t);
  const photos = checkPhotoSources(root);
  mkdirSync(join(root, "dist/public/photos"), { recursive: true });
  copyFileSync(photo, join(root, "dist/public/photos/dance.jpg"));
  assert.equal(photos.size, 1);
  assert.doesNotThrow(() => checkPhotoOutput(root, photos));
});

test("rejects a deleted source even when Git still tracks its name", t => {
  const { root, photo } = fixture(t);
  rmSync(photo);
  assert.throws(() => checkPhotoSources(root), /Missing tracked photo/);
});

test("rejects an unstaged new photograph", t => {
  const { root } = fixture(t);
  writeFileSync(join(root, "client/public/photos/new.jpg"), "untracked");
  assert.throws(() => checkPhotoSources(root), /not tracked in Git/);
});

test("rejects empty image downloads", t => {
  const { root, photo } = fixture(t);
  writeFileSync(photo, "");
  assert.throws(() => checkPhotoSources(root), /Photo is empty/);
});

test("rejects photo symlinks to temporary storage", t => {
  const { root, photo } = fixture(t);
  rmSync(photo);
  symlinkSync(join(root, "temporary.jpg"), photo);
  assert.throws(() => checkPhotoSources(root), /cannot be symlinks/);
});

test("rejects remote photo regressions, including signed addresses", t => {
  const { root, page } = fixture(t);
  writeFileSync(page, 'const image = "https://example.com/photo.jpg?expires=123";');
  assert.throws(() => checkPhotoSources(root), /External image address/);
});

test("rejects missing and modified build copies", t => {
  const { root } = fixture(t);
  const photos = checkPhotoSources(root);
  assert.throws(() => checkPhotoOutput(root, photos), /ENOENT/);
  mkdirSync(join(root, "dist/public/photos"), { recursive: true });
  writeFileSync(join(root, "dist/public/photos/dance.jpg"), "wrong bytes");
  assert.throws(() => checkPhotoOutput(root, photos), /differs from its source/);
});

test("fails closed when Git metadata is absent", t => {
  const { root } = fixture(t);
  rmSync(join(root, ".git"), { recursive: true, force: true });
  assert.throws(() => checkPhotoSources(root), /git ls-files/);
});
