// ============================================================
//  VISUAL AIR MEDIA — SITE CONTENT FILE
//  ✏️  Edit this file to update website text, links & details
//  No coding knowledge needed — just change the text values!
// ============================================================

export const COMPANY = {
  name: "Visual Air Media",
  tagline: "Where Visuals Take Flight",
  subTagline: "Premium Video Editing · Motion Graphics · UI/UX Development",
  description:
    "We craft stunning visual experiences — from cinematic long-form edits to viral short-form content, breathtaking motion graphics, and polished UI/UX designs that convert.",
  email: "hello@visualairmedia.com",
  phone: "+91 98765 43210",
  location: "Bengaluru, Karnataka, India",
  instagram: "https://instagram.com/visualairmedia",
  linkedin: "https://linkedin.com/company/visualairmedia",
  youtube: "https://youtube.com/@visualairmedia",
  twitter: "https://twitter.com/visualairmedia",
};

// ── NAVIGATION ───────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",      href: "/"          },
  { label: "Services",  href: "#services"  },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About",     href: "#about"     },
  { label: "Contact",   href: "#contact"   },
];

// ── HERO SECTION ─────────────────────────────────────────
export const HERO = {
  badge: "✦ Creative Studio · Est. 2020",
  headline1: "Where Visuals",
  headline2: "Take Flight",
  description:
    "We transform ideas into stunning visual stories. Long-form films, short-form content, motion graphics, and UI/UX — all under one roof.",
  cta1: { label: "View Our Work", href: "#portfolio" },
  cta2: { label: "Get a Quote",   href: "#contact"   },
  stats: [
    { number: "300+", label: "Projects Delivered" },
    { number: "80+",  label: "Happy Clients"       },
    { number: "4+",   label: "Years of Excellence" },
  ],
};

// ── SERVICES ─────────────────────────────────────────────
export const SERVICES = [
  {
    id: "longform",
    icon: "🎬",
    title: "Long Form Videos",
    subtitle: "Cinematic storytelling",
    description:
      "Documentary-grade edits, explainer films, after movies, and podcast productions that captivate audiences from first frame to last.",
    tags: ["Explainer", "After Movies", "Podcast"],
    portfolioPath: "/portfolio/longform",
    color: "pink",
    // ✏️ Featured video shown on homepage card
    youtubeId: "iCQfH6Vtqto",
    youtubeLabel: "Watch Explainer",
  },
  {
    id: "shortform",
    icon: "⚡",
    title: "Short Form Videos",
    subtitle: "Built for virality",
    description:
      "Thumb-stopping promos, motion graphics cuts, and caption shorts engineered for maximum reach and platform algorithm performance.",
    tags: ["Promo", "Motion Graphics", "Caption Shorts"],
    portfolioPath: "/portfolio/shortform",
    color: "purple",
    // ✏️ Featured video shown on homepage card
    youtubeId: "5nCJgSeC_28",
    youtubeLabel: "Watch Short",
  },
  // {
  //   id: "motion",
  //   icon: "🌀",
  //   title: "Motion Graphics",
  //   subtitle: "Animation that wows",
  //   description:
  //     "Explainer animations, logo reveals, kinetic typography, and 3D product sequences that make your brand impossible to ignore.",
  //   tags: ["Explainer Videos", "Logo Animation", "3D Motion", "Infographics"],
  //   portfolioPath: "/portfolio/motion",
  //   color: "blue",
  //   // ✏️ Replace with your motion graphics video ID when ready
  //   youtubeId: "LmS8HWOQOcM",
  //   youtubeLabel: "Watch Demo",
  // },
  {
    id: "uiux",
    icon: "🖥️",
    title: "UI/UX Development",
    subtitle: "Design that converts",
    description:
      "Full-stack design and front-end development. From user research and wireframes to pixel-perfect interfaces that delight and convert.",
    tags: ["Web Design", "App UI", "Prototyping", "Front-End Dev"],
    portfolioPath: "/portfolio/uiux",
    color: "green",
    // ✏️ Replace with your UI/UX showcase video ID when ready
    youtubeId: "c_Asq2z4tto",
    youtubeLabel: "Watch Case Study",
  },
];

