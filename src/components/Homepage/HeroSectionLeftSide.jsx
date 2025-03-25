import React from 'react'
import './HeroSection.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const HeroSectionLeftSide = () => {
  return (
    <div className='hero-text'>
      <h1 >The <span style={{color:"orange"}}>Meta</span> Museum</h1>
      <p style={{fontSize:'30px'}}>When the virtual world meets <span style={{textDecoration:'line-through'}}>Virtual</span> Real Art</p>
      <Link to={'/showroom'}>
      <Button type='primary' size='large' style={{marginTop:'10px',backgroundColor:'orange', width:'240px'}}><span style={{fontFamily:'"Poppins", san-serif'}}>Start the AR Tour</span></Button>
      </Link>
    </div>
  )
}

export default HeroSectionLeftSide
