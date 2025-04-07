"use client"

import { useState } from "react"
import { TrackList } from "./track-list"
import { TrackDetail } from "./track-details"
import { Navigation } from "./navigation"
// import { Navigation } from "@/components/navigation"
// import { trackData } from "@/data/tracks"
import { trackData } from "../data/track"

export function Tracks() {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0)
  const activeTrack = trackData[activeTrackIndex]

  const handlePrevTrack = () => {
    setActiveTrackIndex((prev) => (prev === 0 ? trackData.length - 1 : prev - 1))
  }

  const handleNextTrack = () => {
    setActiveTrackIndex((prev) => (prev === trackData.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
      <Navigation onPrev={handlePrevTrack} onNext={handleNextTrack} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="md:col-span-1">
          <TrackList
            tracks={trackData}
            activeTrackId={activeTrack.id}
            onSelectTrack={(id) => {
              const index = trackData.findIndex((track) => track.id === id)
              if (index !== -1) setActiveTrackIndex(index)
            }}
          />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <TrackDetail track={activeTrack} />
        </div>
      </div>
    </div>
  )
}

