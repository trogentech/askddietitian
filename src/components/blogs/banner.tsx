import React from 'react'
import Image from 'next/image'
import blogmobileImage from "../../assets/images/blogbannermobile.png"

import ecploreOurNutAndWellness from "../../assets/images/fruit-salad.jpg"
import SearchBar from './searchbar'
const Banner = () => {
  return (
         <div className=" ">

           <div className="relative hidden md:block h-96 overflow-hidden rounded-lg shadow-sm  md:h-full ">

           
  <Image
    alt=""
     src={ecploreOurNutAndWellness}
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="relative top-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25 py-10 h-full flex flex-col justify-center items-center text-white px-4 text-center">
   <h1 className="text-2xl md:text-4xl font-semibold leading-[1.5]">
            Explore Our Nutrition & Wellness <br className='hidden md:block'/> Insights
          </h1>
          <SearchBar />
      {/* <div className=" inset-0  bg-opacity-40 ">
         
        </div> */}
  </div>
</div>
     <div className="relative h-96 overflow-hidden rounded-lg shadow-sm  md:h-full ">

           
  <Image
    alt=""
     src={blogmobileImage}
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="relative md:hidden top-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25 py-10 h-full flex flex-col justify-center items-center text-white px-4 text-center">
   <h1 className="text-2xl md:text-4xl font-semibold leading-[1.5]">
            Explore Our Nutrition & Wellness <br className='hidden md:block'/> Insights
          </h1>
          <SearchBar />
      {/* <div className=" inset-0  bg-opacity-40 ">
         
        </div> */}
  </div>
</div>
</div>
  )
}

export default Banner
