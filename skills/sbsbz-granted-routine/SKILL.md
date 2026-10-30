---
name: sbsbz-granted-routine
description: The hands-on GrantEd routine for the Stanford Bachata Sensual & Brazilian Zouk (SBSBZ) Financial Officer (FO). Use when filing a GSC funding request (Quick) per class session, topping up a session rate, using or editing the Drive instructor invoices, attaching invoices and the participants list, submitting, filing the follow-up Service Payment (S-…) once funding is approved, or running the weekly status check. Covers the click-level recipe, request numbering, and portal traps found Oct 18-29 2026.
---

# Skill: SBSBZ GrantEd routine (funding requests, invoices, attach, submit)

**Doc link:** <https://github.com/brando90/sbsbz/blob/main/skills/sbsbz-granted-routine/SKILL.md> (GitHub is canonical; a Drive copy sits in the Marketing folder's "Agent skills and prompts" folder).

**TLDR:** Money flows in two steps. (1) A **GSC funding request** (GSC-00xxxx, Funding > New Application, grant type Quick) is approved by the Graduate Student Council Funding Committee. (2) Once approved, a **Service Payment** (S-00xxxx, Payments > New Payment Request) pays the instructor against that approval, with the instructor's invoice attached. Attach everything **before** you press Submit: a submitted request is read-only for the FO. This skill is the click-level routine; the rules and the Stanford policy table are in `skills/sbsbz-financial-officer/` (`references/policy.md`, `references/gsc-quick-grant-answers.md`). Read that skill's "Limits that bind" first.

## Limits that bind
- **No secrets in this file or any file in the repo.** Sign-in uses Brando's stored login through the password manager; Duo and texted codes are on his phone. Never write a password, code, token or recovery number here, in a commit, a Drive doc or a message.
- **Instructor-pay privacy.** Each instructor gets their **own** email, one recipient per email, never a shared thread or a Cc to the other instructor. Never state one instructor's rate, amount, payment status or invoice to the other. Instructors are paid differently; the funding requests use one uniform per-session figure, so nothing in a GrantEd request reveals either person's pay. Keep invoices in the owner-only private Drive folder, not in the repo.
- **FO submits only what Brando asked for.** Agents may sign in and submit as the FO (Brando, 10-14-2026); they never take Finance 101 or other trainings or attestations as him, never approve as President, never pay by assuepay, Venmo or Zelle.
- **No retroactive funding is guaranteed.** Past event dates were accepted by the portal on Oct 29 (GSC-001571 covered Oct 1-29), but approval is the committee's call: report "filed", never "funded", until Status = Processed and Assignment = Approved.

## 0. Sign-in and portal habits
- Open granted.stanford.edu in a fresh tab. If "Your session has ended", click OK, reload, pick the card "Financial Officer SBSBZ (5089)", close the Announcements popup.
- Pages are slow (10-20 s). Wait, re-read the screen, then click. Header buttons shift while a page settles; Save and Submit sit top right.
- Click coordinates are pixels of the **latest** screenshot: keep one screenshot size for the whole task. A stale frame can persist for minutes; re-read the window state before trusting it.
- Native selects open invisible popups: focus the select and use Down / Enter, or click the arrow, Down, Return. Typing the option text rarely works in grid cells.
- Chrome cannot read the agent's scratch folder: copy PDFs into `~/Downloads` before uploading.

