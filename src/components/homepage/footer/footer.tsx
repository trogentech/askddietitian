'use client'
import React, { useState } from 'react';
import logo  from '../../../assets/images/Logo.png'
import Image from 'next/image';
import instagramLogo from '../../../assets/images/instagram.png';
import facebookLogo from '../../../assets/images/facebook.png';
import twitterLogo from '../../../assets/images/twitter.png';
import linkedinLogo from '../../../assets/images/linkedin.png';
import { sendNewsletterEmail } from '@/lib/sendEmail';
import { EmailJSResponseStatus } from '@emailjs/browser';
const Footer = () => {
  const [error,setError] = useState("")
      const [success,setSuccess] = useState("")
      const [email,setEmail] = useState("")
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      console.log("value",value)
        setEmail(e.target.value)
          console.log("value-------",value)
    };
    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      if (!email) {
        setError("Email is required");
        return;
      }
    
      try {
        await sendNewsletterEmail(email)
       
        setSuccess("Thanks for subscribing!");
        setError("");
        setEmail("");
      } catch (err) {
        if (err instanceof EmailJSResponseStatus) {
         
          setError("Failed to send. Please try again.");
          return;
        }
     
        setError("Something went wrong.");
      }
    };
  return (
    <>
      <div className="pb-10 text-black px-4 md:px-20 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Medical Nutrition Therapy</li>
            <li>Weight Management & Wellness</li>
            <li>Pediatric & Infant Nutrition</li>
            <li>Sustainable Diet</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog & News</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQs</li>
            <li>Book a Consultation</li>
            <li>Nutrition Programs</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
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
          <form onSubmit={sendEmail} className="flex items-center border-b border-black py-2">
            <input
              className="appearance-none bg-transparent text-sm border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              id='email'
              name='email'
              value={email}
              onChange={handleChange}
              placeholder="Write your email here"
              aria-label="Email"
            />
            <button type='submit' className="flex-shrink-0 bg-primary  h-9 w-9 text-white p-1 rounded-full">
              ➜
            </button>
             
          </form>
           {success && <p className="text-green-600 mt-2">{success}</p>}
              {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
      </div>
        <div className='hidden md:block md:px-20 w-full'>
            <hr className='bg-black '/>
        </div>
      <div className=" md:px-20 px-10  flex flex-col md:flex-row md:justify-between   py-6 text-sm text-gray-500">
        <div className="">
          <Image src={logo} alt="askdietitian logo" className=" h-6 mb-4" />
        </div>
        <div className="flex  items-center gap-4 text-purple-700">
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
