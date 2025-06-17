import React from 'react'
import profileImage from '../../assets/images/lady.png'
import london from  "../../assets/images/london.png"
import babcock from "../../assets/images/babcock.png"
import Image from 'next/image'
const Profile = () => {
  return (
   <div className="flex flex-col lg:flex-row gap-8 bg-black text-white  px-6 md:px-12">
       <div className="flex-1 space-y-4 block md:hidden">
          <h3 className="text-xl md:text-2xl font-semibold mt-4">Pioneering Personalized Nutrition</h3>
          <p className="text-xs md:text-base">
            Adeola remains at the cutting edge of nutritional science, currently pursuing a qualification in Nutrigenetics and Nutrigenomics at the University of Cardiff. This advanced study allows her to create truly personalized nutrition plans based on patients' genetic Profiles—a revolutionary approach to dietary intervention
          </p>
            <h3 className="text-md  leading-tight">Her Academic Credentials Showcase Her Commitment to Excellence</h3>
          <div className="space-y-2 text-sm md:text-base">
            <p className='flex gap-2 items-center'><div>
                <Image src={babcock} alt='babcock icon'/></div><span className='text-[10px]'> Babcock University (BSc in Nutrition & Dietetics)</span></p>
                <p>First Class BSc in Nutrition and Dietetics</p>
            <p className='flex gap-2 items-center mt-2'>
            <div>
                <Image src={london} alt='London school icon'/></div> <span className='text-[10px]'>London School of Hygiene(MSc in Public Health)</span></p>
                 <p>Master of Science in Public Health (MScPH)</p>
          </div>
        </div>
       <div className='h-3/5 py-12 md:w-1/2 '>
         <div className=" md:h-[450px]">
          <Image src={profileImage} alt="Adeola" className="rounded-md w-full h-full object-contain" />
        </div>
       </div>

        <div className="flex-1 py-12 space-y-4 hidden md:block">
          <h3 className="text-xl md:text-4xl font-semibold leading-loose">Pioneering Personalized Nutrition</h3>
          <p className="text-sm font-medium md:text-[13px] leading-loose">
            Adeola remains at the cutting edge of nutritional science, currently pursuing a qualification in Nutrigenetics and Nutrigenomics at the University of Cardiff. This advanced study allows her to create truly personalized nutrition plans based on patients' genetic profiles—a revolutionary approach to dietary intervention
          </p>
<h3 className="text-md font-medium leading-tight">Her Academic Credentials Showcase Her <br/> Commitment to Excellence</h3>
          <div className="space-y-2 text-sm md:text-base">
            <p className='flex gap-2 items-center'><div>
                <Image src={babcock} alt='babcock icon'/></div><span className='text-[10px]'> Babcock University (BSc in Nutrition & Dietetics)</span></p>
                <p>First Class BSc in Nutrition and Dietetics</p>
            <p className='flex gap-2 items-center mt-2'>
            <div>
                <Image src={london} alt='London school icon'/></div> <span className='text-[10px]'>London School of Hygiene(MSc in Public Health)</span></p>
                 <p>Master of Science in Public Health (MScPH)</p>
          </div>
        </div>
      </div>
  )
}

export default Profile
