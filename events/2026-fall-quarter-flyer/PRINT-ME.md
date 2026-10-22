# SBSBZ Autumn Quarter 2026 - FINAL Cardinal Print files

Created September 20, 2026. Final revision uses Stanford's official "Autumn Quarter 2026" wording. Use the two `FINAL.pdf` files below; they supersede the earlier `SBSBZ-Fall-2026` drafts.

## Advertising status

**HOLD: awaiting officers' final feedback and Brando's explicit go-ahead for this autumn-quarter campaign.** The user said it is nearly ready and will let us know after officers' feedback. Do not execute the advertising protocol, publish, or send this flyer yet. Earlier authorization concerned the September 17 campaign; it does not override this hold. The filenames marked FINAL identify the latest draft, not permission to distribute it.

## Choose a file

- **WhatsApp image:** `SBSBZ-Autumn-2026-WhatsApp-FINAL.jpg` (2550 x 3300 pixels). Upload this as a photo; the three QR codes are verified after JPEG export. A matching copy is saved in `/Users/brandomiranda/Downloads/SBSBZ-Autumn-2026-WhatsApp-FINAL.jpg`.
- **Lossless poster image:** `SBSBZ-Autumn-2026-Poster-FINAL.png` (2550 x 3300 pixels).
- **Handout image:** `SBSBZ-Autumn-2026-Handouts-4up-FINAL.png` (2550 x 3300 pixels).
- `SBSBZ-Autumn-2026-Poster-Letter-FINAL.pdf`: one full-page poster per Letter sheet.
- `SBSBZ-Autumn-2026-Handouts-4up-Letter-FINAL.pdf`: four separately typeset handouts per Letter sheet, with center cut guides. 25 copies makes 100 handouts; 50 copies makes 200.

Both are one-page PDFs, 8.5 x 11 inches, with printer-safe white margins, embedded fonts, vector typography, and black-on-white vector QR codes. The handout QR codes are kept large instead of simply shrinking the poster. Original artwork was generated with the built-in image generation tool; the prompt and artwork are saved in `assets/`.

The user's preferred version has **no DJ photograph**. The October 2 panel retains DJ Nokturnal's name, event details and RSVP QR. The supplied photograph is preserved in `assets/dj-nokturnal-user-photo.png` but is not used in the current outputs.

## Print settings

1. Open the desired PDF in Preview and choose File > Print.
2. Printer: `CardinalPrint` (already installed and the default on this Mac).
3. Paper: US Letter; portrait; scale 100% / Actual Size.
4. Color: **Color**. The installed printer defaults to monochrome.
5. Print style: **Single-sided**. The installed printer defaults to duplex.
6. Pages per sheet: **1**, including for the 4-up PDF; that PDF already contains four handouts.
7. Set the desired number of copies and submit. Retrieve at a Cardinal Print device using your Stanford ID or Mobile Key.

No print job has been submitted from this task. Quantity and format were requested from the user and remain unconfirmed.

Stanford recommends the installed Cardinal Print driver for PDFs with images. Web upload is also available at https://cardinalprintcenter.stanford.edu, but the desktop driver is the recommended route for this flyer.

Official printing instructions: https://uit.stanford.edu/service/cardinal-print/students

## QR destinations and checks

- WhatsApp community: https://chat.whatsapp.com/LZw0R9UTsKgFfY2oBmXAwV
- All club links: https://linktr.ee/ultimate_brando9
- October 2 party RSVP: https://partiful.com/e/ohtSD9MnHe6u71JQx60X
- The printed Instagram handle is `@stanford_bachata_sensual_zouk`, linked from the club Linktree. There is no separate Instagram QR; it is accessible through All club links.

The destinations were read from the live Linktree on September 20, 2026. The WhatsApp invite page loaded; the invite was not joined or reset. The Instagram destination was confirmed from Linktree; Instagram itself could not be fetched by the web tool.

The latest design has fifteen QR placements: three on the poster and three on each of four handouts. Decode results are saved in `assets/qr-verification.json`. The codes have four-module white quiet zones. Digital decoding is verified; an actual printed-paper scan has not been performed.

## Event copy and its limits

- This is an Autumn Quarter 2026 club recruitment flyer, with the October 2 Mega Bachata Party included at the user's request. The party panel is time-sensitive and should be removed for distribution after October 2. It omits the September 17 class. Stanford's quarter name was verified at https://studentservices.stanford.edu/calendar-events/academic-calendars/stanford-academic-calendar-2026-2027 .
- October 2 party: Friday, class 8-9 PM, social 9 PM-1 AM (ending October 3), Hacienda Commons in Rains, DJ Nokturnal. Sources: the approved local `events/2026-10-02-mega-bachata/flyer-oct-2-dj-nokturnal.png`, its asset manifest, and the September 13 team responsibilities notes. Partiful could not be fetched by the web tool during this revision. No new promises about food or funding were added.
- `DRAFT-ANNOUNCEMENT.txt` includes the party in the pending campaign copy. It remains unsent.
- Bachata: Thursdays, 7-10 PM, EVGR C Dance Studio, consistent with the existing autumn flyer and current campaign materials. A complete autumn room-booking/date-exception calendar was not available. The flyer asks readers to check weekly announcements for dates, locations and changes.
- Brazilian Zouk: **Autumn schedule coming soon**. No unverified Wednesday schedule, instructor roster, or room is printed. The user was asked whether there is a new confirmed autumn schedule and has not yet replied.
- Free classes for Stanford students and affiliates; beginners welcome; no partner or experience needed.
- Full-page poster footer lists the club mailing list, `stanford_bachata_zouk@lists.stanford.edu`, instead of a personal signature or email.

Local references: `events/2026-fall-quarter-flyer/PRINT-README.md`, `events/2026-09-17-fall-kickoff/CODEX-HANDOFF.md`, `bridge/dan-priorities-read-01/document-text.md`. The old fall flyer is preserved in place; use these new PDFs for the new design.

## Editing

`build_flyers.py` creates both PDFs with ReportLab and validates page dimensions and key text. Run it using the Codex bundled Python runtime, which includes ReportLab and pypdf. The source uses macOS fonts embedded in the PDFs. After any change, render both PDFs and repeat QR and visual checks before printing.
