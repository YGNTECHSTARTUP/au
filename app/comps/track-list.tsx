"use client"

export interface Track {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  character?: string
  features?: string[]
  cta?: string
}

import { cn } from "@/lib/utils"

interface TrackListProps {
  tracks: Track[]
  activeTrackId: string
  onSelectTrack: (id: string) => void
}

export function TrackList({ tracks, activeTrackId, onSelectTrack }: TrackListProps) {
  return (
    <div className="h-full bg-white/5 backdrop-blur-md rounded-xl shadow-inner border border-white/10">
      <ul className="divide-y divide-white/10">
        {tracks.map((track) => (
          <li key={track.id} >
            <button
              onClick={() => onSelectTrack(track.id)}
              className={cn(
                "w-full text-left px-5 py-4 transition-all duration-200 ease-in-out rounded-md cursor-pointer",
                track.id === activeTrackId
                  ? "bg-purple-400/90 text-black font-semibold shadow-lg ring-2 ring-purple-300"
                  : "hover:bg-white/10 text-gray-100"
              )}
            >
              {track.title.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