// ── PORTFOLIO PAGES ──────────────────────────────────────
// ✏️ youtubeId on each item = video plays in popup when thumbnail clicked
// ✏️ Leave youtubeId as "" to show image only (no video popup)

export const PORTFOLIO = {

  // ── LONG FORM ─────────────────────────────────────────
  longform: {
    title: "Long Form Videos",
    description: "Explainer films, after movies & podcast productions",
    items: [
      // ── EXPLAINERS ──
      {
        id: 1,
        title: "Pump Fun",
        category: "Explainer",
        duration: "Long Form",
        thumbnail: `https://img.youtube.com/vi/iCQfH6Vtqto/maxresdefault.jpg`,
        tags: ["Explainer"],
        youtubeId: "iCQfH6Vtqto",
      },
      {
        id: 2,
        title: "CDL Course VSL",
        category: "Explainer",
        duration: "Long Form",
        thumbnail: `https://img.youtube.com/vi/jfJadEyjk5o/maxresdefault.jpg`,
        tags: ["Explainer"],
        youtubeId: "jfJadEyjk5o",
      },
      {
        id: 3,
        title: "Chopped AVAX Car Titles",
        category: "Explainer",
        duration: "Long Form",
        thumbnail: `https://img.youtube.com/vi/rq3V9aQytGo/maxresdefault.jpg`,
        tags: ["Explainer"],
        youtubeId: "rq3V9aQytGo",
      },
      // ── AFTER MOVIES ──
      {
        id: 4,
        title: "Reserve Aftermovie",
        category: "After Movies",
        duration: "Long Form",
        thumbnail: `https://img.youtube.com/vi/3hvbipc9gfM/maxresdefault.jpg`,
        tags: ["After Movies"],
        youtubeId: "3hvbipc9gfM",
      },
      {
        id: 5,
        title: "Humanity V2 Final",
        category: "After Movies",
        duration: "Long Form",
        thumbnail: `https://img.youtube.com/vi/KWFyyXPc2Ds/maxresdefault.jpg`,
        tags: ["After Movies"],
        youtubeId: "KWFyyXPc2Ds",
      },
      {
        id: 6,
        title: "Humanity Final",
        category: "After Movies",
        duration: "Long Form",
        thumbnail: `https://img.youtube.com/vi/RwLMntKzejY/maxresdefault.jpg`,
        tags: ["After Movies"],
        youtubeId: "RwLMntKzejY",
      },
      {
        id: 7,
        title: "Brinc Final Aftermovie",
        category: "After Movies",
        duration: "Long Form",
        thumbnail: `https://img.youtube.com/vi/NYE5yZqRyTE/maxresdefault.jpg`,
        tags: ["After Movies"],
        youtubeId: "NYE5yZqRyTE",
      },
      // ── PODCASTS ──
      {
        id: 8,
        title: "Shreya Podcast",
        category: "Podcast",
        duration: "Long Form",
        thumbnail: `https://img.youtube.com/vi/1FE9p3wrcNI/maxresdefault.jpg`,
        tags: ["Podcast"],
        youtubeId: "1FE9p3wrcNI",
      },
      {
        id: 9,
        title: "Magic Eden Podcast",
        category: "Podcast",
        duration: "Long Form",
        thumbnail: `https://img.youtube.com/vi/9tOD_Y84uR8/maxresdefault.jpg`,
        tags: ["Podcast"],
        youtubeId: "9tOD_Y84uR8",
      },
    ],
  },

  // ── SHORT FORM ────────────────────────────────────────
  shortform: {
    title: "Short Form Videos",
    description: "Promos, motion graphics cuts & caption shorts",
    items: [
      {
        id: 1,
        title: "Founder's Word",
        category: "Caption Shorts",
        duration: "Short",
        thumbnail: `https://img.youtube.com/vi/5nCJgSeC_28/maxresdefault.jpg`,
        tags: ["Caption Shorts"],
        youtubeId: "5nCJgSeC_28",
      },
      {
        id: 2,
        title: "Goyal V2",
        category: "Caption Shorts",
        duration: "Short",
        thumbnail: `https://img.youtube.com/vi/9NxTLlrgd-E/maxresdefault.jpg`,
        tags: ["Caption Shorts"],
        youtubeId: "9NxTLlrgd-E",
      },
      {
        id: 3,
        title: "Real Estate Promo",
        category: "Promo",
        duration: "Short",
        thumbnail: `https://img.youtube.com/vi/LmS8HWOQOcM/maxresdefault.jpg`,
        tags: ["Promo"],
        youtubeId: "LmS8HWOQOcM",
      },
      {
        id: 4,
        title: "BoldFit Promo",
        category: "Promo",
        duration: "Short",
        thumbnail: `https://img.youtube.com/vi/c_Asq2z4tto/maxresdefault.jpg`,
        tags: ["Promo"],
        youtubeId: "c_Asq2z4tto",
      },
      // {
      //   id: 5,
      //   title: "Pump Fun — Motion",
      //   category: "Motion Graphics",
      //   duration: "Long Form",
      //   thumbnail: `https://img.youtube.com/vi/iCQfH6Vtqto/maxresdefault.jpg`,
      //   tags: ["Motion Graphics", "Explainer"],
      //   youtubeId: "iCQfH6Vtqto",
      // },
      {
        id: 6,
        title: "Real Estate Motion",
        category: "Motion Graphics",
        duration: "Short",
        thumbnail: `https://img.youtube.com/vi/LmS8HWOQOcM/maxresdefault.jpg`,
        tags: ["Motion Graphics", "Promo"],
        youtubeId: "LmS8HWOQOcM",
      },
      {
        id: 7,
        title: "BoldFit Motion",
        category: "Motion Graphics",
        duration: "Short",
        thumbnail: `https://img.youtube.com/vi/c_Asq2z4tto/maxresdefault.jpg`,
        tags: ["Motion Graphics", "Promo"],
        youtubeId: "c_Asq2z4tto",
      },
    ],
  },

  // ── MOTION GRAPHICS ───────────────────────────────────
  // motion: {
  //   title: "Motion Graphics",
  //   description: "2D/3D animation, explainers & kinetic typography",
  //   items: [
  //     {
  //       id: 1,
  //       title: "Pump Fun — Motion",
  //       category: "Motion Graphics",
  //       duration: "Long Form",
  //       thumbnail: `https://img.youtube.com/vi/iCQfH6Vtqto/maxresdefault.jpg`,
  //       tags: ["Motion Graphics", "Explainer"],
  //       youtubeId: "iCQfH6Vtqto",
  //     },
  //     {
  //       id: 2,
  //       title: "Real Estate Motion",
  //       category: "Motion Graphics",
  //       duration: "Short",
  //       thumbnail: `https://img.youtube.com/vi/LmS8HWOQOcM/maxresdefault.jpg`,
  //       tags: ["Motion Graphics", "Promo"],
  //       youtubeId: "LmS8HWOQOcM",
  //     },
  //     {
  //       id: 3,
  //       title: "BoldFit Motion",
  //       category: "Motion Graphics",
  //       duration: "Short",
  //       thumbnail: `https://img.youtube.com/vi/c_Asq2z4tto/maxresdefault.jpg`,
  //       tags: ["Motion Graphics", "Promo"],
  //       youtubeId: "c_Asq2z4tto",
  //     },
  //   ],
  // },

  // ── UI/UX ─────────────────────────────────────────────
  // ✏️ Add your UI/UX project links below when ready
  // For web links use: websiteUrl instead of youtubeId
  uiux: {
    title: "UI/UX Development",
    description: "Web design, app interfaces & front-end development",
    items: [
      {
        id: 1,
        title: "Coming Soon — Project 1",
        category: "Web Design",
        thumbnail: "https://picsum.photos/seed/ux1/600/400",
        tags: ["Web Design"],
        youtubeId: "",
        // ✏️ Add website URL here when ready:
        websiteUrl: "",
      },
      {
        id: 2,
        title: "Coming Soon — Project 2",
        category: "App UI",
        thumbnail: "https://picsum.photos/seed/ux2/600/400",
        tags: ["App UI"],
        youtubeId: "",
        websiteUrl: "",
      },
    ],
  },
};

