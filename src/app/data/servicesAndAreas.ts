export interface ServiceDetail {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: "installations" | "repairs" | "improvements";
  image: string;
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
    image: "/images/ceiling-fans/ceiling-fan-installation.png",
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
    image: "/images/drywall-repairs/drywall-repair-process.png",
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
    slug: "caulking",
    name: "Caulking",
    shortDescription:
      "Refresh worn or damaged caulking around bathrooms, kitchens, windows, and other surfaces.",
    longDescription:
      "Caulking is a small detail with a big impact. Worn or missing caulk leads to water damage, drafts, and an unkempt appearance. Soarin Handyman Services removes old caulk and applies fresh, clean beads that protect your home and look sharp.",
    category: "repairs",
    image: "/images/caulking/bathroom-caulking.png",
    benefits: [
      "Prevents water intrusion and moisture damage",
      "Improves energy efficiency by sealing gaps",
      "Clean, professional-looking bead lines",
      "Mold and mildew resistant sealants available",
    ],
    commonProblems: [
      "Peeling, cracked, or discolored caulk in bathrooms",
      "Gaps around windows or doors letting in drafts",
      "Missing caulk around kitchen sinks or countertops",
      "Old caulk that no longer seals properly",
    ],
    whatIsIncluded: [
      "Removal of old or damaged caulk",
      "Surface cleaning and preparation",
      "Application of appropriate sealant for the area",
      "Smooth, clean finish",
      "Cleanup of excess material",
    ],
    faqs: [
      {
        question: "What type of caulk do you use?",
        answer:
          "We use the appropriate sealant for each surface — silicone for wet areas like showers and tubs, and paintable latex caulk for trim, windows, and baseboards.",
      },
    ],
  },
  {
    slug: "faucet-replacement",
    name: "Faucet Replacement",
    shortDescription:
      "Replace outdated or damaged faucets with a clean, professional installation.",
    longDescription:
      "A new faucet can transform the look of a kitchen or bathroom, but proper installation matters. Soarin Handyman Services removes old faucets, prepares the surface, and installs new fixtures with secure connections and clean finishes.",
    category: "installations",
    image: "/images/faucet-replacement/kitchen-faucet-install.png",
    benefits: [
      "Updated look for kitchens and bathrooms",
      "Secure, leak-free connections",
      "Proper alignment and smooth operation",
      "Removal and disposal of old fixture",
    ],
    commonProblems: [
      "Old faucet is leaking or corroded",
      "Handles are stiff or broken",
      "You are updating your kitchen or bathroom fixtures",
      "Hard water has damaged the finish",
    ],
    whatIsIncluded: [
      "Shut-off of water supply",
      "Removal of existing faucet",
      "Inspection of supply lines and valves",
      "Installation of new faucet with secure connections",
      "Leak testing and cleanup",
    ],
    faqs: [
      {
        question: "Do I need to buy the faucet myself?",
        answer:
          "You can purchase the faucet you want, or we can discuss options. We recommend confirming the fit and compatibility before purchasing.",
      },
      {
        question: "What if the supply lines or valves need replacing?",
        answer:
          "We will let you know if we find worn supply lines or valves during installation. These can typically be replaced during the same visit.",
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
    image: "/images/painting/interior-painting.png",
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
    slug: "bathroom-grab-bars",
    name: "Bathroom Grab Bars",
    shortDescription:
      "Secure installation of safety grab bars for bathrooms, providing added support and accessibility.",
    longDescription:
      "Properly installed grab bars provide essential safety and support in showers, bathtubs, and near toilets. Soarin Handyman Services ensures solid anchor mounting into wall studs or heavy-duty anchors so you can feel completely confident and safe.",
    category: "installations",
    image: "/images/bathroom-grab-bars/grab-bar-installed.png",
    benefits: [
      "Enhanced safety and fall prevention in wet areas",
      "Anchor mounting into wall studs or solid masonry",
      "Clean, sleek finish that matches bathroom fixtures",
      "Heavy weight-capacity rating for reliable stability",
    ],
    commonProblems: [
      "Lack of stability when getting in or out of the shower/tub",
      "Existing grab bars are loose or improperly mounted",
      "Need accessibility upgrades for family members",
    ],
    whatIsIncluded: [
      "Measurement and height positioning assessment",
      "Stud detection or heavy-duty anchor placement",
      "Secure mounting and torque testing",
      "Waterproof sealing around mounting plates",
    ],
    faqs: [
      {
        question: "Can grab bars be installed on tile walls?",
        answer:
          "Yes. We use specialized diamond drill bits to safely drill through ceramic or porcelain tile without cracking, securing directly into studs or heavy-duty anchors.",
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
    image: "https://images.pexels.com/photos/19219055/pexels-photo-19219055.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
    image: "https://images.pexels.com/photos/36777507/pexels-photo-36777507.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
    image: "https://images.pexels.com/photos/6474129/pexels-photo-6474129.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
    image: "https://images.pexels.com/photos/11427055/pexels-photo-11427055.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
    image: "https://images.pexels.com/photos/12196323/pexels-photo-12196323.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Experienced with Sanibel island property needs",
      "Moisture and salt-air resistant sealing & caulking",
      "Careful scheduling and island service delivery",
      "Quality workmanship guaranteed",
    ],
  },
];
