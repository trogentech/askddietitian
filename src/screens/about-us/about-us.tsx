import AboutHero from '@/components/about-us/about-hero'
import FruitsImageContainer from '@/components/about-us/fruits-image.container'
import WhoWeAre from '@/components/about-us/whoweare'
import React from 'react'


const About = () => {
  return (
    <div className='flex flex-col md:flex-row w-full md:h-full'>
      <div className='md:w-1/2 '>
      <AboutHero/>
      </div>
      <div className='mt-4 md:w-1/2 '>
      <FruitsImageContainer/>
      </div>
     
    </div>
  )
}

export default About
