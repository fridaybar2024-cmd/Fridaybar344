#!/usr/bin/env python3
"""Generate a Fredagsbar 344 QR poster matching the website's design."""

from pathlib import Path

import qrcode
from PIL import Image, ImageDraw, ImageFont
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.colormasks import SolidFillColorMask
from qrcode.image.styles.moduledrawers.pil import RoundedModuleDrawer

URL = "https://fridaybardtu344.onrender.com/"
OUTPUT = Path("qr-poster.png")

BLACK = (0, 0, 0)
OFF_WHITE = (242, 240, 235)
RED = (255, 59, 31)
MUTED = (119, 119, 119)

POSTER_SIZE = (1200, 1600)
QR_SIZE = 760
MARGIN = 90


def font(size, bold=False):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def make_qr():
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=20,
        border=2,
    )
    qr.add_data(URL)
    qr.make(fit=True)

    return qr.make_image(
        image_factory=StyledPilImage,
        module_drawer=RoundedModuleDrawer(),
        color_mask=SolidFillColorMask(
            back_color=BLACK,
            front_color=OFF_WHITE,
        ),
    ).convert("RGB")


def centered(draw, y, text, fnt, fill):
    width = draw.textlength(text, font=fnt)
    draw.text(((POSTER_SIZE[0] - width) / 2, y), text, font=fnt, fill=fill)


def main():
    poster = Image.new("RGB", POSTER_SIZE, BLACK)
    draw = ImageDraw.Draw(poster)

    draw.rectangle(
        [(MARGIN, MARGIN), (POSTER_SIZE[0] - MARGIN, POSTER_SIZE[1] - MARGIN)],
        outline=OFF_WHITE,
        width=4,
    )

    centered(draw, 150, "FREDAGSBAR", font(105, bold=True), OFF_WHITE)
    centered(draw, 275, "344", font(150, bold=True), RED)

    qr = make_qr().resize((QR_SIZE, QR_SIZE), Image.Resampling.NEAREST)
    qr_x = (POSTER_SIZE[0] - QR_SIZE) // 2
    qr_y = 510
    poster.paste(qr, (qr_x, qr_y))

    draw.rectangle(
        [(qr_x - 24, qr_y - 24), (qr_x + QR_SIZE + 24, qr_y + QR_SIZE + 24)],
        outline=OFF_WHITE,
        width=4,
    )

    centered(draw, qr_y + QR_SIZE + 80, "SCAN FOR THE MENU", font(46, bold=True), OFF_WHITE)
    centered(draw, qr_y + QR_SIZE + 155, "fridaybardtu344.onrender.com", font(30), MUTED)
    centered(draw, POSTER_SIZE[1] - 190, "FRIDGE → HAND", font(34, bold=True), OFF_WHITE)
    centered(draw, POSTER_SIZE[1] - 130, "DRINK RESPONSIBLY · 18+ FOR ALCOHOL", font(24), MUTED)

    OUTPUT.save(OUTPUT, quality=95)
    print(f"Saved {OUTPUT.resolve()}")


if __name__ == "__main__":
    main()
