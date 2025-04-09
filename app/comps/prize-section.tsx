
import AwardsGrid from "./awards-grid"
import { PrizeCard } from "./prize-card"
import { SectionHeader } from "./section-header"


export function PrizesSection() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-black">
      {/* Stars background */}
      <div className="absolute inset-0 z-0">
        <StarBackground />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <SectionHeader
          title="Prizes"
          description="Earn stellar rewards for outsmarting challenges and becoming the ultimate crewmate. Show your skills and claim victory before the impostors catch up!"
          className="text-center text-white mb-12"
        />

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <PrizeCard
            rank={1}
            title="GRAND PRIZE"
            description="This year, the Grand Prize winner will receive [TBA] in cash, along with a prestigious certificate. To claim this top spot, you'll need to impress the judges with your innovation, creativity, and technical expertise."
            rewards={["[TBA] CASH PRIZE", "CERTIFICATE"]}
            className="col-span-full"
          />

          {/* You can add more prize cards here */}
        </div>
        <AwardsGrid/>
      </div>
    </section>
  )
}

// Simple star background component
function StarBackground() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        />
      ))}
    </div>
  )
}
