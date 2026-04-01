# SBSBZ — Stanford Bachata Sensual & Brazilian Zouk

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
