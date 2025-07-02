import Navigation from '@/components/homepage/navigation/page'
import React from 'react'
import Hero from './hero/hero'
import Testimonial from '@/components/homepage/Testimonial'
import HealthConversation from '@/components/homepage/health-conversation'
import ExploreNutritionServices from '@/components/homepage/explore-nutrition-services'
import RealStoriesSection from '@/components/homepage/real-stories-section'
import CertificationsAndBlogs from '@/components/homepage/certification-blogs'
import NutritionPage from '@/components/homepage/nutrition-ui/nutrition-ui'
import Footer from '@/components/homepage/footer/footer'

const HomePage = () => {
  return (
    <div className=''>
      <section className='md:px-12 px-6'>
          {/* <Navigation/> */}
        <Hero/>
      </section>
      <section className='md:px-12 mt-14 px-6'>
          <Testimonial/>
      </section>
        <section className='md:px-12 px-6 md:pt-4 mt-20  md:mt-10'>
            <HealthConversation/>
        </section>
       <section className='md:mt-10 mt-10'>
         <ExploreNutritionServices/>
       </section>
       <section className='mt-10 md:mt-5'>
        <RealStoriesSection/>
       </section>
       <section className=''>
            <CertificationsAndBlogs/>
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

export default HomePage