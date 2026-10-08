"""Build the Bachata-only student-friendly weekly flyer and verify its links."""
from pathlib import Path
from collections import Counter
import json, shutil, subprocess, hashlib
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor, white
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF
from pypdf import PdfReader


ROOT=Path(__file__).resolve().parent
REPO=ROOT.parents[3]
TEMP=Path(__file__).resolve().parent/'assets'
DOWNLOAD=Path.home()/'Downloads/SBSBZ-Autumn-Poster-Options-2026-09-21'
POPPLER=shutil.which('pdftoppm') or 'pdftoppm'
LINKS={
 'whatsapp':'https://chat.whatsapp.com/LZw0R9UTsKgFfY2oBmXAwV',
 'linktree':'https://linktr.ee/stanfordbachatazouk',
}
for name,file in [('Display','Impact.ttf'),('Body','Arial.ttf'),('Bold','Arial Bold.ttf')]:
 pdfmetrics.registerFont(TTFont(name,'/System/Library/Fonts/Supplemental/'+file))

OPTIONS=[
 {'id':'A','name':'Campus casual','stem':'A-Campus-Casual','art':'A-campus-casual.png',
  'ink':'#2C1630','primary':'#8C1538','secondary':'#643477','paper':'#FFF9EF',
  'tagline':'Find your rhythm. Find your people.','caption':'Closest to the original; jeans and easy steps.'},
 {'id':'B','name':'Your first class','stem':'B-Your-First-Class','art':'B-your-first-class.png',
  'ink':'#32272C','primary':'#854532','secondary':'#684477','paper':'#FFFBF5',
  'tagline':'Your first step starts here.','caption':'A relaxed class setting, with room for newcomers.'},
 {'id':'C','name':'Just come dance','stem':'C-Just-Come-Dance','art':'C-just-come-dance.png',
  'ink':'#342244','primary':'#542348','secondary':'#435AA5','paper':'#FFF8E7',
  'tagline':'Come as you are. Let\'s dance.','caption':'Bold, playful illustration with everyday clothes.'},
]

def txt(c,x,y,s,size,font='Body',color='#2C1630',align='left'):
 c.setFillColor(HexColor(color));c.setFont(font,size)
 {'left':c.drawString,'center':c.drawCentredString,'right':c.drawRightString}[align](x,y,s)

def fitted(c,x,y,s,width,size,font,color):
 txt(c,x,y,s,min(size,width/pdfmetrics.stringWidth(s,font,1)),font,color)

def rect(c,x,y,w,h,color):
 c.setFillColor(HexColor(color));c.rect(x,y,w,h,fill=1,stroke=0)

def qr(c,x,y,size,url):
 q=QrCodeWidget(url,barLevel='M',barBorder=4,barFillColor=HexColor('#000000'))
 a,b,d,e=q.getBounds();scale=size/(d-a)
 drawing=Drawing(size,size,transform=[scale,0,0,scale,-a*scale,-b*scale]);drawing.add(q)
 c.setFillColor(white);c.rect(x,y,size,size,fill=1,stroke=0)
 renderPDF.draw(drawing,c,x,y)
 c.linkURL(url,(x,y,x+size,y+size),thickness=0)

def poster(opt):
 path=TEMP/(opt['stem']+'.pdf')
 c=canvas.Canvas(str(path),pagesize=(612,792),pageCompression=1)
 c.setTitle('Stanford Bachata Sensual - Autumn Quarter 2026')
 c.setAuthor('SBSBZ')
 p,s,ink=opt['primary'],opt['secondary'],opt['ink']
 rect(c,22,22,568,748,opt['paper']);rect(c,22,762,568,8,p)
 txt(c,38,740,'SBSBZ / STANFORD',12,'Bold',p)
 txt(c,574,740,'AUTUMN QUARTER 2026',11,'Bold',p,'right')
 c.setStrokeColor(HexColor('#E5D6C8'));c.setLineWidth(.65);c.line(38,728,574,728)
 fitted(c,37,672,'BACHATA SENSUAL',538,65,'Display',p)
 fitted(c,37,620,'COME AS YOU ARE',538,58,'Display',s)
 c.drawImage(str(ROOT/'assets'/opt['art']),28,399,width=556,height=214.5,mask='auto')
 txt(c,306,381,opt['tagline'],20,'Bold',ink,'center')
 rect(c,38,347,536,25,p)
 txt(c,306,355,'FREE CLASSES FOR STANFORD STUDENTS & AFFILIATES',12,'Bold','#FFFFFF','center')
 txt(c,306,331,'No partner or experience needed. Beginners welcome!',12.4,'Body',ink,'center')
 txt(c,38,303,'WHEN & WHERE',12,'Bold',p)
 txt(c,38,281,'Thursdays / 7-10 PM',18,'Bold',ink)
 txt(c,38,260,'EVGR C Dance Studio',13,'Body',ink)
 txt(c,330,303,'CLASS + SOCIAL',12,'Bold',s)
 txt(c,330,284,'7-8 PM  Beginner',13,'Bold',ink)
 txt(c,330,266,'8-9 PM  Intermediate',13,'Bold',ink)
 txt(c,330,248,'9-10 PM  Social / practice',13,'Bold',ink)
 txt(c,306,232,'Check weekly announcements for dates, locations and changes.',8.8,'Body',ink,'center')
 rect(c,38,182,536,44,p)
 txt(c,306,210,'YOUR FIRST STEP STARTS HERE',18,'Bold','#FFFFFF','center')
 txt(c,306,193,'No special clothes. Just bring yourself!',12,'Body','#FFFFFF','center')
 for cx,label,key,col in [(206,'JOIN WHATSAPP','whatsapp',p),(406,'WEEKLY UPDATES','linktree',s)]:
  txt(c,cx,166,label,11,'Bold',col,'center');qr(c,cx-37.5,85,75,LINKS[key])
 txt(c,306,75,'linktr.ee/stanfordbachatazouk',11,'Bold',p,'center')
 txt(c,306,57,'Instagram: @stanford_bachata_sensual_zouk',10,'Body',ink,'center')
 txt(c,306,38,'Club mailing list: stanford_bachata_zouk@lists.stanford.edu',9,'Body',ink,'center')
 c.showPage();c.save()
 reader=PdfReader(path)
 body=reader.pages[0].extract_text()
 for expected in ['AUTUMN QUARTER 2026','BACHATA SENSUAL','COME AS YOU ARE','Thursdays / 7-10 PM','EVGR C Dance Studio','7-8 PM  Beginner','8-9 PM  Intermediate','9-10 PM  Social / practice','stanford_bachata_zouk@lists.stanford.edu']:
  assert expected in body,expected
 assert 'BRAZILIAN ZOUK' not in body and 'Schedule and class updates' not in body
 assert 'brando9@stanford.edu' not in body
 assert list(reader.pages[0].mediabox)==[0,0,612,792]
 return path

