import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface OurProcessCardProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
}
const OurProcessCards:React.FC<OurProcessCardProps> = ({icon,title,description}) => {
  return (
    <div
           
            className="bg-white rounded-2xl shadow-lg py-4 px-2 space-y-3"
          >
           <div className=' bg-light-purple  w-10 h-10 flex justify-center items-center rounded-full'>
             <Image src={icon} alt={title}  className=" h-6 w-6" />
           </div>
            <h3 className="font-semibold text-md text-black">{title}</h3>
            <p className="text-xs text-black">{description}</p>
          </div>
  )
}

export default OurProcessCards
