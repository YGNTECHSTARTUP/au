"use client"

import { useState } from "react"
import Link from "next/link"
import { PublicTeamMember } from "../types/team"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, Briefcase, School } from "lucide-react"

interface TeamsTabProps {
  participants: PublicTeamMember[]
  teamCodes: Record<string, string>
}

export function TeamsTab({ participants, teamCodes }: TeamsTabProps) {
  const teamGroups: Record<string, PublicTeamMember[]> = {}

  participants.forEach((participant) => {
    const teamName = participant["Team Name"]
    if (teamName) {
      if (!teamGroups[teamName]) {
        teamGroups[teamName] = []
      }
      teamGroups[teamName].push(participant)
    }
  })

  const uniqueThemes = Array.from(
    new Set(participants.map((p) => p.Themes).filter(Boolean))
  ).sort() as string[]

  const [activeTab, setActiveTab] = useState("all")

  const renderTeamCard = (teamName: string, members: PublicTeamMember[]) => {
    const teamCode = teamCodes[teamName] || ""
    const theme = members[0]?.Themes || ""
    const college = members[0]?.College || ""
    const teamSlug = teamName.toLowerCase().replace(/\s+/g, "-")

    return (
      <Link href={`/teams/${teamSlug}`} key={teamName}>
        <Card className="h-full border border-muted  transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.01] hover:bg-muted/50 cursor-pointer rounded-2xl">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg font-semibold tracking-tight text-foreground">
                {teamName}
              </CardTitle>
              <Badge variant="outline" className="text-xs px-2 py-0.5 border border-primary bg-primary/10 text-primary font-mono rounded-md">
                {teamCode}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm  text-black">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>{theme}</span>
              </div>

              <div className="flex items-center gap-2">
                <School className="h-4 w-4 text-secondary-foreground" />
                <span className="truncate">{college}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent-foreground" />
                <div className="flex -space-x-2">
                  {members.slice(0, 4).map((member, i) => (
                    <Avatar
                      key={i}
                      className="h-7 w-7 border-2 border-background shadow-md"
                    >
                      <AvatarFallback className="text-[10px] font-medium bg-muted text-foreground">
                        {member.Name?.split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {members.length > 4 && (
                    <Avatar className="h-7 w-7 border-2 border-background bg-muted text-muted-foreground">
                      <AvatarFallback className="text-xs font-medium">
                        +{members.length - 4}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    )
  }

  return (
    <Tabs
      defaultValue="all"
      value={activeTab}
      onValueChange={setActiveTab}
      className="space-y-6"
    >
      <TabsList className="flex gap-2 overflow-x-auto p-2 rounded-xl border bg-muted/40 w-full scrollbar-thin">
        <TabsTrigger
          value="all"
          className="whitespace-nowrap text-sm font-medium rounded-lg px-4 py-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition"
        >
          All Teams
        </TabsTrigger>
        {uniqueThemes.map((theme) => (
          <TabsTrigger
            key={theme}
            value={theme}
            className="whitespace-nowrap text-sm font-medium rounded-lg px-4 py-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition"
          >
            {theme}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="all" className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(teamGroups).map(([teamName, members]) =>
            renderTeamCard(teamName, members)
          )}
        </div>
      </TabsContent>

      {uniqueThemes.map((theme) => (
        <TabsContent key={theme} value={theme} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(teamGroups)
              .filter(([, members]) => members[0]?.Themes === theme)
              .map(([teamName, members]) => renderTeamCard(teamName, members))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
