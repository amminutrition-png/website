// Central Product Data for Ammi Nutrition Protein Malt

export const productData = {
  id: "protein-malt-500g",
  name: "Protein Malt",
  brand: "Ammi Nutrition",
  fullName: "Ammi Nutrition Protein Malt",
  packSize: "500 g pouch",
  headline: "Traditional Goodness, Everyday Nutrition",
  heroDescription: "Meet Ammi Nutrition Protein Malt — a comforting malt mix made for your family’s daily routine.",
  shortDescription: "A comforting malt mix for your family's daily routine.",
  
  // Pricing Details
  price: 250,
  shippingCharge: 50,
  totalPrice: 300,
  currency: "₹",
  formattedPrice: "₹250",
  formattedShipping: "₹50",
  formattedTotal: "₹300",
  pricePerUnitText: "₹250 per 500g pouch",

  // Interactive Product Gallery Images
  gallery: [
    {
      id: "front",
      src: "/product images/main-pouch.png",
      thumb: "/product images/front-pouch.png",
      alt: "Ammi Nutrition Protein Malt 500g pouch front view showing scoop and malt powder",
      label: "Front Pouch View"
    },
    {
      id: "side",
      src: "/product images/side-pouch.png",
      thumb: "/product images/side-pouch.png",
      alt: "Ammi Nutrition Protein Malt metallic gold stand-up pouch side view",
      label: "Side Angle View"
    },
    {
      id: "label",
      src: "/product images/label-closeup.png",
      thumb: "/product images/label-closeup.png",
      alt: "Close-up of Ammi Nutrition printed label with Ammikal stone grinder and grain powder",
      label: "Packaging & Label Close-up"
    },
    {
      id: "pedestal",
      src: "/product images/pouch-pedestal.png",
      thumb: "/product images/pouch-pedestal.png",
      alt: "Ammi Nutrition Protein Malt pouch displayed on natural stone riser with wholesome grains",
      label: "Serving Still Life"
    }
  ],

  // Hero Benefit Items
  heroFeatures: [
    { id: "prep", label: "Easy to Prepare", icon: "bowl" },
    { id: "comfort", label: "Everyday Comfort", icon: "leaf" },
    { id: "family", label: "Made for Family Moments", icon: "family" }
  ],

  // Goodness in Every Scoop Band
  goodnessFeatures: [
    { id: "g1", label: "Easy to Prepare", icon: "bowl" },
    { id: "g2", label: "Everyday Comfort", icon: "leaf" },
    { id: "g3", label: "Made for Family Moments", icon: "family" },
    { id: "g4", label: "Enjoy Warm or Cool", icon: "cup" }
  ],

  // Wholesome Ingredients (Verified 6 Natural Ingredients)
  ingredients: [
    {
      id: "ragi",
      name: "Ragi",
      subtitle: "(Finger Millet)",
      image: "/images/ingredients/ragi.png",
      alt: "Reddish-brown whole finger millet grains"
    },
    {
      id: "wheat",
      name: "Wheat",
      subtitle: "Golden Whole Wheat",
      image: "/images/ingredients/wheat.png",
      alt: "Golden whole wheat grains and wheat ears"
    },
    {
      id: "green-gram",
      name: "Green Gram",
      subtitle: "Whole Mung Beans",
      image: "/images/ingredients/green-gram.png",
      alt: "Natural whole green gram mung beans"
    },
    {
      id: "soya",
      name: "Soya",
      subtitle: "Whole Soybeans",
      image: "/images/ingredients/soya.png",
      alt: "Clean whole golden soybeans"
    },
    {
      id: "almond",
      name: "Almond",
      subtitle: "Selected Whole Almonds",
      image: "/images/ingredients/almond.png",
      alt: "Natural wholesome whole almonds"
    },
    {
      id: "cardamom",
      name: "Cardamom",
      subtitle: "Aromatic Green Pods",
      image: "/images/ingredients/cardamom.png",
      alt: "Fragrant whole green cardamom pods"
    }
  ],

  // How to Prepare (5 Steps Preparation)
  prepSteps: [
    {
      step: 1,
      caption: "Take 1 glass of water (about 150 ml)",
      image: "/images/prepare/1.png",
      alt: "Step 1: Take 1 glass of water (about 150 ml)"
    },
    {
      step: 2,
      caption: "Mix 25 g of Protein Malt powder",
      image: "/images/prepare/2.png",
      alt: "Step 2: Mix 25 g of Protein Malt powder"
    },
    {
      step: 3,
      caption: "Boil the water (or milk)",
      image: "/images/prepare/3.png",
      alt: "Step 3: Boil the water (or milk)"
    },
    {
      step: 4,
      caption: "After mixing/cooking, a foam/froth appears after about 1–2 minutes.",
      image: "/images/prepare/4.png",
      alt: "Step 4: After mixing/cooking, a foam/froth appears after about 1–2 minutes."
    },
    {
      step: 5,
      caption: "Remove from stove. You can add sugar or salt and consume.",
      image: "/images/prepare/5.png",
      alt: "Step 5: Remove from stove. You can add sugar or salt and consume."
    }
  ],
  prepTip: "Tip: You can add sugar, palm jaggery, honey, or a pinch of salt to suit your taste.",
  prepGlassImage: "/images/prepare/malt-glass-large.png",

  // Our Promise of Purity (5 Items)
  purityPromises: [
    { id: "natural", title: "100% Natural", icon: "leaf", desc: "Crafted with authentic food grains" },
    { id: "preservatives", title: "No Preservatives", icon: "flask", desc: "No artificial chemicals or colors" },
    { id: "fssai", title: "FSSAI Certified", icon: "fssai", desc: "Food safety standards and quality compliance" },
    { id: "hygiene", title: "Hygienically Processed", icon: "hygiene", desc: "Clean food-grade environment" },
    { id: "quality", title: "Quality Checked", icon: "shield", desc: "Rigorous quality checks on every batch" }
  ],

  // From Our Factory to Your Family (4-Stage Visual Journey)
  factoryJourney: [
    {
      step: 1,
      caption: "Prepared with care at our facility",
      image: "/images/factory/stage-1-facility.png",
      alt: "Food production facility in Coimbatore, Tamil Nadu"
    },
    {
      step: 2,
      caption: "Hygienically packed and quality checked",
      image: "/images/factory/stage-2-packing.png",
      alt: "Ammi Nutrition Protein Malt gold pouches neatly arranged"
    },
    {
      step: 3,
      caption: "Handed over to trusted courier partners",
      image: "/images/factory/stage-3-courier.png",
      alt: "Ammi Nutrition delivery logistics vehicle"
    },
    {
      step: 4,
      caption: "Delivered at your doorstep",
      image: "/images/factory/stage-4-doorstep.png",
      alt: "Delivery professional handing over package to happy family at their home"
    }
  ],

  // Lab Test Report Verified Facts
  labTestReport: {
    reportNumber: "ALT/FA-0250-1/2026",
    reportDate: "08.09.2026",
    laboratory: "Alpha Labs & Technologies (ISO 9001 Certified Laboratory), Coimbatore",
    customer: "M/s. KM CAKE SHOP, Perur Chettipalayam, Coimbatore - 641010",
    sampleDescription: "Protein Malt",
    testedParameters: [
      { parameter: "Total Fiber", method: "ALT-CH-SOP-001", unit: "g/100g", result: "22.4" },
      { parameter: "Iron as Fe", method: "ALT-CH-SOP-006", unit: "mg/kg", result: "5.26" },
      { parameter: "Calcium", method: "ALT-CH-SOP-006", unit: "mg/kg", result: "267" }
    ],
    note: "Analysis conducted by an accredited third-party food testing laboratory. Factual parameters tested are preserved as documented."
  }
};
