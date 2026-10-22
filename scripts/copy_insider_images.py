import os
import shutil

mapping = {
    'About Us hero image.png': 'public/images/about/facility-panoramic.png',
    'The Traditional Process.png': 'public/images/about/ammikal-main.png',
    'Prepared with care at our facility.png': 'public/images/factory/stage-1-facility.png',
    'Hygienically packed and quality checked.png': 'public/images/factory/stage-2-packing.png',
    'Handed over to trusted courier partners.png': 'public/images/factory/stage-3-courier.png',
    'Delivered at your doorstep.png': 'public/images/factory/stage-4-doorstep.png',
    'Healthier Families.png': 'public/images/about/family-lifestyle.png',
    'Give Your Family the Goodness of Traditional Nutrition.png': 'public/images/cta/cta-pouch-grains.png',
    'ragi.png': 'public/images/ingredients/ragi.png',
    'wheat.png': 'public/images/ingredients/wheat.png',
    'green gram.png': 'public/images/ingredients/green-gram.png',
    'Soya.png': 'public/images/ingredients/soya.png',
    'Almond.png': 'public/images/ingredients/almond.png',
    'cardamom.png': 'public/images/ingredients/cardamom.png',
}

src_dir = 'UI designs/insider images'
for src_name, dst_path in mapping.items():
    s = os.path.join(src_dir, src_name)
    if os.path.exists(s):
        os.makedirs(os.path.dirname(dst_path), exist_ok=True)
        shutil.copyfile(s, dst_path)
        print(f'Copied: {src_name} -> {dst_path}')
    else:
        print(f'MISSING: {s}')

print('SUCCESS: All insider images placed in public directories!')
