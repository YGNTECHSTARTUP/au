import type { TeamMember, PublicTeamMember } from "../types/team"
// import { fullTeamData } from "../data/teamFullData" // Import your full data
import teamData from "./teams.json"
// Convert full team member to public view
export const toPublicTeamMember = (member: TeamMember): PublicTeamMember => ({
  Name: member.Name,
  College: member.College,
  Course: member.Course,
  "Branch ": member["Branch "],
  "Year of Study": member["Year of Study"],
  City: member.City,
  State: member.State,
  Themes: member.Themes,
  "Team Name": member["Team Name"],
})

// Get all public members
export const getPublicTeamMembers = (fullData: TeamMember[]): PublicTeamMember[] => {
  return fullData.map(toPublicTeamMember)
}

// Get all unique team names from public data
export const getUniqueTeams = (participants: PublicTeamMember[]): string[] => {
  const teamNames = participants
    .map((p) => p["Team Name"])
    .filter((value, index, self) => value !== null && self.indexOf(value) === index) as string[]

  return teamNames.sort()
}

// Generate a team code from the name
export const generateTeamCode = (teamName: string): string => {
  if (!teamName) return ""
  const code = teamName
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()

  return `${code}${Math.floor(Math.random() * 100).toString().padStart(2, "0")}`
}

// Generate and export the codes
export const publicParticipants = getPublicTeamMembers(teamData)
export const teamCodes: Record<string, string> = {}

getUniqueTeams(publicParticipants).forEach((team) => {
  teamCodes[team] = generateTeamCode(team)
})
