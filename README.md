# SBSBZ website

**TLDR:** This repository contains the newer website for Stanford Bachata Sensual & Brazilian Zouk (SBSBZ). Its public build is hosted at https://brando90.github.io/sbsbz/ using the `gh-pages` branch of `brando90/sbsbz`; the source repository stays private.

## Repository roles

- `brando90/sbsbz-web`: edit the current website here.
- `brando90/sbsbz`, branch `gh-pages`: generated public website files only.
- `brando90/sbsbz`, branch `main`: older design and separate email automation; it is not the deployed source.

The website is static and does not need a database or the email automation to run.

## Build

Use Node.js 22 or newer and the package manager version pinned in `package.json`:

```sh
npx --yes pnpm@10.4.1 install --frozen-lockfile
npx --yes pnpm@10.4.1 check
npx --yes pnpm@10.4.1 build:pages
```

Publish only the resulting `dist/public/` directory to `brando90/sbsbz`'s `gh-pages` branch, preserving its history. GitHub Pages serves that branch's root. Do not publish the source repository or email recipient files as website artifacts. Source pushes alone do not deploy: rebuild, check the pages, and publish the generated files.

The default base is `/sbsbz/`. For a custom domain hosted at its root, build with `PAGES_BASE=/` and configure that owned domain in GitHub Pages. All five main page addresses have their own HTML entry so direct visits and refreshes work on static hosting.

## Original photos

The existing CloudFront photo addresses returned HTTP 403 (access denied) on September 11, 2026. Recover the original photos from the project owner or Manus, place them in `client/public/`, and replace the external addresses to make the site independent of their old host.
