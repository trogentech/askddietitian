
import Image from 'next/image';
import React from 'react';
import profileImage from '../../assets/images/lady.png'

const ClinicalExperience = () => {
  return (
    <section className="  bg-white">
      {/* Title and Description */}
      <div className="max-w-4xl flex flex-col gap-[26px] md:text-center mx-auto ">
        <h1 className="text-lg md:text-4xl  md:text-center font-semibold">
          World-Class Clinical Experience
        </h1>
        <div className=''>
          <p className="text-black text-sm md:text-md  ">
          Adeola’s clinical background is built on experience at reputable and leading global medical institutions.
          
        </p>
        <p className="text-black text-sm md:text-md   md:px-8">This diverse experience across continents has equipped her with a comprehensive understanding of
          nutritional challenges in various healthcare systems and cultural contexts.</p>
        </div>
        {/* Experience List */}
        <div className="flex flex-col  md:flex-row md:justify-between text-black  font-semibold  md:space-y-0 md:space-x-6 mb-10">
          <h3 className='mt-2 md:mt-4'>National Health Service (NHS) of England</h3>
          <span
                className="border-b-2 md:border-r-4 md:border-b-0 border-blue-high  w-8 md:w-10 h-2 md:h-8 "
              ></span>
          <h3 className='mt-2 md:mt-4'>Lagos State University Teaching Hospital (LASUTH)</h3>
          <span
                className="border-b-2 md:border-r-4 md:border-b-0 border-blue-high  w-8 md:w-10 h-2 md:h-8 "
              ></span>
          <h3 className='mt-2 md:mt-4'>Lagos University Teaching Hospital (LUTH)</h3>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="flex flex-col md:flex-row items-start  mt-10 md:mt-20  gap-8 max-w-6xl mx-auto">
        <div className="md:w-1/2 md:p-[20px]">
          <h3 className="text-xl md:text-4xl  font-semibold mb-5">
            Global Health Leadership
          </h3>
          <p className="text-black text-[14px]  md:text-[16px] mb-5">
            Beyond clinical practice, Adeola has established herself as a public health authority
          </p>

          {/* Highlight Cards */}
          <div className="bg-blue-50 p-4 mb-5 border-l-4 border-blue-700">
            <h3 className="text-gray-700 text-sm md:text-md font-bold">
              Former Health Facilitator with the World Health  Organization (WHO)
            </h3>
          </div>
          <div className="bg-blue-100 p-4 border-l-4 border-blue-500">
            <h3 className="text-black font-bold ">
             Active member of FIDES
              <span className="text-[14px] md:text-[16px] leading-loose text-gray-700  font-medium">
                – the WHO initiative uniting healthcare influencers committed to promoting evidence-based health content and combating misinformation.
              </span>
            </h3>
          </div>
        </div>

        {/* Image */}
      <div className='w-full md:w-1/2   '>
          <div className="w-full  rounded-lg">
          <Image
            src={profileImage}
            alt="Adeola"
            className="md:object-cover w-full  rounded-lg"
           
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default ClinicalExperience;
