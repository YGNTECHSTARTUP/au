// import type { Track } from "@/types/track"
export interface Track {
    id: string
    title: string
    subtitle: string
    description: string
    image: string
    character?: string
    features?: string[]
    cta?: string
  }
  
  
export const trackData: Track[] = [
  {
    id: "fintech",
    title: "FinTech Innovation",
    subtitle: "Revolutionizing financial systems and services.",
    description:
      "This track focuses on innovative solutions in finance, including digital banking, cryptocurrency, blockchain applications, payment systems, and financial inclusion.",
    image: "/waste.jpg",
    // character: "/placeholder.svg?height=128&width=128",
    features: [
      "Digital banking solutions",
      "Blockchain applications",
      "Payment systems",
      "Financial inclusion technologies",
      "Cryptocurrency innovations",
    ],
    cta: "Explore FinTech",
  },
  {
    id: "healthtech",
    title: "HealthTech Advancements",
    subtitle: "Transforming healthcare delivery and patient outcomes.",
    description:
      "Explore innovations in healthcare technology, from telemedicine and wearable health monitors to AI-powered diagnostics and personalized medicine solutions.",
    image: "/waste.jpg",
    features: [
      "Telemedicine platforms",
      "Health monitoring devices",
      "AI diagnostics",
      "Electronic health records",
      "Remote patient monitoring",
    ],
    cta: "Discover HealthTech",
  },
  {
    id: "edtech",
    title: "EdTech Revolution",
    subtitle: "Reimagining learning for the digital age.",
    description:
      "Discover technologies that are transforming education, from adaptive learning platforms and virtual classrooms to educational games and immersive learning experiences.",
    image: "/waste.jpg",
    features: [
      "Adaptive learning platforms",
      "Virtual classrooms",
      "Educational games",
      "Learning management systems",
      "AR/VR educational experiences",
    ],
    cta: "Learn More",
  },
  {
    id: "agritech",
    title: "AgriTech Solutions",
    subtitle: "Innovating for sustainable food systems.",
    description:
      "Explore technologies revolutionizing agriculture, including precision farming, IoT sensors, drone monitoring, vertical farming, and supply chain innovations.",
    image: "/waste.jpg",
    features: [
      "Precision agriculture",
      "IoT farm sensors",
      "Drone crop monitoring",
      "Vertical farming systems",
      "Agricultural supply chain tech",
    ],
    cta: "Explore AgriTech",
  },
  {
    id: "greentech",
    title: "Sustainability and GreenTech",
    subtitle: "Technologies for a sustainable future.",
    description:
      "Discover innovations addressing environmental challenges, from renewable energy and carbon capture to sustainable materials and circular economy solutions.",
    image: "/waste.jpg",
    features: [
      "Renewable energy tech",
      "Carbon capture solutions",
      "Sustainable materials",
      "Circular economy platforms",
      "Climate monitoring systems",
    ],
    cta: "Go Green",
  },
  {
    id: "retail",
    title: "Retail and E-Commerce Tech",
    subtitle: "Transforming the shopping experience.",
    description:
      "Explore technologies reshaping retail, from augmented reality shopping and personalized recommendations to inventory management and omnichannel solutions.",
    image: "/waste.jpg",
    features: [
      "AR shopping experiences",
      "AI-powered recommendations",
      "Inventory management systems",
      "Omnichannel retail solutions",
      "Voice commerce",
    ],
    cta: "Shop the Future",
  },
  {
    id: "mobility",
    title: "Travel and Mobility",
    subtitle: "Innovations in transportation and travel.",
    description:
      "Discover technologies transforming how we move, from electric vehicles and autonomous transportation to smart cities and travel planning platforms.",
    image: "/waste.jpg",
    features: [
      "Electric vehicle tech",
      "Autonomous transportation",
      "Smart city mobility",
      "Travel planning platforms",
      "Shared mobility solutions",
    ],
    cta: "Explore Mobility",
  },
  {
    id: "social",
    title: "Social Impact Tech",
    subtitle: "Technology for positive change.",
    description:
      "Explore innovations addressing social challenges, from accessibility tools and disaster response tech to platforms for community engagement and social services.",
    image: "/waste.jpg",
    features: [
      "Accessibility technologies",
      "Disaster response systems",
      "Community engagement platforms",
      "Social service innovations",
      "Digital inclusion solutions",
    ],
    cta: "Make an Impact",
  },
  {
    id: "logistics",
    title: "Logistics and Supply Chain",
    subtitle: "Optimizing global supply networks.",
    description:
      "Discover technologies transforming logistics, from blockchain for supply chain transparency to autonomous delivery, warehouse automation, and predictive analytics.",
    image: "/waste.jpg",
    features: [
      "Blockchain supply tracking",
      "Autonomous delivery",
      "Warehouse automation",
      "Predictive logistics analytics",
      "Last-mile delivery solutions",
    ],
    cta: "Optimize Logistics",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity and Privacy",
    subtitle: "Protecting digital assets and identities.",
    description:
      "Explore innovations in digital security, from zero-trust architectures and biometric authentication to privacy-preserving technologies and threat intelligence.",
    image: "/waste.jpg",
    features: [
      "Zero-trust security frameworks",
      "Biometric authentication",
      "Privacy-preserving technologies",
      "Threat intelligence platforms",
      "Secure communication tools",
    ],
    cta: "Secure Your Future",
  },
  {
    id: "web3",
    title: "Decentralized Web (Web3)",
    subtitle: "Building the internet of value.",
    description:
      "Discover technologies powering the decentralized web, from blockchain platforms and smart contracts to decentralized finance (DeFi) and non-fungible tokens (NFTs).",
    image: "/waste.jpg",
    features: [
      "Blockchain platforms",
      "Smart contract applications",
      "Decentralized finance (DeFi)",
      "Non-fungible tokens (NFTs)",
      "Decentralized autonomous organizations",
    ],
    cta: "Enter Web3",
  },
  {
    id: "wildcard",
    title: "Wildcard (Open Innovation)",
    subtitle: "Breakthrough ideas beyond categories.",
    description:
      "This track is for innovative solutions that don't fit neatly into other categories. Bring your most creative and groundbreaking ideas to solve emerging challenges.",
    image: "/waste.jpg",
    features: [
      "Cross-domain innovations",
      "Emerging technologies",
      "Novel applications",
      "Experimental solutions",
      "Future-focused concepts",
    ],
    cta: "Think Outside the Box",
  },
]

