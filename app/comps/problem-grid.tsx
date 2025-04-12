"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { ProblemStatement } from "../types/problem"
// import type { ProblemStatement } from "@/types/problem"
import { CheckCircleIcon } from "lucide-react"

interface ProblemDetailModalProps {
  problem: ProblemStatement | null
  isOpen: boolean
  onClose: () => void
}

export function ProblemDetailModal({ problem, isOpen, onClose }: ProblemDetailModalProps) {
  if (!problem) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg text-black">
        <DialogHeader>
          <DialogTitle>{problem.title}</DialogTitle>
          <DialogDescription>{problem.subtitle}</DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <p className="mb-4">{problem.description}</p>

          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-2">
            {problem.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">{problem.cta}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
