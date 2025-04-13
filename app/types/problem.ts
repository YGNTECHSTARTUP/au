export interface ProblemStatement {
    id: string
    title: string
    subtitle: string
    description: string
    features: string[]
    cta: string
    // difficulty?: "easy" | "medium" | "hard"
    isFeatured?: boolean
  }
  