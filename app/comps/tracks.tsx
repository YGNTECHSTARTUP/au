"use client"

import { useState } from "react"
import { TrackList } from "./track-list"
import { TrackDetail } from "./track-details"
import { Navigation } from "./navigation"
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
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900/90 min-w-full backdrop-blur-sm border border-purple-700 shadow-2xl overflow-hidden p-6 space-y-6">
      <Navigation onPrev={handlePrevTrack} onNext={handleNextTrack} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
