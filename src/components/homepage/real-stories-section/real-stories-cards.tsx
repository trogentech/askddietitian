import React from 'react';
import profileImage from "../../../assets/images/profile-image.png";
import quotationMark from "../../../assets/images/quotationMark.png";
import Image, { StaticImageData } from 'next/image';

interface RealStoriesCardProps {
  image: string | StaticImageData;
  text: string;
  name: string;
}

const RealStoriesCard: React.FC<RealStoriesCardProps> = ({ image, text, name }) => {
  return (
    <div className="relative rounded-xl shadow-md md:h-[500px] flex flex-col items-center min-w-[90%] sm:min-w-[60%] md:min-w-[50%] lg:w-[28%] xl:min-w-[28%]">

      <div className="w-full h-full overflow-hidden rounded-md">
        <Image src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="absolute bottom-0">
        <div className="relative shadow-2xl m-4 bg-white rounded-md p-4 min-h-[250px] md:min-h-[280px]">
          <div>
            <Image src={quotationMark} alt="quote" className="w-6 h-6 md:w-10 md:h-8  mb-2 object-contain" />
          </div>
          <p className="text-black text-start text-xs ">
            {text}
          </p>

          <div className="absolute bottom-4 md:bottom-10 flex items-center w-full space-x-3 justify-start">
            <Image src={profileImage} alt={name} className="w-8 h-8 rounded-full object-cover" />
            <span className="font-medium text-gray-900">{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealStoriesCard;
