import React from 'react'
import Image from 'next/image'

import ecploreOurNutAndWellness from "../../assets/images/onion.png"
import SearchBar from './searchbar'
const Banner = () => {
  return (
         <div className="relative h-96 rounded-md  md:h-full overflow-hidden">
        <Image
          src={ecploreOurNutAndWellness}
          alt="Blog Hero"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold leading-loose">
            Explore Our Nutrition & Wellness <br className='hidden md:block'/> Insights
          </h1>
          <SearchBar />
        </div>
      </div>
  )
}

export default Banner
