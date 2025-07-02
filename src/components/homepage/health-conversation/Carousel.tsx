import { ReactNode, useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface CarouselProps {
  children: ReactNode[];           
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({
  children: cards,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? cards.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === cards.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
<div className="overflow-hidden relative w-full">
  {/* Slides wrapper */}
  <div
    className="flex transition-transform ease-out duration-500"
    style={{ transform: `translateX(-${curr * 100}%)` }}
  >
    {cards.map((card, i) => (
      <div key={i} className="min-w-full">{card}</div>
    ))}
  </div>

  {/* Arrows */}
  <div className="flex items-center justify-center gap-4 mt-4 px-4">
    <button
      onClick={prev}
      disabled={curr === 0}
      className={`p-1 w-8 h-8 rounded-full mr-4  shadow-md bg-white text-gray-800 transition-opacity ${
        curr === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
      }`}
    >
      <MdChevronLeft size={20} className="text-gray-400"/>
    </button>

    <button
      onClick={next}
      disabled={curr === cards.length - 1}
      className={`p-1 w-8 h-8 rounded-full mr-4  shadow-md bg-white text-gray-800 transition-opacity ${
        curr === cards.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
      }`}
    >
      <MdChevronRight size={20} className="text-gray-400"/>
    </button>
  </div>
</div>


  );
}
