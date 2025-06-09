import React from 'react'
import phoneImage from "../../../assets/images/mobile.png"
import Image from 'next/image'

const ExploreNutritionServices = () => {
  return (
    <div className="bg-black text-white px-6 pt-10 md:py-10 md:h-[550px]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start ">
    
    {/* 📱 Phone with overlay box */}
    <div className="relative hidden w-full  md:h-[510px]  md:w-1/2 md:flex justify-center ">
      <Image
        src={phoneImage}
        alt="Nutrition Phone"
        className="max-w-xs md:w-md lg:max-w-lg"
      />
      {/* Overlay box */}
      {/* <div className="absolute bottom-6 left-6 right-6 bg-white text-black rounded-xl p-4 shadow-lg text-sm space-y-2">
        <p className="font-semibold">We Help You Manage These Health Conditions</p>
        <ul className="list-disc list-inside">
          <li>PCOS Nutrition & Hormonal Balance</li>
          <li>High Blood Pressure (Hypertension) Management</li>
          <li>Prenatal & Maternal Nutrition</li>
          <li>High Cholesterol & Heart Health Nutrition</li>
          <li>Cancer Nutrition Support</li>
        </ul>
      </div> */}
    </div>

    {/* 📝 Text Section */}
    <div className="w-full  md:w-1/2 space-y-8">
 <h2 className="text-lg w-full md:pt-8 md:text-4xl font-bold leading-tight">
  {/* Mobile version */}
  <span className="block md:hidden">Explore Our Nutrition Services</span>

  {/* Desktop version */}
  <div className="hidden md:flex md:flex-col md:gap-0">
    <span className='mb-6'>Explore Our Nutrition</span>
    <span>Services</span>
  </div>
</h2>


    <div className=" w-full ">
        <div className='flex items-start  gap-2'>
            <div className="h-6 w-6 md:h-8 md:w-8 bg-light-purple text-xs text-primary font-bold rounded-full flex items-center justify-center">
          1
        </div>
        <h3 className="font-semibold text-md">Take Free Health Assessment</h3>
        </div>
        <div>
          
          <p className="text-sm pl-8 md:pl-10 font-medium text-gray-300">
            Discover your personal path to better nutrition in just minutes—
            your<br className='hidden md:block'/> journey to healthier eating starts with understanding where you are today.
          </p>
        </div>
      </div>

       <div className="">
         <div className='flex items-start  gap-2'>
            <div className="h-6 w-6 md:h-8 md:w-8 bg-light-purple text-xs text-primary font-bold rounded-full flex items-center justify-center">
          2
        </div>
        <h3 className="font-semibold text-md">Get a Personalized Consultation</h3>
        </div>
       
        <div>
         
          <p className="text-sm pl-8 md:pl-10 font-medium text-gray-300">
            Based on your assessment, our expert dietitians will guide you through
            a<br className='hidden md:block'/> tailored nutrition plan that fits your needs.
          </p>
        </div>
      </div> 

      <div className=" items-start gap-4">
            <div className='flex items-start  gap-2'>
            <div className="h-6 w-6 md:h-8 md:w-8 bg-light-purple text-xs text-primary font-bold rounded-full flex items-center justify-center">
          3
        </div>
        <h3 className="font-semibold text-md">Begin Your Guided Journey</h3>
        </div>
        <div>
          <p className="text-sm pl-8 md:pl-10 font-medium text-gray-300">
            With continuous support, progress monitoring, and expert adjustments,<br className='hidden md:block'/>
            you’ll stay on track toward long-term health and sustainable habits.
          </p>
        </div>
      </div>
       <div className="relative w-full h-full flex justify-center items-center md:hidden ">
      <Image
        src={phoneImage}
        alt="Nutrition Phone"
        className="max-w-xs md:max-w-sm lg:max-w-md"
      />
      {/* Overlay box */}
      {/* <div className="absolute bottom-6 left-6 right-6 bg-white text-black rounded-xl p-4 shadow-lg text-sm space-y-2">
        <p className="font-semibold">We Help You Manage These Health Conditions</p>
        <ul className="list-disc list-inside">
          <li>PCOS Nutrition & Hormonal Balance</li>
          <li>High Blood Pressure (Hypertension) Management</li>
          <li>Prenatal & Maternal Nutrition</li>
          <li>High Cholesterol & Heart Health Nutrition</li>
          <li>Cancer Nutrition Support</li>
        </ul>
      </div> */}
    </div>
    </div>
     
  </div>
</div>

  )
}

export default ExploreNutritionServices