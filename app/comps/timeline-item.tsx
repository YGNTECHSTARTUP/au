import type React from "react"
import type { TimelineEvent } from "../types/timeline"

interface TimelineItemProps {
  event: TimelineEvent
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ event }) => {
  const { startTime, endTime, date, location, title } = event

  // Determine location color based on the location name
  const getLocationColor = (loc: string) => {
    if (loc.includes("ONLINE")) return "text-green-400"
    if (loc.includes("HALL")) return "text-yellow-400"
    if (loc.includes("LABS")) return "text-yellow-400"
    if (loc.includes("CANTEEN")) return "text-yellow-400"
    return "text-green-400"
  }

  return (
    <div className="relative pl-8 pr-4 py-4 mb-2 bg-black bg-opacity-70 rounded-md">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 ml-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-[150px_100px_1fr] gap-1 items-start">
        <div className="text-right pr-4">
          <div className="text-green-400 font-mono">{startTime}</div>
          {endTime && <div className="text-green-400 font-mono">{endTime}</div>}
        </div>
        <div className="text-gray-400 font-mono">{date}</div>
        <div>
          <div className={`${getLocationColor(location)} font-mono`}>{location}</div>
          <div className="text-white font-mono">{title}</div>
        </div>
      </div>
    </div>
  )
}
