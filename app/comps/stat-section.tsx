"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { CountdownTimer } from "./countdown-timer"
import { Rocket } from "lucide-react"

interface StatItemProps {
  value: number
  label: string
  color: string
  duration?: number
  prefix?: string
  suffix?: string
}

const StatItem = ({ value, label, color, duration = 2000, prefix = "", suffix = "" }: StatItemProps) => {
    const [count, setCount] = useState(0)
    const countRef = useRef<HTMLDivElement>(null)
    const isInView = useIntersectionObserver(countRef)
    const [hasAnimated, setHasAnimated] = useState(false)
  
    useEffect(() => {
      if (isInView && !hasAnimated) {
        setHasAnimated(true)
  
        const startTime = performance.now()
  
        const animate = (timestamp: number) => {
          const progress = Math.min((timestamp - startTime) / duration, 1)
          const currentCount = Math.floor(progress * value)
          setCount(currentCount)
  
          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setCount(value)
          }
        }
  
        requestAnimationFrame(animate)
      }
    }, [isInView, value, duration, hasAnimated])
  
    return (
      <div className="flex flex-col items-center min-h-[100px]" ref={countRef}>
        <div className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-2 ${color}`}>
          <span>
            {prefix}
            {count}
            {suffix}
          </span>
        </div>
        <div
          className={`px-4 py-2 rounded-md text-center text-white font-medium ${
            color.includes("text-") ? color.replace("text-", "bg-") : "bg-purple-600"
          }`}
        >
          {label}
        </div>
      </div>
    )
  }
  
  
// Custom hook for intersection observer
function useIntersectionObserver(ref: React.RefObject<HTMLElement | null>) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref])

  return isIntersecting
}

export function StatsSection() {
  return (
    <section className="relative py-1    min-h-screen overflow-hidden bg-gradient-to-t from-black to-purple-950 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="stars-container">
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
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6 relative z-10">
  <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300 mb-6">
    Before You Build, Read This!
  </h2>

  <p className="text-xl text-gray-200">
    Get ready for an electrifying <span className="font-bold text-yellow-300">2-day AI Hackathon</span> where creativity meets cutting-edge tech! Whether you&apos;re an AI prodigy or just stepping into the world of innovation, this is your chance to shine.
  </p>

  <p className="text-xl text-gray-200">
    Join forces with brilliant minds, tackle real-world problem statements, and create impactful AI-driven solutions. From <span className="font-bold text-purple-400">machine learning marvels</span> to <span className="font-bold text-red-400">smart web/mobile apps</span>, we’re giving you the tools to turn ideas into reality.
  </p>

  <p className="text-xl text-gray-200">
    Expect intense coding sprints, mentorship from industry leaders, non-stop collaboration, and loads of fun! 🧠✨ Oh—and yes, there’s plenty of swag, prizes, and AU Fest access waiting for you. 
    <Rocket className="inline h-5 w-5 text-blue-400 animate-pulse" /> 
    Just a heads up: <span className="font-bold text-green-400">₹399 registration fee per person is non-refundable</span>, so make sure your team’s ready for the grind!
  </p>

  {/* Countdown Timer */}
  <div className="mt-8">
    <h3 className="text-2xl font-bold text-purple-300 mb-4">Countdown to Innovation:</h3>
    <CountdownTimer targetDate="2025-04-16T09:00:00" />
  </div>
</div>


          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-8 relative z-10">
            <StatItem value={500} label="ATTENDEES" color="text-red-500" suffix="+" />
            <StatItem value={10} label="MENTORS" color="text-green-500" suffix="+" />
            <StatItem value={2} label="DAYS" color="text-blue-500" prefix="0" />
            <StatItem value={12} label="TRACKS" color="text-purple-500" />
          </div>
        </div>
      </div>
    </section>
  )
}

