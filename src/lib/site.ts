import type { IconName } from "../components/Icon";

export const business = {
  name: "PeakLine Roofing",
  tagline: "Residential Roofing & Exterior Remodeling",
  phoneDisplay: "(303) 555-0194",
  phoneHref: "tel:+13035550194",
  email: "estimates@peaklineroofingdenver.com",
  emailHref: "mailto:estimates@peaklineroofingdenver.com",
  addressLine1: "1450 Blake St, Suite 210",
  addressLine2: "Denver, CO 80202",
  mapsHref:
    "https://maps.google.com/?q=1450+Blake+St+Suite+210+Denver+CO+80202",
  hours: "Monday – Saturday",
  hoursTime: "7:00 AM – 6:00 PM",
  emergency: "24/7 emergency storm response",
  founded: "Denver, Colorado",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Storm Damage", to: "/storm-damage" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const trustBadges = [
  { label: "Licensed & Insured", detail: "in Colorado", icon: "shield" as IconName },
  { label: "5-Star Google Rated", detail: "by Denver homeowners", icon: "star" as IconName },
  { label: "Storm Damage Specialists", detail: "hail & wind restoration", icon: "storm" as IconName },
  { label: "Workmanship Warranty", detail: "on every install", icon: "warranty" as IconName },
];

export const stats = [
  { value: "200+", label: "Denver Metro roofs restored" },
  { value: "5.0", label: "Average Google rating" },
  { value: "10 yr", label: "Workmanship warranty" },
];

export const services = [
  {
    number: "01",
    slug: "roof-replacement",
    title: "Roof Replacement",
    short:
      "High-durability architectural shingles, metal, and impact-resistant roofing systems tailored for Denver homes.",
    icon: "roof" as IconName,
    image: "/images/project-washpark.jpg",
    imageAlt: "New charcoal architectural shingle roof on a Denver brick bungalow",
    description:
      "When repairs aren't enough, we install complete, high-performance roofing systems designed for Colorado's extreme weather swings. We help you choose the right style and impact rating for your home and budget.",
    optionsLabel: "Options we install",
    options: [
      "Class 4 impact-resistant shingles",
      "Architectural asphalt shingles",
      "Standing seam metal roofing",
      "Stone-coated steel",
    ],
    cta: "Request a Replacement Estimate",
    serviceOption: "Roof Replacement",
  },
  {
    number: "02",
    slug: "storm-restoration",
    title: "Storm & Hail Damage Restoration",
    short:
      "Rapid emergency tarping, thorough hail assessments, and full insurance claim assistance.",
    icon: "storm" as IconName,
    image: "/images/project-littleton.jpg",
    imageAlt: "Restored shingle roof with new skylight flashing in Littleton",
    description:
      "Hit by a recent Front Range storm? We document every detail and guide you through the insurance claim process from start to finish — from the first inspection to the final nail sweep.",
    optionsLabel: "What we handle",
    options: [
      "Emergency tarping & leak control",
      "Photo and video damage documentation",
      "On-site insurance adjuster meetings",
      "Full shingle, vent, and flashing restoration",
    ],
    cta: "Request a Storm Inspection",
    serviceOption: "Hail / Storm Damage",
  },
  {
    number: "03",
    slug: "roof-repairs",
    title: "Roof Repairs & Maintenance",
    short:
      "Leak detection, flashing repairs, and preventative tune-ups to extend the life of your roof.",
    icon: "tools" as IconName,
    image: "/images/crew-work.jpg",
    imageAlt: "Roofing craftsman installing architectural shingles",
    description:
      "Missing shingles, damaged flashing, or ceiling water stains need fast attention before minor issues turn into structural damage. We pinpoint the exact source of the leak and provide long-lasting repairs.",
    optionsLabel: "Common fixes",
    options: [
      "Wind-blown shingle replacement",
      "Chimney & skylight flashing",
      "Ridge vent repairs",
      "Pipe boot sealing",
    ],
    cta: "Schedule a Repair Inspection",
    serviceOption: "Roof Repair",
  },
  {
    number: "04",
    slug: "exterior-remodeling",
    title: "Exterior Remodeling",
    short:
      "Siding replacement, seamless gutters, and exterior upgrades that boost curb appeal and energy efficiency.",
    icon: "siding" as IconName,
    image: "/images/project-highlandsranch.jpg",
    imageAlt: "Complete exterior remodel with fiber cement siding and new gutters",
    description:
      "Upgrade your home's protection and curb appeal with weather-tight siding and custom-fit drainage systems. Built for Colorado sun, wind, and snow — installed by the same crew that handles your roof.",
    optionsLabel: "What we offer",
    options: [
      "James Hardie® fiber cement siding",
      "Vinyl & engineered wood siding",
      "Seamless aluminum gutters",
      "Gutter guards",
    ],
    cta: "Get an Exterior Quote",
    serviceOption: "Exterior Remodeling",
  },
];

