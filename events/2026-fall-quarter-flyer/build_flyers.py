"""Rebuild the final Autumn Quarter 2026 poster and independently typeset handouts."""
from pathlib import Path
import json
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor, white
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent
ART = ROOT / 'assets/dance-art.png'
LINKS = {
    'whatsapp': 'https://chat.whatsapp.com/LZw0R9UTsKgFfY2oBmXAwV',
    'linktree': 'https://linktr.ee/ultimate_brando9',
    'instagram': 'https://www.instagram.com/stanford_bachata_sensual_zouk/',
    'party': 'https://partiful.com/e/ohtSD9MnHe6u71JQx60X',
}
FONTS = Path('/System/Library/Fonts/Supplemental')
for name, file in [('Display', 'Impact.ttf'), ('Body', 'Arial.ttf'), ('Bold', 'Arial Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONTS / file)))

INK = '#2C1630'
RED = '#8C1538'
PURPLE = '#643477'
CREAM = '#FFF9EF'
LIGHT = '#EDDACB'
qr_locations = []

def text(c, x, y, s, size=12, font='Body', color=INK, align='left'):
    c.setFillColor(HexColor(color))
    c.setFont(font, size)
    if align == 'center':
        c.drawCentredString(x, y, s)
    elif align == 'right':
        c.drawRightString(x, y, s)
    else:
        c.drawString(x, y, s)

def fitted(c, x, y, s, width, max_size, font='Display', color=INK):
    size = min(max_size, width / pdfmetrics.stringWidth(s, font, 1))
    text(c, x, y, s, size, font, color)

def rect(c, x, y, w, h, color):
    c.setFillColor(HexColor(color))
    c.rect(x, y, w, h, fill=1, stroke=0)

def rule(c, x1, y, x2, color=LIGHT):
    c.setStrokeColor(HexColor(color))
    c.setLineWidth(.65)
    c.line(x1, y, x2, y)

def qr(c, x, y, side, name, pagefile, offset=(0,0)):
    url = LINKS[name]
    widget = QrCodeWidget(url, barLevel='M', barBorder=4, barFillColor=HexColor('#000000'))
    bx, by, ex, ey = widget.getBounds()
    scale = side / (ex-bx)
    drawing = Drawing(side, side, transform=[scale, 0, 0, scale, -bx*scale, -by*scale])
    drawing.add(widget)
    c.setFillColor(white)
    c.rect(x,y,side,side,fill=1,stroke=0)
    renderPDF.draw(drawing,c,x,y)
    c.linkURL(url, (x,y,x+side,y+side), relative=1, thickness=0)
    qr_locations.append({'file': pagefile, 'url': url, 'box_pt': [x+offset[0],y+offset[1],side,side]})

def setup(path, title):
    c = canvas.Canvas(str(path), pagesize=(612,792), pageCompression=1)
    c.setTitle(title)
    c.setAuthor('SBSBZ - Stanford Bachata Sensual & Brazilian Zouk')
    c.setSubject('Autumn Quarter 2026 community flyer; scan for weekly schedule updates')
    return c

def poster():
    name = 'SBSBZ-Autumn-2026-Poster-Letter-FINAL.pdf'
    c = setup(ROOT/name, 'SBSBZ | Bachata Sensual & Brazilian Zouk | Autumn Quarter 2026')
    rect(c, 22,22,568,748,CREAM)
    rect(c, 22,762,568,8,RED)
    text(c,38,740,'SBSBZ / STANFORD',12,'Bold',RED)
    text(c,574,740,'AUTUMN QUARTER 2026',11,'Bold',RED,'right')
    rule(c,38,728,574)
    fitted(c,37,672,'BACHATA SENSUAL',538,65,color=RED)
    fitted(c,37,620,'& BRAZILIAN ZOUK',538,58,color=PURPLE)
    c.drawImage(str(ART),28,399,width=556,height=214.5,mask='auto')
    text(c,306,381,'Find your rhythm. Find your people.',20,'Bold',INK,'center')
    rect(c,38,347,536,25,RED)
    text(c,306,355,'FREE CLASSES FOR STANFORD STUDENTS & AFFILIATES',12,'Bold','#FFFFFF','center')
    text(c,306,331,'No partner or experience needed. Beginners welcome!',12.4,'Body',INK,'center')
    text(c,38,303,'BACHATA SENSUAL',12,'Bold',RED)
    text(c,38,281,'Thursdays / 7-10 PM',18,'Bold')
    text(c,38,260,'EVGR C Dance Studio',13)
    text(c,330,303,'BRAZILIAN ZOUK',12,'Bold',PURPLE)
    fitted(c,330,282,'Autumn schedule coming soon',244,15,'Bold')
    text(c,330,261,'Join WhatsApp for class updates.',11.3)
    text(c,306,246,'Check weekly announcements for dates, locations and changes.',8.8,'Body',INK,'center')
    rect(c,38,181,536,56,RED)
    text(c,306,219,'FRI OCT 2 / MEGA BACHATA PARTY',21,'Bold','#FFFFFF','center')
    text(c,306,203,'Class 8-9 PM / Social 9 PM-1 AM',12,'Bold','#FFFFFF','center')
    text(c,306,188,'Hacienda Commons, Rains / DJ Nokturnal',11,'Body','#FFFFFF','center')
    for cx,label,key,color in [(106,'JOIN WHATSAPP','whatsapp',RED),(306,'ALL CLUB LINKS','linktree',PURPLE),(506,'OCT 2 RSVP','party',RED)]:
        text(c,cx,166,label,11,'Bold',color,'center')
        qr(c,cx-37.5,85,75,key,name)
    text(c,306,75,'linktr.ee/ultimate_brando9',11,'Bold',RED,'center')
    c.linkURL(LINKS['linktree'],(220,71,392,87),thickness=0)
    text(c,306,57,'Instagram: @stanford_bachata_sensual_zouk',10,'Body',INK,'center')
    c.linkURL(LINKS['instagram'],(185,54,427,67),thickness=0)
    text(c,306,38,'Club mailing list: stanford_bachata_zouk@lists.stanford.edu',9,'Body',INK,'center')
    c.showPage()
    c.save()
    return ROOT/name

def mini(c,ox,oy,name):
    """270x360 pt handout; three 53 pt QR codes include four-module quiet zones."""
    c.saveState()
    c.translate(ox,oy)
    rect(c,0,0,270,360,CREAM)
    rect(c,0,355,270,5,RED)
    text(c,10,340,'SBSBZ / STANFORD',8,'Bold',RED)
    text(c,260,340,'AUTUMN QUARTER 2026',8,'Bold',RED,'right')
    fitted(c,10,310,'BACHATA SENSUAL',250,31,color=RED)
    fitted(c,10,283,'& BRAZILIAN ZOUK',250,29,color=PURPLE)
    c.drawImage(str(ART),2,177,width=266,height=102.6,mask='auto')
    text(c,135,166,'FREE classes for Stanford students & affiliates',9,'Bold',RED,'center')
    text(c,135,153,'No partner or experience needed.',9.5,'Body',INK,'center')
    text(c,10,139,'Bachata: Thu / 7-10 PM / EVGR C Dance Studio',9.4,'Bold')
    text(c,10,126,'Zouk: autumn schedule coming soon.',9.4)
    rect(c,10,78,250,43,RED)
    text(c,135,108,'OCT 2 / MEGA BACHATA PARTY',12,'Bold','#FFFFFF','center')
    text(c,135,95,'Class 8-9 PM / Social 9 PM-1 AM',8.7,'Bold','#FFFFFF','center')
    text(c,135,83,'Hacienda Commons, Rains / DJ Nokturnal',8.1,'Body','#FFFFFF','center')
    for cx,label,key,color in [(48,'WHATSAPP','whatsapp',RED),(135,'CLUB LINKS','linktree',PURPLE),(222,'OCT 2 RSVP','party',RED)]:
        qr(c,cx-26.5,23,53,key,name,(ox,oy))
        text(c,cx,13,label,8,'Bold',color,'center')
    text(c,135,3,'Weekly updates: linktr.ee/ultimate_brando9',7,'Body',INK,'center')
    c.linkURL(LINKS['linktree'],(50,0,220,10),relative=1,thickness=0)
    c.restoreState()

def handouts():
    name = 'SBSBZ-Autumn-2026-Handouts-4up-Letter-FINAL.pdf'
    c=setup(ROOT/name,'SBSBZ Autumn Quarter 2026 | Four handouts per Letter sheet')
    for ox,oy in [(27,411),(315,411),(27,21),(315,21)]:
        mini(c,ox,oy,name)
    c.setStrokeColor(HexColor('#AAAAAA'))
    c.setLineWidth(.4)
    c.setDash(2,3)
    c.line(306,15,306,777)
    c.line(15,396,597,396)
    c.showPage()
    c.save()
    return ROOT/name

if __name__ == '__main__':
    paths=[poster(),handouts()]
    for path in paths:
        reader=PdfReader(path)
        assert len(reader.pages)==1
        assert tuple(float(x) for x in reader.pages[0].mediabox)==(0,0,612,792)
        body=reader.pages[0].extract_text()
        assert '2026' in body and 'BACHATA SENSUAL' in body and 'BRAZILIAN ZOUK' in body
        assert 'coming soon' in body
        assert 'AUTUMN QUARTER 2026' in body
        assert 'OCT 2 / MEGA BACHATA PARTY' in body
        assert 'DJ Nokturnal' in body
        assert 'fall' not in body.lower()
        assert 'brando9@stanford.edu' not in body
        print(path)
    (ROOT/'assets/qr-manifest.json').write_text(json.dumps({'links':LINKS,'codes':qr_locations},indent=2)+'\n')
