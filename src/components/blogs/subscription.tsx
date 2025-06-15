'use client';
import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="w-full bg-white pt-12  ">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-[35px] font-semibold text-black">
          Stay Updated with Latest Nutrition Insights
        </h2>
        <p className="mt-2 text-sm sm:text-[13px] text-black">
          Get evidence-based nutrition tips and expert guidance delivered to your inbox.
        </p>
        <form className="mt-6  " >
          <div className="flex flex-col w-full sm:flex-row items-center md:justify-center  gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] md:w-3/5 px-4 py-2 placeholder-black rounded-md border border-primary focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto md:w-[200px] px-6 py-2 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
