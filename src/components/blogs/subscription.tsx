'use client';
import { sendNewsletterEmail } from '@/lib/sendEmail';
import { EmailJSResponseStatus } from '@emailjs/browser';
import React,{useState} from 'react';

const NewsletterSection = () => {
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
    <div className="w-full bg-white py-12 md:py-24 ">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-[35px] font-semibold text-black">
          Stay Updated with Latest Nutrition Insights
        </h2>
        <p className="mt-2 text-sm sm:text-[16px] text-black">
          Get evidence-based nutrition tips and expert guidance delivered to your inbox.
        </p>
        <form className="mt-6  " onSubmit={sendEmail} >
          <div className="flex flex-col w-full sm:flex-row items-center md:justify-center  gap-3 sm:gap-4">
            <input
              type="email"
              id='email'
              name='email'
              value={email}
              onChange={handleChange}
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
           {success && <p className="text-green-600 mt-2">{success}</p>}
              {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
