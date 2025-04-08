import type React from "react"

interface TimelineHeaderProps {
  title: string
  description: string
}

export const TimelineHeader: React.FC<TimelineHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-8 px-4">
      <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
      <p className="text-white text-sm md:text-base max-w-4xl mx-auto">{description}</p>
    </div>
  )
}
