import React from 'react';
import Link from 'next/link';

type BookButtonProps = {
  text: string;
};

const BookButton: React.FC<BookButtonProps> = ({ text }) => {
  return (
    <div className=''>
      <Link href="/#consultation" className="bg-[#8B2CC9]  w-full text-white py-[12px]  md:p-[12px]  text-xs md:text-base px-2  md:px-9 md:py-3 shadow-lg rounded-md  ">
        {text}
      </Link>
    </div>
  );
};

export default BookButton;
