import React from 'react'
import lady from "../../assets/images/lady.png"
import Image from 'next/image'
const ProfileImageContainer = () => {
  return (
   <div className="w-full md:h-[450px]">
             <Image
               src={lady}
               alt="Adeola"
               className="h-full w-full object-contain"
              
             />
           </div>
  )
}

export default ProfileImageContainer
