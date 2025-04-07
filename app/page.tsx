import React from 'react'
import Home from './comps/Home'
import { StatsSection } from './comps/stat-section'
import SponsorsSection from './comps/sponsors'

const page = () => {
  return (
    <div>
        <Home/>
        <StatsSection/>
        <SponsorsSection/>
    </div>
  )
}

export default page