'use client'
import BookButton from '@/components/button/bookbutton';
// import Image from 'next/image';

export default function Content() {
  return (
    <section className="py-4 md:py-2 w-full bg-white ">
      <h1 className="text-xl  md:text-4xl text-black font-semibold leading-7  md:leading-[1.5]">
        <span  className='block md:hidden' >Personalized Nutrition</span>
        
        <span className='hidden md:block' >Personalized Nutrition For</span>
        <span className=' md:hidden'>
          For   Better Health.
        </span>
      <span className='hidden md:block'>
         Better Health.
        </span>
      </h1>

      <p className="text-black text-[14px] mt-4 md:hidden">
         Medical Nutrition Therapy (MNT) uses tailored nutrition plans to  manage and prevent chronic conditions. Our expert dietitians assess your health, lifestyle, and history to create personalized, long-term solutions.
      </p>
      <p className="hidden md:block text-black mt-4">
       Medical Nutrition Therapy (MNT) uses tailored nutrition plans to <br/> manage and prevent chronic conditions. Our expert dietitians <br/> assess your health, lifestyle, and history to create personalized,<br/> long-term solutions.
      </p>

      <div className="mt-8 flex  sm:flex-row items-start  gap-4 md:gap-8">
        <BookButton text="Get a Free Health Assessment" />

        
      </div>
    </section>
  );
}
