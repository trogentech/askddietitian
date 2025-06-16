'use client';
import Image from 'next/image';
import React from 'react';
import { CiShare2 } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import { SlBookOpen } from "react-icons/sl";
import Link from 'next/link';
export default function BlogDetail() {
  return (
    <div className="bg-white text-gray-800">
      {/* Cover Section */}
      <div className="relative h-76 ronded-lg md:h-80 w-full overflow-hidden">
        <Image
          src="/images/blog-cover.jpg" 
          alt="Managing Diabetes"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-xl md:text-4xl font-semibold leading-loose">Managing Diabetes Through <br/> Strategic Meal Planning</h1>
          <div className="mt-3 flex gap-4 text-xs md:text-sm flex-wrap justify-center">
            <span className='flex items-center  gap-2'><MdOutlineCalendarMonth /> 1/10/2024</span>
            <span className='flex items-center  gap-2'><LuClock/> 8 min read</span>
            <span className='flex items-center  gap-2'><SlBookOpen/> Adeola O. Adekeye (RDN, MS-PH)</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className=" mx-auto py-6  lg:px-0">
       <div className='flex items-center justify-between'>
         <Link href={"/blog"}>
         <button className="text-sm text-gray-600 mb-6  shadow-md rounded-md px-2 py-2">{`← Back to Blog`}</button>
         </Link>
          <button className="text-sm text-gray-600 mb-6 hover:underline shadow-md rounded-md px-2 py-2 flex items-center"><CiShare2 /> {`Share Article`}</button>
       </div>

        <article className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold leading-loose">Introduction to Nutrients</h2>
            <p className='text-sm'>
              Proper nutrition forms the foundation of good health, but understanding what your body actually needs can feel overwhelming. Today, we'll break down the essential components of nutrition into digestible, actionable insights
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">What Are Macronutrients?</h3>
            <p className='text-sm'>Macronutrients are the nutrients your body needs in large amounts to function properly. They provide energy and support various bodily functions:</p>

            <h4 className="font-medium mt-4">1. Carbohydrates</h4>
            <p className='text-sm'>Often misunderstood, carbohydrates are your body's preferred energy source. They should make up 45-65% of your daily calories. Focus on complex carbohydrates like:</p>
            <ul className="text-sm list-disc list-inside ">
              <li>Whole grains (brown rice, quinoa, oats)</li>
              <li>Legumes (beans, lentils, chickpeas)</li>
              <li>Vegetables and fruits</li>
            </ul>

            <h4 className="font-medium mt-4">2. Proteins</h4>
            <p className='text-sm'>Proteins are the building blocks of your body, essential for muscle repair, immune function, and hormone production. Aim for 10-35% of your daily calories from protein sources such as:</p>
            <ul className="text-sm list-disc list-inside">
              <li>Lean meats, fish, and poultry</li>
              <li>Plant-based options like tofu, tempeh</li>
              <li>Dairy products and eggs</li>
            </ul>

            <h4 className="font-medium mt-4">3. Fats</h4>
            <p className='text-sm'>Healthy fats are crucial for brain function, hormone production, and nutrient absorption. They should comprise 20-35% of your daily intake. Focus on:</p>
            <ul className="text-sm list-disc list-inside">
              <li>Monounsaturated fats (olive oil, avocados)</li>
              <li>Polyunsaturated fats (fatty fish, flaxseeds)</li>
              <li>Omega-3 fatty acids for anti-inflammatory benefits</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Understanding Micronutrients</h3>
            <p className='text-sm'>Micronutrients are vitamins and minerals needed in smaller amounts but are equally important for optimal health:</p>

            <h4 className="font-medium mt-4">Essential Vitamins</h4>
                        <p className='text-sm'>Water-soluble vitamins (B-complex, vitamin C) need regular replenishment, while fat-soluble vitamins (A, D, E, K) are stored in body fat.</p>

            <h4 className="font-medium mt-4">Critical Minerals</h4>
     
<p>Iron, calcium, zinc, and magnesium play vital roles in everything from bone health to immune function.</p>

            <h4 className="font-medium mt-4">Practical Application</h4>
            <p className='text-sm'>Understanding these nutrients is just the beginning. The key is creating balanced meals that incorporate all these elements while fitting into your lifestyle and cultural preferences.</p>
            <p className='text-sm'>Remember, nutrition isn't about perfection—it's about making informed choices that support your health goals while being sustainable for your unique circumstances.</p>
          </section>
        </article>
      </div>


    </div>
  );
}
