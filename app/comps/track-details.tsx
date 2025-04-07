import Image from "next/image"
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
  
  
interface TrackDetailProps {
  track: Track
}

export function TrackDetail({ track }: TrackDetailProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
      <div className="relative min-h-[400px] lg:min-h-[600px] overflow-hidden">
        <Image
          src={track.image}
          alt={track.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 space-y-4">
          <div className="inline-block px-4 py-2 bg-cyan-400 text-black font-medium rounded-md">{track.title}</div>

          {track.character && (
            <div className="absolute bottom-0 right-4 w-32 h-32">
              <Image
                src={track.character || "/placeholder.svg"}
                alt="Track character"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>

      <div className="p-6 lg:p-8 space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">{track.title}</h2>
          <p className="text-gray-300">{track.subtitle}</p>
        </div>

        <div className="text-gray-200">
          <p className="mb-4">{track.description}</p>
          {track.features && (
            <ul className="list-disc pl-5 space-y-1">
              {track.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>

        {track.cta && (
          <div className="pt-4">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-md transition-colors">
              {track.cta}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

