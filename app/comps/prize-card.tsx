import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface PrizeCardProps {
  rank: number
  title: string
  description: string
  rewards: string[]
  className?: string
}

export function PrizeCard({ rank, title, description, rewards, className }: PrizeCardProps) {
  return (
    <Card className={cn("relative overflow-hidden border-red-600 bg-black text-white", className)}>
      {/* Rank badge */}
      <div className="absolute top-4 right-4 flex items-center justify-center w-12 h-12 text-2xl font-bold text-white bg-red-600">
        {rank}
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-3xl font-bold text-center text-red-600">{title}</h3>
      </CardHeader>

      <CardContent className="space-y-6">
        <p className="text-center text-white/90">{description}</p>

        <div className="flex items-center justify-center gap-4 text-2xl font-bold">
          {rewards.map((reward, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">|</span>}
              <span>{reward}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
