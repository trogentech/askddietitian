import Link from 'next/link';
import Image from 'next/image'
import logo  from '../../../assets/images/Logo.png'
import assets from '@/assets/assets';
import instagramLogo from '../../../assets/images/instagram.png';
import facebookLogo from '../../../assets/images/facebook.png';
import twitterLogo from '../../../assets/images/twitter.png';
import linkedinLogo from '../../../assets/images/linkedin.png';
import BookButton from '@/components/button/bookbutton';
import menuImage from '../../../assets/images/menu.png'
const Header = () => {
  return (
    <header className="flex  items-center p-2 h-[80px] bg-white shadow-md rounded-xl">
     <div className='flex items-center'>
         <div className="flex items-center">
          <Image
      src={logo}
      alt="web logo"
      width={100}
      height={45}
    />
      </div>
      <div className='hidden md:w-[250px]  md:items-center md:px-10  md:flex  md:gap-4'>
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
     <nav className='md:hidden ml-auto'>
        <Image src={menuImage} alt='menu'/>
     </nav>
      <nav className="hidden md:flex md:w-3/4  text-lg md:ml-auto">
        <div className='flex items-center  md:w-1/2 justify-between'>
         <div>
                <Link href="/home" className='text-black text-[14px]'>Home</Link>
            </div>
            <div>
                <Link href="/about" className='text-black text-[14px]'>About Us</Link>
            </div>
        <div>
            <Link href="/services" className='text-black text-[14px]'>Services</Link>
        </div>
        <div>
                <Link href="/blog" className='text-black text-[14px]'>Blog</Link>
        </div>
       
        </div>
        <div className=" ml-auto">
            <BookButton text=' Book a Free Consultation'/>
        </div>
       
      </nav>
    </header>
  );
};

export default Header;
