"use client"

import type React from "react"

interface DaySelectorProps {
  activeDay: number
  onDayChange: (day: number) => void
}

export const DaySelector: React.FC<DaySelectorProps> = ({ activeDay, onDayChange }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => onDayChange(1)}
        className={`px-6 py-2 rounded-md font-bold transition-colors ${
          activeDay === 1 ? "bg-orange-500 text-white" : "bg-white text-gray-800 hover:bg-gray-200"
        }`}
      >
        DAY 1
      </button>
      <button
        onClick={() => onDayChange(2)}
        className={`px-6 py-2 rounded-md font-bold transition-colors ${
          activeDay === 2 ? "bg-orange-500 text-white" : "bg-white text-gray-800 hover:bg-gray-200"
        }`}
      >
        DAY 2
      </button>
    </div>
  )
}
