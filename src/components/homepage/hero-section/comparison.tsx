"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ComparisonCards from './comparisoncards';
const Comparison = () => {
  return (
    <Swiper
       modules={[Autoplay, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  speed={800} 
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
    >
      <SwiperSlide>
       <ComparisonCards/>
      </SwiperSlide>
       <SwiperSlide>
       <ComparisonCards/>
      </SwiperSlide>
       <SwiperSlide>
       <ComparisonCards/>
      </SwiperSlide>
       <SwiperSlide>
       <ComparisonCards/>
      </SwiperSlide>
    </Swiper>
  );
};

export default Comparison;
