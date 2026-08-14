import pushkarGuardsImg from '../assets/pushkar_guards.jpg';
import licenceImg from '../assets/licence.jpg';
import logoImg from '../assets/logo.png';

export const siteConfig = {
  name: "Pushkar Security Services",
  tagline: "Reliable Security. Trusted Protection.",
  phone: "8888534926",
  phoneDisplay: "+91 88885 34926",
  whatsapp: "8888534926",
  whatsappRaw: "918888534926",
  whatsappUrl: "https://wa.me/918888534926",
  telUrl: "tel:8888534926",
  email: "contact@pushkarsecurity.com",
  address: "Shop No. 1, Mauli Group Office, Sakhare Wasti, Hinjawadi, Mulshi, Pune – 411057",
  licenceNo: "PSA/L/24/MH/2026/MAR/3/6002",
  licenceState: "Maharashtra",

  logoAsset: logoImg,
  guardsAsset: pushkarGuardsImg,
  licenceAsset: licenceImg,

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Licence", href: "#licence" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ],

  trustPoints: [
    "Professional Security Guards",
    "24/7 Security Coverage",
    "Uniformed & Identified Staff",
    "Customized Security Solutions"
  ],

  services: [
    {
      id: "corporate-offices",
      title: "Corporate Offices",
      shortDesc: "Professional security personnel for corporate offices, business centers, and IT facilities.",
      icon: "Building2",
      badge: "Commercial",
      fullDesc: "Disciplined front desk and main gate security for corporate office environments. Guards oversee visitor logs, employee ID verification, and building access control.",
      features: ["Access Management", "Visitor Verification", "Front Desk Oversight"]
    },
    {
      id: "housing-societies",
      title: "Housing Societies",
      shortDesc: "Dedicated security guards for residential apartments, gated societies, and housing complexes.",
      icon: "Home",
      badge: "Residential",
      fullDesc: "Round-the-clock protection for housing societies. Guards monitor visitor entries, delivery personnel, vehicle parking, and conduct regular night patrols.",
      features: ["24/7 Gate Patrol", "Visitor & Vehicle Recording", "Night Shift Monitoring"]
    },
    {
      id: "open-plots",
      title: "Open Plots",
      shortDesc: "Perimeter vigilance and watchman deployment to protect open land and plots from encroachment.",
      icon: "Landmark",
      badge: "Land Protection",
      fullDesc: "Guards deployed for open plots and vacant land premises to prevent unauthorized trespass, boundary encroachment, or illegal dumping.",
      features: ["Land Boundary Watch", "Trespass Prevention", "Regular Site Checks"]
    },
    {
      id: "hotels",
      title: "Hotels",
      shortDesc: "Courteous and vigilant security personnel for hotels, resorts, and hospitality establishments.",
      icon: "Sparkles",
      badge: "Hospitality",
      fullDesc: "Discreet and courteous security guarding for hotel entrances, lobby access, parking lots, and guest areas.",
      features: ["Guest Assistance", "Lobby Access Control", "Parking Management"]
    },
    {
      id: "industrial-companies",
      title: "Industrial Companies & Factories",
      shortDesc: "Security guards for manufacturing units, industrial sites, plants, and warehouses.",
      icon: "Factory",
      badge: "Industrial",
      fullDesc: "Vigilant protection for factory machinery, raw materials, and industrial premises. Handling cargo gate passes and perimeter surveillance.",
      features: ["Material & Truck Pass Checks", "Factory Gate Oversight", "Fire-Safety Awareness"]
    },
    {
      id: "other-establishments",
      title: "Other Establishments",
      shortDesc: "Customized security deployments for commercial shops, institutions, and private properties.",
      icon: "ShieldAlert",
      badge: "Custom Deployment",
      fullDesc: "Tailored guard deployments structured according to specific client property layout and operational requirements.",
      features: ["Custom Guard Shift", "Vigilant Oversight", "Supervisor Inspection"]
    },
    {
      id: "events",
      title: "Events & Functions",
      shortDesc: "Security staff and crowd management for events, functions, and social gatherings.",
      icon: "Users",
      badge: "Events",
      fullDesc: "Organized entry screening, crowd guidance, and perimeter vigilance for private, social, and commercial events.",
      features: ["Crowd Access Control", "VIP Entry Guarding", "Parking Coordination"]
    }
  ],

  whyChooseUs: [
    {
      title: "Professional Security Guards",
      desc: "Trained personnel focused on maintaining safety, discipline and access control.",
      icon: "UserCheck"
    },
    {
      title: "24/7 Security Coverage",
      desc: "Security personnel can provide day and night coverage through shift-based deployment.",
      icon: "Clock"
    },
    {
      title: "Uniformed & Identified Personnel",
      desc: "Security personnel are deployed in uniform with valid identification.",
      icon: "Award"
    },
    {
      title: "Supervisor Monitoring",
      desc: "Supervisors conduct checks to monitor guard alertness and performance.",
      icon: "ShieldCheck"
    },
    {
      title: "Fire-Fighting Awareness",
      desc: "Personnel receive basic fire-fighting training.",
      icon: "Flame"
    },
    {
      title: "Customized Security Solutions",
      desc: "Security deployment can be structured according to the requirements of the client/site.",
      icon: "Sliders"
    }
  ],

  gallery: [
    {
      id: 1,
      category: "Industrial Security",
      title: "Pushkar Security Guards at Industrial Facility",
      desc: "Uniformed Pushkar security personnel deployed on duty at an industrial plant site.",
      url: pushkarGuardsImg
    },
    {
      id: 2,
      category: "Security Personnel",
      title: "Disciplined Pushkar Security Force",
      desc: "Trained and uniformed security guards providing 24/7 site protection.",
      url: pushkarGuardsImg
    },
    {
      id: 3,
      category: "Site Protection",
      title: "Active Duty Guard Deployment",
      desc: "Vigilant guard deployment covering day and night shifts.",
      url: pushkarGuardsImg
    },
    {
      id: 4,
      category: "Professional Security",
      title: "Uniformed & Identified Guards",
      desc: "Security guards equipped with company uniform and valid identification.",
      url: pushkarGuardsImg
    }
  ],

  processSteps: [
    {
      step: "01",
      title: "Contact Us",
      desc: "Call or WhatsApp us at 8888534926 with your security needs and property details.",
      icon: "PhoneCall"
    },
    {
      step: "02",
      title: "Site Assessment",
      desc: "We analyze your property location, entry points, and staffing requirements.",
      icon: "FileSearch"
    },
    {
      step: "03",
      title: "Security Plan",
      desc: "We propose the ideal deployment schedule, guard count, and responsibilities.",
      icon: "ShieldCheck"
    },
    {
      step: "04",
      title: "Guard Deployment",
      desc: "Trained security guards are deployed on-site under active supervisor oversight.",
      icon: "CheckCircle2"
    }
  ],

  sectors: [
    { title: "Corporate Offices", icon: "🏢", tag: "Offices & Tech Parks" },
    { title: "Housing Societies", icon: "🏠", tag: "Apartments & Gated Communities" },
    { title: "Industrial Sites", icon: "🏭", tag: "Factories & Plants" },
    { title: "Hotels", icon: "🏨", tag: "Hospitality & Resorts" },
    { title: "Open Plots", icon: "🏗️", tag: "Vacant Land & Perimeters" },
    { title: "Events & Functions", icon: "🎉", tag: "Private & Corporate Events" },
    { title: "Other Establishments", icon: "🏪", tag: "Custom Deployments" }
  ],

  testimonials: [
    {
      quote: "Professional and disciplined security service. The team understood our society requirements and provided suitable security personnel promptly.",
      author: "Sample Client — Residential Society Secretary",
      location: "Pune, MH",
      rating: 5
    },
    {
      quote: "Good communication and reliable security support for our office premises. The guards are punctual and well-groomed.",
      author: "Sample Client — Commercial Facility Manager",
      location: "Pune, MH",
      rating: 5
    },
    {
      quote: "Provided excellent event security personnel for our function. Smooth visitor handling and parking management.",
      author: "Sample Client — Event Organizer",
      location: "Pune, MH",
      rating: 5
    }
  ]
};
