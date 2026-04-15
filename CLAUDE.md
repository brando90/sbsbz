# CLAUDE.md — SBSBZ (Stanford Bachata Sensual & Brazilian Zouk)

## Project Overview

SBSBZ is the website and automation tooling for Stanford's student-run Bachata Sensual and Brazilian Zouk dance community. The project has two main components:

1. **Website** (React + TypeScript): A Vite-powered SPA deployed to GitHub Pages
2. **Python automation** (`py_src/`): Scripts for automated marketing — email blasts, advertisement protocols, and multi-channel outreach (WhatsApp, Discord, email) via `ultimate-utils`

## Repository Structure

```
.
├── client/              # React frontend (Vite + Tailwind CSS 4)
│   ├── src/             # React components, pages, styles
│   └── public/          # Static assets
├── server/              # Express backend (TypeScript)
├── shared/              # Shared constants between client/server
├── py_src/              # Python automation scripts
│   ├── send_weekly_email.py   # Weekly email sender (SMTP via Office365)
│   ├── recipients.json        # Mailing list recipients
│   ├── pyproject.toml         # Python project config & dependencies
│   └── SETUP.md               # SMTP/email setup instructions
├── experiments/         # Marketing experiments & prompt templates
│   └── 00_automating_marketing/
├── .github/workflows/   # CI/CD (GitHub Pages deployment)
├── package.json         # Node dependencies (pnpm)
└── vite.config.ts       # Vite build configuration
```

## Tech Stack

### Frontend
- React 19 + TypeScript
- Tailwind CSS 4 + tw-animate-css
- Vite 7, Framer Motion
- Radix UI component primitives
- Wouter for routing

### Backend
- Express (TypeScript), built with esbuild

### Python Automation
- Python >= 3.9
- `ultimate-utils` — Brando's utility library for multi-channel messaging (email, WhatsApp, Discord, Slack, etc.) and general automation
- SMTP via Microsoft Office 365 (Stanford email)

## Common Commands

### Frontend Development
```bash
pnpm install          # Install Node dependencies
pnpm dev              # Start Vite dev server
pnpm build            # Production build (Vite + esbuild)
pnpm check            # TypeScript type-check
pnpm format           # Prettier formatting
```

### Python Automation
```bash
cd py_src
pip install -e ".[all]"   # Install with all deps including ultimate-utils

# Email sending
python send_weekly_email.py --dry-run --subject "Test" --body "Hello"
python send_weekly_email.py --subject "This Week's Classes" --body-file weekly_email.txt
python send_weekly_email.py --quarterly --subject "Quarterly Update" --body-file quarterly.txt
python send_weekly_email.py --test-addr you@gmail.com --subject "Test" --body "Test"
```

## Key Configuration

- **SMTP credentials**: Stored at `~/.config/sbsbz/smtp_config.json` (never committed)
- **Recipients**: `py_src/recipients.json` — mailing lists for weekly and quarterly sends
- **From address**: `brando9@stanford.edu`
- **Reply-to**: `sbachatasensualzouk@gmail.com`

## Code Style & Conventions

- TypeScript: strict mode, ES modules
- Python: type hints, Python 3.9+ syntax
- Formatting: Prettier for TS/JS, standard Python formatting
- Git: descriptive commit messages, feature branches

## Deployment

- **Website**: GitHub Pages via `.github/workflows/deploy.yml` — auto-deploys on push to `main`
- **Email automation**: Run manually or via scheduled scripts

## Important Notes

- Never commit SMTP credentials or `.env` files
- The `smtp_config.json` is in `.gitignore`
- Email sender supports dry-run mode for testing
- `ultimate-utils` provides integrations for WhatsApp, Discord, Slack, and other channels for multi-platform advertisement distribution
- When adding new advertisement channels, leverage `ultimate-utils` APIs rather than building from scratch
