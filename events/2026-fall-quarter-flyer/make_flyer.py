from pathlib import Path
import math

import fitz
import qrcode
from PIL import Image, ImageDraw, ImageFont, ImageFilter


OUT = Path(__file__).resolve().parent
W, H = 2550, 3300  # US Letter at 300 dpi

LINKTREE = "https://linktr.ee/ultimate_brando9"
IG = "https://www.instagram.com/stanford_bachata_sensual_zouk/"
PARTIFUL = "https://partiful.com/e/ohtSD9MnHe6u71JQx60X"


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    candidates = [
        f"/System/Library/Fonts/{name}",
        f"/Library/Fonts/{name}",
        f"/System/Library/Fonts/Supplemental/{name}",
    ]
    for c in candidates:
        if Path(c).exists():
            return ImageFont.truetype(c, size)
    return ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", size)


FONT_BLACK = "/System/Library/Fonts/Avenir Next.ttc"
FONT_BODY = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def f_black(size):
    return ImageFont.truetype(FONT_BLACK, size, index=6)


def f_body(size):
    return ImageFont.truetype(FONT_BODY, size)


def f_bold(size):
    return ImageFont.truetype(FONT_BOLD, size)


def qr(url: str, size: int) -> Image.Image:
    q = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=16,
        border=3,
    )
    q.add_data(url)
    q.make(fit=True)
    img = q.make_image(fill_color="#2a0620", back_color="#fff8ee").convert("RGB")
    return img.resize((size, size), Image.Resampling.NEAREST)


