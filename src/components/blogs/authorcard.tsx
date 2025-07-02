import Image from 'next/image';
import React from 'react';
import profileImage from  "../../assets/images/lady.png"

const AuthorCard = () => {
  return (
    <div className="bg-purple rounded-md md:p-4  p-2 flex items-start gap-2 md:gap-4  sm:max-w-2xl 2xl:max-w-3/5 mx-auto md:mt-20 mt-4">
  <div>
          <div className="w-12 h-12 rounded-full border overflow-hidden">
        <Image
          src={profileImage}
          alt="Adeola O. Adeleye"
          width={48}
          height={48}
          className="object-cover"
        />
      </div>
    </div>
      <div>
        <p className="font-bold text-sm text-black">Adeola O. Adeleye (RDN, MSc-PH)</p>
        <p className="text-xs md:text-sm  text-black mt-1">
          Registered Dietitian with over 8 years of experience in clinical nutrition therapy. Passionate about creating
          practical, evidence-based nutrition solutions that fit into real life.
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
