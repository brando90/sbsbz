# Autumn 2026 poster options after officers' feedback

September 21, 2026. Brando selected **A — Campus casual** for use today. All three options were uploaded as JPG and PNG, plus the comparison image, to the club Marketing folder. No mass advertising has been dispatched in this account-setup task.

Drive: https://drive.google.com/drive/folders/1lPM7ATIs3LGvmSl2h69LMrr1Zs4tdYvI

All three poster options now use the verified club-owned Linktree: https://linktr.ee/stanfordbachatazouk. The images were rebuilt and all three QR codes checked at full resolution and a 1600-pixel long edge.

Katrin's feedback: the formal dresses, professional poses and dance shoes could make newcomers think special clothing or preparation is required. Dan agreed that a small adjustment would help. All three options instead show everyday clothes, trousers and sneakers with easy upright dance steps.

- **A - Campus casual:** closest to the previous layout and painterly campus setting, with casual clothes and relaxed poses.
- **B - Your first class:** a friendly indoor workshop, with two pairs and two people practicing on their own. Recommended for conveying a low-pressure beginner class.
- **C - Just come dance:** a bolder graphic illustration in coral, plum, blue and lilac; playful and easy to recognize from a distance.

Each option is a complete 2550 x 3300 pixel poster in JPG and PNG. JPGs plus the comparison sheet are also copied to `/Users/brandomiranda/Downloads/SBSBZ-Autumn-Poster-Options-2026-09-21/`. No existing FINAL poster is replaced and no handout variant is selected yet. PDF files used to render the images are intermediates in `tmp/pdfs/sbsbz-autumn-options/`.

Preserved details: Autumn Quarter 2026; Bachata Thursdays 7-10 PM at EVGR C Dance Studio; Zouk autumn schedule coming soon; free classes for Stanford students and affiliates; beginners welcome, no partner or experience needed; October 2 Mega Bachata Party, class 8-9 PM and social 9 PM-1 AM, Hacienda Commons in Rains, DJ Nokturnal; group mailing list footer; no DJ photo or personal signature. Weekly announcements remain authoritative for class-date or location changes.

The new artwork is AI-generated illustration using the built-in image_gen tool, not documentary imagery of an actual SBSBZ class or room. Source prompts are in `assets/prompts.json`; artwork is in `assets/`. The type and QR codes are rendered independently from the illustration for legibility and scan accuracy. All three QR codes in each JPG are decoded at full size and at a 1600-pixel long edge, with results in `verification.json`. Actual paper scanning and WhatsApp upload/compression have not been tested.

QR destinations:

- WhatsApp: https://chat.whatsapp.com/LZw0R9UTsKgFfY2oBmXAwV
- All club links: https://linktr.ee/stanfordbachatazouk
- Party RSVP: https://partiful.com/e/ohtSD9MnHe6u71JQx60X

For rebuilding, run `build_options.py` using the bundled Python runtime with the existing QR-check dependency path. Original artwork and the previous selected draft remain unchanged.
