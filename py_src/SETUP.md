# SBSBZ Email Sender — Setup Guide

## Overview

This script sends weekly SBSBZ marketing emails from `brando9@stanford.edu` via Stanford's Microsoft 365 SMTP. Stanford uses Microsoft 365 (Office 365) for email, so the SMTP server is `smtp.office365.com`.

## Step 1: Generate a Microsoft App Password

Stanford enforces Duo 2FA, but Microsoft app passwords bypass Duo for SMTP access.

### Option A: Microsoft App Password (Recommended)

1. Go to [https://mysignins.microsoft.com/security-info](https://mysignins.microsoft.com/security-info)
   - Sign in with your Stanford credentials (`brando9@stanford.edu`)
   - Complete Duo 2FA when prompted
2. Click **+ Add sign-in method**
3. Select **App password** from the dropdown
4. Name it something like `SBSBZ Email Script`
5. Click **Next** — Microsoft will generate a 16-character password
6. **Copy this password immediately** — you won't be able to see it again

> **Note:** If "App password" is not available as an option, Stanford IT may have disabled it. In that case, try Option B below or contact Stanford IT.

### Option B: Stanford Account Portal

1. Go to [https://accounts.stanford.edu](https://accounts.stanford.edu)
2. Look for "App passwords" or "Application-specific passwords" in the settings
3. Generate one for email/SMTP access

### Option C: If App Passwords Are Disabled (OAuth2)

If Stanford has disabled app passwords entirely, you'll need to use OAuth2 with MSAL. Install the optional dependency:

```bash
pip install msal
```

Then configure OAuth2 — this requires registering an Azure AD app. Contact Stanford IT or see Microsoft's [SMTP OAuth2 docs](https://learn.microsoft.com/en-us/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth).

## Step 2: Create the Config File

```bash
mkdir -p ~/.config/sbsbz
```

Create `~/.config/sbsbz/smtp_config.json`:

```json
{
  "smtp_server": "smtp.office365.com",
  "smtp_port": 587,
  "username": "brando9@stanford.edu",
  "password": "YOUR_APP_PASSWORD_HERE"
}
```

Replace `YOUR_APP_PASSWORD_HERE` with the app password from Step 1.

**Security:** This file is stored outside the repo and should never be committed. File permissions should be restricted:

```bash
chmod 600 ~/.config/sbsbz/smtp_config.json
```

## Step 3: Test

```bash
# Dry run (no credentials needed)
python py_src/send_weekly_email.py --dry-run --subject "Test 💃🕺" --body "Hello from SBSBZ!"

# Send test email to yourself only
python py_src/send_weekly_email.py --test-addr brandojazz@gmail.com --subject "Test 💃🕺" --body "Hello from SBSBZ!"

# Send to all weekly lists
python py_src/send_weekly_email.py --subject "This Week's Classes 💃🕺" --body-file weekly_email.txt
```

## Troubleshooting

### "Authentication unsuccessful" error
- Double-check the app password (no spaces, exact copy)
- Make sure you're using `smtp.office365.com` port `587`
- Try regenerating the app password

### "SMTP AUTH extension not supported"
- Stanford may have disabled SMTP AUTH on your mailbox. Microsoft 365 has a per-mailbox setting called "Authenticated SMTP" that may be off by default.
- Email `help@stanford.edu` and ask them to enable "SMTP Client Submission" (SmtpClientAuthenticationDisabled = false) on `brando9@stanford.edu`.
- Alternatively, try OAuth2 (Option C) or Microsoft Graph API (Option D below).

### Option D: Microsoft Graph API (Alternative to SMTP)

If SMTP AUTH is completely blocked, you can use Microsoft Graph API to send email:
- Endpoint: `POST https://graph.microsoft.com/v1.0/me/sendMail`
- Auth: OAuth2 token (same as Option C but via REST instead of SMTP)
- This avoids SMTP entirely and is often easier in locked-down O365 environments

### Emails bounce from Stanford lists
- Ensure you're sending FROM `brando9@stanford.edu` (the script does this by default)
- Some lists may require you to be a subscriber — check list settings

### "Connection refused" or timeout
- You may be on a network that blocks port 587. Try from Stanford network or VPN.

## Alternative SMTP Servers to Try

If `smtp.office365.com` doesn't work, try these Stanford-specific servers:

| Server | Port | Notes |
|--------|------|-------|
| `smtp.office365.com` | 587 (STARTTLS) | Standard Microsoft 365 |
| `smtp.stanford.edu` | 587 (STARTTLS) | Stanford's own relay (may exist) |
| `smtp-auth.stanford.edu` | 587 (STARTTLS) | Stanford auth relay (may exist) |
| `outlook.office365.com` | 587 (STARTTLS) | Alternative Microsoft endpoint |
