"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-yellow-500/20 via-purple-600/20 to-yellow-500/20 text-white py-3 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
        <div className="font-medium text-center flex flex-wrap items-center justify-center gap-2">
  <span className="text-yellow-300 font-bold">ANNOUNCEMENTS 📢</span>
  <span>Innovate, elevate, and empower!</span>
  <span className="inline-flex items-center">🤖 🇮🇳</span>
  <span>The future of Bharat starts now!</span>
  <span className="inline-flex items-center">🚀</span>
  <span>Registrations for</span>
  <span className="text-green-500 font-bold">Build Bharat through AI 2025</span>
  <span>are officially open.</span>
  <Link href="#" className="text-blue-400 hover:text-blue-300 underline transition-colors">
    Join the Revolution
  </Link>
</div>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 text-white/70 hover:text-white"
            aria-label="Close announcement"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

