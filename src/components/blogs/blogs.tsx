'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import blogImage from '../../assets/images/blogImage.png'; 
import BlogCards from '../homepage/certification-blogs/blog-cards';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import CategoryFilter from './categoryfilter';
import NewsletterSection from './subscription';

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

export default function BlogComponents() {
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
    <section className="bg-white ">
    <div className='flex justify-center '>
         <CategoryFilter/>
    </div>

      {/* Blog Section */}
      <div className="">
       

        {/* Scrollable Blog Cards */}
         <section className=" py-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((post, idx) => (
          <BlogCards key={idx} {...post} />
        ))}
      </div>
    </section>

        <div>
            <NewsletterSection/>
        </div>
      </div>
    </section>
  );
}
