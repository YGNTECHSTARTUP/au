// import Image from "next/image"
// import { CountdownTimer } from "./comps/countdown-timer"
// import { Navbar } from "./navbar"
// import { Button } from "@/components/ui/button"
// import { Sparkles } from "lucide-react"
import Link from "next/link"
import { AnnouncementBanner } from "./announcement"
import Spline from "@splinetool/react-spline"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
// import { StatsSection } from "./stat-section"

export default function Home() {
  return (
    <div id="home" className="relative  min-h-screen overflow-hidden bg-gradient-to-b from-black to-purple-950 text-white">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        {/* <div className="stars-container">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 10}s`,
                backgroundColor: ["#fff", "#ffff00", "#00ffff", "#ff00ff", "#ff0000", "#00ff00"][
                  Math.floor(Math.random() * 6)
                ],
              }}
            />
          ))}
        </div> */}
      </div>


      <AnnouncementBanner />

      <main className="relative z-10">
        <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mx-auto text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-purple-400 leading-tight text-balance">
    BUILD BHARAT THROUGH AI
  </h1>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Content Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">


  <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
    ⚡ A national-level AI hackathon where brilliance meets breakthrough. <br />
    <span className="text-yellow-300 font-semibold">AU AI Hackathon</span> is your launchpad to build, innovate, and solve real-world problems with the power of AI.
  </p>

  <div className="mb-4 text-lg font-medium text-gray-300">
    <p className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
      <span className="text-yellow-300">🗓 16 - 17 APRIL 2025</span> •
      <span>📍 Algorithm Block, Andhra University College of Engineering, Visakhapatnam</span>
    </p>
  </div>

  <ul className="list-disc pl-5 mb-6 text-gray-200 space-y-2 text-left">
  <li><strong>🕘 Time:</strong> April 16th 9:00 AM to April 17th 3:00 PM</li>
  <li><strong>👥 Team Size:</strong> 3 to 5 Members</li>
  <li><strong>💸 Registration Fee:</strong> ₹399 per person</li>

  <h3 className="text-xl font-bold text-yellow-300 mt-4 mb-2">🚀 Why You *Can&apos;t* Miss This – Perks & Powerups</h3>

  <li><strong>₹1 Lakh Prize Pool</strong> – Build bold. Win big.</li>
  <li><strong>Certification & Swag</strong> – Show off your hustle.</li>
  <li><strong>Problem Statements Revealed Early</strong> – Get a head start!</li>
  <li><strong>Mentorship from Tech Giants</strong> – Code with the pros.</li>
  <li><strong>National-Level Recognition</strong> – Get spotted by recruiters & incubators.</li>
  <li><strong>🍽️ Meals Included:</strong> Lunch & dinner on April 16<sup>th</sup>, breakfast & lunch on April 17<sup>th</sup></li>
  <li><strong>☕ Refreshments</strong> available throughout the event</li>
  <li><strong>🏅 Participation Certificates</strong> for all</li>
  <li><strong>💼 Internship & Job Opportunities</strong> (incl. PPOs) via partner companies</li>
  <li><strong>🤝 Collaboration Opportunities</strong> to further develop your project</li>
  <li><strong>🌐 Networking</strong> with industry leaders, startup founders & AI experts</li>

  <li className="text-yellow-400">
    🔔 <strong>Note:</strong> The fee of ₹399 covers only the hackathon and the associated perks mentioned—it does not include anything beyond that.
  </li>
</ul>



  <p className="text-lg text-gray-300 mb-10 flex items-center justify-center lg:justify-start gap-2">
    <span>🚀 Show your spark. Collaborate, compete, and create the future of India with AI!</span>
  </p>

  <Link href="/form">
      <Button
        className="bg-gradient-to-r mx-auto hover:scale-105 from-yellow-400 via-orange-500 to-red-500 text-white hover:scale-105 transition-transform duration-300 shadow-lg rounded-2xl px-6 py-4 text-lg font-semibold flex items-center gap-2"
      >
        Register Now!
        <ArrowRight className="w-5 h-5" />
      </Button>
    </Link>

  <div className="flex justify-center lg:justify-start">
    {/* <Button
      size="lg"
      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-8 py-6 rounded-xl transition-all hover:scale-105 hover:shadow-xl shadow-[0_0_15px_rgba(255,215,0,0.5)]"
    >
      GET TICKETS
      <Sparkles className="ml-2 h-5 w-5" />
    </Button> */}
  </div>
</div>


            {/* Image / Logo Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] transition-transform hover:scale-105 duration-300">
              <Spline
        scene="https://prod.spline.design/c-Xu3qoQkzP0dyvV/scene.splinecode" 
      />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
