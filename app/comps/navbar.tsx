"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    { name: "HOME", href: "/#home" },   // Instead of LOBBY
    { name: "ABOUT", href: "/#stats" },          // Instead of ABOUT
    { name: "THEMES", href: "/#themes" },           // Instead of TRACKS
    { name: "OPERATIONS", href: "timeline" },
    { name: "TEAMS", href: "/team" },         // Instead of TIMELINE
    { name: "BOUNTIES", href: "/prizes" },         // Instead of PRIZES
    { name: "SPONSORS", href: "/#sponsors" },
    {name:"FACILITIES",href:"/facilities"},        // Instead of SPONSORS
    { name: "FAQS", href: "/#faq" },            // Instead of FAQS
  ]
  

  return (
    <nav className="sticky top-0 z-50 bg-black backdrop-blur-lg border-b border-purple-900/50 shadow-lg">

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
            Build Bharat Through AI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-1 py-2 text-sm font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Get Tickets Button */}
          <Link href="/form">
          <div className="hidden lg:block">
            <Button className="bg-white cursor-pointer text-black hover:bg-gray-200 bg-gradient-to-b from-yellow-400 to-orange-500 hover:scale-105">Register Now</Button>
          </div>

          </Link>
     
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/form"  >
            <Button className="w-full mt-4 bg-white text-black hover:bg-gray-200" >GET TICKETS</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

