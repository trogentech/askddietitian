'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import blogImage from '../../../assets/images/blogImage.png'; // Replace with real image
import BlogCards from './blog-cards';

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
    <section className="bg-white py-5">
      {/* Certifications Section */}
      <div className="px-4 md:px-20 text-center py-10 mb-12">
        <h2 className="hidden md:block text-2xl text-center md:text-3xl font-bold mb-8">
          Our Nutrition Solutions Are Certified and Accredited
        </h2>
        <h2 className="md:hidden text-2xl text-start md:text-3xl font-bold mb-6">
          Our Nutrition Solutions Are Certified and Accredited
        </h2>
        <div className="flex flex-wrap gap-x-8 md:gap-x-4 gap-y-2 text-black font-medium text-sm md:text-[14px]">
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex flex-col md:flex-row">
              <span className="text-start font-medium md:border-none leading-tight md:pl-0 md:px-4">
                {cert}
              </span>
              <span
                className={`border-b-2 md:border-r-4 md:border-b-0 border-blue w-8 h-2 md:h-8 ${
                  idx === certifications.length - 1 && `border-none`
                }`}
              ></span>
            </div>
          ))}
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
        <div className="flex flex-col items-center mt-8">
          <div className="flex md:hidden  gap-3 mb-4">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full bg-white shadow-md"
            >
              {'<'}
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full bg-white shadow-md"
            >
              {'>'}
            </button>
          </div>
          <button className="border border-gray-400 px-6 py-2 rounded-md text-sm hover:bg-gray-100 transition">
            Read Blog
          </button>
        </div>
      </div>
    </section>
  );
}
