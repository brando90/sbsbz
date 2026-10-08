"""Render the distinct Your First Class artwork with current Bachata-only copy.

Run with the bundled Python runtime and existing QR decoder dependency path.
The shared native-vector layout comes from build_weekly_flyer.py. Existing
Campus Casual outputs are preserved; this builder uses distinct filenames.
"""
from pathlib import Path
import hashlib
import importlib.util
import json
from datetime import datetime, timezone

from PIL import Image
from pypdf import PdfReader
import zxingcpp

BASE = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("weekly_layout", BASE / "build_weekly_flyer.py")
layout = importlib.util.module_from_spec(spec)
spec.loader.exec_module(layout)

if __name__ == "__main__":
    old_stem = BASE / "assets/SBSBZ-Weekly-Class-Student-Friendly-10-08-2026"
    old_hashes = {
        ext: hashlib.sha256(old_stem.with_suffix("." + ext).read_bytes()).hexdigest()
        for ext in ["pdf", "jpg", "png"]
    }
    opt = layout.OPTIONS[1].copy()
    opt["stem"] = "SBSBZ-Weekly-Class-Your-First-Class-10-08-2026"
    opt["tagline"] = layout.OPTIONS[0]["tagline"]
    stem = BASE / "assets" / opt["stem"]
    for ext in ["pdf", "jpg", "png"]:
        if stem.with_suffix("." + ext).exists():
            raise FileExistsError("Preserve an existing variant before rebuilding: " + str(stem))
    path = layout.poster(opt)
    layout.render(path, stem)
    with Image.open(stem.with_suffix(".png")) as im:
        im.convert("RGB").save(stem.with_suffix(".jpg"), quality=95, subsampling=0,
                               optimize=True, dpi=(300, 300))
        im.thumbnail((1000, 1295))
        im.save(BASE / "assets/preview-your-first-class.png")
    text = PdfReader(path).pages[0].extract_text()
    assert text == PdfReader(old_stem.with_suffix(".pdf")).pages[0].extract_text()
    assert "BRAZILIAN ZOUK" not in text and "OCT 2" not in text and "Nokturnal" not in text
    checks = {}
    with Image.open(stem.with_suffix(".jpg")) as im:
        assert im.size == (2550, 3300)
        for edge in [3300, 1600]:
            sample = im.copy()
            sample.thumbnail((edge, edge))
            decoded = {barcode.text for barcode in zxingcpp.read_barcodes(sample)}
            assert decoded == set(layout.LINKS.values()), (edge, decoded)
            checks[str(edge)] = sorted(decoded)
    hashes = {
        ext: hashlib.sha256(stem.with_suffix("." + ext).read_bytes()).hexdigest()
        for ext in ["pdf", "jpg", "png"]
    }
    assert old_hashes == {
        ext: hashlib.sha256(old_stem.with_suffix("." + ext).read_bytes()).hexdigest()
        for ext in ["pdf", "jpg", "png"]
    }
    art = layout.ROOT / "assets" / opt["art"]
    record = {
        "created_at": datetime.now(timezone.utc).isoformat(),
        "design": "B - Your First Class",
        "scope": "Bachata-only, identical current copy/schedule/links to Campus Casual A",
        "source_illustration": opt["art"],
        "source_illustration_sha256": hashlib.sha256(art.read_bytes()).hexdigest(),
        "page_points": [612, 792],
        "image_pixels": [2550, 3300],
        "qr_checks": checks,
        "sha256": hashes,
        "campus_casual_unchanged_sha256": old_hashes,
        "text_matches_campus_casual": True,
    }
    (BASE / "assets/verification-your-first-class.json").write_text(json.dumps(record, indent=2) + "\n")
    print(json.dumps(record, indent=2))
