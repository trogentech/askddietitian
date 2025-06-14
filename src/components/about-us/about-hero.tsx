'use client'
import BookButton from '@/components/button/bookbutton';
// import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="py-4 md:py-2 w-full bg-white ">
      <h1 className="text-xl  md:text-[40px] text-black font-semibold leading-7  md:leading-loose">
        <span>Why Empowering Health.</span>
        <br />
        <span className="hidden md:inline-block">
          Through Nutrition Matters <br /> To Us.
        </span>
        <span className="md:hidden">
           Through Nutrition <br/> Matters  To Us.
        </span>
      </h1>

      <p className="text-black mt-4 md:hidden">
Founded in 2017, @askddietitian stands at the forefront of clinical nutrition therapy in Africa. We combine deep expertise with personalized care to transform lives through the power of nutrition.
      </p>
      <p className="hidden md:block text-black mt-4">
        Founded in 2017, @askddietitian stands at the forefront of clinical <br/> nutrition therapy in Africa. We combine deep expertise with <br/> personalized care to transform lives through the power of nutrition.
      </p>

      <div className="mt-8 flex  sm:flex-row items-start  gap-4 md:gap-8">
        <BookButton text="Get a Free Health Assessment" />

        
      </div>
    </section>
  );
}
