#!/usr/bin/env python3
"""
SBSBZ Weekly Email Sender

Sends the weekly SBSBZ marketing email to Stanford mailing lists
from brando9@stanford.edu via SMTP.

Usage:
  python send_weekly_email.py --subject "This Week's Bachata Classes 💃🕺" --body-file weekly_email.txt
  python send_weekly_email.py --subject "..." --body "inline body text"
  echo "body" | python send_weekly_email.py --subject "..." --stdin
  python send_weekly_email.py --dry-run --subject "Test" --body "Test email"
  python send_weekly_email.py --quarterly --subject "Quarterly Update" --body-file quarterly.txt
"""

import argparse
import json
import smtplib
import sys
import time
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path

# Default config location
DEFAULT_CONFIG_PATH = Path.home() / ".config" / "sbsbz" / "smtp_config.json"
DEFAULT_RECIPIENTS_PATH = Path(__file__).parent / "recipients.json"


def load_config(config_path: Path) -> dict:
    """Load SMTP config from JSON file."""
    if not config_path.exists():
        print(f"ERROR: SMTP config not found at {config_path}")
        print(f"Create it with your credentials. See SETUP.md for instructions.")
        print(f"Expected format:")
        print(json.dumps({
            "smtp_server": "smtp.office365.com",
            "smtp_port": 587,
            "username": "brando9@stanford.edu",
            "password": "YOUR_APP_PASSWORD_HERE"
        }, indent=2))
        sys.exit(1)
    with open(config_path) as f:
        return json.load(f)


def load_recipients(recipients_path: Path) -> dict:
    """Load recipient lists from JSON file."""
    if not recipients_path.exists():
        print(f"ERROR: Recipients file not found at {recipients_path}")
        sys.exit(1)
    with open(recipients_path) as f:
        return json.load(f)


def build_message(
    from_addr: str,
    reply_to: str,
    to_addrs: list[str],
    bcc_addrs: list[str],
    subject: str,
    body: str,
    html: bool = False,
) -> MIMEMultipart:
    """Build the email message with proper headers and UTF-8 encoding."""
    msg = MIMEMultipart("alternative") if html else MIMEMultipart()

    msg["From"] = from_addr
    msg["Reply-To"] = reply_to
    msg["To"] = ", ".join(to_addrs)
    # BCC is NOT added to headers (that's how BCC works) — only used in sendmail()
    msg["Subject"] = subject

    # Always attach plain text
    msg.attach(MIMEText(body, "plain", "utf-8"))

    if html:
        # Convert plain text to basic HTML (preserve line breaks, links)
        html_body = plain_to_html(body)
        msg.attach(MIMEText(html_body, "html", "utf-8"))

    return msg


def plain_to_html(text: str) -> str:
    """Convert plain text to simple HTML preserving structure."""
    import html as html_mod
    escaped = html_mod.escape(text)
    # Convert URLs to clickable links
    import re
    escaped = re.sub(
        r'(https?://[^\s<>]+)',
        r'<a href="\1">\1</a>',
        escaped,
    )
    # Preserve line breaks
    escaped = escaped.replace("\n", "<br>\n")
    return f"""<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: sans-serif; font-size: 14px; line-height: 1.5;">
{escaped}
</body>
</html>"""


def send_email(
    config: dict,
    msg: MIMEMultipart,
    to_addrs: list[str],
    bcc_addrs: list[str],
    dry_run: bool = False,
) -> dict:
    """
    Send email via SMTP. Returns a dict with results per recipient.

    Sends one email with all recipients (TO + BCC) in a single SMTP call.
    If that fails, falls back to sending individually.
    """
    all_recipients = to_addrs + bcc_addrs
    results = {addr: None for addr in all_recipients}

    if dry_run:
        print("\n" + "=" * 60)
        print("DRY RUN — Email would be sent with these details:")
        print("=" * 60)
        print(f"From:     {msg['From']}")
        print(f"Reply-To: {msg['Reply-To']}")
        print(f"To:       {msg['To']}")
        print(f"BCC:      {', '.join(bcc_addrs)}")
        print(f"Subject:  {msg['Subject']}")
        print("-" * 60)
        # Get the plain text part
        for part in msg.walk():
            if part.get_content_type() == "text/plain":
                print(part.get_payload(decode=True).decode("utf-8"))
                break
        print("=" * 60)
        for addr in all_recipients:
            results[addr] = "dry_run"
        return results

    # Try sending to all recipients at once
    try:
        _smtp_send(config, msg, all_recipients)
        for addr in all_recipients:
            results[addr] = "sent"
        print(f"Successfully sent to all {len(all_recipients)} recipients")
        return results
    except smtplib.SMTPRecipientsRefused as e:
        # Some recipients refused — log which ones failed, mark others as sent
        print(f"Some recipients refused, falling back to individual sends...")
        refused = e.recipients  # dict of {addr: (code, message)}
        for addr in all_recipients:
            if addr in refused:
                code, errmsg = refused[addr]
                errmsg = errmsg.decode("utf-8", errors="replace") if isinstance(errmsg, bytes) else errmsg
                results[addr] = f"FAILED: {code} {errmsg}"
                print(f"  FAILED: {addr} — {code} {errmsg}")
            else:
                results[addr] = "sent"
    except Exception as e:
        print(f"Bulk send failed: {e}")
        print("Falling back to individual sends...")
        # Fall back to individual sends
        for addr in all_recipients:
            result = _send_individual(config, msg, addr)
            results[addr] = result

    return results


