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
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ── HERO SECTION ─────────────────────────────────────────
export const HERO = {
  badge: "✦ Creative Studio · Est. 2020",
  headline1: "Where Visuals",
  headline2: "Take Flight",
  highlightWord: "Flight",
  description:
    "We transform ideas into stunning visual stories. Long-form films, short-form content, motion graphics, and UI/UX — all under one roof.",
  cta1: { label: "View Our Work", href: "#portfolio" },
  cta2: { label: "Get a Quote", href: "#contact" },
  stats: [
    { number: "300+", label: "Projects Delivered" },
    { number: "80+", label: "Happy Clients" },
    { number: "4+", label: "Years of Excellence" },
  ],
};

// ── SERVICES SECTION ─────────────────────────────────────
export const SERVICES = [
  {
    id: "longform",
    icon: "🎬",
    title: "Long Form Videos",
    subtitle: "Cinematic storytelling",
    description:
      "Documentary-grade edits, brand films, interview series, and YouTube long-form content that captivates and retains viewers till the very end.",
    tags: ["Brand Films", "Documentaries", "YouTube Series", "Corporate Videos"],
    portfolioPath: "/portfolio/longform",
    color: "pink",
  },
  {
    id: "shortform",
    icon: "⚡",
    title: "Short Form Videos",
    subtitle: "Built for virality",
    description:
      "Thumb-stopping Reels, TikToks, YouTube Shorts, and social cuts engineered for engagement, reach, and platform algorithm performance.",
    tags: ["Instagram Reels", "YouTube Shorts", "TikTok", "Ad Cuts"],
    portfolioPath: "/portfolio/shortform",
    color: "purple",
  },
  // {
  //   id: "motion",
  //   icon: "🌀",
  //   title: "Motion Graphics",
  //   subtitle: "Animation that wows",
  //   description:
  //     "Explainer animations, 2D/3D motion sequences, kinetic typography, logo reveals, and visual effects that bring brands to life.",
  //   tags: ["Explainer Videos", "Logo Animation", "3D Motion", "Infographics"],
  //   portfolioPath: "/portfolio/motion",
  //   color: "blue",
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
  },
];

