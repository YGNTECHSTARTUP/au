"use client"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function SponsorsSection() {
  return (
    <div id="sponsors" className="relative lg:-mt-16 bg-black text-white py-16 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-purple-900 to-purple-800">
      {/* Stars background */}
      {/* <StarBackground /> */}

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 -mt-16">Our Sponsors</h1>

        <p className="text-center max-w-4xl mx-auto mb-4 text-sm md:text-base">
          Our mission wouldn&apos;t be possible without the support of our amazing sponsors! They&apos;re the true
          crewmates behind the scenes, fueling this hackathon with resources and opportunities. A big thank you to them
          for helping us reach new heights!
        </p>

        <div className="text-center mb-12">
          <Link
            href="#contact"
            className="text-cyan-400 hover:text-cyan-300 transition-colors underline text-sm md:text-base"
          >
            Interested in being a sponsor or partner? Message us now.
          </Link>
        </div>

        <div className="space-y-12">
          {/* Gold Sponsors */}
          <div>
            <h2 className="text-xl font-bold mb-4">GOLD SPONSORS (ENGINEER TIER)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <SponsorCard imageUrl="/placeholder.svg?height=100&width=200" alt="Sponsor" text="SPONSORS" />
              <SponsorCard imageUrl="/placeholder.svg?height=100&width=200" alt="Sponsor" text="SPONSORS" />
              <SponsorCard imageUrl="/placeholder.svg?height=100&width=200" alt="Sponsor" text="SPONSORS" />
              <SponsorCard imageUrl="/placeholder.svg?height=100&width=200" alt="Sponsor" text="SPONSORS" />
              <SponsorCard imageUrl="/placeholder.svg?height=100&width=200" alt="Sponsor" text="SPONSORS" />
              <SponsorCard imageUrl="/placeholder.svg?height=100&width=200" alt="Sponsor" text="SPONSORS" />
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <h2 className="text-xl font-bold mb-4">SILVER SPONSORS (CREWMATE TIER)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <SponsorCard imageUrl="/placeholder.svg?height=100&width=200" alt="Sponsor" text="SPONSORS" />
              <SponsorCard imageUrl="/placeholder.svg?height=100&width=200" alt="Sponsor" text="SPONSORS" />
              <SponsorCard imageUrl="/placeholder.svg?height=100&width=200" alt="Sponsor" text="SPONSORS" />
              <SponsorCard imageUrl="/placeholder.svg?height=100&width=200" alt="Sponsor" text="SPONSORS" />
              <SponsorCard imageUrl="/placeholder.svg?height=100&width=200" alt="Sponsor" text="SPONSORS" />
            </div>
          </div>

          {/* Partners */}
          <div>
            <h2 className="text-xl font-bold mb-4">PARTNERS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <SponsorCard imageUrl="/a-hub.jpeg" alt="A-Hub" />
<SponsorCard imageUrl="/AICTE.jpeg" alt="AICTE" />
<SponsorCard imageUrl="/alcove.png" alt="Alcove" />
<SponsorCard imageUrl="/au-logo.png" alt="AU Logo" />
<SponsorCard imageUrl="/au-united.png" alt="AU United" />
<SponsorCard imageUrl="/Brainovision.png" alt="Brainovision" />
<SponsorCard imageUrl="/The Digifac.webp" alt="The Digifac" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SponsorCard({ imageUrl, alt, text }: { imageUrl: string; alt: string; text?: string }) {
  return (
    <Card className="bg-white rounded-md p-4 flex items-center justify-center h-24 overflow-hidden">
      {text ? (
        <span className="text-red-500 font-bold text-xl">{text}</span>
      ) : (
        <div className="relative w-full h-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={alt} fill className="object-contain" />
        </div>
      )}
    </Card>
  )
}

