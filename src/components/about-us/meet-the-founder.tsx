import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ladyImage from '../../assets/images/lady.png'
import { MdOutlineArrowForward } from 'react-icons/md'

const MeetTheFounder = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
      <div className="w-full md:w-1/2">
        <Image
          src={ladyImage}
          alt="Adeola O. Adeleye"
          className="rounded-2xl object-cover w-full max-h-[500px]"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Meet the Founder
        </h2>
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          Adeola O. Adeleye (RDN, MScPH)
        </h3>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Adeola is a distinguished Registered Dietitian Nutritionist with dual
          registration in Nigeria and the UK, bringing exceptional clinical
          nutrition expertise to every patient interaction.
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          I make nutrition science simple, practical, and personal. Your eating
          plan will be backed by evidence but designed for your real life.
        </p>
        <Link href="/profile">
          <button className="text-black text-base font-medium hover:cursor-pointer flex items-center gap-1">
            View full profile
            <span className="text-white font-medium ml-2 h-8 w-8 p-2 bg-blue-high rounded-full flex justify-center items-center">
              <MdOutlineArrowForward size={36} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MeetTheFounder
