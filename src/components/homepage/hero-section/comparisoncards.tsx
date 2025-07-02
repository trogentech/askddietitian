import React from 'react'
import whiteRice from  '../../../assets/images/white-rice.png'
import couscous  from '../../../assets/images/couscous.png'
import Image from 'next/image';
import NextButton from './next-button';
const ComparisonCards = () => {
  return (
    <section className=" py-6 text-center   md:py-10 ">
      
      <div className="flex items-center w-full  justify-between  mb-4 ">
        <Image src={couscous} alt="couscous" className="w-16 h-16 md:w-32 md:h-32 border rounded-full" />
     
        <p className="text-sm text-black md:text-xl font-semibold ">Rice & Couscous</p>
           <Image src={whiteRice} alt="rice" className="w-16  h-16 md:w-32 md:h-32 rounded-full" />
      </div>

      <div className="flex w-full justify-between  text-sm ">
        <div className="bg-[#F3EAFA] shadow-md rounded-xl w-32 p-3 md:w-[40%] md:pb-14">
          <div className='bg-primary px-2 flex justify-center  items-center rounded-md py-2'>
            <h4 className="font-semibold text-white text-xs">White Rice</h4>
          </div>
          <div className='w-full  mt-2'>
            <p className='text-primary text-start leading-5 font-medium text-[12px]'><span className='text-black text-[12px]'>Calories:</span> 103kcal</p>
          <p className='text-primary text-start leading-5 font-medium text-[12px]'><span className='text-black text-[12px]'>Protein: </span>2.7g</p>
          <p className='text-primary text-start leading-5 font-medium text-[12px]'><span className='text-black text-[12px]'>Carb: </span>28.2g</p>
          <p className='text-primary text-start leading-5 font-medium text-[12px]'><span className='text-black text-[12px]'>Fat: </span>0.3g</p>
          <p className='text-primary text-start leading-5 font-medium text-[12px]'><span className='text-black text-[12px]'>Fiber: </span>0.4g</p></div>
        </div>
        <div className='flex flex-col text-black gap-4 pt-2 items-center'>
            <h4 className=' text-nowrap text-semibold'>Per 100g</h4>
            <h5>vs</h5>
            <div className='border border-primary flex-1'></div>
        </div>
      <div className="bg-primary shadow-md px-2 pt-2 pb-4 rounded-xl w-32 md:w-[40%] md:pb-14">
          <div className='bg-white px-2 flex justify-center items-center rounded-md py-2'>
            <h4 className="font-semibold text-primary text-xs">Couscous</h4>
          </div>
          <div className='w-full  mt-2'>
            <p className='text-white text-start leading-5 font-medium text-[12px]'><span className='text-white text-[12px]'>Calories:</span> 103kcal</p>
          <p className='text-white text-start leading-5 font-medium text-[12px]'><span className='text-white text-[12px]'>Protein: </span>2.7g</p>
          <p className='text-white text-start leading-5 font-medium text-[12px]'><span className='text-white text-[12px]'>Carb: </span>28.2g</p>
          <p className='text-white text-start leading-5 font-medium text-[12px]'><span className='text-white text-[12px]'>Fat: </span>0.3g</p>
          <p className='text-white text-start leading-5 font-medium text-[12px]'><span className='text-white text-[12px]'>Fiber: </span>0.4g</p></div>
        </div>
      </div>
   
    </section>
  )
}

export default ComparisonCards
