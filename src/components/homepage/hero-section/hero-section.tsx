'use client'
import BookButton from '@/components/button/bookbutton';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-4 md:py-12 w-full bg-white ">
      <h1 className="text-xl md:text-[40px] text-black font-semibold leading-7 md:py-6 md:leading-tight">
        <span>Your Condition Is Unique.</span>
        <br />
        <span className="hidden md:inline-block">
          Your Nutrition Plan Should <br /> Be Too.
        </span>
        <span className="md:hidden">
          Your Nutrition Plan <br /> Should Be Too.
        </span>
      </h1>

      <p className="text-black mt-4 md:hidden">
        Honest expertise. Personalized <br />
        approach. Better health outcomes.
      </p>
      <p className="hidden md:block text-black mt-4">
        Honest expertise. Personalized approach. Better health outcomes.
      </p>

      <div className="mt-6 flex  sm:flex-row items-start  gap-4 md:gap-8">
        <BookButton text="Get a Free Health Assessment" />

        <div className="flex items-center text-sm text-black ">
          <button
            className="flex items-center text-gray-600 hover:text-gray-800"
            aria-label="Play introduction video"
          >
            <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2 text-sm">
              ▶
            </span>
          </button>
          <h4 className="text-xs leading-snug">
            Watch our <br />
            introduction video
          </h4>
        </div>
      </div>
    </section>
  );
}
