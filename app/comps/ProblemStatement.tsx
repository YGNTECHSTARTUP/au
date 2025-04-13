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
        id: "realtime-llm-quality-control",
        title: "Real-Time Quality Control for LLM Interactions",
        subtitle: "Catch hallucinations as they happen.",
        description:
          "Build a prototype to detect and adjust for known LLM errors in real-time during interactive sessions like voice assistants, minimizing hallucinations and improving reliability.",
        features: [
          "Real-time hallucination detection",
          "Voice assistant interaction monitoring",
          "Adaptive response correction",
          "Confidence scoring per response",
          "Modular LLM integration layer",
        ],
        cta: "Start Real-Time Monitoring",
        // difficulty: "hard",
      },
      {
        id: "interview-normalisation-ai",
        title: "AI/ML Normalisation for Interviews",
        subtitle: "Fair ranking across interviewers.",
        description:
          "Develop a solution that processes video interviews for a specific role and normalizes results across different interviewers to provide an unbiased ranking of candidates.",
        features: [
          "Interviewer bias detection",
          "Candidate ranking system",
          "Cross-interview data normalization",
          "Video analytics pipeline",
          "Role-specific feedback generation",
        ],
        cta: "Normalize Interview Results",
        // difficulty: "hard",
      },
      {
        id: "body-language-ai",
        title: "AI & ML Body Language Analyzer",
        subtitle: "Understand non-verbal cues from video.",
        description:
          "Prototype a tool that analyzes video footage to assess body language and soft skills of a speaker, offering structured insights for communication training or interview feedback.",
        features: [
          "Facial expression analysis",
          "Gesture and posture detection",
          "Soft skill scoring system",
          "Camera-facing interaction insights",
          "Improvement suggestions",
        ],
        cta: "Analyze My Body Language",
        // difficulty: "medium",
      },      
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
        // difficulty: "medium",
        // isFeatured: true,
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
        // difficulty: "hard",
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
        // difficulty: "medium",
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
        // difficulty: "easy",
        // isFeatured: true,
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
        // difficulty: "hard",
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
        // difficulty: "medium",
      },
      {
        id: "open-innovation",
        title: "Open Innovation",
        subtitle: "Solve real-world problems with bold, boundary-pushing ideas.",
        description:
          "Open Innovation invites you to identify pressing challenges around you — from everyday inefficiencies to global issues — and craft disruptive, tech-powered solutions. You have the freedom to innovate beyond predefined tracks and build what truly matters.",
        features: [
          "Define your own problem statement",
          "Freedom to explore any domain",
          "Innovate beyond constraints",
          "Tackle local or global challenges",
          "Drive real, meaningful impact",
        ],
        cta: "Build What Truly Matters",
        // difficulty: "variable",
      }
    ]

    setProblemData(enhancedProblems)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">

      <QuoteBanner quote={randomQuote.quote} author={randomQuote.author} />

      <div className="mb-8">
        <p className="text-xl text-center text-gray-100 max-w-3xl mx-auto">
        These aren&apos;t just problem statements — they&apos;re real-world challenges waiting for bold solutions. Whether you tackle one or bring your own, this is your chance to build with purpose, think big, and make an impact.

Let’s solve what matters. Let’s build the future.
        </p>
      </div>

      <ProblemGrid problems={problemData} />
    </div>
  )
}
