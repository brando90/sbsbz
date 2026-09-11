# SBSBZ — Stanford Bachata Sensual & Brazilian Zouk

**TLDR:** The live website is [brando90.github.io/sbsbz](https://brando90.github.io/sbsbz/). Edit the current design in [sbsbz-web](https://github.com/brando90/sbsbz-web); this repository's `gh-pages` branch hosts its generated public files for free.

This `main` branch retains the older website design and the separate email automation. The development commands below apply to that older version. Current website build and publishing instructions are in `sbsbz-web/README.md`; changes to this older source do not deploy the live site.

Website for Stanford's student-run Bachata Sensual and Brazilian Zouk dance community.

## About

SBSBZ is a student-run organization at Stanford University dedicated to social dance — specifically Bachata Sensual and Brazilian Zouk. We hold free weekly classes every Wednesday evening.

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS 4
- Vite
- Fraunces + Outfit typography

## Development

```bash
pnpm install
pnpm dev
```

## Email Sender

Automated weekly email sender for Stanford mailing lists. Sends from `brando9@stanford.edu` via Microsoft 365 SMTP.

### Quick Start

```bash
# Setup (one-time)
mkdir -p ~/.config/sbsbz
# Create ~/.config/sbsbz/smtp_config.json — see py_src/SETUP.md

# Dry run
python py_src/send_weekly_email.py --dry-run --subject "This Week's Classes 💃🕺" --body "Hello!"

# Send to all weekly lists
python py_src/send_weekly_email.py --subject "This Week's Classes 💃🕺" --body-file weekly_email.txt

# Send to quarterly lists
python py_src/send_weekly_email.py --quarterly --subject "Quarterly Update" --body-file quarterly.txt

# Test with a single address
python py_src/send_weekly_email.py --test-addr you@gmail.com --subject "Test" --body "Test"

# Pipe from stdin
echo "Email body" | python py_src/send_weekly_email.py --subject "Subject" --stdin
```

See `py_src/SETUP.md` for full setup instructions including Stanford app password generation.

## Links

- Instagram: [@sbsbz](https://www.instagram.com/sbsbz/)
- Linktree: [linktr.ee/ultimate_brando9](https://linktr.ee/ultimate_brando9)
