import NutritionApproach from '@/components/services/nutritionplate';
import OurProcess from '@/components/services/ourprocess';
import Services from '@/components/services/servicehero';
import WhatToExpect from '@/components/services/whattoexpect';
import React from 'react';

const ServiceScreen = () => {
  return (
    <div className=' '>
      <section className='mt-5 px-6 md:px-12'>
        <Services />
      </section>
      <section className='md:px-12 mt-10'>
        <WhatToExpect />
      </section>
      <section className='mt-5 md:mt-10  md:px-12'>
        <NutritionApproach />
      </section>
      <section className='mt-5 px-6 md:px-12'>
        <OurProcess />
      </section>
    </div>
  );
};

export default ServiceScreen;
