import React from 'react';
import Link from 'next/link';

type BookButtonProps = {
  text: string;
};

const BookButton: React.FC<BookButtonProps> = ({ text }) => {
  return (
    <div>
      <Link href="/#consultation" className="bg-[#8B2CC9] text-white p-[12px] px-2 text-[10px] md:text-xs md:px-9 md:py-3 shadow-sm rounded ml-auto">
        {text}
      </Link>
    </div>
  );
};

export default BookButton;
