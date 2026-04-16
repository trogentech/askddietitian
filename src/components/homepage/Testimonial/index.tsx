import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowForward } from "react-icons/md";
import fruitSalad from '../../../assets/images/fruit-salad.jpg'

const Testimonial = () => {
  return (
    <section className="flex flex-col md:justify-between md:flex-row md:items-center gap-10">
      <div className='w-full md:w-1/2 md:py-2'>
        <h1 className="text-xl font-semibold mb-2 md:mb-6 leading-[1.5] text-black md:text-4xl">
          Nutrition That Fits
          <br className="hidden md:inline" /> Your Real
          <br className="block md:hidden" />
          <span> Life</span>
        </h1>

        <p className="text-md text-black mb-4 md:mb-10">
          Everyone deserves a better treatment for their health care,
          <br/>
          including you and that is our main priority
        </p>

        <div className="quote-accent bg-blue md:mb-10 w-auto border-l-8 border-blue-high md:px-8 p-4 mb-4 text-sm md:text-[16px] text-black">
          <p className="md:text-base leading-[1.5]">
            We make nutrition science simple, practical, and personal.
            Your eating plan will be backed by evidence but designed<br className="hidden md:block" />
            for your real life.
          </p>
        </div>

        <Link href={"/about"} className="arrow-nudge inline-flex items-center gap-1 text-black text-base font-medium">
            Learn more about us
            <span className="arrow-icon text-white font-medium ml-2 h-8 w-8 p-2 bg-blue-high rounded-full flex justify-center items-center transition-all duration-300 hover:shadow-lg hover:scale-110"><MdOutlineArrowForward size={36}/></span>
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex justify-center overflow-hidden rounded-2xl">
        <Image
          src={fruitSalad}
          alt="Healthy nutrition"
          className="img-zoom rounded-2xl object-cover w-full max-h-[450px]"
        />
      </div>
    </section>
  )
}

export default Testimonial
