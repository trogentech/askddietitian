"use client";
import React, { useState } from "react";
import newsletterpopupImage from "../../assets/images/newssletterbgImage.png"
import Image from "next/image";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { sendNewsletterEmail } from "@/lib/sendEmail";

export default function NewsletterPopup() {
    const [open,setOpen] =useState(false)
  const [error,setError] = useState("")
  const [success,setSuccess] = useState("")
  const [email,setEmail] = useState("")
const  handleModalClose = ()=>{
    setOpen(!false)
}
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
   <div className="">
    {
        !open &&
        <div className="fixed  inset-0 z-50 bg-black/30 flex items-center justify-center">
 <div className="fixed my-auto max-h-[500px] inset-0 z-50 flex items-center justify-center">
   <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl w-full h-full     flex flex-col md:flex-row">
      
        <div className="hidden md:block md:w-1/2 w-full  h-full">
         <div className="w-full ">
           <Image
            src={newsletterpopupImage}
            alt="Healthy Salad"
            className="object-cover w-full "
          />
         </div>
        </div>

        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
          <div >
          <div className="flex justify-end cursor-pointer">
            <button onClick={handleModalClose} className="text-xl cursor-pointer">&times;</button>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">First Timer?</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Get Exclusive Nutrition <br className="hidden md:block" />
              Tips & Recipes!
            </h2>
            <p className="text-gray-700 mb-4">
              Join our newsletter for expert health tips, meal plans, and
              exclusive offers – straight to your inbox!
            </p>
            <form className="space-y-4" onSubmit={sendEmail}>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded shadow-2xl"
              >
                Subscribe
              </button>
              <p className="text-xs text-gray-500">
                By completing this form, you are signing up to receive our
                emails and can unsubscribe at any time.
              </p>
              {success && <p className="text-green-600 mt-2">{success}</p>}
              {error && <p className="text-red-600 mt-2">{error}</p>}
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>

        </div>
    }
   </div>
  );
}
