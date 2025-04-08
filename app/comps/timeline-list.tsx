import type React from "react"
import type { TimelineEvent } from "../types/timeline"
import { TimelineItem } from "./timeline-item"

interface TimelineListProps {
  events: TimelineEvent[]
  activeDay: number
}

export const TimelineList: React.FC<TimelineListProps> = ({ events, activeDay }) => {
  // Filter events by active day
  const filteredEvents = events.filter((event) => event.day === activeDay)

  return (
    <div className="max-w-4xl mx-auto">
      {filteredEvents.map((event, index) => (
        <TimelineItem key={index} event={event} />
      ))}
    </div>
  )
}
