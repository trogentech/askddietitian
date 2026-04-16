import React from 'react'
import phoneImage from "../../../assets/images/mobile.png"
import Image from 'next/image'

const ExploreNutritionServices = () => {
  return (
    <div className="bg-black px-6 md:pl-10 text-white pt-10 md:py-10 md:h-[550px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">

        <div className="relative hidden w-full md:h-[510px] md:w-1/4 md:flex justify-center md:justify-start">
          <Image
            src={phoneImage}
            alt="Nutrition Phone"
            className="max-w-xs md:w-md lg:max-w-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-8 md:ml-48">
          <h2 className="text-lg w-full md:pt-8 md:text-4xl font-bold leading-tight">
            <span className="block md:hidden">Explore Our Nutrition Services</span>
            <div className="hidden md:flex font-semibold md:flex-col md:gap-0">
              <span>Explore Our Nutrition</span>
              <span>Services</span>
            </div>
          </h2>

          <div className="w-full">
            <div className="step-row flex items-start gap-3 md:gap-4 p-3 -ml-3">
              <div>
                <div className="step-num h-6 w-6 md:h-12 md:w-12 bg-light-purple text-xs text-primary font-bold rounded-full flex items-center justify-center">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-md">Take Free Health Assessment</h3>
                <p className="text-sm mt-1 text-white">
                  {"Discover your personal path to better nutrition in just minutes\u2014your journey to healthier eating starts with understanding where you are today."}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="step-row flex items-start gap-3 md:gap-4 p-3 -ml-3">
              <div>
                <div className="step-num h-6 w-6 md:h-12 md:w-12 bg-light-purple text-xs text-primary font-bold rounded-full flex items-center justify-center">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-md">Get a Personalized Consultation</h3>
                <p className="text-sm mt-1 text-white">
                  Based on your assessment, our expert dietitians will guide you through a tailored nutrition plan that fits your needs.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="step-row flex items-start gap-3 md:gap-4 p-3 -ml-3">
              <div>
                <div className="step-num h-6 w-6 md:h-12 md:w-12 bg-light-purple text-xs text-primary font-bold rounded-full flex items-center justify-center">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-md">Begin Your Guided Journey</h3>
                <p className="text-sm mt-1 text-white">
                  {"With continuous support, progress monitoring, and expert adjustments, you\u2019ll stay on track toward long-term health and sustainable habits."}
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-full flex justify-center items-center md:hidden">
            <Image
              src={phoneImage}
              alt="Nutrition Phone"
              className="max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ExploreNutritionServices