// ── TESTIMONIALS ─────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Rohan Mehta",
    role: "CEO, TechCorp India",
    avatar: "RM",
    text: "Visual Air Media transformed our brand film completely. The quality and attention to detail was beyond what we expected. Highly recommend!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Lead, FinEdge",
    avatar: "PS",
    text: "Our Instagram Reels went viral thanks to their editing style. Engagement tripled in the first month after working with them.",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    role: "Founder, NovaTech",
    avatar: "AN",
    text: "The UI/UX work they delivered was stunning. Clean, conversion-focused, and built exactly to spec. Will work with them again.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Creative Director, BrandX",
    avatar: "SR",
    text: "The motion graphics reel they made for our product launch was breathtaking. The team truly understands visual storytelling.",
    rating: 5,
  },
];

// ── ABOUT SECTION ─────────────────────────────────────────
export const ABOUT = {
  headline: "We Are Visual Air Media",
  paragraph1:
    "Founded in Bengaluru, Visual Air Media is a full-service creative studio dedicated to one mission: making your brand impossible to ignore. We combine strategic thinking with world-class visual craft.",
  paragraph2:
    "Whether you need a cinematic brand film, a viral Reel, a stunning explainer, or a conversion-focused website — we deliver visuals that take flight.",
  values: [
    { icon: "🎯", title: "Strategy First",    desc: "Every visual decision is backed by a clear creative strategy." },
    { icon: "✨", title: "Pixel Perfect",     desc: "Obsessive attention to detail in every frame and every pixel." },
    { icon: "🚀", title: "On-Time Delivery",  desc: "We respect your deadlines as much as you do." },
    { icon: "🤝", title: "True Partnership",  desc: "Your success is our success — we treat your brand like our own." },
  ],
};

