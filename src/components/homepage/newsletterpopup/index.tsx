"use client";
import React from "react";

export default function NewsletterPopup() {
  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            src="/salad.jpg" // Place image in `public` directory
            alt="Healthy Salad"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
          <div className="flex justify-end">
            <button className="text-xl">&times;</button>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">First Timer?</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get Exclusive Nutrition <br className="hidden md:block" />
              Tips & Recipes!
            </h2>
            <p className="text-gray-700 mb-4">
              Join our newsletter for expert health tips, meal plans, and
              exclusive offers – straight to your inbox!
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded shadow"
              >
                Subscribe
              </button>
              <p className="text-xs text-gray-500">
                By completing this form, you are signing up to receive our
                emails and can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
