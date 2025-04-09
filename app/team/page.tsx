"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ParticipantsTable } from "../comps/participants-table"
import { TeamsTab } from "../comps/teams-tab"
import { teamCodes } from "../data/team"
import { publicParticipants } from "../data/team"

export default function Home() {
  const tabs = ["participants", "teams", "mentors", "judges", "organizers"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10">
            <h1 className="text-4xl font-bold tracking-tight">Participants Dashboard</h1>
            <p className="text-gray-300 mt-2">
              View all participants and teams in the hackathon
            </p>
          </div>

          <Tabs defaultValue="participants" className="space-y-4">
  <div className="relative backdrop-blur-lg p-4 rounded-xl border border-white/10 overflow-hidden">
    {/* Scrollable Tab List */}
    <TabsList
      className="flex overflow-x-auto no-scrollbar space-x-2 sm:space-x-3 md:space-x-4 pr-10 pb-1"
    >
      {tabs.map((tab) => (
        <TabsTrigger
          key={tab}
          value={tab}
          className="whitespace-nowrap text-black hover:bg-white/20 hover:text-purple-800 transition-all duration-300 border border-white/10 rounded-lg px-4 py-2 text-sm font-medium shadow backdrop-blur active:scale-[0.98]  data-[state=active]:text-white data-[state=active]:bg-black"
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </TabsTrigger>
      ))}
    </TabsList>

    {/* Fade indicator */}
    <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-black/80 to-transparent z-10 rounded-r-xl" />
  </div>

  {/* Tab Panels */}
  <TabsContent value="participants" className="glass-card">
    <ParticipantsTable participants={publicParticipants} teamCodes={teamCodes} />
  </TabsContent>

  <TabsContent value="teams" className="glass-card">
    <TeamsTab participants={publicParticipants} teamCodes={teamCodes} />
  </TabsContent>

  <TabsContent value="mentors" className="glass-card">
    <div className="text-center py-10 text-gray-300">Mentors info coming soon 🚀</div>
  </TabsContent>

  <TabsContent value="judges" className="glass-card">
    <div className="text-center py-10 text-gray-300">Judges details will appear here 🧑‍⚖️</div>
  </TabsContent>

  <TabsContent value="organizers" className="glass-card">
    <div className="text-center py-10 text-gray-300">Meet the Organizers 🤝</div>
  </TabsContent>
</Tabs>

        </div>
      </div>
    </div>
  )
}
