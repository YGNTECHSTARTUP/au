"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationProps {
  onPrev: () => void
  onNext: () => void
}

export function Navigation({ onPrev, onNext }: NavigationProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-white/10  backdrop-blur-md rounded-xl shadow-md bg-black/95">
     <div className="text-white font-extrabold text-3xl">THEMES</div>
      <div className="flex gap-3">
        <button
          onClick={onPrev}
          className="h-10 w-10 flex cursor-pointer items-center justify-center bg-purple-400/80 hover:bg-purple-500 text-black rounded-lg shadow-lg transition-all duration-200"
          aria-label="Previous track"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={onNext}
          className="h-10 w-10 flex items-center cursor-pointer justify-center bg-purple-400/80 hover:bg-purple-500 text-black rounded-lg shadow-lg transition-all duration-200"
          aria-label="Next track"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
