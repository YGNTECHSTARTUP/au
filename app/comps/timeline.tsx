"use client"

import { useState } from "react"
import { TimelineHeader } from "./timeline-header"

// import { TimelineHeader } from "./components/timeline-header"
import { DaySelector } from "./day-selecter"
// import { DaySelector } from "./day-selector"
import { TimelineList } from "./timeline-list"
import { timelineEvents } from "../data/events"
// import { TimelineList } from "./components/timeline-list"
// import { timelineEvents } from "./data/events"
// import { TimelineEvent } from "../data/events"
// import { TimelineEvent } from "../types/timeline"
export default function Timeline() {
  const [activeDay, setActiveDay] = useState<number>(1)

  const title = "Timeline"
  const description =
    "Begin your mission with registration and the opening ceremony before diving into the thrilling hacking period. Refuel with lunch, dinner, and breakfast as you navigate tasks. Conclude with evaluation, uncovering the winners, and the grand valedictory function—complete your mission without getting ejected!"

  return (
    <div
      className="min-h-screen bg-black bg-opacity-90 py-10 px-4"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 20%, rgba(0, 100, 100, 0.05) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(100, 0, 100, 0.05) 0%, transparent 20%)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <TimelineHeader title={title} description={description} />
        <DaySelector activeDay={activeDay} onDayChange={setActiveDay} />
        <TimelineList events={timelineEvents} activeDay={activeDay} />
      </div>
    </div>
  )
}
