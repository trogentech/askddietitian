import React from 'react'
import Image from 'next/image'
import ladyImage from '../../../assets/images/lady.png'
import Link from 'next/link'
import { MdOutlineArrowForward } from "react-icons/md";
const Testimonial = () => {
  return (
    <section className="flex flex-col  md:justify-between md:flex-row  ">
          <div className='w-full md:w-[40%]  md:py-2  '>
      <h1 className="text-xl  font-semibold mb-2  md:mb-6   leading-[1.5] text-black md:text-4xl">
  Your Path to Better
  <br className="hidden md:inline" /> Health
  <br className="block md:hidden" />
  <span className=""> Starts Here</span>
</h1>

      <p className="text-md text-black mb-4 md:mb-10 ">
        Everyone deserves a better treatment for their health care,
        <br/>
        including you and that is our main priority
      </p>

      <div className="bg-blue md:mb-10 w-auto  border-l-8 border-blue-high md:px-8 p-4  mb-4 text-sm md:text-[16px] text-black">
        <p className="md:text-base leading-[1.5]">
          I make nutrition science simple, practical, and   personal.  
          Your eating plan will be backed by evidence but designed<br className="hidden md:block" /> 
           for your real life.
        </p>
        <h3 className="mt-2 text-base font-semibold text-blue-900">● Adeola O. Adeleye (RDN, MScPH)</h3>
        <p className="text-sm text-gray-700 px-2">Founder of Askdietetitian</p>
      </div>

      <Link href={"/profile"}>
      <button className="text-black text-base font-medium hover:cursor-pointer  flex items-center gap-1">
        Learn more
        <span className="text-white font-medium ml-2 h-8 w-8 p-2 bg-blue-high rounded-full flex justify-center items-center"><MdOutlineArrowForward size={36}/></span>
      </button>
      </Link>

</div>
      <div className="mt-6 md:mt-0 w-full rounded-md md:w-1/2 flex justify-center ">
        <Image
          src={ladyImage}
          alt="Adeola O. Adeleye"

          className="rounded object-contain md:ml-auto  md:w-[75%] "
        />
      </div>
    </section>
  )
}

export default Testimonial
