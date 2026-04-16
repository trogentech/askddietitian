export default function NutritionPage() {
  return (
    <div className="bg-gradient-to-b from-primary to-purple-500 flex justify-center items-center text-white  min-h-[400px]">
      <div className="text-center py-16  px-4">
        <h1 className="text-xl md:text-4xl  leading-[1.5]">
          Transform Your Plate,<br className="md:hidden block"/> Transform Your Life,
          <br className="hidden md:inline"/>
          Get Your  <br className="md:hidden block" />Custom Nutrition Care Today
        </h1>
        <p className="mt-4 text-[12px] md:text-base">
          Your health can&apos;'t wait—book your expert nutrition consultation now
        </p>
        <a
          href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20a%20nutrition%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-white text-sm text-black px-10 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Book Consultation
        </a>
      </div>

     
    </div>
  );
}
