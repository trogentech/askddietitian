import React from 'react'
import ProfileHero from './profilebanner'
import ProfileImageContainer from './profileImageContainer'
import VisionAndProfileSection from './visionandProfile'
import ClinicalExperience from './clinicalexperience'
import Profile from './profile'

const ProfileComponent = () => {
  return (
    <div>
       <div className='flex flex-col md:flex-row w-full mb-10  px-6 md:px-12'>
      <div className='md:w-1/2 '>
      <ProfileHero/>
      </div>
      <div className='mt-4 md:w-1/2   '>
      <ProfileImageContainer/>
      </div>
    </div>
    <section className='mt-10 md:mt-20 mb-10 pt-4 px-6 md:px-12'>
        <VisionAndProfileSection/>
    </section>
      <section className='mt-20 md:mt-20 '>
        <Profile/>
    </section>
    <section className='px-6 md:px-12 my-20 md:my-20'>
 <ClinicalExperience/>
    </section>
   
    </div>
  )
}

export default ProfileComponent
