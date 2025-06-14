import React from 'react'
import Image, { StaticImageData } from 'next/image' 

interface OurApproachProp {
    icon:string | StaticImageData,
    description: string
}
const OurApproachCard: React.FC<OurApproachProp> = ({icon,description}) => {
  return (
      <div className="y-4 flex flex-col justify-center  text-center items-center px-2  space-y-3">
               <div className=' bg-light-purple  w-10 h-10 flex justify-center mt-2 items-center rounded-full'>
                 <Image src={icon} alt="Our Approach Icon"  className=" h-6 w-6" />
               </div>
                <p className="text-sm md:text-sm text-center md:w-3/4  leading-loose text-white">
                    {description}</p>
              </div>
      )
  
}

export default OurApproachCard
