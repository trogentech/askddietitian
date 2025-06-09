import React from 'react';
import logo  from '../../../assets/images/Logo.png'
import Image from 'next/image';
import instagramLogo from '../../../assets/images/instagram.png';
import facebookLogo from '../../../assets/images/facebook.png';
import twitterLogo from '../../../assets/images/twitter.png';
import linkedinLogo from '../../../assets/images/linkedin.png';
const Footer = () => {
  return (
    <>
      <div className=" text-gray-800 px-4 md:px-20 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-xs">
            <li>Medical Nutrition Therapy</li>
            <li>Weight Management & Wellness</li>
            <li>Pediatric & Infant Nutrition</li>
            <li>Sustainable Diet</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-xs">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog & News</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="space-y-2 text-xs">
            <li>FAQs</li>
            <li>Book a Consultation</li>
            <li>Nutrition Programs</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-xs">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Data Processing</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold mb-4">KEEP UP WITH US</h3>
          <p className="text-[10px] mb-4">
            Stay up to date by reading our high quality article and personalized for you
          </p>
          <div className="flex items-center border-b border-gray-300 py-2">
            <input
              className="appearance-none bg-transparent text-xs border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Write your email here"
              aria-label="Email"
            />
            <button className="flex-shrink-0 bg-primary  h-9 w-9 text-white p-1 rounded-full">
              ➜
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 md:px-20  flex flex-col md:flex-row justify-between text-center border-t border-gray-100 py-6 text-sm text-gray-500">
        <div className="mt-4">
          <Image src={logo} alt="askdietitian logo" className="mx-auto h-6" />
        </div>
        <div className="flex justify-center items-center gap-4 text-purple-700">
         <div>
            <Image src={instagramLogo} alt='instagram-logo' width={15} height={20} />
        </div>
       <div>
         <Image src={linkedinLogo} alt='linkedin-logo' width={15} height={100} />
       </div>
       <div>
            <Image src={twitterLogo} alt='twitter-logo' width={15} height={100} />
       </div>
      
 
        <div>
         <Image src={facebookLogo} alt='facebook-logo' width={7} height={100} />
    
       </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
