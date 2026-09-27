import loungeCeiling from "@/assets/fabish-lounge-ceiling.jpg";
import featureWall from "@/assets/fabish-founder-feature-wall.jpg";
import rhinoboard from "@/assets/fabish-rhinoboard-ceiling.jpg";
import passage from "@/assets/fabish-passage-ceiling.jpg";
import bedroom from "@/assets/fabish-bedroom-ceiling.jpg";
import bathroom from "@/assets/fabish-bathroom-tiling.jpg";
import patternedFloor from "@/assets/fabish-patterned-floor.jpg";
import graniteSteps from "@/assets/fabish-granite-steps.jpg";
import stepTiling from "@/assets/fabish-step-tiling.jpg";
import skimming from "@/assets/fabish-wall-skimming.jpg";
import partition from "@/assets/fabish-partition-framing.jpg";
import brickCrew from "@/assets/fabish-brick-crew.jpg";
import nortonAfter from "@/assets/fabish-norton-painting-after.jpg";
import nortonUndercoat from "@/assets/fabish-norton-painting-undercoat.jpg";
import nortonFinishing from "@/assets/fabish-norton-painting-finishing.jpg";

export const company = {
  name: "Fabish House Finishings",
  shortName: "Fabish",
  tagline: "Transforming Houses Into Masterpieces",
  phoneDisplay: "+263 771 953 246",
  phone: "+263771953246",
  whatsapp: "263771953246",
  email: "info@fabishfinishings.co.zw",
  address: "Harare, Zimbabwe",
  hours: [
    { day: "Monday – Friday", time: "08:00 – 17:00" },
    { day: "Saturday", time: "09:00 – 13:00" },
    { day: "Sunday & Public Holidays", time: "Closed" },
  ],
};