def rounded_rect(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def text_center(draw, box, text, font_obj, fill, spacing=8):
    x1, y1, x2, y2 = box
    lines = text.split("\n")
    heights = []
    widths = []
    for line in lines:
        b = draw.textbbox((0, 0), line, font=font_obj)
        widths.append(b[2] - b[0])
        heights.append(b[3] - b[1])
    total_h = sum(heights) + spacing * (len(lines) - 1)
    y = y1 + ((y2 - y1) - total_h) / 2
    for line, tw, th in zip(lines, widths, heights):
        draw.text((x1 + ((x2 - x1) - tw) / 2, y), line, font=font_obj, fill=fill)
        y += th + spacing


def wrap(draw, text, font_obj, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        test = word if not current else current + " " + word
        if draw.textlength(test, font=font_obj) <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(draw, pos, text, font_obj, fill, max_width, line_gap=10):
    x, y = pos
    for line in wrap(draw, text, font_obj, max_width):
        draw.text((x, y), line, font=font_obj, fill=fill)
        y += font_obj.size + line_gap
    return y


def make_background():
    img = Image.new("RGB", (W, H), "#fff4e6")
    pix = img.load()
    for y in range(H):
        for x in range(W):
            t = y / H
            r = int(255 * (1 - t) + 245 * t)
            g = int(246 * (1 - t) + 226 * t)
            b = int(229 * (1 - t) + 212 * t)
            pix[x, y] = (r, g, b)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    colors = [
        (104, 14, 68, 72),
        (182, 53, 88, 62),
        (229, 126, 75, 58),
        (62, 16, 68, 56),
    ]
    for i, c in enumerate(colors):
        for j in range(3):
            x = -500 + i * 730 + j * 120
            y = 130 + j * 830
            od.ellipse((x, y, x + 1400, y + 390), fill=c)
            od.ellipse((W - x - 1450, H - y - 460, W - x, H - y), fill=c)
    overlay = overlay.filter(ImageFilter.GaussianBlur(50))
    img = Image.alpha_composite(img.convert("RGBA"), overlay)
    return img.convert("RGB")


def draw_card(draw, box, title, body, accent):
    x1, y1, x2, y2 = box
    rounded_rect(draw, box, 44, "#fffaf2", outline=accent, width=8)
    draw.text((x1 + 50, y1 + 42), title, font=f_bold(58), fill=accent)
    y = y1 + 126
    for line in body:
        draw.text((x1 + 56, y), line, font=f_body(43), fill="#2a0620")
        y += 60


def make_front():
    img = make_background()
    d = ImageDraw.Draw(img)

    margin = 155
    burgundy = "#5d0b3f"
    rose = "#b53658"
    orange = "#dc7044"
    dark = "#25051c"

    rounded_rect(d, (margin, 140, W - margin, H - 145), 72, "#fff7ec", outline="#5d0b3f", width=10)
    rounded_rect(d, (margin + 40, 180, W - margin - 40, 580), 56, "#5d0b3f")
    text_center(d, (margin + 70, 220, W - margin - 70, 350), "LEARN BACHATA SENSUAL", f_bold(96), "#fff7ec")
    text_center(d, (margin + 70, 352, W - margin - 70, 478), "+ BRAZILIAN ZOUK", f_bold(104), "#ffd7bd")
    text_center(d, (margin + 70, 490, W - margin - 70, 555), "FALL QUARTER 2026", f_bold(48), "#fff7ec")

    d.text((margin + 75, 645), "Free weekly dance classes + socials at Stanford", font=f_bold(70), fill=dark)
    y = draw_wrapped(
        d,
        (margin + 75, 742),
        "Beginner-friendly. No partner or experience needed. Come for the class, stay for the community.",
        f_body(48),
        dark,
        W - 2 * margin - 150,
        14,
    )

    draw_card(
        d,
        (margin + 75, y + 55, W - margin - 75, y + 405),
        "Bachata Sensual",
        [
            "Thursdays, 7-10 PM",
            "EVGR C Dance Studio",
            "Beginner flow -> groove -> practice",
        ],
        rose,
    )

    draw_card(
        d,
        (margin + 75, y + 455, W - margin - 75, y + 805),
        "Brazilian Zouk",
        [
            "Weekly classes + socials",
            "Schedule/location posted live",
            "Smooth flow, connection, musicality",
        ],
        "#64319a",
    )

    special_y = y + 870
    rounded_rect(d, (margin + 75, special_y, W - margin - 75, special_y + 360), 44, "#2a0620")
    d.text((margin + 125, special_y + 48), "SPECIAL SOCIAL", font=f_bold(44), fill="#ffd7bd")
    d.text((margin + 125, special_y + 112), "Mega Bachata Night", font=f_black(78), fill="#fff7ec")
    d.text((margin + 125, special_y + 205), "Fri Oct 2, 8 PM-1 AM", font=f_bold(50), fill="#fff7ec")
    d.text((margin + 125, special_y + 270), "Hacienda Commons with DJ Nokturnal", font=f_body(44), fill="#ffd7bd")

    cta = "Scan. Show up. Dance."
    text_center(d, (margin + 70, H - 1045, W - margin - 70, H - 985), cta, f_bold(54), dark)
    footer = "Free for Stanford students & affiliates | Student-run | Check live schedule before you go"
    text_center(d, (margin + 70, H - 970, W - margin - 70, H - 920), footer, f_body(34), dark)

    qr_size = 430
    q1 = qr(LINKTREE, qr_size)
    q2 = qr(IG, qr_size)
    q3 = qr(PARTIFUL, qr_size)
    q_y = H - 780
    slots = [
        (margin + 100, q_y, q1, "LIVE SCHEDULE", "linktr.ee/ultimate_brando9", burgundy),
        (W // 2 - qr_size // 2, q_y, q2, "FOLLOW SBSBZ", "@stanford_bachata_sensual_zouk", rose),
        (W - margin - 100 - qr_size, q_y, q3, "OCT 2 RSVP", "partiful.com/e/ohtSD9MnHe6u71JQx60X", orange),
    ]
    for x, y0, qimg, label, url, color in slots:
        rounded_rect(d, (x - 28, y0 - 28, x + qr_size + 28, y0 + qr_size + 185), 34, "#fffaf2", outline=color, width=7)
        img.paste(qimg, (x, y0))
        text_center(d, (x - 10, y0 + qr_size + 32, x + qr_size + 10, y0 + qr_size + 82), label, f_bold(36), color)
        text_center(d, (x - 22, y0 + qr_size + 92, x + qr_size + 22, y0 + qr_size + 150), url, f_body(26), dark)

    return img


def save_pdf_from_image(img, path):
    rgb = img.convert("RGB")
    rgb.save(path, "PDF", resolution=300.0)


def make_four_up(front):
    page = Image.new("RGB", (W, H), "#ffffff")
    thumb_w = W // 2 - 120
    thumb_h = H // 2 - 150
    scale = min(thumb_w / W, thumb_h / H)
    tw, th = int(W * scale), int(H * scale)
    mini = front.resize((tw, th), Image.Resampling.LANCZOS)
    positions = [
        (60, 75),
        (W // 2 + 60, 75),
        (60, H // 2 + 75),
        (W // 2 + 60, H // 2 + 75),
    ]
    for pos in positions:
        page.paste(mini, pos)
    d = ImageDraw.Draw(page)
    d.line((W // 2, 40, W // 2, H - 40), fill="#bbb3aa", width=3)
    d.line((40, H // 2, W - 40, H // 2), fill="#bbb3aa", width=3)
    return page


def pdf_preview(pdf_path, png_path):
    doc = fitz.open(str(pdf_path))
    page = doc[0]
    pix = page.get_pixmap(matrix=fitz.Matrix(0.5, 0.5), alpha=False)
    pix.save(str(png_path))


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    front = make_front()
    png = OUT / "sbsbz-fall-2026-quarter-flyer-letter-300dpi.png"
    pdf = OUT / "sbsbz-fall-2026-quarter-flyer-letter-print.pdf"
    four_png = OUT / "sbsbz-fall-2026-quarter-flyer-4up-300dpi.png"
    four_pdf = OUT / "sbsbz-fall-2026-quarter-flyer-4up-print.pdf"
    preview = OUT / "sbsbz-fall-2026-quarter-flyer-preview.png"

    front.save(png, quality=95)
    save_pdf_from_image(front, pdf)
    four = make_four_up(front)
    four.save(four_png, quality=95)
    save_pdf_from_image(four, four_pdf)
    pdf_preview(pdf, preview)
    print(pdf)
    print(png)
    print(four_pdf)
    print(preview)


if __name__ == "__main__":
    main()