## 1. Plan the requests (before opening GrantEd)
- One request can hold many sessions, **one funding line per session** (no $200 cap; Hikari Iwasaki at GSC confirmed on Oct 20 that 10 weeks went in one request). Each session needs its own instructor invoice. GSC is slow in 2026-27: submit early.
- Rate used in requests: **$180 per session**, account **01-5089-60-2900 Honoraria** (Grad Honoraria). Guidelines: requests of $500 or less need three weekly GSC meetings between submission and the event, and the event on the GSC funding calendar at least two weeks before (a Google Calendar event on Brando's calendar inviting gsc-funding@assu.stanford.edu; create it with notify none).
- Group size question on the first New Application click: Student Group Composition, 2 undergraduate / 22 graduate (from the winter member list). The grad share drives how much GSC covers (GSC-001550 was approved at 45%).
- Alternation: the teaching instructors alternate by week; confirm the week's teacher from the instructor's own email before naming an invoice. Never guess a date as "yours" in a message to the other instructor.
- Check that no earlier request already covers the date: Funding > All, remove the orange "Returned" filter, search the date.

## 2. File a funding request (Quick) - fast recipe
1. Funding > **+ New Application**. Enter the group composition if asked.
2. Header selects: Funding Source (click, Down x2, Enter), Academic Year (Down, Enter: 2026-2027), Grant Type (Down, Enter: Quick). Title like "Weekly Bachata Class (Oct 22)". Start.
3. **Funding Lines** grid, one row per session: click Account cell, then Down on the closed select (first option is 01-5089-60-2900 Honoraria). Then click each cell and type: description, event name, event date typed as `22-OCT-2026`, then click the next cell to commit, amount 180. After picking the Account, click straight into Description (Tab from the select can shift columns by one).
4. **Questions** grid (13 required): double-click the first Answer cell, type, press Tab Tab (the second Tab opens the next editor), repeat; Save; screenshot to confirm every row. Answers: `skills/sbsbz-financial-officer/references/gsc-quick-grant-answers.md`.
5. **Attachments** (before Submit): line paperclip > Upload Files > click the drop zone > GTK chooser: **single-click the file in the list, then click Open**. Typing a path plus Enter or double-clicking attached nothing; Ctrl+L plus the full path then clicking Open also worked. One file per chooser, about 25-40 s each ("Cancel upload", then the file shows under Pending Files). OK, then Save. Attach the participants PDF on the first line and the session's instructor invoice on its own line.
6. **Submit**: the page saves and reloads (2-3 times), then the "Funding Agreement" modal appears (GSC logo on ads, events.stanford.edu listing, feedback form to stanfordgscfunding@gmail.com after the event): Accept. Done when the stepper sits at "Funding Committee" and the red note says "You have acted on this transaction as a Financial Officer". Record the GSC number.

### Traps
- **After submit nothing can be added.** The request is read-only ("so you cannot act on this transaction any more"); the paperclip opens a list without upload. An invoice forgotten at filing can only travel on the later Service Payment. So attach the invoice before Submit, every time.
- **Funding Modification cannot add money.** It only transfers between the club's own accounts (From / To, amount, file required), and "Funding Application to Modify" lists approved requests only. To raise a session's rate, file a **new Quick request for the difference** (Oct 29: a $30-per-session top-up request covering four sessions already requested at $150).
- Header "Documentation" stays 0 for line attachments; the line paperclip count is what counts.
- Training holds: Finance 101 is annual; a lapsed one blocks the portal. Brando does it himself.
- Drafts left in Funding Modification (FM-…) are test noise: delete them.

## 3. Instructor invoices (Drive)
- Source of truth: the owner-only Drive folder "SBSBZ Accounting - private instructor invoices". One Google Doc per session; export each as a PDF for upload. `skills/sbsbz-financial-officer/scripts/make_invoice.py` and `invoice_check.py` build and check them.
- Edit in place when the rate or date changes, so the Doc id and invoice number stay stable; the invoice number must not change after it is attached anywhere. Number series continue in date order within each instructor's own series; never reuse a number for a different date.
- Invoice facts: invoice number, invoice date, service date, class level lines, per-session amount equal to the funding line, instructor payee name exactly as in the vendor record, a neutral footer (no other instructor's name, no rate comparison).
- Match: invoice amount = funding line amount = payment line amount. A mismatch is the usual reason a payment is returned.
- Keep a map from each session date to (GSC number, invoice number) in the private folder, never in the repo.

## 4. Pay the instructor: Service Payment (after funding is Approved)
Funding must show Status Processed, Assignment Approved with a nonzero approved amount; the payment can draw only up to that balance (View Funding Info shows approved totals; View VSO Accounts shows balances).
1. Payments > **+ New Payment Request** > Service Payment. Header: Vendor (search; the instructor's registered vendor name), Invoice Number and Date, Service Start/End, Check/Mail, Rush No, Service Provided, Service Location, Summary (240 characters or fewer). **Save first**: the S-00xxxx id appears then.
2. Payment line grid: click a cell once, F2 to edit, type, Tab. Each line needs Document Date (F2 opens a date picker; click the day, typing does not stick), Document Type = Invoice, Description, Amount, Account. A missing Document Date gives "Payment requests require lines to have required fields completed."
3. Account: picking 01-5089-60-2900 directly fails Save ("Please add distribution lines for parent line no: 1"). Set Account = "Account Distribution Split", Tab, click Split Acct, Add Row (prefills parent 1 and the full amount), Tab, Down x2 = 01-5089-60-2900 Honoraria, Tab, Apply, Save.
4. Attachment: paperclip cell (click twice) > Upload Files > chooser (Ctrl+L, full path, click Open); copy into ~/Downloads first. It uploads on Save; the page may say "Unresponsive" for a moment: click Wait. Wait about 15 s for Pending Files to list it.
5. Several invoices for one payee can be lines on **one** request. Never put two instructors on one request.
6. Submit: first click saves and reloads, then the "Banking Agreement" (FO certification) modal: Accept. Result: red note "You have acted on this transaction as a Financial Officer"; buttons become Withdraw / History.
7. New vendor: header "Request New Vendor/Address" > New Vendor with New Address (Country, Name, Address, City, State via searchable popup, Postal, E-Mail), Save. It stays pending until CapGroup approves; it is not selectable meanwhile and a second request for the same person must not be created. Stanford emails the instructor to finish registration within 30 days.

## 5. Where status shows (the weekly check)
- Authoritative: GrantEd. Funding tab > **All**: Requested / Recommended / Approved, Status (Open, Processed, Rejected), Assigned To. Payments tab > **In Progress**: Accountant = under review; "Payment Pending" = approved, check goes by mail; "Tax Info NOT Received" is the common blocker. Payments > All, sorted oldest first, puts the newest rows on page 2; a payment number appears when paid. Dashboard "Recent Activity" is the one-glance view.
- Email is a partial signal: GrantEd mail comes from assu_granted@lists.stanford.edu and lands in Brando's Gmail through a redirect rule; many status changes send nothing.
- Status email to Brando: one summary, no instructor-to-instructor comparisons (he pays instructors out of pocket first, so the question is "who has been reimbursed and when").

## 6. Request numbers (state as of 2026-10-29)
| Request | What | State |
|---|---|---|
| GSC-001510 | Sep 9 and 16 sessions, $360 of $720 | Processed, fully drawn by S-006068, S-006069, S-006084 |
| GSC-001550 | Nov 19 and Dec 3 | Approved $135 of $300 (45%) |
| GSC-001553 | Nov 5 and 12, $300 | Funding Committee |
| GSC-001571 | Oct 1, 8, 15, 29 at $180 | Funding Committee |
| GSC-001572 | Dec 10 and 17 | Funding Committee |
| GSC-001573 | Nov 26 | Funding Committee |
| GSC-001574 | $30 top-up for Nov 5, 12, 19, Dec 3 | Funding Committee |
| GSC-001575 | Oct 22 | Funding Committee |
| GSC-001524 | Mega Bachata Social | Returned (event passed) |
| S-006068, S-006069 | September payments | Paid Oct 29 |
| S-006084 | one more September session | At CapGroup |
Next check: the Friday 18:00 check. Update this table whenever a status changes.

## 7. Done checklist
- Every class week from the first session to the last of the term has a request line; no date appears twice.
- Each line has its invoice attached before Submit; participants PDF on the first line.
- Calendar event exists for each session (GSC funding calendar listing).
- GSC number recorded in the private session map; Brando told "filed", with the numbers.
- Instructor emails are separate, one person each, no amounts about the other.
