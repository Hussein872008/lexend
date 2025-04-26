import React from 'react'
import HeroSection from '../components/Section-Home-1/HeroSection'
import HomeSection2 from '../Components/Section-Home-2/HomeSection2'
import HomeSection3 from '../Components/Section-Home-3/HomeSection3'
import HomeSection4 from '../Components/Section-Home-4/HomeSection4'
import HomeSection5 from '../Components/Section-Home-5/HomeSection5'
import HomeSection6 from '../Components/Section-Home-6/HomeSection6'
import HomeSection7 from '../Components/Section-Home-7/HomeSection7'
import Footer from '../Components/Footer/Footer'

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