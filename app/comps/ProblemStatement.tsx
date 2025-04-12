"use client"

import { useState, useEffect } from "react"
import { QuoteBanner } from "./quote-banner"
import { ProblemStatement } from "../types/problem"
import { ProblemGrid } from "./problem-detail-modal"



const quotes = [
  {
    quote: "Innovation is seeing what everybody has seen and thinking what nobody has thought.",
    author: "Dr. Albert Szent-Györgyi",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
]

export default function ProblemStatements() {
  const [randomQuote, setRandomQuote] = useState(quotes[0])
  const [problemData, setProblemData] = useState<ProblemStatement[]>([])

  useEffect(() => {
    // Select a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setRandomQuote(quotes[randomIndex])

    // In a real app, you might fetch this data from an API
    // For now, we'll use the hardcoded data with some enhancements
    const enhancedProblems: ProblemStatement[] = [
      {
        id: "interview-scoring",
        title: "Interview Question Relevance Scoring",
        subtitle: "Ensure fair and effective technical interviews.",
        description:
          "Design a tool that processes recorded technical interviews and evaluates the relevance and difficulty of the questions asked to help standardize and improve interview quality.",
        features: [
          "Question relevance analysis",
          "Difficulty level prediction",
          "Bias and fairness assessment",
          "Cross-interview consistency",
          "Quality improvement suggestions",
        ],
        cta: "Score Interviews Smarter",
        difficulty: "medium",
        isFeatured: true,
      },
      {
        id: "voice-engagement",
        title: "Voice Energy & Engagement Tracker",
        subtitle: "Gauge energy and engagement through speech.",
        description:
          "Build a prototype that analyzes audio/video to assess voice modulation, energy, engagement levels, and balance of speaking versus listening during meetings or interviews.",
        features: [
          "Speech tone modulation detection",
          "Energy and fatigue indicators",
          "Speaking vs listening ratio",
          "Real-time engagement analysis",
          "Voice-based behavioral trends",
        ],
        cta: "Track Engagement",
        difficulty: "hard",
      },
      {
        id: "cross-culture-analyzer",
        title: "Cross-Cultural Communication Analyzer",
        subtitle: "Bridge cultural gaps in conversations.",
        description:
          "Develop a system to analyze cross-cultural dialogues, identifying non-verbal cues and communication mismatches to foster better understanding and collaboration.",
        features: [
          "Cultural misinterpretation detection",
          "Non-verbal cue analysis",
          "Pacing and phrasing review",
          "Real-time adjustment recommendations",
          "Inclusive communication enhancement",
        ],
        cta: "Analyze Culture Gaps",
        difficulty: "medium",
      },
      {
        id: "panel-consistency",
        title: "Interview Panel Consistency Checker",
        subtitle: "Standardize interview feedback across panels.",
        description:
          "Create an AI tool to review panel feedback for contradictions or bias, promoting fair assessments by identifying inconsistencies in interview recommendations.",
        features: [
          "Contradiction flagging",
          "Bias detection in feedback",
          "Cross-panel comparison",
          "Standardized scoring insights",
          "Recommendation alignment metrics",
        ],
        cta: "Check Panel Fairness",
        difficulty: "easy",
        isFeatured: true,
      },
      {
        id: "ai-lie-detector",
        title: "AI-Based Lie Detection & Fact Checker",
        subtitle: "Analyze speech for truth estimation.",
        description:
          "Build a system to analyze audio/video responses for signs of uncertainty or deception using voice tone, hesitations, and microexpressions.",
        features: [
          "Speech hesitation analysis",
          "Microexpression recognition",
          "Tone shift tracking",
          "Credibility estimation",
          "Real-time fact validation",
        ],
        cta: "Detect Deception Smartly",
        difficulty: "hard",
      },
      {
        id: "interview-feedback-ai",
        title: "Automated Interview Feedback Generator",
        subtitle: "Personalized feedback from AI.",
        description:
          "Create a system that analyzes interviews and generates actionable feedback for candidates, covering confidence, accuracy, clarity, and communication.",
        features: [
          "Communication clarity scoring",
          "Confidence & tone analysis",
          "Technical accuracy detection",
          "Bias-aware feedback generation",
          "Structured improvement tips",
        ],
        cta: "Generate Feedback Instantly",
        difficulty: "medium",
      },
    ]

    setProblemData(enhancedProblems)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">

      <QuoteBanner quote={randomQuote.quote} author={randomQuote.author} />

      <div className="mb-8">
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
          Explore these innovative problem statements focused on enhancing interview processes through AI and machine
          learning. Each challenge represents an opportunity to revolutionize how we conduct, analyze, and improve
          interviews.
        </p>
      </div>

      <ProblemGrid problems={problemData} />
    </div>
  )
}
