import os
import shutil
from PIL import Image

# Ensure output directories
dirs = [
    'public/images',
    'public/images/hero',
    'public/images/ingredients',
    'public/images/prepare',
    'public/images/factory',
    'public/images/about',
    'public/images/cta',
    'public/product images'
]

for d in dirs:
    os.makedirs(d, exist_ok=True)

# 1. Copy Logo
if os.path.exists('images/logo.png'):
    shutil.copyfile('images/logo.png', 'public/images/logo.png')
    print('Copied logo.png')

# 2. Copy Lab Report
if os.path.exists('images/lab report & ingredients.jpeg'):
    shutil.copyfile('images/lab report & ingredients.jpeg', 'public/images/lab-report.jpeg')
    print('Copied lab report')

# 3. Product Images from page 1/2 Product Buying Section (1586 x 992)
p1_prod = Image.open('UI designs/page 1/2 Product Buying Section & Goodness in every scoop.png')

# Thumbnail 1: front pouch (inner crop avoiding card border)
t1 = p1_prod.crop((78, 68, 242, 238))
t1.save('public/product images/front-pouch.png')

# Thumbnail 2: side angle view
t2 = p1_prod.crop((78, 263, 242, 433))
t2.save('public/product images/side-pouch.png')

# Thumbnail 3: label & powder close-up
t3 = p1_prod.crop((78, 455, 242, 625))
t3.save('public/product images/label-closeup.png')

# Center pouch on pedestal with grains
pouch_pedestal = p1_prod.crop((260, 30, 975, 670))
pouch_pedestal.save('public/product images/pouch-pedestal.png')

# Clean main pouch isolated
pouch_main = p1_prod.crop((400, 30, 850, 630))
pouch_main.save('public/product images/main-pouch.png')

print('Saved product gallery images')

# 4. Hero Section from page 1/1 navbar & hero section (1536 x 1024)
p1_hero = Image.open('UI designs/page 1/1 navbar & hero section.png')
# Right still life composition (pouch, bowls, almonds, glass)
hero_still_life = p1_hero.crop((550, 110, 1536, 1020))
hero_still_life.save('public/images/hero/hero-still-life.png')
# Full hero background / scene
hero_full = p1_hero.crop((0, 75, 1536, 1024))
hero_full.save('public/images/hero/hero-bg.png')
print('Saved hero images')

# 5. Ingredients and How to Prepare from page 1/3 (1672 x 940)
p1_ing = Image.open('UI designs/page 1/3 Ingredients & how to prepare.png')
# 6 Ingredients (pure photo, no text)
p1_ing.crop((20, 150, 275, 315)).save('public/images/ingredients/ragi.png')
p1_ing.crop((290, 150, 555, 315)).save('public/images/ingredients/wheat.png')
p1_ing.crop((570, 150, 830, 315)).save('public/images/ingredients/green-gram.png')
p1_ing.crop((845, 150, 1100, 315)).save('public/images/ingredients/soya.png')
p1_ing.crop((1115, 150, 1370, 315)).save('public/images/ingredients/almond.png')
p1_ing.crop((1385, 150, 1640, 315)).save('public/images/ingredients/cardamom.png')

# 3 Preparation Steps (clean photo portion)
p1_ing.crop((50, 550, 350, 810)).save('public/images/prepare/step-1.png')
p1_ing.crop((440, 550, 740, 810)).save('public/images/prepare/step-2.png')
p1_ing.crop((820, 550, 1070, 810)).save('public/images/prepare/step-3.png')

# Large malt drink glass on right
p1_ing.crop((1090, 450, 1672, 940)).save('public/images/prepare/malt-glass-large.png')
print('Saved ingredient and preparation images')

# 6. Promise & Factory from page 1/4 (1774 x 887)
p1_factory = Image.open('UI designs/page 1/4 Promise & Factory.png')
# 4 stages clean photo crops
p1_factory.crop((48, 610, 410, 825)).save('public/images/factory/stage-1-facility.png')
p1_factory.crop((510, 610, 860, 825)).save('public/images/factory/stage-2-packing.png')
p1_factory.crop((950, 610, 1280, 825)).save('public/images/factory/stage-3-courier.png')
p1_factory.crop((1360, 610, 1715, 825)).save('public/images/factory/stage-4-doorstep.png')
print('Saved factory stages images')

# 7. CTA Banner from page 1/5 Feedback & Footer (1672 x 941)
p1_cta = Image.open('UI designs/page 1/5 Feedback & Footer.png')
# Banner left pouch + grains
p1_cta.crop((20, 440, 560, 740)).save('public/images/cta/cta-pouch-grains.png')
print('Saved CTA banner image')

# 8. Page 2 Story (1536 x 1024)
p2_story = Image.open('UI designs/page 2/1 story.png')
# Panoramic Facility building with Ammi Nutrition sign
p2_story.crop((0, 85, 1536, 615)).save('public/images/about/facility-panoramic.png')
print('Saved about facility panoramic image')

# 9. Page 2 Process & Cards (1536 x 1024)
p2_proc = Image.open('UI designs/page 2/2 Mission vision & traditional process.png')
p2_proc.crop((60, 310, 770, 600)).save('public/images/about/ammikal-main.png')
p2_proc.crop((780, 310, 1130, 560)).save('public/images/about/process-grinding.png')
p2_proc.crop((1150, 310, 1500, 560)).save('public/images/about/process-texture.png')

# 3 bottom cards photos
p2_proc.crop((60, 680, 495, 875)).save('public/images/about/card-ingredients.png')
p2_proc.crop((555, 680, 990, 875)).save('public/images/about/card-facility.png')
p2_proc.crop((1050, 680, 1480, 875)).save('public/images/about/card-packing.png')
print('Saved traditional process and card images')

# 10. Page 2 Values & Journey (1536 x 1024)
p2_val = Image.open('UI designs/page 2/3 values.png')
p2_val.crop((20, 15, 850, 420)).save('public/images/about/family-lifestyle.png')
p2_val.crop((15, 685, 1520, 985)).save('public/images/about/journey-banner.png')
# Right side ingredient still life of journey banner
p2_val.crop((700, 685, 1520, 985)).save('public/images/about/journey-still-life.png')
print('Saved family lifestyle and journey images')

print('All assets extracted and organized successfully!')
