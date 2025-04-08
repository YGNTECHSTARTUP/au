import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AwardCardProps {
  number: number
  title: string
  description: string
  prize: string
  certificate: boolean
  className?: string
  titleClassName?: string
  numberClassName?: string
}

// Change to default export
export default function AwardCard({
  number,
  title,
  description,
  prize,
  certificate,
  className,
  titleClassName,
  numberClassName,
}: AwardCardProps) {
  return (
    <Card className={cn("relative border-2 h-full", className)}>
      <div
        className={cn(
          "absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-md font-bold text-xl",
          numberClassName,
        )}
      >
        {number}
      </div>
      <CardHeader className="pt-8 pb-2">
        <h2 className={cn("text-center text-2xl font-bold tracking-wider", titleClassName)}>{title}</h2>
      </CardHeader>
      <CardContent className="text-center px-6">
        <p className="text-sm md:text-base">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6 pt-4">
        <div className="text-center">
          <p className="text-xl font-bold tracking-wide">
            {prize} {certificate && <span className="mx-2">|</span>} CERTIFICATE
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}