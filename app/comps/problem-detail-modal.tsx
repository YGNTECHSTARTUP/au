"use client"

import { useState } from "react"
import { ProblemStatement } from "../types/problem"
import { ProblemCard } from "./problem-card"
import { ProblemDetailModal } from "./problem-grid"

interface ProblemGridProps {
  problems: ProblemStatement[]
}

export function ProblemGrid({ problems }: ProblemGridProps) {
  const [selectedProblem, setSelectedProblem] = useState<ProblemStatement | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (problem: ProblemStatement) => {
    setSelectedProblem(problem)
    setIsModalOpen(true)
  }

  return (
    <div>
      {problems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No problem statements found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} onClick={handleCardClick} />
          ))}
        </div>
      )}

      <ProblemDetailModal
        problem={selectedProblem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
