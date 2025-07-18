import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface WhoweAreCardProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
}
const WhoweAreCards:React.FC<WhoweAreCardProps> = ({icon,title,description}) => {
  return (
    <div
           
            className="bg-white rounded-2xl shadow-lg pt-4 pb-8  px-4 border border-gray-200 space-y-3"
          >
           <div className=' bg-light-purple  w-10 h-10 flex justify-center items-center rounded-full'>
             <Image src={icon} alt={title}  className=" h-6 w-6" />
           </div>
            <h3 className="font-semibold text-md text-black">{title}</h3>
            <p className="text-sm text-black">{description}</p>
          </div>
  )
}

export default WhoweAreCards
