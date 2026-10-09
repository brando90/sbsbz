#!/usr/bin/env python3
"""Check an instructor/vendor invoice against SBSBZ Financial Officer rules and draft the GrantEd packet.

Input: a JSON file of facts the agent extracted from the invoice and the chats (see
../references/invoice-facts.example.json). Output: a Markdown report with one line per check
(BLOCK = cannot be submitted as is, FIX = needs a correction, CHECK = a person must confirm,
OK = passed), then the field values an FO would type into GrantEd. Nothing is submitted.

  invoice_check.py facts.json [--today YYYY-MM-DD] [--out report.md]
Exit code: 2 if any BLOCK, 1 if any FIX, else 0.
"""
import argparse
import datetime as dt
import json
import re
import sys

ORDER = {"BLOCK": 0, "FIX": 1, "CHECK": 2, "OK": 3}
PRIVATE_PAY = re.compile(r"venmo|zelle|paypal|cash ?app|\bcash\b", re.I)
EMAIL = re.compile(r"^[^@\s]+@[^@\s]+\.[a-z]{2,}$", re.I)
TRUNCATED_DOMAINS = {"gmail.co", "yahoo.co", "hotmail.co", "outlook.co", "icloud.co"}
INELIGIBLE = {"postdoc", "student", "staff", "faculty"}


def d(s):
    return dt.datetime.strptime(s, "%Y-%m-%d").date() if s else None


def check(f, today):
    out = []
    add = lambda level, msg: out.append((level, msg))
    payee, inv = f.get("payee", {}), f.get("invoice", {})
    agree, fund = f.get("agreement", {}), f.get("funding", {})
    ev, oop = f.get("evidence", {}), f.get("paid_out_of_pocket") or {}
    lines = inv.get("lines", [])

    for key in ("name", "email"):
        if not payee.get(key):
            add("FIX", f"Payee {key} missing on the invoice.")
    email = payee.get("email", "")
    if email and (not EMAIL.match(email) or email.split("@")[-1].lower() in TRUNCATED_DOMAINS):
        add("FIX", f"Payee email `{email}` looks invalid or truncated (e.g. .co for .com); confirm it, since "
                   "Stanford sends payee-setup and payment notices there.")
    aff = (payee.get("stanford_affiliation") or "unknown").lower()
    if aff in INELIGIBLE:
        add("BLOCK", f"Payee is a Stanford {aff}. Club notes say affiliates (e.g. postdocs) cannot be paid "
                     "from VSO funds; get written GrantEd/SSE guidance before any request.")
    elif aff == "unknown":
        add("CHECK", "Payee's Stanford affiliation unknown; confirm they are not a student, postdoc or staff member.")
    else:
        add("OK", f"Payee affiliation recorded as `{aff}`.")

    billed = inv.get("billed_to", "")
    if not re.search(r"sbsbz|5089|bachata sensual", billed, re.I):
        add("FIX", f"Billed-to does not name the club correctly (`{billed.strip()[:80]}`). Use "
                   "'Stanford Bachata Sensual & Brazilian Zouk (SBSBZ), VSO account 5089'.")
    if not inv.get("number"):
        add("FIX", "Invoice number missing.")
    if PRIVATE_PAY.search(inv.get("payment_instructions", "")):
        add("FIX", "Invoice asks for Venmo/Zelle/cash. Stanford pays through GrantEd (check or direct deposit "
                   "after payee setup); remove these instructions so the invoice matches how it will be paid.")

    total = sum(float(l.get("amount", 0)) for l in lines)
    for l in lines:
        if abs(float(l.get("qty", 1)) * float(l.get("rate", 0)) - float(l.get("amount", 0))) > 0.005:
            add("FIX", f"Line '{l.get('description', '')[:40]}': qty x rate != amount.")
    if inv.get("total") is not None and abs(total - float(inv["total"])) > 0.005:
        add("FIX", f"Line items sum to ${total:.2f} but the total says ${float(inv['total']):.2f}.")
    else:
        add("OK", f"Arithmetic consistent: ${total:.2f}.")
    dates = sorted({l.get("service_date") for l in lines if l.get("service_date")})
    if not dates:
        add("FIX", "No service date on any line.")
    elif len(dates) > 1:
        add("CHECK", f"{len(dates)} service dates on one invoice; the club's plan is one invoice per session.")

    rate = agree.get("rate_per_session")
    if rate is None:
        add("CHECK", "No agreed rate on record. Confirm the rate in writing before requesting funds.")
    else:
        for l in lines:
            if float(l.get("rate", 0)) != float(rate):
                add("CHECK", f"Invoice rate ${l.get('rate')} differs from agreed ${rate} ({agree.get('source', 'no source')}).")
    if not agree.get("written_quote_and_acceptance"):
        add("FIX", "No written quote plus the instructor's acceptance (needed as a GrantEd attachment per the "
                   "05-03-2026 FO procedure). An email thread works; WhatsApp alone may not.")

    status = (fund.get("status") or "none").lower()
    first = d(dates[0]) if dates else None
    if first and first <= today:
        if status == "approved":
            add("OK", f"Service on {first:%m-%d-%Y} is covered by approved funding ({fund.get('source')}). "
                      "Submit the payment request now that the service happened.")
        elif status == "allocation":
            add("CHECK", f"Service already happened ({first:%m-%d-%Y}). Ask GSC/SSE whether the existing allocation "
                         f"({fund.get('source')}) may pay a past session; GSC does not fund retroactively.")
        else:
            add("BLOCK", f"Service already happened ({first:%m-%d-%Y}) with no approved funding. GSC does not fund "
                         "retroactively, so this invoice cannot get a new grant. Options: existing allocation (ask), "
                         "or treat it as the organizer's personal cost.")
    elif first:
        days = (first - today).days
        if status != "approved" and days < 30:
            add("CHECK", f"Session is {days} days away. The FO relayed ASSU guidance that applications should be in "
                         "at least one month ahead and that requests a week or less ahead may be denied.")
        if status != "approved" and days < 14:
            add("CHECK", "Fewer than 14 days left: the GSC Funding Calendar listing rule cannot be met.")
        if status == "approved":
            add("OK", "Funding approved; pay only after the session is taught.")
    if oop.get("by"):
        add("CHECK", f"{oop['by']} already paid the payee out of pocket ({oop.get('amount') or 'amount not recorded'}). "
                     "Do not also pay the invoice; route any Stanford money as a reimbursement to the person who "
                     "paid, if GrantEd allows it, and record it in the Accounting sheet.")
    att = ev.get("attendance_list")
    if not att:
        add("FIX", "No attendance list (names + emails). GSC cut a past grant in half for lacking one.")
    else:
        add("OK", f"Attendance evidence: {att}.")
    if ev.get("announcement_matches_instructor") is False:
        add("FIX", "The public announcement named a different instructor than the one who taught; "
                   "note the substitution in the request so the evidence is consistent.")
    return sorted(out, key=lambda x: ORDER[x[0]]), total, dates


