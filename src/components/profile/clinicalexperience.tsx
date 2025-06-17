
import Image from 'next/image';
import React from 'react';
import profileImage from '../../assets/images/lady.png'

const ClinicalExperience = () => {
  return (
    <section className="  py-12 bg-white">
      {/* Title and Description */}
      <div className="max-w-4xl md:text-center mx-auto ">
        <h2 className="text-lg md:text-4xl md:text-center font-semibold mb-4">
          World-Class Clinical Experience
        </h2>
        <p className="text-black text-xs md:text-sm  ">
          Adeola’s clinical background is built on experience at reputable and leading global medical institutions.
          
        </p>
        <p className="text-black text-xs md:text-sm  mb-6">This diverse experience across continents has equipped her with a comprehensive understanding of
          nutritional challenges in various healthcare systems and cultural contexts.</p>
        {/* Experience List */}
        <div className="flex flex-col md:flex-row md:justify-between text-black font-semibold  md:space-y-0 md:space-x-6 mb-10">
          <p className='text-sm'>National Health Service (NHS) of England</p>
          <span
                className="border-b-2 md:border-r-4 md:border-b-0 border-blue w-8 md:w-10 h-2 md:h-8 "
              ></span>
          <p className='text-sm'>Lagos State University Teaching Hospital (LASUTH)</p>
          <span
                className="border-b-2 md:border-r-4 md:border-b-0 border-blue w-8 md:w-10 h-2 md:h-8 "
              ></span>
          <p className='text-sm'>Lagos University Teaching Hospital (LUTH)</p>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="flex flex-col md:flex-row items-start mt-20  gap-8 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <h3 className="text-xl md:text-4xl  font-semibold mb-3">
            Global Health Leadership
          </h3>
          <p className="text-black text-xs mb-4">
            Beyond clinical practice, Adeola has established herself as a public health authority
          </p>

          {/* Highlight Cards */}
          <div className="bg-blue-50 p-4 mb-3 border-l-4 border-blue-700">
            <p className="text-gray-700 text-md font-medium">
              Former Health Facilitator with the World Health <br/> Organization (WHO)
            </p>
          </div>
          <div className="bg-blue-100 p-4 border-l-4 border-blue-500">
            <p className="text-black font-bold ">
             Active member of FIDES
              <span className="text-[10px] leading-loose text-gray-700  font-medium">
                – the WHO initiative uniting healthcare influencers committed to promoting evidence-based health content and combating misinformation.
              </span>
            </p>
          </div>
        </div>

        {/* Image */}
      <div className='w-full md:w-1/2 md:h-[400px] rounded-md '>
          <div className="w-full md:h-full">
          <Image
            src={profileImage}
            alt="Adeola"
            className="md:object-cover w-full h-full"
           
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default ClinicalExperience;
