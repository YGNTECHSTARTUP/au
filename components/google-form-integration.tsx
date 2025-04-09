"use client"

import { useState } from "react"
import { Calendar, Clock, DollarSign, Trophy, Users, Wifi, ExternalLink, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HackathonRegistrations() {
  const [isFormExpanded, setIsFormExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-8 text-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Hackathon Registration
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join us for an exciting 24-hour hackathon experience with amazing prizes and opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          {[
            { Icon: Clock, text: "24 Hrs" },
            { Icon: Trophy, text: "Virtual Badges" },
            { Icon: Wifi, text: "Live Stream" },
            { Icon: Trophy, text: "Special Track Prizes" },
            { Icon: Calendar, text: "16th - 17th April 2025" },
            { Icon: DollarSign, text: "Entry Fee - ₹399/Person" },
            { Icon: Users, text: "Max Crew Size - 05" },
          ].map(({ Icon, text }, idx) => (
            <div
              key={idx}
              className="border border-gray-800 bg-gray-900/50 rounded-md p-3 flex items-center justify-center gap-2 hover:bg-gray-800/50 transition-all duration-300"
            >
              <Icon className="h-5 w-5 text-purple-400" />
              <span className="text-white">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 mb-6">
          <button
            onClick={() => setIsFormExpanded(!isFormExpanded)}
            className={cn(
              "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 hover:from-purple-700 hover:to-pink-700",
              isFormExpanded && "mb-6",
            )}
          >
            {isFormExpanded ? "Hide Registration Form" : "Register Now"}
            <ArrowRight className={cn("h-5 w-5 transition-transform duration-300", isFormExpanded && "rotate-90")} />
          </button>

          {isFormExpanded && (
            <div className="relative overflow-hidden rounded-lg border border-purple-500/30 shadow-2xl animate-fadeIn">
              <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center px-4">
                <h3 className="text-white font-medium">Registration Form</h3>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdM1uafKvhkxFMHHYW-i8ezhLIYeRrlVzad3SzL4HwQuKaAAg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1 text-white/80 hover:text-white text-sm"
                >
                  Open in new tab <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div className="pt-12">
              <iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSdM1uafKvhkxFMHHYW-i8ezhLIYeRrlVzad3SzL4HwQuKaAAg/viewform?embedded=true"
  title="Hackathon Registration Form"
  className="w-full min-h-[700px] border-0 bg-white"
  loading="lazy"
>
  Loading…
</iframe>

               
                {/* </iframe> */}
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 bg-gray-900/50 border border-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-purple-400">Why Join Our Hackathon?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                <Trophy className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Amazing Prizes</h3>
              <p className="text-gray-400">Win exciting prizes and recognition for your innovative solutions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Networking</h3>
              <p className="text-gray-400">Connect with like-minded individuals and industry professionals</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center mb-4">
                <Wifi className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning Experience</h3>
              <p className="text-gray-400">Gain valuable skills and experience through hands-on problem solving</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
