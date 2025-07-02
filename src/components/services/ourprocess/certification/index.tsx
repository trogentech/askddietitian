import React from 'react'
const certifications = [
  'Dietetic Association of Nigeria (DAN)',
  'British Dietetic Association (BDA)',
  'The Health and Care Professions Council (HCPC)',
  'FIDES (WHO)',
];
const OurProcesssNutritionCertfication = () => {
  return (
    <div>
            <div className="pr-4 md:px-10  text-center py-10 mb-12">
        <h2 className="hidden md:block text-2xl text-center md:text-3xl font-semibold mb-8">
          Our Nutrition Solutions Are Certified and Accredited
        </h2>
        <h2 className="md:hidden text-2xl text-start md:text-3xl font-bold mb-6">
          Our Nutrition Solutions Are Certified and Accredited
        </h2>
        <div className="flex flex-wrap  md:w-full xl:justify-center gap-y-2 text-black font-medium text-sm md:text-[14px]">
           <div  className="flex flex-col md:w-[250px] md:flex-row md:justify-center  md:mr-4">
              <span className="text-start w-full md:text-md      font-semibold md:border-none leading-tight md:pl-0 ">
               Dietetic Association of <br className='hidden md:block'/> Nigeria (DAN)
               </span>
              <span
                className="border-b-2 md:border-r-4 md:border-b-0 border-blue-high w-8 md:w-10 h-2 md:h-8 "
              ></span>
            </div>
      
         
            <div  className="flex flex-col md:w-[250px] md:flex-row md:justify-center md:mr-4">
              <span className="text-start w-full  md:text-md      font-semibold md:border-none leading-tight md:pl-0 ">
              British Dietetic <br className='hidden md:block'/> Association (BDA)
               </span>
              <span
                className="border-b-2 md:border-r-4 md:border-b-0 border-blue-high w-8 md:w-10 h-2 md:h-8 "
              ></span>
            </div>
      
         
            <div  className="flex flex-col md:w-[250px] md:flex-row md:justify-center md:mr-4">
              <span className="text-start w-full  md:text-md    font-semibold md:border-none leading-tight md:pl-0 ">
             The Health and Care Professions Council (HCPC)
               </span>
              <span
                className="border-b-2 md:border-r-4 md:border-b-0 border-blue-high w-8 md:w-10 h-2 md:h-8 "
              ></span>
            </div>
      
        <div  className="flex flex-col md:w-[250px]  md:text-md  md:flex-row md:justify-center">
              <span className="text-start w-full   font-semibold md:border-none leading-tight md:pl-0 ">
            FIDES (WHO)
               </span>
             
            </div>
            </div>
      </div>
    </div>
  )
}

export default OurProcesssNutritionCertfication
