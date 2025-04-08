import React from 'react'
import Home from './comps/Home'
import { StatsSection } from './comps/stat-section'
import SponsorsSection from './comps/sponsors'
import { Tracks } from './comps/tracks'
import FAQPage from './comps/faq'
// import { PrizeCard } from './comps/prize-card'
import { PrizesSection } from './comps/prize-section'
import AwardsGrid from './comps/awards-grid'
// import AbstractPainting from './comps/halftone-waves'

const page = () => {
  return (
    <div>
   
        <Home/>
        <StatsSection/>
        
        <SponsorsSection/>
        <Tracks/>
        <FAQPage/>
        
        <PrizesSection/>
        <AwardsGrid/>
        
    </div>
  )
}

export default page