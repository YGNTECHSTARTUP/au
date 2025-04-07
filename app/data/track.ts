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
      id: "waste-ai",
      title: "Waste Reduction with AI",
      subtitle: "Smarter ways to reduce waste using technology.",
      description:
        "Leverage artificial intelligence to reduce, manage, and repurpose waste across industries with predictive insights and automation.",
      image: "/waste.jpg",
      features: [
        "AI waste classification",
        "Predictive waste analytics",
        "Smart recycling systems",
        "Zero-waste automation tools",
        "Data-driven reduction strategies",
      ],
      cta: "Reduce Waste with AI",
    },
    {
      id: "eco-reco",
      title: "Eco-Friendly Business & Product Recos",
      subtitle: "Driving sustainable choices with smart recommendations.",
      description:
        "Empower businesses and consumers to make eco-friendly decisions using recommendation engines tailored to sustainability preferences.",
      image: "/2.png",
      features: [
        "Green product finders",
        "Sustainable supply chain suggestions",
        "Eco-business audits",
        "Consumer impact calculators",
        "Carbon-conscious choices",
      ],
      cta: "Go Eco-Friendly",
    },
    {
      id: "disaster-relief",
      title: "Disaster Preparedness & Relief",
      subtitle: "Optimizing emergency responses with tech.",
      description:
        "Utilize AI and data systems to enhance disaster readiness, efficient resource distribution, and real-time relief efforts.",
      image: "/1.png",
      features: [
        "Emergency planning systems",
        "Real-time crisis mapping",
        "Resource optimization tools",
        "Community alert networks",
        "Disaster impact prediction",
      ],
      cta: "Be Disaster Ready",
    },
    {
      id: "green-travel",
      title: "Sustainable Travel & Transport",
      subtitle: "Innovations for greener mobility.",
      description:
        "Explore solutions for eco-friendly commuting, tourism, and transportation that reduce emissions and environmental impact.",
      image: "/7.png",
      features: [
        "Carbon-neutral travel platforms",
        "Green route planning",
        "Eco mobility sharing",
        "Sustainable tourism guides",
        "Smart public transport systems",
      ],
      cta: "Travel Sustainably",
    },
    {
      id: "food-waste",
      title: "Food Waste Management",
      subtitle: "Tackling food waste from farm to fork.",
      description:
        "Implement systems to track, reduce, and repurpose food waste in homes, businesses, and agriculture.",
      image: "/3.png",
      features: [
        "Smart inventory tools",
        "Surplus food donation apps",
        "Food spoilage detection",
        "Waste-to-energy solutions",
        "Farm waste optimization",
      ],
      cta: "Manage Food Waste",
    },
    {
      id: "green-building",
      title: "Green Building & Design",
      subtitle: "Constructing a sustainable future.",
      description:
        "Reimagine construction and design with eco-friendly materials, energy efficiency, and climate-conscious architecture.",
      image: "/4.png",
      features: [
        "Smart energy-efficient buildings",
        "Low-impact construction materials",
        "Sustainable urban planning",
        "Carbon-neutral designs",
        "Green certification tech",
      ],
      cta: "Design Green Spaces",
    },
    {
      id: "sustain-edu",
      title: "Sustainability Education",
      subtitle: "Empowering through personalized learning.",
      description:
        "Deliver customized sustainability education using adaptive learning technologies and gamified platforms.",
      image: "/5.png",
      features: [
        "Interactive learning modules",
        "Personalized eco-learning paths",
        "Gamified sustainability challenges",
        "Community-based education",
        "Green skill certifications",
      ],
      cta: "Educate for Change",
    },
    {
      id: "sustain-finance",
      title: "Sustainable Finance Tools",
      subtitle: "Investing in a better planet.",
      description:
        "Build tools that guide responsible investments, track ESG impact, and promote green financial literacy.",
      image: "/6.png",
      features: [
        "ESG investment trackers",
        "Green bonds analytics",
        "Impact investing platforms",
        "Sustainable budgeting apps",
        "Carbon offset investment tools",
      ],
      cta: "Finance Sustainability",
    },
    {
      id: "mental-health",
      title: "Mental Health & Well-being",
      subtitle: "Supporting holistic well-being.",
      description:
        "Develop technologies that promote mental wellness, early intervention, and community mental health support.",
      image: "/8.png",
      features: [
        "AI mental health assistants",
        "Mood tracking tools",
        "Wellness chatbots",
        "Community support platforms",
        "Mindfulness and therapy apps",
      ],
      cta: "Support Well-being",
    },
    {
      id: "wildcard",
      title: "Others - Your Domain",
      subtitle: "Innovate without limits.",
      description:
        "Have an impactful idea outside these domains? This is your space to create your own path and build for the future.",
      image: "/9.png",
      features: [
        "Your passion project",
        "Interdisciplinary innovation",
        "Emerging solutions",
        "Experimental tech",
        "Out-of-the-box ideas",
      ],
      cta: "Build Your Idea",
    },
  ]
  
