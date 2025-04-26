import React from 'react'
import HeroSection from '../Components/Section-Home-1/herosection'
import HomeSection2 from '../Components/Section-Home-2/homesection2'
import HomeSection3 from '../Components/Section-Home-3/homesection3'
import HomeSection4 from '../Components/Section-Home-4/homesection4'
import HomeSection5 from '../Components/Section-Home-5/homesection5'
import HomeSection6 from '../Components/Section-Home-6/homesection6'
import HomeSection7 from '../Components/Section-Home-7/homesection7'
import Footer from '../Components/Footer/footer'

const HomePage = () => {
  return (
    <div className='bg-[#052128]   '>
      <HeroSection />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
      <Footer />
    </div>
  )
}

export default HomePage