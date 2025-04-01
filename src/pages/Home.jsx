import React from 'react'
import Herosection from '../components/Herosection'
import HomeWashing from '../components/HomeWashing'
import ServicesSection from '../components/ServicesSection'
import HweworkCard from '../components/HweworkCard'


function Home() {
  return (
    <div>
      <Herosection/>
      <ServicesSection/>
      <HomeWashing/>
      <HweworkCard/>
    </div>
  )
}

export default Home
