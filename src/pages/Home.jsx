import React from 'react'
import Herosection from '../components/Herosection'
import HomeWashing from '../components/HomeWashing'
import ServicesSection from '../components/ServicesSection'
import HweworkCard from '../components/HweworkCard'
import OfferNotification from '../components/OfferNotification'


function Home() {
  return (
    <div>
      <Herosection/>
      <ServicesSection/>
      <HomeWashing/>
      <HweworkCard/>
      <OfferNotification/>
    </div>
  )
}

export default Home