def render(path,out,dpi=300):
 subprocess.run([POPPLER,'-r',str(dpi),'-png','-singlefile',str(path),str(out)],check=True)

def export_and_check(opt,path):
 stem=ROOT/opt['stem']
 render(path,stem)
 jpg=stem.with_suffix('.jpg')
 with Image.open(stem.with_suffix('.png')) as im:
  im.convert('RGB').save(jpg,quality=95,subsampling=0,optimize=True,dpi=(300,300))
 checks={}
 with Image.open(jpg) as im:
  for edge in [3300,1600]:
   sample=im.copy();sample.thumbnail((edge,edge))
   actual={x.text for x in zxingcpp.read_barcodes(sample)}
   assert set(LINKS.values())<=actual,(opt['id'],edge,actual)
   checks[str(edge)]=sorted(actual)
  assert im.size==(2550,3300)
 shutil.copy2(jpg,DOWNLOAD/jpg.name)
 return {'option':opt['id'],'jpg':str(jpg),'qr_checks':checks}

def comparison():
 path=TEMP/'00-Compare-Options.pdf'
 c=canvas.Canvas(str(path),pagesize=(1512,760),pageCompression=1)
 rect(c,0,0,1512,760,'#EDE9E3')
 txt(c,28,721,'THREE WAYS TO SAY: BEGINNERS WELCOME.',23,'Bold','#2C1630')
 txt(c,28,699,'SBSBZ / AUTUMN QUARTER 2026 / OFFICER REVIEW',10,'Bold','#665966')
 for n,opt in enumerate(OPTIONS):
  x=24+n*496
  txt(c,x+8,672,opt['id']+' / '+opt['name'].upper(),16,'Bold',opt['primary'])
  txt(c,x+8,653,opt['caption'],10,'Body','#453845')
  c.drawImage(str(ROOT/(opt['stem']+'.png')),x,24,width=476,height=616)
 c.showPage();c.save()
 render(path,TEMP/'comparison',120)
 jpg=ROOT/'00-Compare-All-Three.jpg'
 with Image.open(TEMP/'comparison.png') as im:
  im.convert('RGB').save(jpg,quality=93,optimize=True)
 shutil.copy2(jpg,DOWNLOAD/jpg.name)

if __name__=='__main__':
 TEMP.mkdir(parents=True,exist_ok=True)
 opt=OPTIONS[0].copy();opt['stem']='SBSBZ-Weekly-Class-Student-Friendly-10-08-2026'
 path=poster(opt)
 render(path,TEMP/opt['stem'])
 with Image.open((TEMP/opt['stem']).with_suffix('.png')) as im:
  im.convert('RGB').save((TEMP/opt['stem']).with_suffix('.jpg'),quality=95,subsampling=0,optimize=True,dpi=(300,300))
  im.thumbnail((1000,1295));im.save(TEMP/'preview.png')
 body=PdfReader(path).pages[0].extract_text()
 assert 'OCT 2' not in body and 'Nokturnal' not in body
 import zxingcpp
 checks={}
 with Image.open((TEMP/opt['stem']).with_suffix('.jpg')) as im:
  assert im.size==(2550,3300)
  for edge in [3300,1600]:
   sample=im.copy();sample.thumbnail((edge,edge))
   actual={barcode.text for barcode in zxingcpp.read_barcodes(sample)}
   assert actual==set(LINKS.values()),(edge,actual)
   checks[str(edge)]=sorted(actual)
 hashes={extension:hashlib.sha256((TEMP/opt['stem']).with_suffix('.'+extension).read_bytes()).hexdigest() for extension in ['pdf','jpg','png']}
 checks.update({'pdf_sha256':hashes['pdf'],'sha256':hashes,'scope':'Bachata-only; club handles and links preserved; no Zouk class promotion','page_points':[612,792],'image_pixels':[2550,3300]})
 (TEMP/'verification.json').write_text(json.dumps(checks,indent=2)+'\n')
 print(path)
 print(body)
