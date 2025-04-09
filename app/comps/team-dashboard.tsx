"use client"

import Link from "next/link"
import { PublicTeamMember } from "../types/team"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"

interface TeamDashboardProps {
  teamName: string
  teamCode: string
  theme: string
  members: PublicTeamMember[]
}

export function TeamDashboard({ teamName, teamCode, theme, members }: TeamDashboardProps) {
  const firstMember = members[0]
  const college = firstMember?.College || "Unknown Institution"

  return (
    <div className="space-y-8 px-4 md:px-8 py-6 max-w-7xl mx-auto bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="border border-gray-600" asChild>
          <Link href="/team">
            <ArrowLeft className="h-5 w-5 text-white" />
          </Link>
        </Button>
        <h2 className="text-2xl font-bold">Team Dashboard</h2>
      </div>

      {/* Team Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-black shadow-xl border border-yellow-500/40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight drop-shadow">{teamCode}</h1>
            <p className="text-2xl uppercase font-semibold">{teamName}</p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end">
            <p className="text-lg font-medium">{theme}</p>
            <div className="mt-3 h-14 w-14 bg-black text-yellow-400 border border-yellow-500 rounded-lg flex items-center justify-center text-2xl font-bold shadow-inner">
              {teamCode.substring(0, 2)}
            </div>
          </div>
        </div>
      </div>

      {/* Project Status */}
      <div className="flex justify-end">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/50 bg-black/60 px-4 py-1 text-sm shadow-sm">
          <span className="text-yellow-400">Project Under Development</span>
          <ExternalLink className="h-4 w-4 text-yellow-400" />
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <Card
            key={`${member.Name}-${index}`}
            className="group bg-gray-900 border border-gray-700 hover:border-yellow-500/70 shadow-md hover:shadow-yellow-500/20 transition-transform duration-300 hover:scale-[1.03] hover:brightness-110"
          >
            <CardContent className="p-5 space-y-3 transition-colors duration-300 group-hover:text-yellow-300">
              <p className="text-xs text-gray-400 group-hover:text-yellow-400 font-medium">
                PARTICIPANT
              </p>
              <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300">
                {member.Name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* College Info */}
      <Card className="bg-gray-900 border border-gray-700 shadow-md">
        <CardContent className="p-6 flex justify-center items-center">
          <p className="text-center text-lg font-medium text-yellow-300">
            {college}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