def _smtp_send(config: dict, msg: MIMEMultipart, recipients: list[str], retries: int = 1):
    """Send via SMTP with retry on transient failures."""
    last_error = None
    for attempt in range(1 + retries):
        try:
            with smtplib.SMTP(config["smtp_server"], config["smtp_port"], timeout=30) as server:
                server.ehlo()
                server.starttls()
                server.ehlo()
                server.login(config["username"], config["password"])
                server.sendmail(msg["From"], recipients, msg.as_string())
            return  # success
        except (smtplib.SMTPServerDisconnected, TimeoutError, ConnectionResetError, OSError) as e:
            last_error = e
            if attempt < retries:
                print(f"  Transient error (attempt {attempt + 1}): {e}. Retrying in 3s...")
                time.sleep(3)
            else:
                raise
        except smtplib.SMTPRecipientsRefused:
            raise  # not transient — bubble up
        except smtplib.SMTPException as e:
            raise  # auth errors etc — don't retry


def _send_individual(config: dict, msg: MIMEMultipart, addr: str) -> str:
    """Send to a single recipient with retry. Returns status string."""
    try:
        _smtp_send(config, msg, [addr])
        print(f"  OK: {addr}")
        return "sent"
    except Exception as e:
        errmsg = str(e)
        print(f"  FAILED: {addr} — {errmsg}")
        return f"FAILED: {errmsg}"


def get_body(args) -> str:
    """Get email body from args or stdin."""
    if args.body:
        return args.body
    if args.body_file:
        p = Path(args.body_file)
        if not p.exists():
            print(f"ERROR: Body file not found: {p}")
            sys.exit(1)
        return p.read_text(encoding="utf-8")
    if args.stdin:
        return sys.stdin.read()
    print("ERROR: Must provide --body, --body-file, or --stdin")
    sys.exit(1)


def main():
    parser = argparse.ArgumentParser(
        description="SBSBZ Weekly Email Sender — send marketing emails to Stanford lists",
    )
    parser.add_argument("--subject", required=True, help="Email subject line (supports emoji)")
    parser.add_argument("--body", help="Inline email body text")
    parser.add_argument("--body-file", help="Path to file containing email body")
    parser.add_argument("--stdin", action="store_true", help="Read body from stdin")
    parser.add_argument("--html", action="store_true", help="Also send HTML version (auto-converted from plain text)")
    parser.add_argument("--dry-run", action="store_true", help="Print email without sending")
    parser.add_argument("--quarterly", action="store_true", help="Send to quarterly lists instead of weekly")
    parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG_PATH, help="Path to SMTP config JSON")
    parser.add_argument("--recipients", type=Path, default=DEFAULT_RECIPIENTS_PATH, help="Path to recipients JSON")
    parser.add_argument("--test-addr", help="Override all recipients with this single address (for testing)")

    args = parser.parse_args()

    # Load config (skip for dry-run if config doesn't exist)
    if args.dry_run and not args.config.exists():
        config = {"smtp_server": "smtp.office365.com", "smtp_port": 587,
                  "username": "brando9@stanford.edu", "password": "(dry-run)"}
    else:
        config = load_config(args.config)

    # Load recipients
    recipients = load_recipients(args.recipients)
    from_addr = recipients.get("from_address", config["username"])
    reply_to = recipients.get("reply_to", from_addr)

    # Select recipient list
    if args.test_addr:
        to_addrs = [args.test_addr]
        bcc_addrs = []
        print(f"TEST MODE: sending only to {args.test_addr}")
    elif args.quarterly:
        to_addrs = recipients["quarterly_lists"]
        bcc_addrs = recipients["always_bcc"]
        print(f"Quarterly send: {len(to_addrs)} lists + {len(bcc_addrs)} BCC")
    else:
        to_addrs = recipients["weekly_lists"]
        bcc_addrs = recipients["always_bcc"]
        print(f"Weekly send: {len(to_addrs)} lists + {len(bcc_addrs)} BCC")

    # Get body
    body = get_body(args)

    # Build message
    msg = build_message(
        from_addr=from_addr,
        reply_to=reply_to,
        to_addrs=to_addrs,
        bcc_addrs=bcc_addrs,
        subject=args.subject,
        body=body,
        html=args.html,
    )

    # Send
    results = send_email(config, msg, to_addrs, bcc_addrs, dry_run=args.dry_run)

    # Summary
    sent = sum(1 for v in results.values() if v in ("sent", "dry_run"))
    failed = sum(1 for v in results.values() if v and v.startswith("FAILED"))

    print(f"\nSummary: {sent} sent, {failed} failed out of {len(results)} recipients")

    if failed:
        print("\nFailed recipients:")
        for addr, status in results.items():
            if status and status.startswith("FAILED"):
                print(f"  {addr}: {status}")
        sys.exit(1)
    else:
        print("All emails sent successfully!" if not args.dry_run else "Dry run complete.")
        sys.exit(0)


if __name__ == "__main__":
    main()
