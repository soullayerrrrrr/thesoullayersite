import os
import random
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT, exist_ok=True)

OBSIDIAN = (11, 11, 12)
OBSIDIAN2 = (19, 19, 21)
BRASS = (201, 162, 75)
BRASS_BRIGHT = (224, 189, 108)
EMBER = (180, 80, 46)
LINE = (38, 38, 42)

items = [
    "flexi-cat", "number-plate", "dragon", "name-keychain", "desk-organizer",
    "koi", "planter", "custom-figurine", "phone-stand", "trex", "hooks",
    "logo-keychain",
]

W, H = 1000, 1250

try:
    font_big = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf", 46)
    font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf", 22)
except Exception:
    font_big = ImageFont.load_default()
    font_small = ImageFont.load_default()

random.seed(7)

for i, name in enumerate(items):
    img = Image.new("RGB", (W, H), OBSIDIAN)
    d = ImageDraw.Draw(img)

    # subtle diagonal gradient band
    for y in range(H):
        t = y / H
        r = int(OBSIDIAN[0] + (OBSIDIAN2[0] - OBSIDIAN[0]) * t)
        g = int(OBSIDIAN[1] + (OBSIDIAN2[1] - OBSIDIAN[1]) * t)
        b = int(OBSIDIAN[2] + (OBSIDIAN2[2] - OBSIDIAN[2]) * t)
        d.line([(0, y), (W, y)], fill=(r, g, b))

    # print-layer horizontal lines motif
    spacing = 14
    for y in range(0, H, spacing):
        shade = 30 if (y // spacing) % 4 != 0 else 45
        d.line([(0, y), (W, y)], fill=(shade, shade, shade + 2))

    # a centered faceted "object" silhouette made of triangles in brass tones
    cx, cy = W // 2, H // 2 - 40
    size = 220
    palette = [BRASS, BRASS_BRIGHT, EMBER]
    points_sets = [
        [(cx, cy - size), (cx - size, cy + size // 2), (cx, cy + size)],
        [(cx, cy - size), (cx + size, cy + size // 2), (cx, cy + size)],
        [(cx - size, cy + size // 2), (cx, cy + size), (cx + size, cy + size // 2)],
    ]
    for pts, col in zip(points_sets, palette):
        d.polygon(pts, fill=col)

    d.rectangle([0, 0, W - 1, H - 1], outline=LINE, width=3)

    label = name.replace("-", " ").upper()
    d.text((40, H - 90), label, font=font_small, fill=BRASS_BRIGHT)
    d.text((40, H - 60), "THE SOUL LAYER — PLACEHOLDER IMAGE", font=font_small, fill=(120, 120, 124))

    img.save(os.path.join(OUT, f"{name}.jpg"), quality=87)

print("done", len(items))
