import React from 'react'
import lady from "../../assets/images/lady.png"
import Image from 'next/image'
const ProfileImageContainer = () => {
  return (
   <div className="w-full flex justify-end ">
             <Image
               src={lady}
               alt="Adeola"
               className=" w-[100%] object-cover"
              
             />
           </div>
  )
}

export default ProfileImageContainer
