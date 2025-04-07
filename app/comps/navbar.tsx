"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    { name: "COMMAND CENTER", href: "#" },   // Instead of LOBBY
    { name: "MISSION", href: "#" },          // Instead of ABOUT
    { name: "THEMES", href: "#" },           // Instead of TRACKS
    { name: "OPERATIONS", href: "#" },       // Instead of TIMELINE
    { name: "BOUNTIES", href: "#" },         // Instead of PRIZES
    { name: "SPONSORS", href: "#" },        // Instead of SPONSORS
    { name: "FAQS", href: "#" },            // Instead of FAQS
  ]
  

  return (
    <nav className="relative z-50 bg-black/50 backdrop-blur-md border-b border-purple-900/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
            Build Bharat Through AI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
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
          <div className="hidden md:block">
            <Button className="bg-white text-black hover:bg-gray-200">GET TICKETS</Button>
          </div>

          </Link>
     
          {/* Mobile menu button */}
          <div className="md:hidden">
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
        <div className="md:hidden bg-black/95 backdrop-blur-md">
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
            <Link href="/forms"  >
            <Button className="w-full mt-4 bg-white text-black hover:bg-gray-200" >GET TICKETS</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

