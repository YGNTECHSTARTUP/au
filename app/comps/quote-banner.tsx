import { QuoteIcon } from "lucide-react"

interface QuoteBannerProps {
  quote: string
  author: string
}

export function QuoteBanner({ quote, author }: QuoteBannerProps) {
  return (
    <div className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-8 rounded-lg mb-8 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-start gap-4">
        <QuoteIcon className="h-10 w-10 flex-shrink-0 text-purple-300" />
        <div>
          <p className="text-xl md:text-2xl font-serif italic mb-4">{quote}</p>
          <p className="text-right text-purple-200 font-medium">— {author}</p>
        </div>
      </div>
    </div>
  )
}
