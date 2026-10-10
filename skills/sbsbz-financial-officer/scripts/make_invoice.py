#!/usr/bin/env python3
"""Render a one-session SBSBZ instructor/DJ invoice PDF from one payee's facts JSON.

Input: the same facts file invoice_check.py reads (../references/invoice-facts.example.json),
plus optional payee.phone and payee.address. Missing values print as a yellow "[... — please fill in]"
box, so a draft can go to the payee for completion; the invoice never guesses. Without --draft,
an invoice with any blank is refused (exit 1). Inconsistencies that invoice_check.py would flag
(qty x rate != amount, several service dates, no lines) are printed as warnings on stderr.
Each invoice is built only from its own payee's facts file. Never start from another payee's
invoice or facts, so no instructor sees another's invoice, rate or contact details.
Run from the repository root so the output lands in the ignored FO folder:

  F=events/MM-DD-YYYY-fo-<payee>/private
  python3 skills/sbsbz-financial-officer/scripts/make_invoice.py $F/<payee>-<MM-DD-YYYY>-facts.json \\
      --out $F/<payee>-invoice-DRAFT-<n>.pdf --draft
"""
import argparse
import datetime as dt
import json
import sys
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

CLUB = "Stanford Bachata Sensual &amp; Brazilian Zouk (SBSBZ)<br/>VSO account 5089, Stanford University"
PAY_NOTE = ("Payment: by check from Stanford University (mail or pickup), requested by the club through "
            "GrantEd after the class is taught. Stanford emails the payee a W-9 request first; "
            "please return it so the check can be issued.")


def esc(v):
    """Facts values are plain text; escape them so ReportLab's markup parser shows them literally."""
    return None if v in (None, "") else escape(str(v)).replace("\n", "<br/>")


def mdy(s):
    return dt.datetime.strptime(s, "%Y-%m-%d").strftime("%m-%d-%Y") if s else None


def money(v):
    return None if v is None else f"${float(v):,.2f}"


def build(f, out, draft):
    payee, inv = f.get("payee", {}), f.get("invoice", {})
    lines = inv.get("lines") or []
    blanks, warnings = [], []

    def blank(label):
        blanks.append(label)
        return f'<font backColor="#FFF3B0">[{label} — please fill in]</font>'

    ss = getSampleStyleSheet()
    body = ParagraphStyle("b", parent=ss["Normal"], fontSize=10.5, leading=14)
    small = ParagraphStyle("s", parent=body, fontSize=9, leading=12, textColor=colors.HexColor("#444444"))
    title = ParagraphStyle("t", parent=ss["Title"], fontSize=24, alignment=0, spaceAfter=2)
    story = [Paragraph("INVOICE" + (' <font size="12" color="#B00020">DRAFT</font>' if draft else ""), title)]

    frm = [f"<b>{esc(payee.get('name')) or blank('legal name')}</b>",
           esc(payee.get("email")) or blank("email"),
           esc(payee.get("phone")) or blank("phone"),
           esc(payee.get("address")) or blank("mailing address")]
    meta = [f"<b>Invoice #</b> {esc(inv.get('number')) or blank('number')}",
            f"<b>Invoice date</b> {mdy(inv.get('date')) or blank('date')}"]
    head = Table([[Paragraph("<br/>".join(frm), body), Paragraph("<br/>".join(meta), body)]],
                 colWidths=[4.0 * inch, 2.5 * inch])
    head.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP")]))
    story += [head, Spacer(1, 14), Paragraph("<b>BILL TO</b>", body), Paragraph(CLUB, body), Spacer(1, 16)]

    if not lines:
        warnings.append("no invoice lines")
        blank("service line")
    if len({l.get("service_date") for l in lines}) > 1:
        warnings.append("several service dates on one invoice; the club's rule is one session per invoice")
    rows = [["Service date", "Description", "Qty", "Rate", "Amount"]]
    for l in lines:
        when = mdy(l.get("service_date"))
        desc = esc(l.get("description")) or blank("description")
        if when and when not in desc:
            desc += f", {when}"
        qty, rate, amount = l.get("qty") or 1, l.get("rate"), l.get("amount")
        if rate is not None and amount is not None and abs(float(qty) * float(rate) - float(amount)) > 0.005:
            warnings.append(f"qty x rate != amount on '{l.get('description')}'")
        rows.append([Paragraph(when or blank("class date"), body), Paragraph(desc, body), str(qty),
                     Paragraph(money(rate) or blank("rate"), body), Paragraph(money(amount) or blank("amount"), body)])
    amounts = [l.get("amount") for l in lines]
    total = money(sum(float(a) for a in amounts)) if lines and None not in amounts else None
    rows.append(["", "", "", "Total", Paragraph(f"<b>{total}</b>" if total else blank("total"), body)])
    t = Table(rows, colWidths=[1.25 * inch, 3.05 * inch, 0.45 * inch, 0.85 * inch, 0.9 * inch])
    t.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"), ("FONTNAME", (3, -1), (-1, -1), "Helvetica-Bold"),
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#8C1515")), ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("LINEBELOW", (0, 0), (-1, -2), 0.5, colors.HexColor("#BBBBBB")), ("LINEABOVE", (3, -1), (-1, -1), 1, colors.black),
        ("ALIGN", (2, 0), (-1, -1), "RIGHT"), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 6), ("BOTTOMPADDING", (0, 0), (-1, -1), 6)]))
    story += [t, Spacer(1, 18), Paragraph(PAY_NOTE, small)]
    if draft and blanks:
        story += [Spacer(1, 8), Paragraph("Draft for the payee to check. Yellow fields are still missing.", small)]

    for w in warnings:
        print(f"warning: {w}", file=sys.stderr)
    if blanks and not draft:
        print(f"error: missing {', '.join(blanks)}; pass --draft to send a draft for the payee to complete",
              file=sys.stderr)
        return 1
    SimpleDocTemplate(out, pagesize=letter, leftMargin=inch, rightMargin=inch, topMargin=0.9 * inch,
                      title=f"Invoice {inv.get('number') or ''}".strip(),
                      author=str(payee.get("name") or "")).build(story)
    print(out)
    return 0


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("facts")
    ap.add_argument("--out", required=True)
    ap.add_argument("--draft", action="store_true", help="mark the PDF as a draft for the payee to complete")
    a = ap.parse_args()
    with open(a.facts) as fh:
        sys.exit(build(json.load(fh), a.out, a.draft))


if __name__ == "__main__":
    main()
