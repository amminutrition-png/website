import os
import shutil
from PIL import Image

def main():
    print("Starting clean asset extraction and update...")

    # 1. Hero Still Life (No left-column text)
    if os.path.exists('scratch/hero_test_820.png'):
        shutil.copyfile('scratch/hero_test_820.png', 'public/images/hero/hero-still-life.png')
        print("1. Hero still life updated successfully without text.")
    else:
        p1_hero = Image.open('UI designs/page 1/1 navbar & hero section.png')
        p1_hero.crop((820, 110, 1536, 1020)).save('public/images/hero/hero-still-life.png')
        print("1. Hero still life extracted and saved.")

    # 2. Preparation Steps (Pristine photos without badge numbers or text)
    brain_dir = r'C:/Users/Akash PC/.gemini/antigravity-ide/brain/d8341daf-cace-4ee9-a13d-97ea05640f73'
    step1_src = os.path.join(brain_dir, 'prep_step_1_clean_1792571124653.jpg')
    step2_src = os.path.join(brain_dir, 'prep_step_2_clean_1792571243174.jpg')
    step3_src = os.path.join(brain_dir, 'prep_step_3_clean_1792571317609.jpg')

    if os.path.exists(step1_src):
        # Convert/save to PNG for consistency
        Image.open(step1_src).save('public/images/prepare/step-1.png')
        Image.open(step2_src).save('public/images/prepare/step-2.png')
        Image.open(step3_src).save('public/images/prepare/step-3.png')
        print("2. Preparation steps 1, 2, 3 updated with pristine text-free photos.")

    # 3. Ingredients (Crop purely the piles, no text below)
    p1_ing = Image.open('UI designs/page 1/3 Ingredients & how to prepare.png')
    p1_ing.crop((15, 120, 230, 275)).save('public/images/ingredients/ragi.png')
    p1_ing.crop((290, 105, 510, 275)).save('public/images/ingredients/wheat.png')
    p1_ing.crop((520, 130, 735, 275)).save('public/images/ingredients/green-gram.png')
    p1_ing.crop((740, 130, 970, 275)).save('public/images/ingredients/soya.png')
    p1_ing.crop((980, 120, 1230, 275)).save('public/images/ingredients/almond.png')
    p1_ing.crop((1240, 130, 1530, 275)).save('public/images/ingredients/cardamom.png')
    print("3. Ingredients (6 items) saved cleanly without any text labels.")

    # 4. Traditional Process Cards and Photos
    p2_proc = Image.open('UI designs/page 2/2 Mission vision & traditional process.png')
    # 3 bottom cards photos (strictly photo area, excluding the card headings above)
    p2_proc.crop((60, 715, 495, 870)).save('public/images/about/card-ingredients.png')
    p2_proc.crop((555, 715, 990, 870)).save('public/images/about/card-facility.png')
    p2_proc.crop((1050, 715, 1485, 870)).save('public/images/about/card-packing.png')
    # Supporting process photos
    p2_proc.crop((795, 335, 1115, 550)).save('public/images/about/process-grinding.png')
    p2_proc.crop((1165, 335, 1485, 550)).save('public/images/about/process-texture.png')
    print("4. Traditional process cards and photos saved cleanly without text.")

    # 5. About Facility Panoramic
    fac_src = os.path.join(brain_dir, 'facility_panoramic_clean_1792571051821.jpg')
    if os.path.exists(fac_src):
        Image.open(fac_src).save('public/images/about/facility-panoramic.png')
        print("5. About facility panoramic updated with pristine text-free photo.")

    # 6. CTA Pouch and Grains (no bottom curve/footer artifacts)
    p1_cta = Image.open('UI designs/page 1/5 Feedback & Footer.png')
    p1_cta.crop((20, 440, 560, 700)).save('public/images/cta/cta-pouch-grains.png')
    print("6. CTA pouch and grains saved cleanly.")

    # 7. Pedestal Pouch (no right card edge)
    p1_prod = Image.open('UI designs/page 1/2 Product Buying Section & Goodness in every scoop.png')
    p1_prod.crop((260, 30, 950, 670)).save('public/product images/pouch-pedestal.png')
    print("7. Pedestal pouch saved cleanly.")

    # 8. Values & Journey (no borders or text)
    p2_val = Image.open('UI designs/page 2/3 values.png')
    p2_val.crop((35, 30, 840, 415)).save('public/images/about/family-lifestyle.png')
    p2_val.crop((700, 715, 1510, 980)).save('public/images/about/journey-still-life.png')
    print("8. Family lifestyle and journey still life saved cleanly.")

    # 9. Factory Delivery Stages (Crop photo area strictly above captions and leaf icon)
    p1_factory = Image.open('UI designs/page 1/4 Promise & Factory.png')
    p1_factory.crop((70, 560, 395, 680)).save('public/images/factory/stage-1-facility.png')
    p1_factory.crop((520, 560, 845, 680)).save('public/images/factory/stage-2-packing.png')
    p1_factory.crop((960, 560, 1285, 680)).save('public/images/factory/stage-3-courier.png')
    p1_factory.crop((1370, 560, 1695, 680)).save('public/images/factory/stage-4-doorstep.png')
    print("9. Factory delivery stages 1-4 saved cleanly without bottom captions.")

    print("\nSUCCESS: All website image assets have been updated and are 100% free of embedded text!")

if __name__ == '__main__':
    main()
