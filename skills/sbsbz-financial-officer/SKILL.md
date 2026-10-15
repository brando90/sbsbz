---
name: sbsbz-financial-officer
description: Prepare the Stanford Bachata Sensual & Brazilian Zouk (SBSBZ) Financial Officer (FO) work so a human FO only reviews and clicks submit. Use when Brando or the FO mentions an instructor, DJ or food invoice or quote, paying an instructor, a reimbursement, GSC/ASSU funding or a GrantEd request, the club budget, balance or ledger, or "do the FO tasks". Finds the documents (a given path, Downloads, WhatsApp, Gmail, Drive), checks them against Stanford funding rules, and writes GrantEd-ready packets, corrected-invoice requests and ledger rows in a private folder.
---

# Skill: SBSBZ Financial Officer prep agent

**Doc link:** <https://github.com/brando90/sbsbz/blob/main/skills/sbsbz-financial-officer/SKILL.md>

**TLDR:** Turn invoices, quotes and funding needs into GrantEd (Stanford's student-group funding system) requests. The agent finds and copies the source files, extracts the facts, runs `scripts/invoice_check.py`, drafts the GrantEd fields, attachments, messages and ledger rows, and reports what blocks payment. With Brando's stored login it may also sign in and submit the requests he asked for (10-14-2026); nothing in this skill pays anyone directly.

Copies: GitHub is canonical. Put a Drive copy in the Marketing folder's "Agent skills and prompts" folder (<https://drive.google.com/drive/folders/1U3EmA7i5W0O1hrDmYw37QiYi9aDxEG05>). Installed copies live in `~/.claude/skills/sbsbz-financial-officer/` and `~/.codex/skills/sbsbz-financial-officer/`; refresh them from GitHub after edits.

## Limits that bind
- **Agents may sign in and submit as Brando (Brando, 10-14-2026).** An agent with Brando's stored Stanford login (password manager; the Duo push or text code is on his phone, so he approves that step) may sign in to GrantEd and CardinalEngage and submit the funding applications and payment requests he asked for. Before submitting, check the request against `references/policy.md`, and report the request number (GSC-…, S-…) afterwards.
- **What stays Brando's.** Agents never take trainings, quizzes or attestations as him (Finance 101, Core 10, OSE leadership training): Stanford treats them as his personal certification. They never approve requests as President, never pay through assuepay, and never send money (Venmo, Zelle, bank).
- **Messages are drafts until Brando says "send".** When he does, follow the club email copy rule in `CLAUDE.md` (BCC `brandojazz@gmail.com` and `brando9@stanford.edu`).
- **The repository is public.** Invoices, chat extracts, payee contact or tax details, statements, balances and receipts go in `events/MM-DD-YYYY-fo-<task>/private/`. The root `.gitignore` ignores every dated `events/MM-DD-YYYY-fo-*/` folder and every `private/` directory, so nothing in them reaches git, not even a folder name with the payee in it. Confirm with `git check-ignore`, and never commit a file inside them. Commit only skill or process changes.
- **Chats are personal.** Extract finance facts only (date, chat name, amount, who taught, who paid), never surrounding conversation.
- **Instructors never see one another's invoices (Brando, 10-10-2026).** One payee's invoice may show the agent what format works, but each payee's invoice is generated from that payee's own facts file with `scripts/make_invoice.py`. Each payee gets a separate private folder, in the local checkout (ignored by git) and in Drive (owner-only). Never put one payee's name, rate, contact details or invoice into another payee's invoice, email, folder or shared document.

## Current state (re-verify every run)
As of 10-14-2026, GrantEd's "My Roles" for Brando shows **Financial Officer SBSBZ (5089)**, and CardinalEngage lists him as an FO, with a different officer as President. GrantEd syncs nightly from the CardinalEngage officer roster, so an officer change shows up in GrantEd the next day (KB 1318849). One person cannot be both President and FO (policy R2). Read balances from GrantEd's dashboard on the day; never quote an old export.

**Training is yearly.** Finance 101 For VSO Leaders (STARS SSE-2024) must be redone every academic year by the President, VP and FO (policy R1). Brando's last completion is 01-11-2026, which was for 2025-26. In 2025 the club was deactivated for missing OSE's mid-November training deadline. See Workflow F.

## Finding the inputs
1. **A path Brando gives, or `~/Downloads`** (`ls -t ~/Downloads | head`). The same invoice often also sits in WhatsApp. Compare `shasum -a 256` and keep one copy.
2. **WhatsApp desktop data**, read-only:
   ```bash
   W=$(ls ~/sbsbz/skills/sbsbz-financial-officer/scripts/wa_finance_find.py ~/.claude/skills/sbsbz-financial-officer/scripts/wa_finance_find.py ~/.codex/skills/sbsbz-financial-officer/scripts/wa_finance_find.py 2>/dev/null | head -1)
   python3 $W --list-chats "<payee first name>"
   python3 $W --chat "Awesome <Name>" --chat "<Name> 1:1 chat name" --since YYYY-MM-DD --copy-to ~/sbsbz/events/MM-DD-YYYY-fo-<payee>/private/source
   ```
   It queries a temporary copy of `ChatStorage.sqlite`, prints only attachments and finance keyword hits, copies the media and writes `manifest.json` with SHA-256 hashes. If a file "is not downloaded on this Mac", open that chat in the WhatsApp app through background computer use (`net.whatsapp.WhatsApp`) and download it. Useful chats: "SBSZ Official Officers Chat", the FO's 1:1 chat, and per-instructor groups named `Awesome <Name> Bachata Teacher (…)`. Captions matter: an instructor's rate can sit in the caption of a rate-sheet image rather than in the image.
3. **Email:** Gmail and Stanford Outlook connectors. Search `invoice`, `quote`, `GrantEd`, `GSC funding`, `banking@sse.stanford.edu`.
4. **Drive:** see `references/sources.md` for the onboarding guide, the statement export and the Accounting sheet.

## Workflow A: an invoice or quote arrives (most common)
1. Make `events/MM-DD-YYYY-fo-<payee>/` (ignored by the root `.gitignore`), then copy the sources into `private/source/` (step above).
2. Read the invoice: run `pdftotext -layout`, render it with `pdftoppm -r 70 -png -singlefile` and look at the page; open images directly.
3. From the chats and the FO, collect: the agreed rate and the message it came from, each date taught, who actually taught (announcements are sometimes wrong), what was already paid and by whom, and the funding status.
4. Write `private/<payee>-<MM-DD-YYYY>-facts.json` following `references/invoice-facts.example.json`. Unknown values stay `null`; never guess.
5. From the repository root, run `python3 skills/sbsbz-financial-officer/scripts/invoice_check.py events/MM-DD-YYYY-fo-<payee>/private/<payee>-<MM-DD-YYYY>-facts.json --out events/MM-DD-YYYY-fo-<payee>/private/<payee>-check-report.md`. Exit 2 means blocked, 1 means fixes needed, 0 means no fixes. The verdict also says whether the next step is a funding request, waiting for approval, or FO review of the payment.
6. Write `private/packet.md` containing:
   - the verdict and findings
   - the GrantEd draft
   - the status of each attachment
   - a drafted corrected-invoice request to the payee
   - a drafted handoff to the FO
   - the Accounting-sheet rows to add
   - questions only Brando can answer
7. Report to Brando in a few lines: the verdict, the fixes, the decisions he owns, and the drafts awaiting his "send".

**A submittable invoice has:**

- the payee's legal name, a working email and a phone number
- an invoice number and an invoice date
- "Billed to: Stanford Bachata Sensual & Brazilian Zouk (SBSBZ), VSO account 5089, Stanford University"
- **one session per invoice** with its service date, a description ("Guest dance instruction, SBSBZ weekly Bachata class, MM-DD-YYYY") and the agreed rate
- no Venmo, Zelle or cash instructions: Stanford pays outside payees by check (mail or pickup) after they return the W-9 that GrantEd emails them
- PDF format

**Drafting an invoice for a payee** (when they have none, or theirs needs too many fixes): write their facts file with only what the sources show, leaving unknown values `null`. Then, from the repository root, run `F=events/MM-DD-YYYY-fo-<payee>/private; python3 skills/sbsbz-financial-officer/scripts/make_invoice.py $F/<payee>-<MM-DD-YYYY>-facts.json --out $F/<payee>-invoice-DRAFT-<n>.pdf --draft`. Missing fields (class date, phone, address, rate) print as yellow blanks for the payee to fill in; without `--draft` the script refuses an invoice with blanks. If records disagree on the rate, ask the payee to confirm it in writing, and invoice only sessions nobody has paid yet. Run `invoice_check.py` on the same facts file. Attach the PDF to a Gmail draft asking the payee to confirm the rate and fill the blanks. Their written reply becomes the agreement on the amount. Because the cloud `private/` folder is lost with the container, copy the PDF, the facts file and the packet into the payee's owner-only Drive folder.

Ask for future sessions' invoices at least a month ahead. A recurring outside instructor also needs OSE's non-student registration: the Non-Student Involvement Form, a HireRight background check and Core 10 training (policy P9). Start it with the first invoice.

## Workflow B: GSC Quick Grant packet (monthly)
Build it from the class plan (dates × instructor × agreed rate) and any social quotes:

- One funding line per session or expense, each in the right account. Instructors go under Honoraria (2900), as a Service Payment line.
- Keep each application under $1,000, split by month. Above $500 a quote or invoice must be attached to each line; above $1,000 an officer must attend the Thursday GSC meeting.
- Submit at least one month ahead (ASSU). GSC itself needs 3 weekly meetings before the event for ≤$500, 4 for ≤$1,000 and 5 above that.
- GSC's weekly cutoff is Sunday 5 PM. Quick Grants are reviewed only in weeks 1-9 of a quarter, so requests filed during breaks or finals wait.
- No retroactive funding: the money must be posted to the account before anyone is booked or paid.
- GSC caps Quick Grants at $7,000 a year for a group with 70% or more graduate members, or $7,000 × the graduate share for a group with 30-69% graduate members. A group that got no GSC money the previous fiscal year is advised to stay under $2,000 a year, $500 an event and 50 claimed attendees.
- List every session on the GSC Funding Calendar at least 14 days ahead by inviting `gsc-funding@assu.stanford.edu` to a calendar event (date, time, place, blurb, RSVP link). This is mandatory, and the request is not processed until it is done.
- GSC-funded flyers and posts say "Sponsored by the GSC".
- Fill the answers from `references/gsc-quick-grant-answers.md` with measured attendance.
- Plan a sign-in sheet with names and emails at every session.

Output: `private/grant-packet-<month>.md`, ready to paste.

## Workflow C: payment request after the session
Before paying, all of these must hold:

- approved funding covering that date, since unapproved payment requests are rejected
- a written agreement on the amount (an email or text thread)
- a corrected, itemized invoice
- the attendance list
- the payee's correct email (for the W-9 request), and OSE registration if they teach regularly

The `invoice_check.py` draft holds the field values: Service Payment, vendor, service date, amount, account, description, attachments.

In GrantEd, go to Payments, then **+ New Payment Request**, then choose the type (only the FO sees every type).
1. Enter the summary description: the event and date. Answer Rush "no" unless Brando says otherwise, because rush processing charges $35 to the 2800 account. Click Next; a request number appears.
2. Add one line per document. The line amount must equal the document's total. Attach PDF, PNG or JPEG files only, all of them on that one line.
3. Pick the account that the approved funding line sits in. A wrong account is a top reason for returns.

After submitting:
- Watch the **Tax Info** column. A service payment is not reviewed until it says "Yes" (the payee filled in the W-9 that GrantEd emailed them), so nudge the payee if it stays "No".
- A request returned by Capital Group (SSE's banking team) shows orange in the FO queue with a comment. Fix it and resubmit.
- Requests of $1,000 or more, and the FO's own reimbursements, also need the President's approval.

Once paid, confirm with the payee that the money arrived and add the ledger row.

## Workflow D: someone paid out of pocket
Collect itemized receipts and proof of payment, and match each to an approved funding line. Without prior approval, expect rejection: say so. Paying a person for a service by Venmo, Zelle or Apple Cash is not allowed, so those payments are not reimbursable (policy P3). Never let Stanford pay a vendor whom an organizer already paid for the same session.

Format rules that get requests returned (policy P16-P21):
- one receipt per line
- the whole receipt as one PDF, never cropped, split or blacked out
- proof of payment on the same line as its receipt
- online orders show "Shipped" or "Delivered", or a posted charge
- tips no more than 20%
- anything less than the full receipt says "Partial Reimbursement" in the line description, not in comments

A student can be reimbursed only after opting in or out of direct deposit in GrantEd. Lost receipts: at most 3 a year, $75 each, paid only from the 2800 account.

## Workflow E: ledger and status digest (monthly, or when asked)
Compare the newest GrantEd statement export with the Accounting sheet. List:

- open applications and their status
- approved but unspent allocations, which are taken back after June 30
- pending payments
- money owed to organizers
- the next deadlines

Write `private/status-MM-DD-YYYY.md` and send Brando or the FO a five-line summary.

## Workflow F: yearly officer training (each fall)
1. In September, check Axess > STARS > All Learning > Training History for each of the President, VP and FO. Find "SSE Capgroups Financial Workshop: Finance 101 For VSO Leaders" (SSE-2024), and note whether its completion date falls in the current academic year. Also check Core 10 (OSE-2000) and OSE's Student Organization Leadership Training, along with OSE's deadline for it (TreeMail, about mid-November).
2. Anyone not done for this year takes the course themselves: about 25 minutes, self-paced, in 10 lessons, ending with an ethics scenario quiz and a final True/False acknowledgment. Send them `references/finance-101-notes.md` or the one-page cheat sheet in Brando's Drive, so they can click through fast.
3. GrantEd lifts its hold the next business day. If it is urgent, email the completion certificate to `banking@sse.stanford.edu` for a same-day lift.

Agents only check status and prepare notes. Never open or advance the course as someone else: the course records progress as each lesson is viewed.

## Rules
`references/policy.md` lists each rule with its source and whether it is official or from club notes. Cite the source when a rule decides an outcome.

## Lessons
- 10-14-2026: the GSC quick grant for the fall weekly classes was approved for only the first two classes, with nothing for the later Thursdays. A request filed after 10-14 can cover only sessions at least a month out, so each quarter's request goes in by week 1, before the classes are booked.
- 10-09-2026, first test on a guest instructor's invoice for a 10-01-2026 class: five fixes and five checks.

  The fixes:
  - email truncated to `.co`, which would misroute the W-9 request
  - club named "SBKZ"
  - Venmo/Zelle payment instructions
  - no OSE registration for a recurring instructor
  - no attendance list

  The session had passed with no approved funding, and the organizer had already paid by Venmo, which cannot be reimbursed. Ask instructors for one invoice per future session at least a month ahead, using the template above.
- 09-2026: GSC approved only half of a request because a photo is not an attendee list.
- 09-23-2026: a $1,000 request for a 10-02-2026 party, sent nine days ahead, was not decided in time.
- 06-30-2025: GSC took back unspent allocations at fiscal-year end.

## Copy-paste prompt (Claude, Codex or ChatGPT agent on Brando's Mac)

> Act as the prep agent for the Stanford Bachata Sensual & Brazilian Zouk (SBSBZ) Financial Officer. In `~/sbsbz`, read `skills/sbsbz-financial-officer/SKILL.md` and follow it for: [the invoice/quote/funding task]. Find the source files (a path I give, `~/Downloads`, WhatsApp via `scripts/wa_finance_find.py`, email, Drive) and copy them into `events/MM-DD-YYYY-fo-<task>/private/`, which is gitignored. Extract the facts, run `scripts/invoice_check.py`, and write `private/packet.md` with the GrantEd field values, attachments, drafted messages and ledger rows. If I ask you to submit and you have my stored Stanford login, sign in to GrantEd (I approve Duo on my phone), submit, and report the request number; otherwise stop at the packet. Never take trainings or attestations as me, approve as President, pay anyone, or send messages unless I say send. Keep chat content and payee details out of git. Report the verdict, the fixes and the decisions I need to make.
