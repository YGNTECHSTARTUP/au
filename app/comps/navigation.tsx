"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationProps {
  onPrev: () => void
  onNext: () => void
}

export function Navigation({ onPrev, onNext }: NavigationProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-gray-700">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold">C</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="font-mono text-gray-300">XXXXXXXXX</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          className="h-10 w-10 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black rounded-md transition-colors"
          aria-label="Previous track"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={onNext}
          className="h-10 w-10 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black rounded-md transition-colors"
          aria-label="Next track"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