export const whyPeakLine = [
  {
    number: "01",
    title: "Local Denver expertise",
    body: "We understand Front Range hailstorms, heavy snow loads, and intense UV exposure — because we live and work here too.",
    icon: "mapPin" as IconName,
  },
  {
    number: "02",
    title: "Honest, no-pressure inspections",
    body: "Clear photo documentation of your roof's condition before you spend a dime. No scare tactics, no surprise add-ons.",
    icon: "camera" as IconName,
  },
  {
    number: "03",
    title: "Clean & respectful crews",
    body: "Magnetic nail sweeps and daily site cleanup so your yard stays spotless. We leave your home better than we found it.",
    icon: "sparkle" as IconName,
  },
];

export const values = [
  {
    title: "Owner-led accountability",
    body: "Every project is overseen with strict quality checks from the initial inspection to the final walkthrough.",
    icon: "badge" as IconName,
  },
  {
    title: "Built for Colorado weather",
    body: "We specialize in Class 4 impact-resistant materials engineered to stand up to Denver hail and high winds.",
    icon: "storm" as IconName,
  },
  {
    title: "Transparent pricing",
    body: "Detailed, itemized quotes with zero hidden fees or surprise add-ons. You approve every line before we start.",
    icon: "receipt" as IconName,
  },
];

export const stormSteps = [
  {
    number: "01",
    title: "Free comprehensive roof inspection",
    body: "We inspect shingles, soft metals, vents, and gutters with clear photo and video proof — no obligation, no pressure.",
  },
  {
    number: "02",
    title: "Detailed damage report",
    body: "If we find legitimate storm damage, we compile an itemized report so you know exactly where your roof stands.",
  },
  {
    number: "03",
    title: "Insurance adjuster meeting",
    body: "We meet your insurance adjuster on-site to ensure no storm-related damage is overlooked or under-scoped.",
  },
  {
    number: "04",
    title: "Expert restoration & cleanup",
    body: "Once approved, our crew completes your roof restoration quickly with full magnetic nail cleanup.",
  },
];

export const reviews = [
  {
    quote:
      "PeakLine handled our hail damage claim from start to finish and finished the entire roof in one day. Super clean crew!",
    name: "Sarah M.",
    city: "Denver, CO",
    project: "Hail damage restoration",
  },
  {
    quote:
      "Honest pricing and zero pushy sales tactics. They fixed a leak two other companies couldn't find.",
    name: "Mark T.",
    city: "Lakewood, CO",
    project: "Leak detection & repair",
  },
  {
    quote:
      "Best contractor experience we've had. Fast communication and the new roof and gutters look sharp.",
    name: "David R.",
    city: "Aurora, CO",
    project: "Roof & gutter replacement",
  },
];

export type ProjectCategory =
  | "Roof Replacements"
  | "Storm & Hail Restorations"
  | "Siding & Gutters";

export const projectCategories: ("All Projects" | ProjectCategory)[] = [
  "All Projects",
  "Roof Replacements",
  "Storm & Hail Restorations",
  "Siding & Gutters",
];

