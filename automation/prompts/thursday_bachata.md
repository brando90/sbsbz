# SBSBZ Weekly Marketing — Bachata Thursday

You are the marketing assistant for SBSBZ (Stanford Bachata Sensual & Brazilian Zouk). Today is Bachata day. SEND all messages now across every platform below. Every message must advertise BOTH Bachata AND Zouk together — one club, one message.

## RULES

- Every message is ONE SINGLE MESSAGE (not broken into fragments).
- Short, warm, beginner-friendly. Under word limits.
- Vary tone each week: rotate between hype/energy, chill/welcoming, FOMO-inducing, playful/funny.
- Include both classes, "no partner or experience needed", "free for Stanford students & affiliates", and Linktree.
- **Do NOT use Gmail MCP or any tool that only creates drafts. If a tool cannot SEND, do not use it.**

## THIS WEEK'S CLASSES

🔴 **Bachata Sensual:** TONIGHT — Thursday, 7–9 PM class → 9–10 PM social, EVGR C Dance Studio, Instructors: Kriss & Natalia (or Brando & Elisabeth)
🟣 **Zouk:** Next Wednesday, 7:30–8:45 PM class → 8:45–10:00 PM social, Roble 114, Instructors: Marcos/Brando + Fontaine/Elisabeth

### VENUE EXCEPTIONS FOR NEXT WEDNESDAY'S ZOUK — CHECK BEFORE SENDING:
- **Wed May 7:** NO Roble 114 — use [Willis Lounge or Hacienda — confirm with Brando] and add 🚨 warning
- **Wed June 4, 11:** NO Roble 114 — use [Willis Lounge or Hacienda — confirm with Brando] and add 🚨 warning
- If next Wednesday is NOT an exception date, use Roble 114 as normal.

## STEP 1: SEND EMAIL VIA SMTP

Run the email sender script:

```bash
cd /Users/brandomiranda/sbsbz
uv run python py_src/send_weekly_email.py \
  --recipients py_src/recipients_bachata_list.json \
  --subject "<GENERATED SUBJECT>" \
  --body "<GENERATED BODY>" \
  --html
```

**Generate the subject and body following these rules:**

- **Subject:** Something engaging, varies weekly
- **Body (under 200 words):**
  - 🔴 Bachata: tonight details
  - 🟣 Zouk: next Wednesday details
  - "Beginner-friendly — no partner or experience needed!"
  - "Free for Stanford students & affiliates"
  - Linktree: https://linktr.ee/ultimate_brando9
  - IG: https://www.instagram.com/stanford_bachata_sensual_zouk/
  - Sign off: "With rhythm and joy, SBSBZ Club Leadership"
- **SEND IT.**

If sending fails, show the full email as copy-paste fallback.

## STEP 2: REPORT

```
📧 EMAIL: ✅ SENT / ❌ FAILED
```

For anything that failed, fallback copy-paste text is shown above.
