// ---------------------------------------------------------------------------
// DATA — sourced from CHEMICALS_COMPLETE_CATALOG.md (SR Frontier Global Trade LLP)
// Edit this file to add/update products without touching the page layout.
// ---------------------------------------------------------------------------

export type ChemicalCategoryId =
  | "organic"
  | "food-cosmetic"
  | "agro"
  | "cleaning";

export interface ChemicalCategory {
  id: ChemicalCategoryId;
  label: string;
  shortLabel: string;
  accent: "emerald" | "blue" | "amber" | "slate";
  description: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface Chemical {
  id: string;
  category: ChemicalCategoryId;
  name: string;
  chemicalName: string;
  hsCode: string;
  form: string;
  appearance: string;
  description: string;
  keySpecs: Spec[]; // exactly 3 — shown on the card
  fullSpecs: Spec[]; // shown in the modal
  applications: string[];
  moq: string;
  packaging: string;
  leadTime: string;
  certifications: string[];
  exportMarkets: string[];
}

export const chemicalCategories: ChemicalCategory[] = [
  {
    id: "organic",
    label: "Organic & Natural Chemicals",
    shortLabel: "Organic & Natural",
    accent: "emerald",
    description:
      "Plant-derived extracts and cold-pressed oils for cosmetics, nutraceuticals, and organic agriculture.",
  },
  {
    id: "food-cosmetic",
    label: "Food-Grade & Cosmetic Chemicals",
    shortLabel: "Food-Grade & Cosmetic",
    accent: "blue",
    description:
      "FDA and FSSAI compliant ingredients for food, pharmaceutical, and personal-care manufacturing.",
  },
  {
    id: "agro",
    label: "Agro-Based Chemicals & Plant Nutrients",
    shortLabel: "Agro-Based",
    accent: "amber",
    description:
      "Biostimulants and soil amendments that improve yield, resilience, and nutrient uptake.",
  },
  {
    id: "cleaning",
    label: "Cleaning & Buffer Solutions",
    shortLabel: "Cleaning & Buffer",
    accent: "slate",
    description:
      "Industrial-grade inorganic compounds for cleaning, water treatment, and manufacturing.",
  },
];

export const chemicals: Chemical[] = [
  // ---------------------------------------------------------------------
  // 1. ORGANIC & NATURAL CHEMICALS
  // ---------------------------------------------------------------------
  {
    id: "aloe-vera-extract",
    category: "organic",
    name: "Aloe Vera Gel Extract",
    chemicalName: "Aloe barbadensis Miller Extract",
    hsCode: "130190",
    form: "Powder / Gel / Dried Extract",
    appearance: "Pale yellow to golden powder or gel",
    description:
      "A cosmetic and nutraceutical-grade extract used in moisturizers, supplements, and Ayurvedic formulations.",
    keySpecs: [
      { label: "Purity", value: "95-98%" },
      { label: "Moisture", value: "≤ 8%" },
      { label: "MOQ", value: "100 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "95-98%" },
      { label: "Moisture Content", value: "≤ 8%" },
      { label: "Heavy Metals", value: "< 10 ppm" },
      { label: "Microbial Load", value: "< 1000 CFU/g" },
      { label: "pH (5% solution)", value: "3.5-5.5" },
      { label: "Solubility", value: "Water soluble (gel), partially (powder)" },
      { label: "Shelf Life", value: "2-3 years (proper storage)" },
    ],
    applications: [
      "Cosmetics (moisturizers, anti-aging creams)",
      "Nutraceuticals & dietary supplements",
      "Pharmaceutical preparations",
      "Ayurvedic formulations",
      "Skincare products",
    ],
    moq: "100 kg",
    packaging: "25 kg kraft bags with inner HDPE lining",
    leadTime: "7-10 days",
    certifications: ["ISO 9001", "ISO 22000", "Organic Certified (available)"],
    exportMarkets: ["USA", "Europe", "UAE", "Australia", "Japan"],
  },
  {
    id: "neem-oil-extract",
    category: "organic",
    name: "Neem Oil Extract",
    chemicalName: "Azadirachta indica Oil (Cold Pressed)",
    hsCode: "150790",
    form: "Liquid Oil",
    appearance: "Dark brown to black liquid",
    description:
      "Cold-pressed natural pesticide and cosmetic ingredient with a full range of azadirachtin grades.",
    keySpecs: [
      { label: "Purity", value: "99%+" },
      { label: "Azadirachtin", value: "300-3000 ppm" },
      { label: "MOQ", value: "500 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "99%+ pure, cold pressed" },
      {
        label: "Azadirachtin Content",
        value: "300-3000 ppm (varies by grade)",
      },
      { label: "Density", value: "0.920-0.930 g/cm³" },
      { label: "Viscosity", value: "40-80 cSt @ 40°C" },
      { label: "Acid Value", value: "< 5 mg KOH/g" },
      { label: "Iodine Value", value: "65-80" },
      { label: "Moisture", value: "< 0.2%" },
      { label: "Shelf Life", value: "18-24 months" },
    ],
    applications: [
      "Organic agriculture (natural pesticide)",
      "Cosmetics & hair care (scalp treatments)",
      "Skin care formulations",
      "Veterinary applications",
      "Natural insecticide for farming",
    ],
    moq: "500 kg",
    packaging: "210 L steel drums or 25 L HDPE containers",
    leadTime: "10-14 days",
    certifications: ["ISO 9001", "Organic Certified", "Fair Trade (available)"],
    exportMarkets: ["USA", "Europe", "Australia", "UAE", "New Zealand"],
  },
  {
    id: "turmeric-extract",
    category: "organic",
    name: "Turmeric Extract",
    chemicalName: "Curcuma longa L. Extract (Standardized Curcumin)",
    hsCode: "130190",
    form: "Powder",
    appearance: "Golden to orange-yellow powder",
    description:
      "Standardized curcuminoid extract for supplements, functional foods, and natural colorants.",
    keySpecs: [
      { label: "Curcumin", value: "90-98%" },
      { label: "Moisture", value: "≤ 5%" },
      { label: "MOQ", value: "100 kg" },
    ],
    fullSpecs: [
      { label: "Curcumin Content", value: "90-98%" },
      { label: "Total Curcuminoids", value: "95%+" },
      { label: "Moisture", value: "≤ 5%" },
      { label: "Particle Size", value: "80-200 mesh" },
      { label: "Heavy Metals (As)", value: "< 0.5 ppm" },
      { label: "Microbial Load", value: "< 1000 CFU/g" },
      { label: "Shelf Life", value: "2-3 years" },
    ],
    applications: [
      "Dietary supplements & nutraceuticals",
      "Functional foods & beverages",
      "Pharmaceutical formulations",
      "Cosmetics (anti-aging, anti-inflammatory)",
      "Food coloring agent",
      "Ayurvedic & traditional medicine",
    ],
    moq: "100 kg",
    packaging: "25 kg kraft paper bags with inner HDPE lining",
    leadTime: "5-8 days",
    certifications: ["ISO 9001", "GMP", "Organic Certified", "FSSAI"],
    exportMarkets: [
      "USA",
      "Europe",
      "UAE",
      "Japan",
      "South Korea",
      "Australia",
    ],
  },
  {
    id: "essential-oils",
    category: "organic",
    name: "Essential Oils",
    chemicalName: "Lavandula angustifolia / Eucalyptus / Mentha piperita",
    hsCode: "330720",
    form: "Essential Oil (100% pure)",
    appearance: "Clear to pale yellow liquid",
    description:
      "Lavender, eucalyptus, and peppermint oils, 100% pure with no dilution, for aromatherapy, cosmetics, and flavoring.",
    keySpecs: [
      { label: "Purity", value: "100%, undiluted" },
      { label: "Grades", value: "Lavender, Eucalyptus, Peppermint" },
      { label: "MOQ", value: "50 kg" },
    ],
    fullSpecs: [
      {
        label: "Lavender — Main Constituents",
        value: "Linalool (25-45%), Linalyl acetate (25-45%)",
      },
      { label: "Lavender — Flash Point", value: "70-80°C" },
      {
        label: "Eucalyptus — Main Constituents",
        value: "1,8-Cineole (70-90%), α-Pinene, Limonene",
      },
      {
        label: "Peppermint — Main Constituents",
        value: "Menthol (30-55%), Menthone, Menthyl acetate",
      },
      { label: "Shelf Life", value: "12-18 months, cool dark storage" },
    ],
    applications: [
      "Aromatherapy",
      "Cosmetics & perfumery",
      "Soaps & candles",
      "Respiratory care & inhalation products",
      "Flavoring (beverages, confectionery, oral care)",
    ],
    moq: "50 kg",
    packaging: "1 L, 5 L, 10 L glass bottles with tamper seals",
    leadTime: "7-10 days",
    certifications: ["ISO 9001"],
    exportMarkets: ["USA", "Europe", "UAE", "Australia"],
  },
  {
    id: "castor-oil",
    category: "organic",
    name: "Castor Oil",
    chemicalName: "Ricinus communis Oil (Cold Pressed, Premium Grade)",
    hsCode: "150760",
    form: "Liquid Oil",
    appearance: "Pale yellow to amber liquid",
    description:
      "Cold-pressed, extra-virgin castor oil for pharmaceuticals, cosmetics, lubricants, and biodiesel feedstock.",
    keySpecs: [
      { label: "Purity", value: "99%+" },
      { label: "Grade", value: "Premium / Extra Virgin" },
      { label: "MOQ", value: "1 MT" },
    ],
    fullSpecs: [
      { label: "Density", value: "0.960-0.970 g/cm³ @ 25°C" },
      { label: "Viscosity", value: "680-800 cSt @ 40°C" },
      { label: "Flash Point", value: "229-232°C" },
      { label: "Acid Value", value: "< 2 mg KOH/g" },
      { label: "Iodine Value", value: "82-95" },
      { label: "Saponification Value", value: "175-185" },
      { label: "Moisture Content", value: "< 0.1%" },
      { label: "Shelf Life", value: "18-24 months" },
    ],
    applications: [
      "Pharmaceutical industry (laxatives, skin treatments)",
      "Cosmetics (moisturizers, massage oils, hair care)",
      "Lubricants & hydraulic fluids",
      "Biodiesel feedstock",
      "Industrial paints & coatings",
      "Leather treatment",
    ],
    moq: "1 MT (1000 kg)",
    packaging: "210 L steel drums, IBC containers (1000 L), bulk tankers",
    leadTime: "10-15 days",
    certifications: ["ISO 9001", "ISO 22000", "Organic Certified"],
    exportMarkets: [
      "UAE",
      "Saudi Arabia",
      "Egypt",
      "South Africa",
      "Malaysia",
      "USA",
      "Europe",
    ],
  },

  // ---------------------------------------------------------------------
  // 2. FOOD-GRADE & COSMETIC CHEMICALS
  // ---------------------------------------------------------------------
  {
    id: "citric-acid",
    category: "food-cosmetic",
    name: "Citric Acid (Monohydrate)",
    chemicalName: "2-Hydroxypropane-1,2,3-tricarboxylic acid Monohydrate",
    hsCode: "292224",
    form: "Powder (crystalline)",
    appearance: "White crystalline powder",
    description:
      "FDA-approved, GRAS-status acidulant for beverages, food preservation, dairy, and industrial cleaning.",
    keySpecs: [
      { label: "Purity", value: "99.5% min" },
      { label: "Moisture", value: "≤ 0.5%" },
      { label: "MOQ", value: "500 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "99.5% minimum" },
      { label: "Moisture Content", value: "≤ 0.5%" },
      { label: "Heavy Metals (Pb)", value: "< 1 ppm" },
      { label: "pH (1% solution)", value: "2.1-3.5" },
      { label: "Melting Point", value: "153°C (with decomposition)" },
      { label: "Microbial Load", value: "< 100 CFU/g" },
      { label: "Shelf Life", value: "3+ years (dry storage)" },
    ],
    applications: [
      "Soft drinks & beverages",
      "Food preservation (jams, pickles, sauces)",
      "Dairy products & cheese making",
      "Cleaning agents & industrial use",
      "Pharmaceuticals & medical devices",
      "Cosmetics & personal care",
    ],
    moq: "500 kg",
    packaging:
      "25 kg kraft bags with moisture-resistant lining (50 bags/pallet)",
    leadTime: "7-10 days",
    certifications: [
      "FSSAI",
      "FDA",
      "ISO 9001",
      "ISO 22000",
      "Kosher",
      "Halal",
    ],
    exportMarkets: [
      "UAE",
      "Saudi Arabia",
      "Malaysia",
      "Singapore",
      "USA",
      "Europe",
    ],
  },
  {
    id: "sodium-benzoate",
    category: "food-cosmetic",
    name: "Sodium Benzoate",
    chemicalName: "Benzoic acid, sodium salt",
    hsCode: "292152",
    form: "Powder",
    appearance: "White crystalline powder",
    description:
      "Food-grade preservative for beverages, jams, and pickles, also used in pharmaceuticals and cosmetics.",
    keySpecs: [
      { label: "Purity", value: "99.8% min" },
      { label: "Status", value: "FDA / FSSAI / GRAS" },
      { label: "MOQ", value: "250 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "99.8% minimum" },
      { label: "Moisture", value: "≤ 0.5%" },
      { label: "Heavy Metals (Pb)", value: "< 2 ppm" },
      { label: "pH (10% solution)", value: "6.5-8.5" },
      { label: "Solubility", value: "62.5% soluble in water @ 20°C" },
      { label: "Shelf Life", value: "5+ years" },
    ],
    applications: [
      "Food preservative (beverages, jams, pickles)",
      "Pharmaceutical preparations",
      "Cosmetics & personal care",
      "Tobacco products",
      "Industrial applications",
    ],
    moq: "250 kg",
    packaging: "25 kg bags (40 bags/pallet)",
    leadTime: "5-7 days",
    certifications: ["FSSAI", "FDA", "ISO 9001", "Kosher", "Halal"],
    exportMarkets: ["UAE", "Saudi Arabia", "Malaysia", "Singapore", "USA"],
  },
  {
    id: "beeswax-pellets",
    category: "food-cosmetic",
    name: "Beeswax Pellets",
    chemicalName: "Beeswax (natural)",
    hsCode: "151590",
    form: "Pellets / Granules",
    appearance: "Golden yellow to amber granules",
    description:
      "Certified natural beeswax with no bleaching or additives, for cosmetics, candles, and coatings.",
    keySpecs: [
      { label: "Purity", value: "99%+ natural" },
      { label: "Melting Point", value: "62-65°C" },
      { label: "MOQ", value: "100 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "99%+ pure natural beeswax" },
      { label: "Melting Point", value: "62-65°C" },
      { label: "Acid Value", value: "17-24 mg KOH/g" },
      { label: "Saponification Value", value: "85-100 mg KOH/g" },
      { label: "Residual Pesticides", value: "< 0.01 ppm" },
      { label: "Shelf Life", value: "Indefinite (proper storage)" },
    ],
    applications: [
      "Cosmetics (lip balms, salves, creams)",
      "Candle making",
      "Furniture polish & wood finishing",
      "Pharmaceuticals & medical preparations",
      "Food & beverage processing aids",
    ],
    moq: "100 kg",
    packaging: "25 kg boxes with food-grade bags",
    leadTime: "10-15 days (may vary with season)",
    certifications: [
      "ISO 9001",
      "Organic Certified",
      "Natural Product Certified",
    ],
    exportMarkets: ["Europe", "USA", "UAE", "Japan", "Australia"],
  },
  {
    id: "glycerin",
    category: "food-cosmetic",
    name: "Glycerin (USP/BP Grade)",
    chemicalName: "Glycerol / 1,2,3-Propanetriol",
    hsCode: "150610",
    form: "Liquid",
    appearance: "Clear, colorless, viscous liquid",
    description:
      "Pharmaceutical-grade glycerin compliant with USP/BP monographs, for cosmetics, pharma, and food industries.",
    keySpecs: [
      { label: "Purity", value: "99.8% min" },
      { label: "Grade", value: "USP/BP Pharmaceutical" },
      { label: "MOQ", value: "500 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "99.8% minimum" },
      { label: "Specific Gravity", value: "1.260-1.265 @ 25°C" },
      { label: "Viscosity", value: "1400-1600 cP @ 20°C" },
      { label: "Moisture", value: "≤ 0.5% (Karl Fischer)" },
      { label: "Flash Point", value: "160-177°C" },
      { label: "Heavy Metals", value: "< 10 ppm" },
      { label: "Shelf Life", value: "3+ years" },
    ],
    applications: [
      "Cosmetics (moisturizers, serums, creams)",
      "Pharmaceuticals (syrups, elixirs, suppositories)",
      "Personal care (toothpaste, mouthwash)",
      "Food industry (humectant, sweetener)",
      "Industrial lubricants",
    ],
    moq: "500 kg",
    packaging: "25 L or 210 L steel drums, IBC containers (1000 L)",
    leadTime: "7-10 days",
    certifications: ["USP/BP", "ISO 9001", "GMP", "FDA approved"],
    exportMarkets: [
      "USA",
      "Europe",
      "UAE",
      "Singapore",
      "Japan",
      "South Korea",
    ],
  },
  {
    id: "stearic-acid",
    category: "food-cosmetic",
    name: "Stearic Acid",
    chemicalName: "Octadecanoic acid (Cosmetic Grade)",
    hsCode: "382459",
    form: "Pellets / Flakes",
    appearance: "White to off-white pellets",
    description:
      "Cosmetic-grade fatty acid used in creams, soaps, candles, and rubber processing.",
    keySpecs: [
      { label: "Purity", value: "95-99%" },
      { label: "Melting Point", value: "69-70°C" },
      { label: "MOQ", value: "500 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "95-99% (as stearic acid)" },
      { label: "Saponification Value", value: "200-210 mg KOH/g" },
      { label: "Acid Value", value: "195-210 mg KOH/g" },
      { label: "Melting Point", value: "69-70°C" },
      { label: "Unsaponifiable Matter", value: "< 1%" },
      { label: "Shelf Life", value: "2+ years" },
    ],
    applications: [
      "Cosmetics (creams, lotions, makeup)",
      "Candle manufacturing",
      "Soap & detergent production",
      "Lubricants & metalworking fluids",
      "Rubber processing",
    ],
    moq: "500 kg",
    packaging: "25 kg bags (40 bags/pallet)",
    leadTime: "5-7 days",
    certifications: ["ISO 9001", "Cosmetic Grade certified"],
    exportMarkets: ["UAE", "Europe", "USA", "Southeast Asia"],
  },

  // ---------------------------------------------------------------------
  // 3. AGRO-BASED CHEMICALS
  // ---------------------------------------------------------------------
  {
    id: "seaweed-extract",
    category: "agro",
    name: "Seaweed Extract Powder",
    chemicalName: "Brown/Red Seaweed Extract (various species)",
    hsCode: "121291",
    form: "Powder",
    appearance: "Brown to dark brown powder",
    description:
      "A biostimulant that improves crop growth, stress resistance, and soil conditioning.",
    keySpecs: [
      { label: "Organic Matter", value: "95%+" },
      { label: "Potassium (K₂O)", value: "8-12%" },
      { label: "MOQ", value: "500 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "95%+ organic matter" },
      { label: "Potassium (K₂O)", value: "8-12%" },
      { label: "Alginic Acid", value: "10-25%" },
      { label: "Mannitol", value: "2-8%" },
      { label: "Amino Acids", value: "1-3%" },
      { label: "Shelf Life", value: "18-24 months" },
    ],
    applications: [
      "Agriculture (biostimulant, crop growth promoter)",
      "Horticulture (plant health enhancement)",
      "Soil conditioning",
      "Plant disease resistance",
      "Stress mitigation (drought, frost)",
    ],
    moq: "500 kg",
    packaging: "25 kg bags",
    leadTime: "10-14 days",
    certifications: ["ISO 9001", "Organic Certified (available)"],
    exportMarkets: ["Europe", "USA", "UAE", "Australia"],
  },
  {
    id: "humic-acid",
    category: "agro",
    name: "Humic Acid (Potassium Humate)",
    chemicalName: "Potassium Humate / Humic Acid Potassium Salt",
    hsCode: "121290",
    form: "Powder / Granules",
    appearance: "Black to dark brown powder",
    description:
      "Soil amendment that improves nutrient availability, water retention, and microbial activity.",
    keySpecs: [
      { label: "Humic Acid", value: "50-70%" },
      { label: "Potassium (K)", value: "8-10%" },
      { label: "MOQ", value: "500 kg" },
    ],
    fullSpecs: [
      { label: "Humic Acid Content", value: "50-70%" },
      { label: "Potassium (K)", value: "8-10%" },
      { label: "Solubility (water)", value: "90-98%" },
      { label: "pH (5% solution)", value: "8.5-9.5" },
      { label: "Shelf Life", value: "2+ years" },
    ],
    applications: [
      "Soil amendment & conditioning",
      "Nutrient availability enhancement",
      "Water retention improvement",
      "Crop productivity boost",
      "Chelation of minerals",
      "Organic farming",
    ],
    moq: "500 kg",
    packaging: "25 kg bags or 1 MT bags",
    leadTime: "7-10 days",
    certifications: ["ISO 9001", "Organic Certified"],
    exportMarkets: ["Europe", "UAE", "Australia", "India"],
  },
  {
    id: "amino-acid-formulation",
    category: "agro",
    name: "Amino Acid Formulation",
    chemicalName: "Blend of essential L-amino acids (plant-derived)",
    hsCode: "292990",
    form: "Powder",
    appearance: "Light tan to brown powder",
    description:
      "Plant-derived amino acid blend used as a biofertilizer and stress-mitigation input.",
    keySpecs: [
      { label: "Total Amino Acids", value: "80%+" },
      { label: "Nitrogen (N)", value: "12-15%" },
      { label: "MOQ", value: "100 kg" },
    ],
    fullSpecs: [
      { label: "Total Amino Acids", value: "80%+" },
      { label: "Free Amino Acids", value: "60-75%" },
      { label: "Nitrogen (N)", value: "12-15%" },
      { label: "Solubility", value: "95%+ in water" },
      {
        label: "Major Amino Acids",
        value: "Glutamic acid, Aspartic acid, Alanine, others",
      },
      { label: "Shelf Life", value: "2+ years" },
    ],
    applications: [
      "Biofertilizers & plant growth promoters",
      "Stress mitigation (heat, drought, cold)",
      "Flower & fruit development",
      "Root development",
      "Photosynthesis enhancement",
      "Post-harvest crop care",
    ],
    moq: "100 kg",
    packaging: "25 kg bags",
    leadTime: "7-10 days",
    certifications: ["ISO 9001", "Organic Certified (available)"],
    exportMarkets: ["UAE", "India", "Southeast Asia", "Europe"],
  },
  {
    id: "calcium-nitrate",
    category: "agro",
    name: "Calcium Nitrate",
    chemicalName: "Calcium Nitrate Tetrahydrate",
    hsCode: "312599",
    form: "Granules / Powder",
    appearance: "White to off-white granules",
    description:
      "Balanced calcium-nitrogen fertilizer for greenhouse, hydroponic, and foliar applications.",
    keySpecs: [
      { label: "Nitrogen (N)", value: "15.5-16.5%" },
      { label: "Calcium (Ca)", value: "26-27%" },
      { label: "MOQ", value: "500 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "99%+" },
      { label: "Nitrogen (N)", value: "15.5-16.5%" },
      { label: "Calcium (Ca)", value: "26-27%" },
      { label: "Solubility", value: "Fully soluble in water" },
      { label: "Shelf Life", value: "2+ years" },
    ],
    applications: [
      "Fertilizer (balanced nutrient source)",
      "Calcium deficiency correction",
      "Fruit & vegetable quality improvement",
      "Blossom end rot prevention",
      "Greenhouse & hydroponics cultivation",
    ],
    moq: "500 kg",
    packaging: "25 kg bags (40 bags/pallet)",
    leadTime: "5-7 days",
    certifications: ["ISO 9001"],
    exportMarkets: ["UAE", "Saudi Arabia", "India", "Europe", "Southeast Asia"],
  },

  // ---------------------------------------------------------------------
  // 4. CLEANING & BUFFER SOLUTIONS
  // ---------------------------------------------------------------------
  {
    id: "sodium-carbonate",
    category: "cleaning",
    name: "Sodium Carbonate (Soda Ash)",
    chemicalName: "Sodium Carbonate / Washing Soda",
    hsCode: "283620",
    form: "Powder / Granules",
    appearance: "White powder/granules",
    description:
      "Industrial soda ash for cleaning, glass manufacturing, water treatment, and textile processing.",
    keySpecs: [
      { label: "Purity", value: "98-99%" },
      { label: "pH (5% solution)", value: "11.5-12.5" },
      { label: "MOQ", value: "500 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "98-99% (Na₂CO₃)" },
      { label: "Moisture", value: "≤ 0.5%" },
      { label: "Sodium Chloride (NaCl)", value: "≤ 0.5%" },
      { label: "Particle Size", value: "100-200 mesh" },
      { label: "Shelf Life", value: "Indefinite (dry storage)" },
    ],
    applications: [
      "Cleaning & detergents",
      "Glass manufacturing",
      "Chemical synthesis",
      "Water treatment",
      "Textile processing",
      "Paper & pulp industry",
    ],
    moq: "500 kg",
    packaging: "25 kg bags",
    leadTime: "5-7 days",
    certifications: ["ISO 9001"],
    exportMarkets: ["UAE", "India", "Southeast Asia", "Europe"],
  },
  {
    id: "potassium-chloride",
    category: "cleaning",
    name: "Potassium Chloride",
    chemicalName: "Potassium Chloride / Muriate of Potash",
    hsCode: "310420",
    form: "Granules / Powder",
    appearance: "White to off-white crystals",
    description:
      "High-purity muriate of potash for fertilizer, de-icing, food processing, and chemical synthesis.",
    keySpecs: [
      { label: "Purity", value: "99%+ KCl" },
      { label: "Potassium (K)", value: "52-54%" },
      { label: "MOQ", value: "500 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "99%+ (KCl)" },
      { label: "Potassium (K)", value: "52-54%" },
      { label: "Chloride (Cl)", value: "46-48%" },
      { label: "Solubility", value: "Fully soluble in water" },
      { label: "Shelf Life", value: "2+ years" },
    ],
    applications: [
      "Fertilizer (major potassium source)",
      "De-icing agent",
      "Food processing (seasoning, preservation)",
      "Pharmaceutical preparations",
      "Oil drilling applications",
    ],
    moq: "500 kg",
    packaging: "50 kg bags",
    leadTime: "7-10 days",
    certifications: ["ISO 9001"],
    exportMarkets: ["UAE", "Saudi Arabia", "India", "Southeast Asia"],
  },
  {
    id: "borax",
    category: "cleaning",
    name: "Borax",
    chemicalName: "Sodium Tetraborate Decahydrate",
    hsCode: "284100",
    form: "Powder / Granules / Crystals",
    appearance: "White powder or crystals",
    description:
      "Low-toxicity borax for agriculture, cleaning, glass and ceramics, and organic pest control.",
    keySpecs: [
      { label: "Purity", value: "99%+" },
      { label: "Boron (B)", value: "11.3-11.5%" },
      { label: "MOQ", value: "500 kg" },
    ],
    fullSpecs: [
      { label: "Purity", value: "99%+ (as Na₂B₄O₇·10H₂O)" },
      { label: "Boron (B)", value: "11.3-11.5%" },
      { label: "pH (5% solution)", value: "9.0-9.5" },
      { label: "Low Toxicity", value: "LD50 (oral, rat) 2660-3250 mg/kg" },
      { label: "Shelf Life", value: "3+ years" },
    ],
    applications: [
      "Agriculture (micronutrient, trace element)",
      "Cleaning products & detergents",
      "Glass & ceramics manufacturing",
      "Cosmetics & personal care",
      "Fungicide & pest control (organic farming)",
    ],
    moq: "500 kg",
    packaging: "25 kg bags",
    leadTime: "7-10 days",
    certifications: ["ISO 9001", "Organic Certified (available)"],
    exportMarkets: ["UAE", "India", "Europe", "USA", "Southeast Asia"],
  },
];

export const complianceBadges = [
  "REACH (Europe)",
  "ISO 9001:2015",
  "ISO 22000:2018",
  "FDA Listed (USA)",
  "FSSAI Registered",
  "CHEMEXCIL Member",
  "APEDA Registered",
];