// ── PORTFOLIO PAGES ──────────────────────────────────────
export const PORTFOLIO = {
  longform: {
    title: "Long Form Videos",
    description: "Cinematic brand films, documentaries & YouTube series",
    items: [
      { id: 1, title: "Brand Documentary – TechCorp", category: "Documentary", duration: "12 min", thumbnail: "https://picsum.photos/seed/lf1/600/400", tags: ["Documentary", "Corporate"] },
      { id: 2, title: "YouTube Series – The Build", category: "YouTube Series", duration: "28 min", thumbnail: "https://picsum.photos/seed/lf2/600/400", tags: ["YouTube", "Series"] },
      { id: 3, title: "Product Launch Film – NovaTech", category: "Brand Film", duration: "5 min", thumbnail: "https://picsum.photos/seed/lf3/600/400", tags: ["Brand Film", "Product"] },
      { id: 4, title: "Corporate Annual Report", category: "Corporate", duration: "8 min", thumbnail: "https://picsum.photos/seed/lf4/600/400", tags: ["Corporate", "Annual"] },
      { id: 5, title: "Startup Story – FinEdge", category: "Documentary", duration: "15 min", thumbnail: "https://picsum.photos/seed/lf5/600/400", tags: ["Startup", "Story"] },
      { id: 6, title: "Event Highlight – Summit 2024", category: "Event", duration: "6 min", thumbnail: "https://picsum.photos/seed/lf6/600/400", tags: ["Event", "Summit"] },
    ],
  },
  shortform: {
    title: "Short Form Videos",
    description: "Viral Reels, Shorts & social-first content",
    items: [
      { id: 1, title: "Product Reel – AirFlow", category: "Instagram Reel", duration: "30 sec", thumbnail: "https://picsum.photos/seed/sf1/600/400", tags: ["Reel", "Product"] },
      { id: 2, title: "Brand Story – 60s Cut", category: "Brand", duration: "60 sec", thumbnail: "https://picsum.photos/seed/sf2/600/400", tags: ["Brand", "Story"] },
      { id: 3, title: "Tutorial Short – Design Tips", category: "YouTube Short", duration: "45 sec", thumbnail: "https://picsum.photos/seed/sf3/600/400", tags: ["Tutorial", "YouTube"] },
      { id: 4, title: "Event Teaser – TechFest", category: "Teaser", duration: "15 sec", thumbnail: "https://picsum.photos/seed/sf4/600/400", tags: ["Event", "Teaser"] },
      { id: 5, title: "Ad Cut – SneakerDrop", category: "Ad", duration: "30 sec", thumbnail: "https://picsum.photos/seed/sf5/600/400", tags: ["Ad", "Product"] },
      { id: 6, title: "TikTok Series – Day in Life", category: "TikTok", duration: "55 sec", thumbnail: "https://picsum.photos/seed/sf6/600/400", tags: ["TikTok", "Series"] },
    ],
  },
  motion: {
    title: "Motion Graphics",
    description: "2D/3D animation, explainers & kinetic typography",
    items: [
      { id: 1, title: "Logo Reveal – BrandX", category: "Logo Animation", duration: "5 sec", thumbnail: "https://picsum.photos/seed/mg1/600/400", tags: ["Logo", "Reveal"] },
      { id: 2, title: "Explainer – SaaS Product", category: "Explainer", duration: "90 sec", thumbnail: "https://picsum.photos/seed/mg2/600/400", tags: ["Explainer", "SaaS"] },
      { id: 3, title: "Kinetic Typography – Manifesto", category: "Typography", duration: "60 sec", thumbnail: "https://picsum.photos/seed/mg3/600/400", tags: ["Typography", "Kinetic"] },
      { id: 4, title: "Infographic Animation – Data2024", category: "Infographic", duration: "45 sec", thumbnail: "https://picsum.photos/seed/mg4/600/400", tags: ["Infographic", "Data"] },
      { id: 5, title: "3D Product Spin – EarPods", category: "3D Animation", duration: "15 sec", thumbnail: "https://picsum.photos/seed/mg5/600/400", tags: ["3D", "Product"] },
      { id: 6, title: "Social Motion Pack – Agency", category: "Social Pack", duration: "Various", thumbnail: "https://picsum.photos/seed/mg6/600/400", tags: ["Social", "Pack"] },
    ],
  },
  uiux: {
    title: "UI/UX Development",
    description: "Web design, app interfaces & front-end development",
    items: [
      { id: 1, title: "SaaS Dashboard – AnalyticsPro", category: "Web App", thumbnail: "https://picsum.photos/seed/ux1/600/400", tags: ["Dashboard", "SaaS"] },
      { id: 2, title: "E-Commerce Redesign – ShopFlow", category: "E-Commerce", thumbnail: "https://picsum.photos/seed/ux2/600/400", tags: ["E-Commerce", "Redesign"] },
      { id: 3, title: "Mobile App – HealthTrack", category: "Mobile", thumbnail: "https://picsum.photos/seed/ux3/600/400", tags: ["Mobile", "Health"] },
      { id: 4, title: "Landing Page – StartupXYZ", category: "Landing Page", thumbnail: "https://picsum.photos/seed/ux4/600/400", tags: ["Landing", "Startup"] },
      { id: 5, title: "Portfolio Site – Photographer", category: "Portfolio", thumbnail: "https://picsum.photos/seed/ux5/600/400", tags: ["Portfolio", "Design"] },
      { id: 6, title: "Branding + Web – NovaBrand", category: "Branding", thumbnail: "https://picsum.photos/seed/ux6/600/400", tags: ["Branding", "Web"] },
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
    { icon: "🎯", title: "Strategy First", desc: "Every visual decision is backed by a clear creative strategy." },
    { icon: "✨", title: "Pixel Perfect", desc: "Obsessive attention to detail in every frame and every pixel." },
    { icon: "🚀", title: "On-Time Delivery", desc: "We respect your deadlines as much as you do." },
    { icon: "🤝", title: "True Partnership", desc: "Your success is our success — we treat your brand like our own." },
  ],
};

// ── BROCHURE DOWNLOAD ────────────────────────────────────
export const BROCHURE = {
  headline: "Get Our Full Services Brochure",
  description:
    "Download our detailed brochure covering all services, packages, pricing tiers, and past work samples.",
  fileName: "Visual_Air_Media_Brochure_2025.pdf",
  // 🔧 Replace this with your actual PDF hosted URL
  fileUrl: "/brochure/Visual_Air_Media_Brochure_2025.pdf",
  buttonLabel: "Download Brochure (PDF)",
};

// ── EMAILJS CONFIG (Contact Form) ────────────────────────
// 🔧 Replace these with your actual EmailJS credentials
// Sign up free at: https://www.emailjs.com/
export const EMAILJS_CONFIG = {
  SERVICE_ID: "YOUR_SERVICE_ID",       // e.g. "service_abc123"
  TEMPLATE_ID: "YOUR_TEMPLATE_ID",     // e.g. "template_xyz789"
  PUBLIC_KEY: "YOUR_PUBLIC_KEY",       // e.g. "user_abc123xyz"
};

// ── CONTACT SECTION ───────────────────────────────────────
export const CONTACT = {
  headline: "Let's Create Something",
  highlightWord: "Extraordinary",
  subtext: "Got a project in mind? We'd love to hear from you.",
  formFields: {
    namePlaceholder: "Your Full Name",
    emailPlaceholder: "Your Work Email",
    servicePlaceholder: "Service you need",
    messagePlaceholder: "Tell us about your project...",
    submitLabel: "Send Message",
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
  tagline: "Crafted with ❤️ in Bengaluru, India",
};
