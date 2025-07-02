// components/HealthConversationCards.tsx
import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

type CardProps = {
  icon: string | StaticImageData;
  title: string;
  content: string;
};

const HealthConversationCards: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4  h-[320px] mr-8 py-10 md:h-[320px] border border-gray-200 w-full transition duration-300 transform hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col justify-center space-x-3 mb-3">
        <div className="bg-purple-100 text-purple-600 p-4 mb-4 flex justify-center items-center h-12 w-12 rounded-full">
          <Image src={icon} alt="health-related-icon" width={56} height={56} />
        </div>
        <h3 className="font-semibold text-black">{title}</h3>
      </div>
      <p className="text-sm text-black">{content}</p>
    </div>
  );
};

export default HealthConversationCards;
//     <div
//   className="rounded-lg border border-gray-100 bg-white p-4 transition shadow-lg sm:p-6"
// >
//   <div className="bg-purple-100 text-purple-600 p-4 mb-4 flex justify-center items-center h-12 w-12 rounded-full">
//           <Image src={icon} alt="health-related-icon" width={56} height={56} />
//         </div>
//     <h3 className="mt-0.5 text-lg font-medium text-gray-900">
//       {title}
//     </h3>
 

//   <p className="mt-2  text-sm/relaxed text-black">
//     {content}
//   </p>

  
// </div>