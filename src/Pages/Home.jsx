import React from 'react'
import HeroSection from '../Components/HeroSection'
import Hero from '../Components/Hero'
import AboutSection from '../Components/AboutSection'
import OurDonors from '../Components/OurDonors'
import HowWeWork from '../Components/HowWeWork'
import WhatWeOffer from '../Components/WhatWeOffer'
const Home = () => {
  return (
    <div>
      <Hero/>
      <HeroSection/>
      <AboutSection/>
      <HowWeWork/>
      <WhatWeOffer/>
      <OurDonors/>
    </div>
  )
}

export default Home
