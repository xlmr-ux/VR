import React from 'react'
import HeroSectionLeftSide from './HeroSectionLeftSide'
import HeroSectionRightSide from './HeroSectionRightSide'


import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-section' >
      <HeroSectionLeftSide />
      <HeroSectionRightSide />
    </div>
  )
}

export default HeroSection
