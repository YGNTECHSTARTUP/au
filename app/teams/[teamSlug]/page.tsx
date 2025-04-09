"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { TeamDashboard } from "@/app/comps/team-dashboard"
// import { TeamDashboard } from "@/components/team-dashboard"
import { teamCodes } from "@/app/data/team"
import { PublicTeamMember } from "@/app/types/team"
// import { mockParticipants } from "@/data/mock-data"
import { publicParticipants } from "@/app/data/team"
// import type { PublicTeamMember } from "@/types/team"

export default function TeamPage() {
  const params = useParams()
  const teamSlug = params.teamSlug as string
  const [teamData, setTeamData] = useState<{
    teamName: string
    teamCode: string
    theme: string
    members: PublicTeamMember[]
  } | null>(null)

  useEffect(() => {
    // Convert slug back to potential team name formats
    const possibleTeamName = teamSlug.replace(/-/g, " ").toUpperCase()

    // Find team members case-insensitively
    const teamMembers = publicParticipants.filter((p) => p["Team Name"]?.toUpperCase() === possibleTeamName)

    if (teamMembers.length > 0) {
      const actualTeamName = teamMembers[0]["Team Name"] || ""
      setTeamData({
        teamName: actualTeamName,
        teamCode: teamCodes[actualTeamName] || "",
        theme: teamMembers[0].Themes || "",
        members: teamMembers,
      })
    }
  }, [teamSlug])

  if (!teamData) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold">Team not found</h1>
        <p className="mt-2 text-muted-foreground">The team you&apos;re looking for doesn&apos;t exist or has been removed.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 max-w-7xl">
      <TeamDashboard
        teamName={teamData.teamName}
        teamCode={teamData.teamCode}
        theme={teamData.theme}
        members={teamData.members}
      />
    </div>
  )
}
