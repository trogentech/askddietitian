import AboutHero from '@/components/about-us/about-hero'
import Navigation from '@/components/homepage/navigation/page'
import React from 'react'
import About from './about-us'
import WhoWeAre from '@/components/about-us/whoweare'
import OurApproach from '@/components/about-us/our-approach'
import NutritionPage from '@/components/homepage/nutrition-ui/nutrition-ui'
import Footer from '@/components/homepage/footer/footer'
import HealthConversation from '@/components/homepage/health-conversation'
import HowWeHelpScreen from './howwehelpscreen'

const AboutUs = () => {
  return (
    <div>
        {/* <section className='md:px-12 px-6'>
          <Navigation/>
      </section> */}
      <section className='md:px-12 px-6 pt-4 md:h-[460px]'>
        <About/>
      </section>
       <section className='md:px-12 px-6 pt-4 pb-10'>
        <WhoWeAre/>
      </section>
         <section className='md:px-12 px-6 pt-4 md:pb-20 pb-20 bg-black '>
        <OurApproach/>
      </section>
      <section className='md:px-12 px-6 pt-20'>
            <HowWeHelpScreen/>
        </section>
       {/* <section className='mt-10'>
        <NutritionPage/>
       </section>
       <section className='bg-light-gray'>
        <Footer/>
       </section> */}
    </div>
  )
}

export default AboutUs