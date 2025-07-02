
'use client'
import Image from 'next/image'
import React from 'react'


import img1 from '../../assets/images/fruitman.png'
import img2 from '../../assets/images/fruittable.png'
import img3 from '../../assets/images/fruits.png'
import img4 from '../../assets/images/mobile-image.png'
import profileImage from '../../assets/images/lady.png'
import london from  "../../assets/images/london.png"
import babcock from "../../assets/images/babcock.png"
export default function VisionAndProfileSection() {
  return (
    <section className="">

        <div className="flex-1 md:hidden  mb-10">
          <h1 className="text-lg md:text-xl font-semibold mb-2 md:mb-4  md:px-10">A Vision for Transformative Care</h1>
          <p className="text-gray-700 text-sm md:text-base font-medium  leading-tight md:px-10">
            What truly sets Adeola (@askddietitian) apart is her unwavering commitment to making nutrition science  accessible and actionable. She excels at translating complex nutritional concepts into practical, sustainable dietary choices that clients can maintain for life. Her approach combines scientific rigor with genuine compassion, ensuring each patient receives care that is both evidence-based and deeply personal.
          </p>
        </div>
          <div className="grid  flex-1 h-[350px] md:hidden  mb-4">
          <Image src={img4} alt="Food 1" className="w-full h-[350px] rounded-md object-cover" />
         
       
        </div>
      <div className="md:flex flex-col  lg:flex-row gap-8 hidden">
        {/* Grid Images */}
        <div className="grid grid-cols-2 gap-4  h-[450px]  ">
          <Image src={img1} alt="Food 1" className="w-full h-full rounded-md object-cover" />
          <div className='h-[450px] flex flex-col justify-between gap-4 '>
            <Image src={img2} alt="Food 2" className="w-full h-[48%]  rounded-md object-cover" />
          <Image src={img3} alt="Food 3" className="w-full h-[48%] rounded-md object-cover" />
          </div>
          {/* <Image src={img4} alt="Food 4" className="w-full h-auto rounded-md object-cover" /> */}
        </div>

    
        <div className="flex-1 hidden md:block">
          <h2 className="text-2xl md:text-4xl font-semibold text-black leading-[1.5] mb-4 md:px-10">A Vision for <br className="hidden md:block" /> Transformative Care</h2>
          <p className="text-black  font-medium md:text-[16px] leading-loose md:px-10">
            What truly sets Adeola (@askddietitian) apart is her unwavering commitment to making nutrition science  accessible and actionable. She excels at translating complex nutritional concepts into practical, sustainable dietary choices that clients can maintain for life. Her approach combines scientific rigor with genuine compassion, ensuring each patient receives care that is both evidence-based and deeply personal.
          </p>
        </div>
      </div>

      

    </section>
  )
}
