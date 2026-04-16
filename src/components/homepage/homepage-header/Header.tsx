'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../assets/images/Logo.png';
import instagramLogo from '../../../assets/images/instagram.png';
import facebookLogo from '../../../assets/images/facebook.png';
import twitterLogo from '../../../assets/images/twitter.png';
import linkedinLogo from '../../../assets/images/linkedin.png';
import BookButton from '@/components/button/bookbutton';
import menuImage from '../../../assets/images/menu.png';
import { IoClose, IoChevronDown, IoLogoWhatsapp } from 'react-icons/io5';

const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/YOUR_CHANNEL_LINK';

const serviceSubLinks = [
  { href: '/services/corporate-wellness', label: 'Corporate Wellness' },
  { href: '/services/nutritional-therapy', label: 'Nutritional Therapy' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

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
        <nav className="hidden md:flex mx-auto text-lg">
          <div className="flex items-center gap-10 justify-between">
            <Link href="/" className={`nav-link text-[14px] font-semibold ${pathname === '/' ? 'active text-primary' : 'text-black'}`}>Home</Link>
            <Link href="/about" className={`nav-link text-[14px] font-semibold ${pathname === '/about' ? 'active text-primary' : 'text-black'}`}>About Us</Link>
            <div className="group relative">
              <Link href="/services" className={`nav-link text-[14px] font-semibold inline-flex items-center gap-1 ${pathname.startsWith('/services') ? 'active text-primary' : 'text-black'}`}>
                Services
                <IoChevronDown className="text-[12px] transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full pt-2 transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[220px]">
                  {serviceSubLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2.5 text-[13px] font-medium transition-colors ${pathname === item.href ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/blog" className={`nav-link text-[14px] font-semibold ${pathname.startsWith('/blog') ? 'active text-primary' : 'text-black'}`}>Blog</Link>
          </div>
        </nav>
          <div className="hidden md:flex md:items-center md:gap-3">
            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-green-500 text-green-600 text-[13px] font-semibold rounded-md hover:bg-green-50 transition-colors"
            >
              <IoLogoWhatsapp className="text-[16px]" />
              Join Community
            </a>
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

              <a
                href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20nutrition%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-3/4 block text-center bg-purple-600 text-white py-2 rounded-md font-medium mb-3"
              >
                Book a Free Consultation
              </a>
              <a
                href={WHATSAPP_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-3/4 inline-flex items-center justify-center gap-2 border-2 border-green-500 text-green-600 py-2 rounded-md font-medium mb-6 hover:bg-green-50 transition-colors"
              >
                <IoLogoWhatsapp className="text-lg" />
                Join Community
              </a>

              {/* Navigation */}
              <nav className="flex flex-col space-y-4 text-base text-gray-900">
                <Link href="/" onClick={() => setIsOpen(false)} className={`mobile-nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className={`mobile-nav-link ${pathname === '/about' ? 'active' : ''}`}>About Us</Link>
                <div>
                  <div className="flex items-center justify-between">
                    <Link href="/services" onClick={() => setIsOpen(false)} className={`mobile-nav-link ${pathname.startsWith('/services') ? 'active' : ''}`}>Services</Link>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="p-1"
                      aria-label="Toggle services submenu"
                    >
                      <IoChevronDown
                        className={`text-[16px] text-gray-600 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  {isServicesOpen && (
                    <div className="flex flex-col space-y-3 pl-4 pt-3">
                      {serviceSubLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}
                          className={`text-[14px] transition-colors ${pathname === item.href ? 'text-purple-700 font-semibold' : 'text-gray-600 hover:text-purple-700'}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link href="/blog" onClick={() => setIsOpen(false)} className={`mobile-nav-link ${pathname.startsWith('/blog') ? 'active' : ''}`}>Blog</Link>
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
