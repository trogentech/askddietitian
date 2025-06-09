'use client';
import React, { useRef, useEffect,useState } from 'react';
import HealthConversationCards from './health-converssation-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Carousel from './Carousel';
import { cards } from '@/lib/data';


const HealthCardWrapper = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setSwiperReady(true);
    }
  }, []);

  return (
    <div className="py-8 ">
    
   <div className="hidden md:grid grid-cols-3 gap-4 w-full">
  {cards.map((card, index) => (
    <HealthConversationCards key={index} {...card} />
  ))}
</div>


      {/* Mobile swiper with arrows */}
      <div className="md:hidden overflow-x-hidden flex flex-col justify-center items-center w-full">
        <Carousel>
            {
                cards.map((s)=>(<HealthConversationCards {...s}/>))
            }
        </Carousel>
      </div>
    </div>
  );
};

export default HealthCardWrapper