export interface ServiceDetail {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: "installations" | "repairs" | "improvements";
  image: string;
  gallery: string[];
  beforeAfter?: { before: string; after: string; label?: string }[];
  benefits: string[];
  commonProblems: string[];
  whatIsIncluded: string[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceAreaDetail {
  slug: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "ceiling-fans",
    name: "Ceiling Fan Installation & Replacement",
    shortDescription:
      "Professional installation and replacement of ceiling fans for improved comfort and style.",
    longDescription:
      "A properly installed ceiling fan improves airflow, reduces energy costs, and adds a finished look to any room. Whether you are replacing an outdated fan or installing one where there was none before, Soarin Handyman Services handles the full process with care — from secure mounting to clean wiring and balanced operation.",
    category: "installations",
    image: "/images/ceiling-fans/TN.jpg",
    gallery: [
      "/images/ceiling-fans/TN.jpg",
      "/images/ceiling-fans/82160d21363a65eb5b697f31c460fb6018819729-1.jpg",
    ],
    beforeAfter: [
      {
        before: "/images/ceiling-fans/beforeafter1/before.jpg",
        after: "/images/ceiling-fans/beforeafter1/after.jpg",
        label: "Ceiling Fan Replacement — Living Room",
      },
      {
        before: "/images/ceiling-fans/beforeafter2/before.jpg",
        after: "/images/ceiling-fans/beforeafter2/after.jpg",
        label: "Ceiling Fan Installation — Bedroom",
      },
    ],
    benefits: [
      "Improved air circulation and comfort",
      "Reduced energy costs year-round",
      "Secure, wobble-free mounting",
      "Clean wiring and professional finish",
    ],
    commonProblems: [
      "Existing fan is wobbling, noisy, or failing",
      "Old electrical box is not rated for a fan",
      "Ceiling height requires a downrod extension",
      "You want to add a fan where no fixture exists",
    ],
    whatIsIncluded: [
      "Removal of existing fan or fixture",
      "Inspection of electrical box and mounting",
      "Secure installation with proper support",
      "Wiring, balancing, and remote setup",
      "Cleanup and disposal of old fixture",
    ],
    faqs: [
      {
        question: "Do I need to provide the ceiling fan?",
        answer:
          "You are welcome to purchase the fan yourself, or we can discuss sourcing it for you. Either way, we will confirm it is the right size and style for your space before installation.",
      },
      {
        question: "Can you install a fan where there is no existing wiring?",
        answer:
          "We can assess the situation and let you know what is involved. Some installations require a licensed electrician for new wiring, which we will discuss honestly before any work begins.",
      },
    ],
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    shortDescription:
      "Repair holes, cracks, dents, and damaged drywall with a clean, finished appearance.",
    longDescription:
      "Damaged drywall is one of the most common issues in Southwest Florida homes — from settling cracks and doorknob holes to water stains and textured ceilings. Soarin Handyman Services patches, blends, and finishes drywall so the repair disappears into the surrounding wall.",
    category: "repairs",
    image: "/images/drywall-repairs/TN.jpg",
    gallery: [
      "/images/drywall-repairs/drywall-patch-repair.jpg",
      "/images/drywall-repairs/drywall-room-patching.jpg",
    ],
    beforeAfter: [
      {
        before: "/images/drywall-repairs/beforeafter1/before.jpg",
        after: "/images/drywall-repairs/beforeafter1/after.jpg",
        label: "Wall Hole Patch & Finish",
      },
      {
        before: "/images/drywall-repairs/beforeafter2/before.jpg",
        after: "/images/drywall-repairs/beforeafter2/after.jpg",
        label: "Drywall Damage Repair & Texture Match",
      },
    ],
    benefits: [
      "Seamless patches that blend with surrounding walls",
      "Texture matching for popcorn, knockdown, or smooth ceilings",
      "Reinforcement of cracked or stressed areas",
      "Ready-to-paint finish",
    ],
    commonProblems: [
      "Holes from doorknobs, anchors, or accidents",
      "Cracks from settling or temperature changes",
      "Water damage stains or soft spots",
      "Damaged texture on ceilings or walls",
    ],
    whatIsIncluded: [
      "Assessment of damage and underlying causes",
      "Cutting, patching, and securing new drywall",
      "Mudding, taping, and sanding for a smooth finish",
      "Texture matching where applicable",
      "Cleanup of dust and debris",
    ],
    faqs: [
      {
        question: "Will the repair be visible after painting?",
        answer:
          "Our goal is to make the repair disappear. We blend patches carefully and match existing texture. A fresh coat of paint over the area will help it integrate fully.",
      },
      {
        question: "Do you paint after repairing the drywall?",
        answer:
          "We can paint the repaired area if you provide the paint. Full room painting can also be discussed as part of the project.",
      },
    ],
  },
  {
    slug: "hurricane-shutter-repair",
    name: "Hurricane Shutter Repair",
    shortDescription:
      "Professional hurricane shutter repair, track alignment, panel replacement, and storm readiness.",
    longDescription:
      "Living in Southwest Florida means hurricane shutters are essential for protecting your home. Soarin Handyman Services repairs stuck or damaged storm shutters, lubricates tracks, replaces worn mounting hardware, and aligns panels so your storm protection is ready when you need it.",
    category: "repairs",
    image: "/images/hurricane-shutter-repair/TN.jpg",
    gallery: [
      "/images/hurricane-shutter-repair/TN.jpg",
      "/images/hurricane-shutter-repair/d0578b9601f5e5dce3d6a8fe3fa46c56c088db62-1.jpg",
      "/images/hurricane-shutter-repair/22e60ccd6ad0873fd0194a3f1ac387801282056b-1.jpg",
      "/images/hurricane-shutter-repair/7cd36c60b02c058e641df5ff0b9d99923f1170e4-1.jpg",
    ],
    beforeAfter: [
      {
        before: "/images/hurricane-shutter-repair/beforeafter/before.jpg",
        after: "/images/hurricane-shutter-repair/beforeafter/after.jpg",
        label: "Hurricane Shutter Track Repair & Alignment",
      },
    ],
    benefits: [
      "Ensures reliable storm protection when severe weather approaches",
      "Smooth motorized or manual track operation",
      "Prevents corrosion, lock-ups, and jammed panels",
      "Extends lifespan of existing accordion, roll-down, or panel shutters",
    ],
    commonProblems: [
      "Shutters are jammed, stuck, or hard to open and close",
      "Bent tracks or rusted mounting hardware",
      "Missing panel lock pins or broken housing cranks",
      "Storm panels not seating properly in guide channels",
    ],
    whatIsIncluded: [
      "Full system inspection of tracks, panels, and locks",
      "Track cleaning, debris removal, and high-performance lubrication",
      "Hardware tightening and bent track alignment",
      "Replacement of broken pins, locks, or worn fasteners",
      "Full test opening and closing operation",
    ],
    faqs: [
      {
        question: "What types of hurricane shutters do you service?",
        answer:
          "We repair accordion shutters, roll-down shutters, bahama/colonial style shutters, and storm panel track systems.",
      },
      {
        question: "Can you un-jam shutters that haven't been operated in years?",
        answer:
          "Yes. We clean out accumulated salt air corrosion, dust, and debris, realign tracks, and replace rusted hardware to restore smooth operation.",
      },
    ],
  },
  {
    slug: "outdoor-miscellaneous-work",
    name: "Outdoor Miscellaneous Work",
    shortDescription:
      "Fence repairs, deck maintenance, outdoor fixture mounting, and exterior handyman solutions.",
    longDescription:
      "Outdoor areas in Southwest Florida require regular upkeep to withstand sun, heat, and coastal air. Soarin Handyman Services handles a wide range of outdoor tasks — from fence panel repairs and gate adjustments to exterior wall mounting, soffit patch-ups, and outdoor fixture installations.",
    category: "improvements",
    image: "/images/outdoor-miscellaneous-work/TN.jpg",
    gallery: [
      "/images/outdoor-miscellaneous-work/984027b5d6755a58e07852bfb0408ac960f364f1-1.jpg",
      "/images/outdoor-miscellaneous-work/982d766551a353ab452ccd3ec604878432db3843-1.jpg",
      "/images/outdoor-miscellaneous-work/f4ea58a60548615096cfb3a9c932f3f026fe9c98-1.jpg",
    ],
    beforeAfter: [
      {
        before: "/images/outdoor-miscellaneous-work/beforeafter/before.jpg",
        after: "/images/outdoor-miscellaneous-work/beforeafter/after.jpg",
        label: "Outdoor Repair & Cleanup",
      },
    ],
    benefits: [
      "Protects home exterior against weather and moisture wear",
      "Keeps fences, gates, and outdoor structures safe and operational",
      "Custom solutions for unique outdoor handyman projects",
      "Enhances curb appeal and backyard functionality",
    ],
    commonProblems: [
      "Sagging fence gates or loose post hinges",
      "Damaged patio trim, screen doors, or soffit panels",
      "Outdoor decor, hose reels, or light fixtures needing secure mounting",
      "Weathered wood or composite outdoor features",
    ],
    whatIsIncluded: [
      "Assessment of outdoor repair or installation area",
      "Precise alignment, leveling, and structural mounting",
      "Weather-rated exterior fasteners and rust-resistant hardware",
      "Cleanup and disposal of job debris",
    ],
    faqs: [
      {
        question: "Do you repair vinyl and wood fences?",
        answer:
          "Yes, we patch damaged fence slats, align latch hardware, tighten posts, and replace broken sections.",
      },
      {
        question: "What kinds of outdoor items can you mount?",
        answer:
          "We mount hose reels, outdoor light fixtures, shade sail anchors, decorative wall art, hose racks, and security hardware.",
      },
    ],
  },
  {
    slug: "painting",
    name: "Interior & Exterior Painting",
    shortDescription:
      "Fresh coats of paint for interior walls, trim, and exterior surfaces with clean, professional results.",
    longDescription:
      "Painting is one of the fastest ways to revitalize a room or exterior trim. Soarin Handyman Services provides careful surface preparation, clean taping, and smooth paint application so your walls look vibrant and flawlessly finished.",
    category: "improvements",
    image: "/images/painting/TN.jpg",
    gallery: [
      "/images/painting/TN.jpg",
      "/images/painting/interior-room-painting.jpg",
      "/images/painting/exterior-wall-stucco-repair.jpg",
      "/images/painting/69e6ddcf3c5bcce3fd50b568e29bb4e9d6c312f8-1.jpg",
      "/images/painting/8594fe04275bc10396602d4d8007b7105f842e75-1.jpg",
      "/images/painting/c1a35211cbd2302998c5e1b7cc52e395af29dc17-1.jpg",
    ],
    benefits: [
      "Refreshed appearance for interior and exterior spaces",
      "Thorough surface preparation for long-lasting adhesion",
      "Crisp lines along trim, baseboards, and ceilings",
      "Protection against moisture and wear",
    ],
    commonProblems: [
      "Faded, stained, or peeling paint",
      "Scuffed walls or outdated color choices",
      "Discolored exterior trim or accent areas",
    ],
    whatIsIncluded: [
      "Surface cleaning, patching, and light sanding",
      "Taping and drop cloth placement",
      "Application of primer and topcoat paint",
      "Clean border lines and complete workspace cleanup",
    ],
    faqs: [
      {
        question: "Who provides the paint?",
        answer:
          "You can provide your preferred brand and color, or we can source quality paint for your project.",
      },
    ],
  },
  {
    slug: "bathroom",
    name: "Bathroom Services",
    shortDescription:
      "Vanity replacements, shower door installations, grab bar mounting, and complete bathroom upgrades.",
    longDescription:
      "Bathrooms require precision workmanship to stay functional, watertight, and stylish. Soarin Handyman Services provides complete bathroom updates including vanity replacements, frameless shower door fittings, safety grab bar installations, and tile joint waterproofing.",
    category: "installations",
    image: "/images/bathroom/TN.jpg",
    gallery: [
      "/images/bathroom/TN.jpg",
      "/images/bathroom/grab-bar-marble-shower.jpg",
      "/images/bathroom/grab-bar-vertical-install.jpg",
      "/images/bathroom/grab-bar-horizontal-tile.jpg",
      "/images/bathroom/grab-bar-tub-wall-enclosure.jpg",
      "/images/bathroom/bathroom-vanity-faucet-installation.jpg",
      "/images/bathroom/bathroom-faucet-shower-fixture.jpg",
      "/images/bathroom/3b60ff19ced6488dc77a8064bade14786ca2d1ab-1.jpg",
      "/images/bathroom/e8768c7c5e7544f257c4aa8bb655710ef666dc4b-1.jpg",
    ],
    benefits: [
      "Elevates bathroom design and functionality",
      "Clean, watertight seals around tubs, showers, and vanities",
      "Enhanced accessibility with solid anchor-mounted grab bars",
      "Expert installation of mirrors, vanities, and shower doors",
    ],
    commonProblems: [
      "Outdated or leaking bathroom vanity cabinet",
      "Old shower curtains or leaking shower doors",
      "Lack of safety grab bars in showers and bathtubs",
      "Peeling grout, worn caulk, or misaligned fixtures",
    ],
    whatIsIncluded: [
      "Old fixture or vanity removal",
      "Precision leveling and wall anchoring into studs",
      "Watertight silicone sealing around wet zone boundaries",
      "Plumbing connection check and leak testing",
      "Workspace cleanup and debris removal",
    ],
    faqs: [
      {
        question: "Can you replace both the vanity and the faucet at the same time?",
        answer:
          "Yes! We can swap out the vanity cabinet, sink, faucet, supply lines, and p-trap in a single streamlined visit.",
      },
      {
        question: "Do you install shower doors on ceramic or porcelain tile?",
        answer:
          "Yes, we use specialized diamond bits to drill cleanly through tile and secure shower door channels into wall studs or heavy-duty anchors.",
      },
    ],
  },
];

export const serviceAreasData: ServiceAreaDetail[] = [
  {
    slug: "cape-coral",
    name: "Cape Coral",
    description:
      "Cape Coral homeowners trust Soarin Handyman Services for professional home repairs, installations, and improvements. From ceiling fan installation to drywall repair, we help keep your Cape Coral home looking and functioning at its best.",
    image: "/images/outdoor-miscellaneous-work/TN.jpg",
    features: [
      "Fast response for Cape Coral neighborhoods",
      "Expertise in canal-home and coastal property repairs",
      "Clean, respectful workmanship",
      "Free initial estimate calculation",
    ],
  },
  {
    slug: "fort-myers",
    name: "Fort Myers",
    description:
      "Fort Myers residents rely on Soarin Handyman Services for quality home repairs and improvements throughout the area. Whether you need faucet replacement, caulking, or general handyman work, we bring professional workmanship to every Fort Myers project.",
    image: "/images/painting/TN.jpg",
    features: [
      "Reliable service across historic and modern Fort Myers homes",
      "Comprehensive indoor & outdoor maintenance",
      "Transparent pricing and prompt scheduling",
      "Licensed & insured service",
    ],
  },
  {
    slug: "naples",
    name: "Naples",
    description:
      "Naples homeowners deserve meticulous, professional handyman services. Soarin Handyman Services provides repairs, installations, and home improvement projects throughout Naples with the attention to detail your home deserves.",
    image: "/images/bathroom/TN.jpg",
    features: [
      "Meticulous attention to high-end home details",
      "Careful property protection during all repairs",
      "Clear communication from estimate to completion",
      "Full range of installations & repairs",
    ],
  },
  {
    slug: "port-charlotte",
    name: "Port Charlotte",
    description:
      "Port Charlotte homeowners count on Soarin Handyman Services for reliable home repairs and improvements. From drywall repair to ceiling fan installation, we serve Port Charlotte with professional workmanship and clear communication.",
    image: "/images/drywall-repairs/TN.jpg",
    features: [
      "Dependable home maintenance for Port Charlotte properties",
      "Drywall, fan, faucet, and grab bar expertise",
      "Upfront pricing and honest scope estimates",
      "Satisfied local homeowner history",
    ],
  },
  {
    slug: "punta-gorda",
    name: "Punta Gorda",
    description:
      "Punta Gorda residents trust Soarin Handyman Services for quality home repairs and handyman projects. We bring professional tools, experience, and attention to detail to every project in Punta Gorda.",
    image: "/images/hurricane-shutter-repair/TN.jpg",
    features: [
      "Professional service for Punta Gorda waterfront & inland homes",
      "Specialized fixture and hardware replacements",
      "Dedicated focus on safety and clean execution",
      "No surprises or hidden fees",
    ],
  },
  {
    slug: "sanibel",
    name: "Sanibel",
    description:
      "Sanibel homeowners rely on Soarin Handyman Services for professional repairs and improvements. We understand the unique needs of island living and provide handyman services that keep your Sanibel home in excellent condition.",
    image: "/images/ceiling-fans/TN.jpg",
    features: [
      "Experienced with Sanibel island property needs",
      "Moisture and salt-air resistant sealing & caulking",
      "Careful scheduling and island service delivery",
      "Quality workmanship guaranteed",
    ],
  },
];
