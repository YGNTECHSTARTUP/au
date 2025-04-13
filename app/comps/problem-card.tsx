"use client"

import { useState } from "react"
import type { ProblemStatement } from "../types/problem"
// import type { ProblemStatement } from "@/types/problem"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StarIcon, CheckCircleIcon } from "lucide-react"

interface ProblemCardProps {
  problem: ProblemStatement
  onClick: (problem: ProblemStatement) => void
}

export function ProblemCard({ problem, onClick }: ProblemCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // const difficultyColor = {
  //   easy: "bg-green-100 text-green-800",
  //   medium: "bg-yellow-100 text-yellow-800",
  //   hard: "bg-red-100 text-red-800",
  // }

  return (
    <Card
      className={`h-full transition-all duration-300 ${isHovered ? "shadow-xl transform -translate-y-1" : "shadow-md"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="relative pb-2">
        {problem.isFeatured && (
          <div className="absolute -top-1 -right-1">
            <Badge className="bg-amber-500 text-white">
              <StarIcon className="h-3 w-3 mr-1" /> Featured
            </Badge>
          </div>
        )}
        {/* {problem.difficulty && (
          <div className="absolute top-3 left-3">
            <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor[problem.difficulty]}`}>
              {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
            </span>
          </div>
        )} */}
        <h3 className="text-xl font-bold mt-4">{problem.title}</h3>
        <p className="text-gray-500">{problem.subtitle}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{problem.description}</p>
        <div className="space-y-2">
          {problem.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
          {problem.features.length > 3 && (
            <p className="text-sm text-gray-500 pl-6">+{problem.features.length - 3} more features</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => onClick(problem)}>
          {problem.cta}
        </Button>
      </CardFooter>
    </Card>
  )
}
