import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HackathonFooter() {
  // Website team members
  const websiteTeam = [
    { name: "Member 1", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 2", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 3", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 4", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 5", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 6", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 7", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 8", image: "/placeholder.svg?height=40&width=40" },
  ]

  // SusHacks team members
  const sushacksTeam = [
    { name: "Member 1", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 2", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 3", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 4", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 5", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 6", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 7", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 8", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 9", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 10", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 11", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 12", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 13", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 14", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 15", image: "/placeholder.svg?height=40&width=40" },
    { name: "Member 16", image: "/placeholder.svg?height=40&width=40" },
  ]

  // Community partners
  const communityPartners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Partner 2", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Partner 3", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Partner 4", logo: "/placeholder.svg?height=60&width=60" },
    { name: "Partner 5", logo: "/placeholder.svg?height=60&width=60" },
  ]

  // Navigation links
  const navLinks = [
    { name: "LOBBY", href: "#" },
    { name: "TEAMS", href: "#" },
    { name: "TIMELINE", href: "#" },
    { name: "PRIZES", href: "#" },
    { name: "GALLERY", href: "#" },
    { name: "ABOUT", href: "#" },
    { name: "FAQS", href: "#" },
  ]

  // Social links
  const socialLinks = [
    { name: "X.COM", href: "#" },
    { name: "DISCORD", href: "#" },
    { name: "LINKEDIN", href: "#" },
    { name: "INSTAGRAM", href: "#" },
  ]

  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 border-b border-gray-800 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* First box - Logo and registration */}
          <div className="flex flex-col items-center justify-center space-y-4 px-4 text-center md:items-start md:text-left">
            <div className="relative h-40 w-40 flex items-center justify-center">
              <h2 className="text-xl font-bold text-center">BUILD BARATH THROUGH AI</h2>
            </div>
            <p className="text-sm font-bold">
              DIVE DEEPER INTO THE SUSHACKS EXPERIENCE! REGISTER NOW TO JOIN THE COMMUNITY AND SECURE YOUR SPOT AT THE
              HACKATHON. LET&apos;S MAKE A DIFFERENCE TOGETHER!
            </p>
          </div>

          {/* Second box - Navigation */}
          <div className="px-4">
            <h3 className="mb-4 text-lg font-bold">BUILD BARATH THROUGH AI</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center text-sm hover:text-gray-300">
                    <span className="mr-2">•</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third box - Contact information */}
          <div className="px-4">
            <h3 className="mb-4 text-lg font-bold">BUILD BARATH THROUGH AI</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center text-sm hover:text-gray-300">
                    <span className="mr-2">•</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">SUSHACKS2023@GMAIL.COM</p>
            <p className="mt-4 text-sm text-gray-400">CONTACT US AT</p>
            <div className="mt-2 flex items-center">
              <div className="relative mr-2 h-10 w-10">
                <Image src="/placeholder.svg?height=40&width=40" alt="Institute Logo" fill className="object-contain" />
              </div>
              <div className="text-xs">
                <p>ANDHRA UNIVERSITY&apos;</p>
                <p>, VISAKHAPATNAM, ANDHRA PRADESH</p>
                <p>530049</p>
              </div>
            </div>
          </div>

          {/* Fourth box - Teams and partners */}
          <div className="px-4">
            <div className="mb-6">
              <h3 className="mb-4 text-lg font-bold">WEBSITE TEAM</h3>
              <div className="flex flex-wrap gap-2">
                {websiteTeam.map((member, index) => (
                  <Avatar key={`website-${index}`} className="h-10 w-10 border border-gray-700">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 text-lg font-bold">SUSHACKS TEAM</h3>
              <div className="flex flex-wrap gap-2">
                {sushacksTeam.map((member, index) => (
                  <Avatar key={`sushacks-${index}`} className="h-10 w-10 border border-gray-700">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold">COMMUNITY PARTNERS</h3>
              <div className="flex flex-wrap gap-4">
                {communityPartners.map((partner, index) => (
                  <div key={`partner-${index}`} className="relative h-14 w-14 overflow-hidden rounded-md bg-white p-1">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
