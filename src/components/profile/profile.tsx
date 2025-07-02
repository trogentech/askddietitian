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
         <div className="">
          <Image src={profileImage} alt="Adeola" className="rounded-md w-full  object-cover" />
        </div>
       </div>

        <div className="flex-1 py-12 space-y-8 hidden md:block">
          <h1 className="text-xl md:text-4xl font-semibold leading-[1.5]">Pioneering Personalized Nutrition</h1>
          <p className="text-sm font-normal md:text-[16px] leading-[1.5]">
            Adeola remains at the cutting edge of nutritional science, currently pursuing a qualification in Nutrigenetics and Nutrigenomics at the University of Cardiff. This advanced study allows her to create truly personalized nutrition plans based on patients' genetic profiles—a revolutionary approach to dietary intervention
          </p>
            <h3 className="text-md font-semibold leading-[1.5]">Her Academic Credentials Showcase Her  Commitment to Excellence</h3>
          <div className="space-y-4">
            <p className='flex gap-2 items-center'><div>
                <Image src={babcock} alt='babcock icon'/></div><span className='text-[16px]'> Babcock University (BSc in Nutrition & Dietetics)</span></p>
                <p className='md:text-[16px]'>First Class BSc in Nutrition and Dietetics</p>
            <p className='flex gap-2 items-center mt-2'>
            <div>
                <Image src={london} alt='London school icon'/></div> <span className='text-[16px]'>London School of Hygiene(MSc in Public Health)</span></p>
                 <p className='md:text-[16px]'>Master of Science in Public Health (MScPH)</p>
          </div>
        </div>
      </div>
  )
}

export default Profile
