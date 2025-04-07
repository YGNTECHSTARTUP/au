import React from 'react'
import Home from './comps/Home'
import { StatsSection } from './comps/stat-section'
import SponsorsSection from './comps/sponsors'
import { Tracks } from './comps/tracks'
// import AbstractPainting from './comps/halftone-waves'

const page = () => {
  return (
    <div>
   
        <Home/>
        <StatsSection/>
        
        <SponsorsSection/>
        <Tracks/>
    </div>
  )
}

export default page