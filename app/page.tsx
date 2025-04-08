import React from 'react'
import Home from './comps/Home'
import { StatsSection } from './comps/stat-section'
import SponsorsSection from './comps/sponsors'
import { Tracks } from './comps/tracks'
import FAQPage from './comps/faq'
// import { PrizeCard } from './comps/prize-card'

const page = () => {
  return (
    <div>
   
        <Home/>
        <StatsSection/>
        
        <SponsorsSection/>
        <Tracks/>
        <FAQPage/>
        
    
        
    </div>
  )
}

export default page