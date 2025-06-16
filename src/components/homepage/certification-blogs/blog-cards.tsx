import React from 'react';
import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
interface BlogCardProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

const BlogCards: React.FC<BlogCardProps> = ({ image, title, description, date, readTime }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden  w-full max-w-md">
      <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      
      <div className="p-4 text-left">
        <h3 className="font-medium text-sm md:text-base mb-2">{title}</h3>
        <p className="text-xs text-gray-600 mb-4">{description}</p>

        <div className="flex text-xs text-gray-500 gap-6 items-center mb-4">
          <div className="flex items-center gap-1">
            <FaRegCalendarAlt className='text-black'/>
            {date}
          </div>
          <div className="flex items-center gap-1">
            <FiClock className='text-black'/>
            {readTime}
          </div>
        </div>
         <Link href={"/blog/1"}>
          <button className="bg-primary text-white text-[10px] px-6 py-2 rounded hover:bg-purple-600 transition">
          Read More
        </button>
         </Link>
       
      </div>
    </div>
  );
};

export default BlogCards;
