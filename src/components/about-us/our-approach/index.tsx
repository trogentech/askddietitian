import React from 'react'
import OurApproachCard from './our-approach-card';
import circlecheckmark from '../../../assets/images/la_check-circle-solid.png'

const services = [
  {
    icon: circlecheckmark,
    title: "Personalized Care",
    description:"Evidence-based approaches to nutrition therapy",
  },
  {
    icon: circlecheckmark,
    title: "Nutrition Therapy",
    description:"Ethical practices that put your wellbeing first",
  },
  {
    icon: circlecheckmark,
    title: "Community Education",
    description:"Industry-approved standards and methodologies",
  },
  {
    icon: circlecheckmark,
    title: "Policy Development",
    description:"Advanced scientific studies and ongoing research",
  },
];
const OurApproach = () => {
  return (
    <div className='  '>
      <h2 className="text-white text-xl md:text-3xl font-semibold text-center my-4">Our Approach</h2>
      <p className="text-white text-xs md:text-base text-center mt-4 leading-loose md:mb-10 ">
        What sets us apart is our unwavering commitment to quality. Every<br className='hidden md:block'/> service we provide is backed by evidence and excellence.
      </p>
      <div className='flex flex-col md:flex-row md:justify-between bg-black mt-8 '>
        {
          services.map((approach,i)=>(
            <OurApproachCard key={i} {...approach}/>
          ))
        }
      </div>
    </div>
  )
}

export default OurApproach
