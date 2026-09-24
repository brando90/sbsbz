# Single-repository consolidation audit

**Doc link:** <https://github.com/brando90/sbsbz/blob/main/docs/repository-consolidation.md>

**TLDR:** `brando90/sbsbz` is the sole active website and email-tools repository. All 92 tracked files in archived `sbsbz-web` already have counterparts here; no additional source migration was needed during the 09-24-2026 cleanup.

## Evidence

Compared archived `sbsbz-web` main commit `774dffc5f69e20616ff312d874e36a833040c2f8` with active `sbsbz` main commit `18e853b3b6422c1ff988cedf1fcedd1ca73c6dd6`.

| Check | Result |
| --- | --- |
| Archived tracked files inspected | 92 |
| Identical file contents in active main | 81 |
| Paths with newer active contents | 11 |
| Archived paths missing from active main | 0 |
| Uncommitted tracked changes in either archived checkout | 0 |
| Untracked, non-ignored files in either archived checkout | 0 |

The 11 changed paths are `.gitignore`, `README.md`, `client/index.html`, `client/src/index.css`, all five pages under `client/src/pages/` (About, Classes, Events, Home, Join), `package.json`, and `scripts/build-pages.mjs`. Their differences retain the newer active deployment instructions, saved photographs and fallbacks, revised schedules/events, package identity, and photo validation. Copying the archived versions over them would undo those changes.

The extra ignored directories in the old launch checkout were `node_modules/` and `dist/`: installed dependencies and generated website output, not unique source material. Local archived checkouts are retired only after preserving their Git references and verifying this audit; they are not needed to build or publish the active site.

## Useful material already preserved

- [Design brainstorm](../ideas.md), shared components in `client/src/components/`, build tooling, and package lockfile already exist in the active repository.
- [Consolidation pull request](https://github.com/brando90/sbsbz/pull/4) imported source commit `870520bbf24abf8a3d4b92c0221b9008b38ddba3`, preserving the original source history.
- [Archived repository](https://github.com/brando90/sbsbz-web) retains the final archive notice and its history. It has no runtime or publishing role.
- Existing event branches in `sbsbz` remain separate work; this cleanup does not discard or merge their commits.

## Working location

Use `~/sbsbz` on the Mac and `/dfs/scratch0/brando9/sbsbz` on the Stanford Network Analysis Project (SNAP) cluster. A checkout can still be on an older event branch; check its branch before assuming its README describes current publishing. Current `main` and the root `AGENTS.md` and `CLAUDE.md` govern the single-repository workflow.
