'use client'
import BookButton from '@/components/button/bookbutton';
// import Image from 'next/image';

export default function ProfileHero() {
  return (
    <section className="py-4 md:py-6 w-full bg-white ">
      <h1 className="text-xl  md:text-[40px] text-black font-semibold leading-7  md:leading-loose">
        <span>Meet the Founder - Adeola</span>
        <br />
        <span className="hidden md:inline-block">
          O.Adeleye (RDN,MScPH)
        </span>
        <span className="md:hidden">
           Through Nutrition <br/> Matters  To Us.
        </span>
      </h1>

      <p className="text-black mt-4 md:hidden text-sm leading-tight md:leading-loose">
        Adeola is a distinguished Registered Dietitian Nutritionist (RDN) with dual registration in  Nigeria and the UK, bringing exceptional clinical nutrition expertise to every patient  interaction.
      </p>
      <p className="hidden md:block text-black mt-4 leading-tight md:leading-loose">
        Adeola is a distinguished Registered Dietitian Nutritionist (RDN) <br/> with dual registration in  Nigeria and the UK, bringing exceptional <br/>clinical nutrition expertise to every patient  interaction.
      </p>

      <div className="mt-8 flex  sm:flex-row items-start  gap-4 md:gap-8">
        <BookButton text="Get a Free Health Assessment" />

        
      </div>
    </section>
  );
}
