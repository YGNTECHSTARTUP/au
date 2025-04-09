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
    <div className="space-y-8 px-4 md:px-8 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="border border-gray-300" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
          </Link>
        </Button>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Team Dashboard</h2>
      </div>

      {/* Team Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 text-black shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">{teamCode}</h1>
            <p className="text-2xl uppercase">{teamName}</p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end">
            <p className="text-lg font-medium">{theme}</p>
            <div className="mt-3 h-14 w-14 bg-black text-white rounded-lg flex items-center justify-center text-2xl font-bold shadow-lg">
              {teamCode.substring(0, 2)}
            </div>
          </div>
        </div>
      </div>

      {/* Project Status */}
      <div className="flex justify-end">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-1 text-sm shadow-sm dark:bg-gray-800/60 dark:border-gray-700">
          <span className="text-gray-800 dark:text-gray-200">Project Under Development</span>
          <ExternalLink className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <Card
            key={`${member.Name}-${index}`}
            className="group bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-sm transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-transparent hover:bg-gradient-to-tr hover:from-pink-500 hover:via-yellow-400 hover:to-orange-400 dark:hover:from-pink-600 dark:hover:via-yellow-300 dark:hover:to-orange-500"
          >
            <CardContent className="p-5 space-y-3 transition-colors duration-300 group-hover:text-white">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium group-hover:text-white/90">
                PARTICIPANT
              </p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-white">
                {member.Name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* College Info */}
      <Card className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-sm">
        <CardContent className="p-6 flex justify-center items-center">
          <p className="text-center text-lg font-medium text-gray-900 dark:text-white">
            {college}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
