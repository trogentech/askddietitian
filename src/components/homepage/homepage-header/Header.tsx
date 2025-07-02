'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../assets/images/Logo.png';
import instagramLogo from '../../../assets/images/instagram.png';
import facebookLogo from '../../../assets/images/facebook.png';
import twitterLogo from '../../../assets/images/twitter.png';
import linkedinLogo from '../../../assets/images/linkedin.png';
import BookButton from '@/components/button/bookbutton';
import menuImage from '../../../assets/images/menu.png';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 w-full">
      {/* Top Bar */}
      <div  className="flex items-center  justify-between p-2 h-[80px] border  border-gray-200 bg-white shadow-md rounded-xl">
        <div className="flex items-center gap-10  px-4">
          <Image src={logo} alt="web logo" width={100} height={45} />
          <div className="hidden  md:flex md:items-center  md:gap-4">
            <Image src={instagramLogo} alt="instagram-logo" width={15} height={15} />
            <Image src={linkedinLogo} alt="linkedin-logo" width={15} height={15} />
            <Image src={twitterLogo} alt="twitter-logo" width={15} height={15} />
            <Image src={facebookLogo} alt='facebook-logo' width={7} height={100} />
        
        </div>
 </div>
        {/* Mobile Menu Button */}
        <nav className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(true)}>
            <Image src={menuImage} alt="menu" width={30} height={30} />
          </button>
        </nav>

        {/* Desktop Nav */}
        <nav className="hidden md:flex mx-auto    text-lg md">
          <div className="flex items-center   gap-10  justify-between">
            <Link href="/" className="text-black text-[14px] font-semibold">Home</Link>
            <Link href="/about" className="text-black text-[14px] font-semibold">About Us</Link>
            <Link href="/services" className="text-black text-[14px] font-semibold">Services</Link>
            <Link href="/blog" className="text-black text-[14px] font-semibold">Blog</Link>
          </div>
        </nav>
          <div className="hidden md:block">
            <BookButton text=" Book a Free Consultation" />
          </div>
      </div>
  
       
      {/* Mobile Slide Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 w-full  bg-opacity-50">
          <div className="fixed right-0 top-0 w-full  h-[450px] bg-white p-6 shadow-xl flex flex-col justify-between">
            {/* Header Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <Image src={logo} alt="Logo" width={100} height={40} />
                <button onClick={() => setIsOpen(false)}>
                  <IoClose className="text-3xl text-black" />
                </button>
              </div>

              <button className="w-3/4 bg-purple-600 text-white py-2 rounded-md font-medium mb-6">
                Book a Free Consultation
              </button>

              {/* Navigation */}
              <nav className="flex flex-col space-y-4 text-base text-gray-900">
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
              </nav>
            </div>

            {/* Socials */}
            <div className="flex space-x-5 w-full pt-6">
              <Image src={instagramLogo} alt="Instagram" />
              <Image src={linkedinLogo} alt="LinkedIn" />
              <Image src={twitterLogo} alt="Twitter" />
              <Image src={facebookLogo} alt="Facebook" />
            </div>
          </div>
        </div>
      )}
       
    </header>
  );
};

export default Header;
