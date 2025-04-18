import React from 'react'
import Home from './comps/Home'
import { StatsSection } from './comps/stat-section'
import SponsorsSection from './comps/sponsors'
import { Tracks } from './comps/tracks'
import FAQPage from './comps/faq'
import ProblemStatements from './comps/ProblemStatement'
import HackathonEssentials from './comps/hackathon-essentials'
// import { PrizeCard } from './comps/prize-card'

const page = () => {
  return (
    <div >
   
        <Home/>
        <StatsSection/>
        
        <SponsorsSection/>
        <Tracks/>
        <ProblemStatements/>
        <HackathonEssentials/>
        <FAQPage/>
        
    
        
    </div>
  )
}

export default page