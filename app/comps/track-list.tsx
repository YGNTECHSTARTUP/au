"use client"

// import type { Track } from "@/types/track"
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
    <div className="h-full bg-gray-950/50">
      <ul className="divide-y divide-gray-800">
        {tracks.map((track) => (
          <li key={track.id}>
            <button
              onClick={() => onSelectTrack(track.id)}
              className={cn(
                "w-full text-left px-4 py-3 transition-colors",
                track.id === activeTrackId ? "bg-cyan-400 text-black font-medium" : "hover:bg-gray-800 text-gray-200",
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