export const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
  "Hi Fabish House Finishings, I would like to request a quotation for my home.",
)}`;

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#projects" },
  { label: "Videos", href: "/#videos" },
  { label: "Team", href: "/#team" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

// TODO(Fabish): confirm these figures before going live.
export const counters = [
  { value: 150, suffix: "+", label: "Homes Finished" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 20, suffix: "+", label: "Skilled Craftsmen" },
  { value: 8, suffix: "+", label: "Years of Experience" },
];

export const trustBadges = [
  "Quality Guaranteed",
  "Premium Materials",
  "Expert Craftsmen",
  "Timely Completion",
];

export const whyUs = [
  {
    icon: "Gem",
    title: "Quality Guaranteed",
    body: "We use only premium materials and proven techniques. Every finish is built to look beautiful on day one and stay that way for years.",
  },
  {
    icon: "CalendarCheck",
    title: "Timely Completion",
    body: "We respect your time and deliver as promised. Every job is scheduled room by room, so you always know when each finish will be done.",
  },
  {
    icon: "Ruler",
    title: "Precision In Every Detail",
    body: "Straight grout lines, level ceilings, flawless skim coats and crisp paint lines. The small details are what turn a house into a masterpiece.",
  },
  {
    icon: "House",
    title: "Built For African Homes",
    body: "We understand local architectural styles and climate, so every tile, plaster and paint system we choose is both beautiful and durable.",
  },
  {
    icon: "MessagesSquare",
    title: "Clear Communication",
    body: "Itemised quotations, agreed finishes and progress photos as the work goes on. No surprises, no hidden costs.",
  },
  {
    icon: "Hammer",
    title: "Expert Team",
    body: "Skilled tilers, plasterers, painters and ceiling installers with years of local experience, supervised on every site.",
  },
  {
    icon: "HeartHandshake",
    title: "Homeowners, Developers & Contractors",
    body: "Trusted by families finishing their dream home, property developers and main contractors who need a reliable finishing partner.",
  },
];

export const services = [
  {
    icon: "Grid3x3",
    title: "Wall Tiling",
    body: "Expert wall tiling for kitchens, bathrooms and feature walls with precise alignment.",
  },
  {
    icon: "LayoutGrid",
    title: "Floor Tiling",
    body: "Beautiful, durable floor tiling, from large-format porcelain to patterned designs, in every room.",
  },
  {
    icon: "PaintBucket",
    title: "Plastering & Skimming",
    body: "Professional plastering and skimming for smooth, flawless walls ready for painting.",
  },
  {
    icon: "PaintRoller",
    title: "Interior Painting",
    body: "Premium interior paints applied over properly prepared surfaces for lasting beauty.",
  },
  {
    icon: "Home",
    title: "Exterior Painting",
    body: "Weather-resistant exterior coatings that protect your facade and keep it looking new.",
  },
  {
    icon: "PanelTop",
    title: "Ceiling Installations",
    body: "Rhinoboard, suspended and PVC ceilings installed level, clean and ready to finish.",
  },
  {
    icon: "LampCeiling",
    title: "Bulkheads & Cornices",
    body: "Decorative bulkheads, cornices and lighting recesses that give every room character.",
  },
  {
    icon: "Layers",
    title: "Floors Installation",
    body: "Laminate, vinyl, hardwood and epoxy flooring installed with precision.",
  },
  {
    icon: "Route",
    title: "Paving & Pavers",
    body: "Driveway, patio and pathway paving with quality materials and craftsmanship.",
  },
  {
    icon: "BrickWall",
    title: "Brick Dressing",
    body: "Decorative brickwork and professional brick dressing for aesthetic appeal.",
  },
  {
    icon: "Sparkles",
    title: "Feature Walls & Fireplaces",
    body: "Textured feature walls and fireplace surrounds that become the centrepiece of the room.",
  },
  {
    icon: "HardHat",
    title: "Building Construction",
    body: "Complete construction services, from foundations to the finishing touches.",
  },
];

export const process = [
  {
    step: "01",
    title: "Consultation",
    body: "We visit your home, understand your style, budget and timelines.",
  },
  {
    step: "02",
    title: "Measure & Design",
    body: "Rooms are measured and finishes, tiles and colours agreed with you.",
  },
  {
    step: "03",
    title: "Quotation",
    body: "A clear, itemised quotation with no hidden costs or vague allowances.",
  },
  {
    step: "04",
    title: "Surface Preparation",
    body: "Walls, floors and ceilings are prepared properly, because great finishes start here.",
  },
  {
    step: "05",
    title: "Finishing Works",
    body: "Our craftsmen tile, plaster, paint and install, room by room.",
  },
  {
    step: "06",
    title: "Inspection & Handover",
    body: "A joint walkthrough, snags closed out and a clean home handed back.",
  },
];

// TODO(Fabish): replace with real client reviews (with their permission) before going live.
export const testimonials = [
  {
    name: "Rudo M.",
    role: "Homeowner, Harare",
    quote:
      "Fabish did the ceilings, the feature wall and all the tiling in our new home. The finish is so clean that every visitor asks who did it. They kept us updated the whole way.",
  },
  {
    name: "Tendai K.",
    role: "Property Developer",
    quote:
      "We use Fabish to finish our units because the quality is consistent and they deliver on time. Straight lines, neat grout and no shortcuts on preparation.",
  },
  {
    name: "Chipo N.",
    role: "Homeowner, Chitungwiza",
    quote:
      "Our bathroom went from plain to something out of a magazine. Honest quotation, tidy team and they finished exactly when they said they would.",
  },
];

// Fabish works as specialist crews rather than named individuals; update names/contacts as needed.
export const team = [
  {
    name: "Tiling Team",
    position: "Wall, Floor & Step Tiling",
    photo: stepTiling,
    bio: "Specialists in wall and floor tiling, granite steps and patterned layouts. Every tile is set out from a datum so lines stay straight from the first row to the last.",
    phone: company.phoneDisplay,
    email: "tiling@fabishfinishings.co.zw",
  },
  {
    name: "Plaster & Paint Team",
    position: "Plastering, Skimming & Painting",
    photo: skimming,
    bio: "Prepares every surface properly before a single coat goes on. Smooth skim coats, clean cutting-in and premium paint systems inside and out.",
    phone: company.phoneDisplay,
    email: "painting@fabishfinishings.co.zw",
  },
  {
    name: "Build & Ceilings Team",
    position: "Ceilings, Brickwork & Construction",
    photo: brickCrew,
    bio: "Installs rhinoboard ceilings, bulkheads and partitions, and handles brick dressing and building work, so your home is finished by one accountable team.",
    phone: company.phoneDisplay,
    email: "projects@fabishfinishings.co.zw",
  },
];

export const faqs = [
  {
    q: "How do I request a quotation?",
    a: "Complete the quote request form on this page, WhatsApp us, or call us. We respond within one business day and arrange a free site visit where needed.",
  },
  {
    q: "What services do you offer?",
    a: "Wall and floor tiling, plastering and skimming, interior and exterior painting, ceiling installations, bulkheads, flooring, paving, brick dressing, feature walls and building construction.",
  },
  {
    q: "Do you work on new builds and existing homes?",
    a: "Yes. We finish brand-new houses for homeowners and developers, and we renovate existing homes with new tiles, ceilings, plaster and paint.",
  },
  {
    q: "Do you supply the materials?",
    a: "We can supply all materials at trade prices, or work with materials you have already bought. Either way, we advise you on quality and quantities.",
  },
  {
    q: "How long does a finishing project take?",
    a: "A single bathroom can take a few days; a full house finish usually takes three to eight weeks depending on size and finishes. Every quotation includes a timeline.",
  },
  {
    q: "Are quotations free?",
    a: "Yes. Quotations and site visits are completely free and carry no obligation.",
  },
  {
    q: "Which areas do you cover?",
    a: "We are based in Harare and work across Harare, Chitungwiza, Ruwa, Norton and surrounding areas. We travel further for larger projects.",
  },
  {
    q: "How are payments structured?",
    a: "Payments are milestone based: a deposit for materials, staged payments as each finish is completed, and a final payment on handover.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Yes. We stand behind our workmanship and will come back to fix any defect caused by our work.",
  },
  {
    q: "How do I get started?",
    a: "Send us photos, plans or a description of what you want finished. We will advise on finishes, budget ranges and next steps.",
  },
];

// Every finished-work photo, used by the homepage work strip and the portfolio photo wall.
export const portfolioPhotos = [
  { src: loungeCeiling, alt: "Lounge with a circular bulkhead ceiling and chandelier" },
  { src: nortonAfter, alt: "Norton house exterior repainted in a warm brown final coat" },
  { src: bathroom, alt: "Black and white master bathroom wall tiling" },
  { src: rhinoboard, alt: "Living room rhinoboard ceiling with cornices" },
  { src: patternedFloor, alt: "Geometric patterned floor tiling" },
  { src: passage, alt: "Passage with a stepped bulkhead ceiling" },
  { src: graniteSteps, alt: "Granite-clad outdoor entrance steps" },
  { src: bedroom, alt: "Bedroom tray ceiling with LED cove lighting" },
  { src: stepTiling, alt: "Tiled interior steps with contrasting nosing" },
  { src: nortonUndercoat, alt: "Painter applying undercoat to a house exterior in Norton" },
  { src: skimming, alt: "Freshly plastered and skimmed walls" },
  { src: partition, alt: "Drywall partition framing on a new build" },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: "Ceilings" | "Tiling" | "Plastering & Painting" | "Exterior";
  status: "Completed" | "Ongoing";
  completion: string;
  value: string;
  duration: string;
  image: string;
  short: string;
  description: string[];
  materials: string[];
  timeline: { phase: string; detail: string }[];
  gallery: string[];
  beforeAfter?: { before: string; after: string; beforeLabel?: string; afterLabel?: string };
  beforeVideo?: { src: string; poster: string };
  testimonial?: { name: string; role: string; quote: string; photo?: string };
  mapQuery: string;
};

// TODO(Fabish): confirm project locations, dates and values before going live.
export const projects: Project[] = [
  {
    slug: "lounge-ceiling-feature-wall",
    title: "Lounge Ceiling & Feature Wall",
    location: "Harare",
    category: "Ceilings",
    status: "Completed",
    completion: "2024",
    value: "On request",
    duration: "4 weeks",
    image: loungeCeiling,
    short:
      "A circular bulkhead ceiling with chandelier recess, a textured feature wall and a tiled fireplace surround for a family lounge.",
    description: [
      "The client wanted their lounge to feel grand without losing warmth. We designed a circular bulkhead around the chandelier point, creating a layered ceiling that draws the eye up the moment you walk in.",
      "The fireplace wall was given a hand-textured feature finish, framed by a tiled surround, and the rest of the room was skimmed and painted for a smooth, even backdrop.",
      "The result is a room that feels finished to the last detail.",
    ],
    materials: [
      "Rhinoboard ceiling with bulkhead framing",
      "Cornice and decorative ceiling detailing",
      "Textured feature wall finish",
      "Porcelain fireplace surround",
      "Gypsum skim coat to all walls",
      "Premium interior acrylic paint",
    ],
    timeline: [
      { phase: "Site visit & design", detail: "Week 1" },
      { phase: "Ceiling framing & boarding", detail: "Week 1 – 2" },
      { phase: "Bulkhead & cornice detailing", detail: "Week 2" },
      { phase: "Feature wall & fireplace", detail: "Week 3" },
      { phase: "Skimming, painting & handover", detail: "Week 4" },
    ],
    gallery: [loungeCeiling, featureWall, rhinoboard, passage],
    testimonial: {
      name: "Rudo M.",
      role: "Homeowner",
      quote:
        "Every visitor looks up at the ceiling first. The feature wall is exactly what we imagined.",
    },
    mapQuery: "Harare+Zimbabwe",
  },
  {
    slug: "norton-exterior-painting",
    title: "Exterior Repaint, Norton",
    location: "Norton",
    category: "Plastering & Painting",
    status: "Completed",
    completion: "2026",
    value: "On request",
    duration: "On request",
    image: nortonAfter,
    short:
      "A full exterior repaint of a family home in Norton: the walls were undercoated first, then finished in a warm brown top coat that sets off the face-brick pillars.",
    description: [
      "The house had tired, patchy walls that needed more than a quick coat of paint to look right.",
      "We prepared the surfaces and applied a full undercoat to the whole exterior. It seals the walls and gives the top coat an even base, so the colour goes on consistently and lasts longer.",
      "Once the undercoat had cured, we applied the final coat in a warm brown that works with the face-brick pillars and white fascia, cutting in cleanly around windows, doors and brickwork.",
    ],
    materials: [
      "Exterior undercoat to all walls",
      "Weather-resistant exterior top coat",
      "Masking to face-brick pillars and window frames",
    ],
    timeline: [
      { phase: "Surface preparation", detail: "Stage 1" },
      { phase: "Undercoat to all walls", detail: "Stage 2" },
      { phase: "Final coat & cutting in", detail: "Stage 3" },
      { phase: "Clean-up & handover", detail: "Stage 4" },
    ],
    gallery: [nortonAfter, nortonUndercoat, nortonFinishing],
    beforeAfter: {
      before: nortonUndercoat,
      after: nortonAfter,
      beforeLabel: "Undercoat",
      afterLabel: "Final coat",
    },
    beforeVideo: {
      src: "/videos/fabish-norton-before.mp4",
      poster: "/videos/fabish-norton-before.jpg",
    },
    mapQuery: "Norton+Zimbabwe",
  },
  {
    slug: "master-bathroom-tiling",
    title: "Master Bathroom Wall Tiling",
    location: "Harare",
    category: "Tiling",
    status: "Completed",
    completion: "2024",
    value: "On request",
    duration: "1 week",
    image: bathroom,
    short:
      "A bold black-and-white master bathroom with marble-effect wall tiles, striped feature lines and a walk-in shower.",
    description: [
      "This bathroom called for precision: contrasting black and white tiles leave nowhere for an uneven joint to hide.",
      "Every row was set out from a single level line so the stripes run perfectly from floor to ceiling and wrap cleanly around the shower and vanity.",
      "Joints were sealed and the room handed over spotless and ready to use.",
    ],
    materials: [
      "Marble-effect porcelain wall tiles",
      "Black gloss feature tiles",
      "Waterproofing membrane to wet areas",
      "Flexible tile adhesive",
      "Epoxy grout to shower walls",
    ],
    timeline: [
      { phase: "Strip out & waterproofing", detail: "Day 1 – 2" },
      { phase: "Wall tiling", detail: "Day 3 – 5" },
      { phase: "Floor tiling", detail: "Day 5 – 6" },
      { phase: "Grouting, sealing & handover", detail: "Day 7" },
    ],
    gallery: [bathroom, patternedFloor, stepTiling, graniteSteps],
    testimonial: {
      name: "Chipo N.",
      role: "Homeowner",
      quote: "It looks like a hotel bathroom. The lines are perfect.",
    },
    mapQuery: "Harare+Zimbabwe",
  },
  {
    slug: "outdoor-granite-steps",
    title: "Outdoor Granite Steps",
    location: "Harare",
    category: "Exterior",
    status: "Completed",
    completion: "2023",
    value: "On request",
    duration: "5 days",
    image: graniteSteps,
    short:
      "Granite-clad entrance steps with black nosing strips and an inlaid geometric landing detail.",
    description: [
      "The entrance is the first thing guests see, so the client wanted steps that would make a statement and stand up to the weather.",
      "We clad each tread and riser in granite, finished the edges with black nosing strips and set a geometric inlay into the top landing.",
      "Exterior-grade adhesives and grout were used throughout for long-term durability.",
    ],
    materials: [
      "Granite tread and riser tiles",
      "Black contrasting nosing strips",
      "Exterior-grade tile adhesive",
      "Weather-resistant grout",
    ],
    timeline: [
      { phase: "Step levelling & screed", detail: "Day 1" },
      { phase: "Granite cladding", detail: "Day 2 – 3" },
      { phase: "Landing inlay", detail: "Day 4" },
      { phase: "Grouting & clean-up", detail: "Day 5" },
    ],
    gallery: [graniteSteps, stepTiling, patternedFloor, bathroom],
    testimonial: {
      name: "Tendai K.",
      role: "Property Developer",
      quote: "The entrance now matches the quality of the house inside. Very neat work.",
    },
    mapQuery: "Harare+Zimbabwe",
  },
  {
    slug: "passage-bulkhead-ceiling",
    title: "Passage Bulkhead Ceiling",
    location: "Harare",
    category: "Ceilings",
    status: "Completed",
    completion: "2024",
    value: "On request",
    duration: "2 weeks",
    image: passage,
    short:
      "A long passage transformed with a stepped geometric bulkhead ceiling and warm feature-painted walls.",
    description: [
      "Long passages can feel like tunnels. We broke up the length with a stepped, geometric bulkhead that adds rhythm and depth overhead.",
      "The walls were skimmed and painted in a warm tone that complements the white ceiling and makes the space feel inviting.",
    ],
    materials: [
      "Rhinoboard with stepped bulkhead framing",
      "Jointing tape and compound",
      "Gypsum skim coat",
      "Premium interior acrylic paint",
    ],
    timeline: [
      { phase: "Design & setting out", detail: "Day 1 – 2" },
      { phase: "Framing & boarding", detail: "Day 3 – 6" },
      { phase: "Jointing & skimming", detail: "Day 7 – 10" },
      { phase: "Painting & handover", detail: "Day 11 – 14" },
    ],
    gallery: [passage, rhinoboard, loungeCeiling, bedroom],
    testimonial: {
      name: "Rudo M.",
      role: "Homeowner",
      quote: "The passage used to be the dullest part of the house. Now it is one of the best.",
    },
    mapQuery: "Harare+Zimbabwe",
  },
  {
    slug: "patterned-floor-tiling",
    title: "Patterned Floor Tiling",
    location: "Harare",
    category: "Tiling",
    status: "Completed",
    completion: "2024",
    value: "On request",
    duration: "1 week",
    image: patternedFloor,
    short:
      "A geometric black, white and grey patterned floor laid to a precise grid for a striking entrance hall.",
    description: [
      "Patterned floors are unforgiving: a single tile out of line breaks the whole design. The layout was dry-set and checked before a single tile was fixed.",
      "The result is a floor that reads as one continuous pattern from the doorway to the far wall.",
    ],
    materials: [
      "Black, white and grey porcelain tiles",
      "Levelling screed",
      "Tile levelling clips",
      "Colour-matched grout",
    ],
    timeline: [
      { phase: "Screed & levelling", detail: "Day 1 – 2" },
      { phase: "Dry layout & set-out", detail: "Day 3" },
      { phase: "Tiling", detail: "Day 4 – 6" },
      { phase: "Grouting & handover", detail: "Day 7" },
    ],
    gallery: [patternedFloor, bathroom, graniteSteps, stepTiling],
    testimonial: {
      name: "Tendai K.",
      role: "Property Developer",
      quote:
        "Buyers always comment on this floor. It sells the house before they reach the lounge.",
    },
    mapQuery: "Harare+Zimbabwe",
  },
  {
    slug: "full-house-plaster-and-partitions",
    title: "Full House Plastering & Partitions",
    location: "Harare",
    category: "Plastering & Painting",
    status: "Ongoing",
    completion: "In progress",
    value: "On request",
    duration: "In progress",
    image: skimming,
    short:
      "Internal plastering, skimming and new drywall partitions for a new build, preparing every room for tiling and paint.",
    description: [
      "This new build needed every internal wall plastered and skimmed, plus new partition walls to reshape the upper floor.",
      "Our plaster and paint team is working room by room so tilers and ceiling installers can follow straight behind.",
      "Plastering is well underway and partitions are being framed.",
    ],
    materials: [
      "Cement plaster to internal walls",
      "Gypsum skim coat",
      "Galvanised steel stud framing",
      "Drywall boards to partitions",
    ],
    timeline: [
      { phase: "Internal plastering", detail: "Complete" },
      { phase: "Partition framing", detail: "In progress" },
      { phase: "Skimming", detail: "In progress" },
      { phase: "Painting", detail: "Upcoming" },
      { phase: "Handover", detail: "Upcoming" },
    ],
    gallery: [skimming, partition, brickCrew, featureWall],
    testimonial: {
      name: "Tendai K.",
      role: "Property Developer",
      quote: "Walls are coming out dead flat. It makes the tiling and painting so much easier.",
    },
    mapQuery: "Harare+Zimbabwe",
  },
];

export const projectFilters = [
  "All",
  "Ceilings",
  "Tiling",
  "Plastering & Painting",
  "Exterior",
  "Completed",
  "Ongoing",
] as const;
