import React from 'react'
import Image from 'next/image'
import ladyImage from '../../../assets/images/lady.png'
const Testimonial = () => {
  return (
    <section className="flex flex-col  pb-10  md:flex-row md:py-4 md:max-h-[600px]">
          <div className='w-full md:w-1/2 md:py-2 '>
      <h2 className="text-xl font-semibold mb-2 md:px-4 md:mb-6  leading-loose text-black md:text-4xl">
  Your Path to Better
  <br className="hidden md:inline" /> Health
  <br className="block md:hidden" />
  <span className=""> Starts Here</span>
</h2>

      <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-10 md:px-4">
        Everyone deserves a better treatment for their health care,
        <br/>
        including you and that is our main priority
      </p>

      <div className="bg-blue-50 md:mb-10  border-l-8 border-blue md:px-8 p-4 rounded mb-4 text-sm text-gray-800">
        <p className="md:text-base">
          I make nutrition science simple, practical, and   <br className="block md:hidden" /> personal. <br className="hidden md:inline" /> 
          Your eating plan will be backed by evidence but designed<br className="hidden md:block" /> 
           for your real life.
        </p>
        <p className="mt-2 font-semibold text-blue-900">● Adeola O. Adeleye (RDN, MScPH)</p>
        <p className="text-sm text-gray-400 px-2">Founder of Askdietetitian</p>
      </div>

      <button className="text-black font-medium   flex items-center gap-1">
        Learn more
        <span className="text-white font-medium h-8 w-8 p-2 bg-blue rounded-full flex justify-center items-center">→</span>
      </button>

</div>
      <div className="mt-6 md:mt-0 w-full rounded-md md:w-1/2   ">
        <Image
          src={ladyImage}
          alt="Adeola O. Adeleye"

          className="rounded h-full md:w-full md:pb-10 md:pr-20 xl:pr10"
        />
      </div>
    </section>
  )
}

export default Testimonial
