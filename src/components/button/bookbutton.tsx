import React from 'react';

type BookButtonProps = {
  text: string;
};

const BookButton: React.FC<BookButtonProps> = ({ text }) => {
  return (
    <div className=''>
      <a
        href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20nutrition%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="btn-glow bg-[#8B2CC9] w-full text-white py-[12px] md:p-[12px] text-xs md:text-base px-2 md:px-9 md:py-3 shadow-lg rounded-md transition-all duration-300 hover:bg-[#7a24b3] hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:shadow-lg"
      >
        {text}
      </a>
    </div>
  );
};

export default BookButton;
