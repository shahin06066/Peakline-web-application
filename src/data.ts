export const PHONE = "(303) 555-0194";
export const PHONE_HREF = "tel:+13035550194";
export const EMAIL = "estimates@peaklineroofingdenver.com";
export const ADDRESS = "1450 Blake St, Suite 210, Denver, CO 80202";

export const IMG = {
  hero: "https://images.pexels.com/photos/34304714/pexels-photo-34304714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  storm:
    "https://images.pexels.com/photos/30683185/pexels-photo-30683185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  about:
    "https://images.pexels.com/photos/30161234/pexels-photo-30161234.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  crew: "https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

export const SERVICE_OPTIONS = [
  "Free Roof Inspection",
  "Storm/Hail Damage",
  "Roof Replacement",
  "Roof Repair",
  "Exterior Remodeling (Siding & Gutters)",
  "Other",
];

export type Service = {
  id: string;
  num: string;
  title: string;
  blurb: string;
  details: string;
  tags: string[];
  cta: string;
  option: string; // matching dropdown value
  img: string;
  alt: string;
};

export const SERVICES: Service[] = [
  {
    id: "replacement",
    num: "01",
    title: "Full Roof Replacement",
    blurb:
      "High-durability architectural shingles, metal, and impact-resistant roofing systems tailored for Denver homes.",
    details:
      "When repairs aren't enough, we install complete, high-performance roofing systems designed for Colorado's extreme weather swings — and help you choose the right style and impact rating for your home and budget.",
    tags: ["Class 4 Impact Shingles", "Architectural Asphalt", "Standing Seam Metal", "Stone-Coated Steel"],
    cta: "Request a Replacement Estimate",
    option: "Roof Replacement",
    img: "https://images.pexels.com/photos/33404981/pexels-photo-33404981.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Crew replacing a full residential roof",
  },
  {
    id: "storm",
    num: "02",
    title: "Storm & Hail Damage Restoration",
    blurb:
      "Rapid emergency tarping, thorough hail assessments, and full insurance claim assistance.",
    details:
      "Hit by a Front Range storm? We document every shingle, soft metal, vent, and gutter with photo and video proof, then meet your adjuster on-site so nothing is overlooked or under-scoped.",
    tags: ["Emergency Tarping", "Hail Assessments", "Insurance Claim Help", "Adjuster Meetings"],
    cta: "Report Storm Damage",
    option: "Storm/Hail Damage",
    img: "https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Roofer inspecting and repairing storm-damaged shingles",
  },
  {
    id: "repair",
    num: "03",
    title: "Roof Repairs & Maintenance",
    blurb:
      "Leak detection, flashing repairs, and preventative tune-ups to extend the life of your roof.",
    details:
      "Missing shingles, damaged flashing, or ceiling water stains need fast attention before minor issues turn into structural damage. We pinpoint the exact source of the leak and repair it for good.",
    tags: ["Leak Detection", "Chimney & Skylight Flashing", "Ridge Vent Repairs", "Pipe Boot Sealing"],
    cta: "Schedule a Repair Inspection",
    option: "Roof Repair",
    img: "https://images.pexels.com/photos/37677394/pexels-photo-37677394.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Roofer sealing flashing details on a residential roof",
  },
  {
    id: "exterior",
    num: "04",
    title: "Exterior Remodeling",
    blurb:
      "Siding replacement, seamless gutters, and exterior upgrades that boost curb appeal and energy efficiency.",
    details:
      "Upgrade your home's protection and curb appeal with weather-tight siding and custom-fit drainage systems, installed by the same crews that roof it.",
    tags: ["James Hardie® Fiber Cement", "Vinyl & Engineered Wood", "Seamless Aluminum Gutters", "Gutter Guards"],
    cta: "Get an Exterior Quote",
    option: "Exterior Remodeling (Siding & Gutters)",
    img: "https://images.pexels.com/photos/33404080/pexels-photo-33404080.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Exterior remodel with new siding and roofing on a brick house",
  },
];

export const TRUST_BADGES = [
  { id: "licensed", label: "Licensed & Insured in Colorado" },
  { id: "stars", label: "5-Star Google Rated" },
  { id: "storm", label: "Storm Damage Specialists" },
  { id: "warranty", label: "Workmanship Warranty" },
];

export const WHY_POINTS = [
  {
    num: "01",
    icon: "map",
    title: "Local Denver Expertise",
    text: "We understand Front Range hailstorms, heavy snow loads, and intense UV exposure — because we live under the same sky.",
  },
  {
    num: "02",
    icon: "camera",
    title: "Honest, No-Pressure Inspections",
    text: "Clear photo documentation of your roof's condition before you spend a dime. If you don't need work, we'll tell you.",
  },
  {
    num: "03",
    icon: "broom",
    title: "Clean & Respectful Crews",
    text: "Magnetic nail sweeps and daily site cleanup so your yard stays spotless — no stray nails in tires or paws.",
  },
];

export const APART_POINTS = [
  {
    icon: "badge",
    title: "Owner-Led Accountability",
    text: "Every project is overseen with strict quality checks from the initial inspection to the final walkthrough.",
  },
  {
    icon: "hail",
    title: "Built for Colorado Weather",
    text: "We specialize in Class 4 impact-resistant materials engineered to stand up to Denver hail and high winds.",
  },
  {
    icon: "receipt",
    title: "Transparent Pricing",
    text: "Detailed, itemized quotes with zero hidden fees or surprise add-ons.",
  },
];

export const STORM_STEPS = [
  {
    num: "01",
    icon: "scope",
    title: "Free Comprehensive Inspection",
    text: "We inspect shingles, soft metals, vents, and gutters with clear photo and video proof — no obligation, no pressure.",
  },
  {
    num: "02",
    icon: "report",
    title: "Detailed Damage Report",
    text: "If we find legitimate storm damage, we compile an itemized report so you know exactly where your roof stands.",
  },
  {
    num: "03",
    icon: "handshake",
    title: "Insurance Adjuster Meeting",
    text: "We meet your insurance adjuster on-site to ensure no storm-related damage is overlooked or under-scoped.",
  },
  {
    num: "04",
    icon: "hammer",
    title: "Expert Restoration & Cleanup",
    text: "Once approved, our crew completes your roof restoration quickly with full magnetic nail cleanup.",
  },
];

export type Project = {
  city: string;
  place: string;
  caption: string;
  cat: "Roof Replacements" | "Storm & Hail Restorations" | "Siding & Gutters";
  img: string;
};

export const PROJECTS: Project[] = [
  {
    city: "Wash Park, Denver",
    place: "Denver",
    caption: "Full Class 4 impact-resistant shingle replacement after severe hail damage.",
    cat: "Storm & Hail Restorations",
    img: "https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    city: "Lakewood, CO",
    place: "Lakewood",
    caption: "Architectural shingle upgrade with new seamless black aluminum gutters.",
    cat: "Roof Replacements",
    img: "https://images.pexels.com/photos/37677394/pexels-photo-37677394.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    city: "Highlands Ranch, CO",
    place: "Highlands Ranch",
    caption: "Complete exterior transformation featuring James Hardie® siding and stone-coated steel roofing.",
    cat: "Siding & Gutters",
    img: "https://images.pexels.com/photos/33404080/pexels-photo-33404080.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    city: "Arvada, CO",
    place: "Arvada",
    caption: "Standing seam metal roof installation built for heavy Front Range snow loads.",
    cat: "Roof Replacements",
    img: "https://images.pexels.com/photos/33404981/pexels-photo-33404981.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    city: "Littleton, CO",
    place: "Littleton",
    caption: "Storm damage roof restoration and skylight flashing replacement completed in one day.",
    cat: "Storm & Hail Restorations",
    img: "https://images.pexels.com/photos/33501308/pexels-photo-33501308.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    city: "Aurora, CO",
    place: "Aurora",
    caption: "Full roof replacement and ridge ventilation upgrade for improved summer energy efficiency.",
    cat: "Roof Replacements",
    img: "https://images.pexels.com/photos/34304714/pexels-photo-34304714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
];

export const GALLERY_FILTERS = [
  "All Projects",
  "Roof Replacements",
  "Storm & Hail Restorations",
  "Siding & Gutters",
] as const;

export const REVIEWS = [
  {
    quote:
      "PeakLine handled our hail damage claim from start to finish and finished the entire roof in one day. Super clean crew!",
    name: "Sarah M.",
    city: "Denver, CO",
    initials: "SM",
    tint: "#f05a0e",
  },
  {
    quote: "Honest pricing and zero pushy sales tactics. They fixed a leak two other companies couldn't find.",
    name: "Mark T.",
    city: "Lakewood, CO",
    initials: "MT",
    tint: "#5f7c8b",
  },
  {
    quote: "Best contractor experience we've had. Fast communication and the new roof and gutters look sharp.",
    name: "David R.",
    city: "Aurora, CO",
    initials: "DR",
    tint: "#1b3542",
  },
];

export const FAQS = [
  {
    q: "Do you help with insurance claims for hail and storm damage?",
    a: "Yes — it's one of our specialties. We document all damage with photos and video, prepare an itemized report, and meet your insurance adjuster on the roof so no damage is overlooked or under-scoped. You deal with one point of contact from inspection to final walkthrough.",
  },
  {
    q: "How long does a full roof replacement take?",
    a: "Most Denver-area homes are completed in a single day, two at most for large or steep roofs. We confirm the schedule in writing before tear-off, and the crew doesn't leave until the magnetic nail sweep is done.",
  },
  {
    q: "What's included in the free roof inspection?",
    a: "A full assessment of shingles, flashing, vents, gutters, and soft metals — plus clear photo documentation of everything we find. You get an honest read on your roof's condition whether or not you hire us. No pressure, no obligation.",
  },
  {
    q: "Are you licensed and insured in Colorado?",
    a: "Fully. PeakLine Roofing is licensed and insured in the State of Colorado, and every project is backed by our workmanship warranty on top of the manufacturer warranties on your materials.",
  },
  {
    q: "How do I know if hail actually damaged my roof?",
    a: "Hail damage is often invisible from the ground. Look for dented gutters, granules in the downspouts, or bruised shingles after a Front Range storm — but the only sure way is a close-up inspection. That's exactly what our free inspection is for.",
  },
];

export const AREAS = [
  "Denver",
  "Lakewood",
  "Aurora",
  "Littleton",
  "Arvada",
  "Westminster",
  "Thornton",
  "Centennial",
  "Highlands Ranch",
];

export const STATS = [
  { value: 1200, suffix: "+", decimals: 0, label: "Roofs Completed", sub: "Across the Denver Metro" },
  { value: 4.9, suffix: "★", decimals: 1, label: "Google Rating", sub: "From 180+ verified reviews" },
  { value: 25, suffix: "-yr", decimals: 0, label: "Workmanship Warranty", sub: "On every full replacement" },
  { value: 24, suffix: "/7", decimals: 0, label: "Emergency Response", sub: "Storm tarping, day or night" },
];
