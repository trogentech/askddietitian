import AboutHero from '@/components/about-us/about-hero'
import FruitsImageContainer from '@/components/about-us/fruits-image.container'
import WhoWeAre from '@/components/about-us/whoweare'
import React from 'react'
import OnionImageContainer from './OnionContainer'
import Content from './Content'


const Services = () => {
  return (
    <div className='flex flex-col md:flex-row w-full md:h-full'>
      <div className='md:w-1/2 '>
      <Content/>
      </div>
      <div className='mt-4 md:w-1/2 md:h-[400px]'>
      <OnionImageContainer/>
      </div>
     
    </div>
  )
}

export default Services
