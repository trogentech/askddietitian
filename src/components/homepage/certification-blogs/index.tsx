'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import blogImage from '../../../assets/images/blogImage.png'; // Replace with real image
import BlogCards from './blog-cards';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Link from 'next/link';

const certifications = [
  'Dietetic Association of Nigeria (DAN)',
  'British Dietetic Association (BDA)',
  'The Health and Care Professions Council (HCPC)',
  'FIDES (WHO)',
];

const blogs = [
  {
    title: 'Managing Diabetes Through Strategic Meal Planning',
    description:
      'Practical strategies for creating diabetes-friendly meal plans that don’t compromise on taste or cultural preferences.',
    date: '1/10/2024',
    readTime: '8 min read',
    image: blogImage,
  },
  {
    title: 'Managing Diabetes Through Strategic Meal Planning',
    description:
      'Practical strategies for creating diabetes-friendly meal plans that don’t compromise on taste or cultural preferences.',
    date: '1/10/2024',
    readTime: '8 min read',
    image: blogImage,
  },
  {
    title: 'Managing Diabetes Through Strategic Meal Planning',
    description:
      'Practical strategies for creating diabetes-friendly meal plans that don’t compromise on taste or cultural preferences.',
    date: '1/10/2024',
    readTime: '8 min read',
    image: blogImage,
  },
];

export default function CertificationsAndBlogs() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.clientWidth;
      container.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="pt-5 ">
      {/* Certifications Section */}
      <div className="px-4 md:px-20 text-center pt-10 mb-12">
        <h2 className="hidden md:block  text-2xl text-center md:text-3xl font-bold mb-12">
          Our Nutrition Solutions Are Certified and Accredited
        </h2>
        <h2 className="md:hidden text-2xl text-start md:text-3xl font-bold mb-6">
          Our Nutrition Solutions Are Certified and Accredited
        </h2>
        <div className="flex flex-wrap gap-x-8 md:gap-x-4 gap-y-2 text-black font-medium text-sm md:text-[14px]">
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

      {/* Blog Section */}
      <div className="bg-[#F3EAFA] py-10 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Explore Our Nutrition & Wellness Insights
        </h2>

        {/* Scrollable Blog Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory md:gap-6 md:flex-row md:overflow-x-visible"
        >
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-full md:w-auto md:flex-1"
            >
              <BlogCards {...blog} />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col  items-center mt-8">
          <div className="flex md:hidden  gap-3 mb-4">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full flex justify-center items-center bg-white shadow-md"
            >
            <MdChevronLeft size={24}  className='text-gray-400' />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full flex justify-center items-center bg-white shadow-md"
            >
             <MdChevronRight size={24}  className='text-gray-400'/>
            </button>
          </div>
         <Link href="/blog/1">
  <button className="border border-gray-400 px-6 py-2 rounded-md text-sm hover:bg-gray-100 transition">
    Read More
  </button>
</Link>
        </div>
      </div>
    </section>
  );
}
