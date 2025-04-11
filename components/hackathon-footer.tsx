import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="px-4">
    <h3 className="mb-4 text-lg font-bold">{title}</h3>
    {children}
  </div>
)

const AvatarGroup = ({ members, prefix }: { members: { name: string; image: string }[]; prefix: string }) => (
  <div className="flex flex-wrap gap-2">
    {members.map((member, index) => (
      <Avatar key={`${prefix}-${index}`} className="h-10 w-10 border border-gray-700">
        <AvatarImage src={member.image} alt={member.name} />
        <AvatarFallback className="bg-black">{member.name.charAt(0)}</AvatarFallback>
      </Avatar>
    ))}
  </div>
)

const ImageGrid = ({ items }: { items: { name: string; logo: string }[] }) => (
  <div className="flex flex-wrap gap-4">
    {items.map((item, index) => (
      <div key={index} className="relative h-14 w-14 overflow-hidden rounded-md bg-white p-1">
        <Image src={item.logo} alt={item.name} fill className="object-contain" />
      </div>
    ))}
  </div>
)

const LinkList = ({ links }: { links: { name: string; href: string }[] }) => (
  <ul className="space-y-2">
    {links.map((link) => (
      <li key={link.name}>
        <Link href={link.href} className="flex items-center text-sm hover:text-gray-300">
          <span className="mr-2">•</span>
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
)

export default function HackathonFooter() {
  const websiteTeam = Array.from({ length: 8 }, (_, i) => ({ name: `W${i + 1}`, image: "/placeholder.svg" }))
  const BuildbharatTeam = Array.from({ length: 16 }, (_, i) => ({ name: `S${i + 1}`, image: "/placeholder.svg" }))
  const communityPartners = [
    { name: "AICTE", logo: "/AICTE.jpeg" },
    { name: "Alcove", logo: "/alcove.png" },
    { name: "AU Logo", logo: "/au-logo.png" },
    { name: "AU United", logo: "/au-united.png" },
    { name: "Brainovision", logo: "/Brainovision.png" },
    { name: "The Digifac", logo: "/The Digifac.webp" },
  ];
  
  const navLinks = [
    { name: "HOME", href: "/#home" },        // Replaces "LOBBY"
    { name: "ABOUT", href: "/#stats" },      // Assuming you want to keep TEAMS
    { name: "OPERATIONS", href: "/timeline" },
    {name:"TEAMS",href:"/team"}, // Replaces "TIMELINE"
    { name: "BOUNTIES", href: "/prizes" },   // Replaces "PRIZES"  // Assuming you want to keep GALLERY
    { name: "ABOUT", href: "/#stats" },      // Replaces "ABOUT"
    { name: "FAQS", href: "/#faq" }          // Replaces "FAQS"
  ]
  const socialLinks = [
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/buildbharatthrough.ai?igsh=aXBjYjVyamhxMjR4",
    },
    {
      name: "LINKEDIN",
      href: "https://www.linkedin.com/company/build-bharat-through-ai/",
    },
  ];
  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Title on Top */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
            BUILD BHARAT THROUGH AI
          </h2>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 gap-10 border-t border-gray-800 pt-10 md:grid-cols-2 lg:grid-cols-4">
  {/* Navigation */}
  <FooterSection title="NAVIGATION">
    <LinkList links={navLinks} />
  </FooterSection>

  {/* Social */}
  <FooterSection title="CONNECT">
    <LinkList links={socialLinks} />
    <p className="mt-4 text-sm break-all">buildbharatthroughai@gmail.com</p>

    <div className="mt-4 flex items-start gap-3">
      <div className="relative h-10 w-10 shrink-0">
        <Image src="/au-logo.png" alt="Institute Logo" fill className="object-contain" />
      </div>
      <div className="text-xs leading-tight">
        <p>Andhra University</p>
        <p>Visakhapatnam, AP - 530003</p>
      </div>
    </div>
  </FooterSection>

  {/* Website Team */}
  <FooterSection title="ORGANIZERS">
    <AvatarGroup members={BuildbharatTeam} prefix="Buildbharat" />
  </FooterSection>

  {/* Our Partners */}
  <FooterSection title="OUR PARTNERS">
    <div className="mb-6">
      <p className="text-sm font-medium mb-2">Student Co-ordinators</p>
      <AvatarGroup members={websiteTeam} prefix="website" />
    </div>
    <div className="mb-6">
      <p className="text-sm font-medium mb-2">Website Team</p>
      <AvatarGroup members={websiteTeam} prefix="website" />
    </div>
    <div className="mb-4">
      <p className="text-sm font-medium mb-2">Community Partners</p>
      <ImageGrid items={communityPartners} />
    </div>
    <div className="text-sm leading-relaxed space-y-1 mt-4">
      <p>- M. Ashish – 📞 +91 73826 12478</p>
      <p>- P. Dharani – 📞 +91 77024 86098</p>
    </div>
  </FooterSection>
</div>

<div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
  <a href="/event-policy" className="hover:text-white transition-colors duration-200">
    POLICY
  </a>
  <a href="/terms" className="hover:text-white transition-colors duration-200">
    TERMS
  </a>
  <a href="/code-of-conduct" className="hover:text-white transition-colors duration-200">
    CODE OF CONDUCT
  </a>
</div>
        {/* Footer Bottom */}
        <p className="text-center mt-12 text-xs text-gray-500">
          © 2025 Build Bharat Through AI. All rights reserved.
          <br/>
          Design Inspired by Buildbharat 2025💓
        </p>
      </div>
    </footer>
  )
}
