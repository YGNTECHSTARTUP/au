"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PublicTeamMember } from "../types/team"
// import type { PublicTeamMember } from "@/types/team"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Filter, Search } from "lucide-react"

interface ParticipantsTableProps {
  participants: PublicTeamMember[]
  teamCodes: Record<string, string>
}

export function ParticipantsTable({ participants, teamCodes }: ParticipantsTableProps) {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [filterTeam, setFilterTeam] = useState<string | null>(null)

  // Get unique team names for filtering
  const uniqueTeams = Array.from(new Set(participants.map((p) => p["Team Name"]).filter(Boolean))).sort() as string[]

  // Filter participants based on search term and team filter
  const filteredParticipants = participants.filter((participant) => {
    const matchesSearch =
      !searchTerm ||
      participant.Name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant["Team Name"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.College?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTeamFilter = !filterTeam || participant["Team Name"] === filterTeam

    return matchesSearch && matchesTeamFilter
  })

  const handleRowClick = (teamName: string | null) => {
    if (teamName) {
      // Create a URL-friendly version of the team name
      const teamSlug = teamName.toLowerCase().replace(/\s+/g, "-")
      router.push(`/teams/${teamSlug}`)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search participants or teams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              {filterTeam ? `Team: ${filterTeam}` : "Filter by Team"}
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem onClick={() => setFilterTeam(null)}>All Teams</DropdownMenuItem>
            {uniqueTeams.map((team) => (
              <DropdownMenuItem key={team} onClick={() => setFilterTeam(team)}>
                {team}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="hidden md:table-cell">College</TableHead>
                <TableHead className="hidden lg:table-cell">Course</TableHead>
                <TableHead className="hidden lg:table-cell">Branch</TableHead>
                <TableHead className="hidden md:table-cell">Year</TableHead>
                <TableHead className="text-right">Team Code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredParticipants.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    No participants found
                  </TableCell>
                </TableRow>
              ) : (
                filteredParticipants.map((participant, index) => (
                  <TableRow
                    key={`${participant.Name}-${index}`}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleRowClick(participant["Team Name"])}
                  >
                    <TableCell className="font-medium">{participant.Name}</TableCell>
                    <TableCell>{participant["Team Name"]}</TableCell>
                    <TableCell className="hidden md:table-cell">{participant.College}</TableCell>
                    <TableCell className="hidden lg:table-cell">{participant.Course}</TableCell>
                    <TableCell className="hidden lg:table-cell">{participant["Branch "]}</TableCell>
                    <TableCell className="hidden md:table-cell">{participant["Year of Study"]}</TableCell>
                    <TableCell className="text-right font-mono">
                      {participant["Team Name"] ? teamCodes[participant["Team Name"]] : ""}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Showing {filteredParticipants.length} of {participants.length} participants
      </p>
    </div>
  )
}
