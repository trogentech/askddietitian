import React from 'react'
import Hero from '@/components/homepage/hero-section/hero-section'
import Comparison from '@/components/homepage/hero-section/comparison'
const HeroSection = () => {
  return (
    <div className='w-full flex flex-col md:flex-row'>
        <div className='md:w-1/2 '>
            <Hero/>
        </div>
        <div className='md:w-1/2'>
            <Comparison/>
        </div>
    </div>
  )
}

export default HeroSection