// ── BROCHURE DOWNLOAD ────────────────────────────────────
export const BROCHURE = {
  headline: "Get Our Full Services Brochure",
  description:
    "Download our detailed brochure covering all services, packages, and past work samples.",
  fileName: "Visual_Air_Media_Brochure_2025.pdf",
  fileUrl:  "/brochure/Visual_Air_Media_Brochure_2025.pdf",
  buttonLabel: "Download Brochure (PDF)",
};

// ── EMAILJS CONFIG ────────────────────────────────────────
// 🔧 Replace with your actual EmailJS credentials
// Sign up free at: https://www.emailjs.com/
export const EMAILJS_CONFIG = {
  SERVICE_ID:  "YOUR_SERVICE_ID",
  TEMPLATE_ID: "YOUR_TEMPLATE_ID",
  PUBLIC_KEY:  "YOUR_PUBLIC_KEY",
};

// ── CONTACT SECTION ───────────────────────────────────────
export const CONTACT = {
  headline:      "Let's Create Something",
  highlightWord: "Extraordinary",
  subtext:       "Got a project in mind? We'd love to hear from you.",
  formFields: {
    namePlaceholder:    "Your Full Name",
    emailPlaceholder:   "Your Work Email",
    servicePlaceholder: "Service you need",
    messagePlaceholder: "Tell us about your project...",
    submitLabel:        "Send Message",
  },
  serviceOptions: [
    "Long Form Video Editing",
    "Short Form Video Editing",
    "Motion Graphics",
    "UI/UX Development",
    "Full Package",
    "Other",
  ],
};

// ── FOOTER ────────────────────────────────────────────────
export const FOOTER = {
  copyright: "© 2025 Visual Air Media. All Rights Reserved.",
  tagline:   "Crafted with ❤️ in Bengaluru, India",
};
