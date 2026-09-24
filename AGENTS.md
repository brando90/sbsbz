# SBSBZ repository and advertising guidance

**Doc link:** <https://github.com/brando90/sbsbz/blob/main/AGENTS.md>

**TLDR:** Use `brando90/sbsbz` for all Stanford Bachata Sensual & Brazilian Zouk (SBSBZ) website, email-tool, and marketing work. `brando90/sbsbz-web` is archived; its useful source and history have already been consolidated here.

## One active repository

- Canonical repository: <https://github.com/brando90/sbsbz>; normal local checkout: `~/sbsbz`.
- On the Stanford Network Analysis Project (SNAP) cluster, the shared checkout is `/dfs/scratch0/brando9/sbsbz`, with `~/sbsbz` pointing there on configured nodes.
- `sbsbz-web` is a historical backup, not a second application or a dependency. Do not recreate its checkout, develop there, or use its old cross-repository publishing instructions unless explicitly asked to recover history.
- The current `main` branch contains the website under `client/`, email tools under `py_src/`, and existing marketing material. It publishes <https://brando90.github.io/sbsbz/> through `.github/workflows/deploy.yml`; only `dist/public/` is deployed.
- Before editing, inspect the current branch and working-tree changes. Older event branches can contain outdated README instructions referring to `sbsbz-web`; preserve their work and consult current `origin/main` guidance. Do not reset or merge an event branch merely to change repositories.
- See `~/sbsbz/docs/repository-consolidation.md` for the file audit and retained design/history references. Use the current README for development and build commands.

## Club advertising context

Before club advertising work, read docs/advertising-playbook.md and the current campaign records under events/. The playbook links the shared Google document and explains preparation versus sending, confirmed facts, instructor fallback, asset reuse, appropriate outreach and duplicate prevention.

Follow the latest explicit user request. Older marketing prompts are historical examples, not current schedules or automatic permission to send. This repository is public: do not commit chat screenshots, private exports, credentials, or private dispatch receipts. Keep shared behavior changes mirrored in AGENTS.md and CLAUDE.md.