def report(f, today):
    results, total, dates = check(f, today)
    payee, inv, fund = f.get("payee", {}), f.get("invoice", {}), f.get("funding", {})
    counts = {k: sum(1 for r in results if r[0] == k) for k in ORDER}
    verdict = "NOT READY" if counts["BLOCK"] or counts["FIX"] else "READY FOR FO REVIEW"
    md = [f"# Invoice check: {payee.get('name', '?')} — {inv.get('number', 'no number')}",
          "", f"Checked {today:%m-%d-%Y}. Verdict: **{verdict}** "
          f"({counts['BLOCK']} block, {counts['FIX']} fix, {counts['CHECK']} check, {counts['OK']} ok).", "",
          "| Level | Finding |", "|---|---|"]
    md += [f"| {lvl} | {msg} |" for lvl, msg in results]
    md += ["", "## GrantEd payment request draft (the FO types and submits this; nothing was submitted)", "",
           "| Field | Value |", "|---|---|",
           "| Request type | Service Payment |",
           f"| Vendor / payee | {payee.get('name', '?')} (new payees go through Stanford payee setup first) |",
           f"| Service date(s) | {', '.join(f'{d(x):%m-%d-%Y}' for x in dates) or '?'} |",
           f"| Amount | ${total:.2f} |",
           f"| Account | {fund.get('account') or 'Same account as the approved funding line (Compensation or Honoraria)'} |",
           f"| Funding line / application | {fund.get('application_id') or fund.get('source') or 'none approved yet'} |",
           f"| Description | {f.get('description') or 'Guest dance instruction, SBSBZ weekly class'} |",
           "| Attachments | Invoice PDF; written quote + acceptance; attendance list |"]
    return "\n".join(md) + "\n", results


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("facts")
    ap.add_argument("--today", default=None)
    ap.add_argument("--out", default=None)
    a = ap.parse_args()
    today = d(a.today) if a.today else dt.date.today()
    with open(a.facts) as fh:
        facts = json.load(fh)
    text, results = report(facts, today)
    if a.out:
        with open(a.out, "w") as fh:
            fh.write(text)
    print(text)
    levels = {r[0] for r in results}
    sys.exit(2 if "BLOCK" in levels else 1 if "FIX" in levels else 0)


if __name__ == "__main__":
    main()