export const projects: {
  id: string;
  city: string;
  category: ProjectCategory;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
  meta: string;
  featured?: boolean;
}[] = [
  {
    id: "wash-park",
    city: "Wash Park, Denver",
    category: "Roof Replacements",
    title: "Class 4 shingle replacement",
    caption:
      "Full Class 4 impact-resistant shingle replacement after severe hail damage — completed in a single day.",
    image: "/images/project-washpark.jpg",
    imageAlt: "Brick Denver bungalow with a new charcoal shingle roof",
    meta: "Class 4 impact-resistant · 1 day install",
    featured: true,
  },
  {
    id: "lakewood",
    city: "Lakewood, CO",
    category: "Siding & Gutters",
    title: "Shingle upgrade + seamless gutters",
    caption:
      "Architectural shingle upgrade with new seamless black aluminum gutters and a fully refreshed exterior.",
    image: "/images/project-lakewood.jpg",
    imageAlt: "Lakewood ranch home with new roof and black seamless gutters",
    meta: "Architectural shingles · Seamless aluminum",
  },
  {
    id: "highlands-ranch",
    city: "Highlands Ranch, CO",
    category: "Siding & Gutters",
    title: "Complete exterior transformation",
    caption:
      "Complete exterior transformation featuring James Hardie® siding and stone-coated steel roofing.",
    image: "/images/project-highlandsranch.jpg",
    imageAlt: "Highlands Ranch home with fiber cement siding and stone-coated steel roof",
    meta: "James Hardie® · Stone-coated steel",
  },
  {
    id: "arvada",
    city: "Arvada, CO",
    category: "Roof Replacements",
    title: "Standing seam metal roof",
    caption:
      "Standing seam metal roof installation built for heavy Front Range snow loads and high winds.",
    image: "/images/project-arvada.jpg",
    imageAlt: "Modern farmhouse with a dark bronze standing seam metal roof",
    meta: "Standing seam metal · Snow load rated",
  },
  {
    id: "littleton",
    city: "Littleton, CO",
    category: "Storm & Hail Restorations",
    title: "Storm restoration in one day",
    caption:
      "Storm damage roof restoration and skylight flashing replacement completed in one day with full cleanup.",
    image: "/images/project-littleton.jpg",
    imageAlt: "Restored roof with new skylight flashing on a Littleton home",
    meta: "Insurance claim · Skylight flashing",
  },
  {
    id: "aurora",
    city: "Aurora, CO",
    category: "Roof Replacements",
    title: "Roof + ridge ventilation",
    caption:
      "Full roof replacement and ridge ventilation upgrade for improved summer energy efficiency.",
    image: "/images/project-aurora.jpg",
    imageAlt: "Aurora home with a new charcoal shingle roof and ridge vent",
    meta: "Ridge ventilation · Energy efficiency",
  },
  {
    id: "thornton-hail",
    city: "Thornton, CO",
    category: "Storm & Hail Restorations",
    title: "Hail impact documentation",
    caption:
      "Granule loss, bruised shingles, and soft-metal damage documented for a full insurance-approved hail restoration.",
    image: "/images/storm-damage.jpg",
    imageAlt: "Close-up of hail-damaged asphalt shingles during an inspection",
    meta: "Hail assessment · Adjuster on-site",
  },
];

export const serviceAreas = [
  "Denver",
  "Lakewood",
  "Aurora",
  "Littleton",
  "Arvada",
  "Westminster",
  "Thornton",
  "Centennial",
  "Highlands Ranch",
  "Englewood",
  "Golden",
  "Parker",
];

export const serviceOptions = [
  "Free Roof Inspection",
  "Hail / Storm Damage",
  "Roof Replacement",
  "Roof Repair",
  "Siding / Gutters",
  "Exterior Remodeling",
  "Other",
];

export const faqs = [
  {
    q: "How long does a full roof replacement take?",
    a: "Most standard residential roofs in the Denver Metro are completed in one to two days, weather permitting. Larger or steeper roofs, metal installs, and structural repairs can take longer. We give you a realistic timeline in your written estimate — and keep you updated if Mother Nature changes the plan.",
  },
  {
    q: "Do you work with insurance claims?",
    a: "Yes. Storm restoration is a core part of what we do. We document the damage with photos and video, prepare an itemized report, and meet your adjuster on-site so nothing storm-related is overlooked. We do not inflate claims — we make sure legitimate damage is properly scoped.",
  },
  {
    q: "What is a Class 4 impact-resistant shingle?",
    a: "Class 4 shingles are rated under UL 2218 for impact resistance — the highest classification. They are engineered to better withstand hail strikes and are often recognized by insurers. We'll compare styles, ratings, and cost so you can choose what fits your home and budget.",
  },
  {
    q: "Are your inspections and estimates really free?",
    a: "Always. A comprehensive roof inspection and a written, itemized estimate cost you nothing and come with no obligation. If we find no damage, we'll tell you. If a repair makes more sense than a replacement, we'll tell you that too.",
  },
];

export const promises = [
  "Licensed & insured in Colorado",
  "Photo documentation before you commit",
  "Detailed, itemized written quotes",
  "Magnetic nail sweep on every job",
  "Daily site cleanup, no dumpster clutter",
  "Workmanship warranty on installations",
];
