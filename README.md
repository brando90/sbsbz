# Stanford Bachata Sensual & Brazilian Zouk

**TLDR:** This is the single active repository for the SBSBZ (Stanford Bachata Sensual & Brazilian Zouk) website and its existing email tools. Open **https://brando90.github.io/sbsbz/** to view the website; changes merged into `main` build and publish automatically.

## Advertising and future-agent context

Read [the advertising playbook](docs/advertising-playbook.md) before preparing or sending a campaign. It contains the reusable WhatsApp caption, instructor fallback, asset rules, and posting/verification workflow, with a link to the shared Google document. Older marketing prompts are historical examples.

## View or edit the website

The website is at **[brando90.github.io/sbsbz](https://brando90.github.io/sbsbz/)**. Opening `client/index.html` directly from disk shows a link to the live site; the React source needs a development server to run locally.

Use Node.js 22 or newer, then:

```sh
npx --yes pnpm@10.4.1 install --frozen-lockfile
npx --yes pnpm@10.4.1 dev
```

Open the local address printed by the development server. Edit pages in `client/src/pages/` and shared navigation in `client/src/components/`.

## Build and publish

```sh
npx --yes pnpm@10.4.1 check
node --test scripts/check-photos.test.mjs
npx --yes pnpm@10.4.1 build:pages
```

The GitHub Actions workflow builds and publishes only `dist/public/` after a push to `main`. GitHub Pages is configured to use **GitHub Actions**, with no second repository or cross-repository credential. Email recipients, Python tools, project notes, and source history are not included in the deployed website.

The default build path is `/sbsbz/`. GitHub Actions obtains the actual path from the Pages settings, including `/` if an owned custom domain is added later. Direct visits and refreshes work for Home, About, Classes, Events, and Join.

## Preserved history and tools

The September 11, 2026 consolidation keeps the newer design from `sbsbz-web` and both Git histories. The former `sbsbz-web` repository is retained only as a backup; there is no runtime or publishing dependency on it.

- Original `sbsbz` version: commit `0ea277a0a96c9bb163dfc0945692187e1e45f69d`.
- Imported `sbsbz-web` version: commit `870520bbf24abf8a3d4b92c0221b9008b38ddba3`.
- Previous published build remains in the `gh-pages` branch as a rollback copy; new builds use GitHub Actions.
- Existing email tools and recipient lists remain in `py_src/`; see [setup instructions](py_src/SETUP.md). No email is sent by the website deployment.
- Existing marketing prompts remain in `automation/prompts/` and `experiments/00_automating_marketing/`.
- The unmerged configuration draft remains on `claude/init-brando-config-utils-pYA8W`, commit `889cbed`; it has not been silently applied or deleted.

## Photos

The website now stores 13 recovered photographs in `client/public/photos/`, restoring 18 image placements across all five pages. Images publish with the site and no longer rely on the original host, which returned access-denied errors. Three officer portraits (Elizabeth, Nick, and Lorena) still need their original uploads and currently show initials.

See [photo sources and recovery notes](docs/photos.md) for original Drive and Instagram sources, reused club pictures, and the missing filenames. Use `import.meta.env.BASE_URL + "photos/filename.jpg"` when adding another saved photo so it works on GitHub Pages and on a future custom domain.

**Permanent storage rule:** Every photograph used by the website must be committed to this repository in the same change as its page reference. Google Drive is an intake/source archive; the deployed website must load the saved repository files. Do not use temporary local paths or external photo-host addresses for published images.

Before committing a new photograph, stage it with `git add client/public/photos/filename.jpg` and run `npx --yes pnpm@10.4.1 check:photos`. The production build runs this check automatically: it rejects missing, empty, untracked, or symlinked photo files, checks literal photo references and remote raster-image addresses in page source, and verifies that every photo is copied unchanged into the published output. A failed build stops deployment, leaving the last successful website online. Build from a Git clone so tracking can be verified.
