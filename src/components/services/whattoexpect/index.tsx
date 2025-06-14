import Image from "next/image";
import hand from  "../../../assets/images/hand.png"
import checkboxcircle from "../../../assets/images/checkbox-circle-fill.png"

export default function WhatToExpect() {
  return (
    <section className="py-5 md:pb-12  text-black">
      <div className="">
        <h2 className="text-xl md:text-4xl font-semibold text-center mb-2">What To Expect</h2>
        <p className="text-center text-xs px-6  md:text-md md:mb-10 mt-5 mb-5 text-black">
          We create nutrition solutions that work within your unique circumstances and lifestyle
        </p>

        <div className="bg-blue-50 pb-10  w-full  rounded-lg ">
          <div className="flex flex-col items-center pt-4   mb-4">
        <div className="flex gap-2 items-center  pl-5 w-full">
                <div className="w-[40px] h-[40px]">
              <Image src={hand} alt="hand-image" width={80} />
            </div>
             <h3 className="text-md font-semibold md:text-xl md:text-start  ">Nutrition Plans That Fit Your Real Life</h3>
        </div>
            <div>
             
              <p className="text-black  text-xs md:w-1/2 mt-2 pl-6 ">
                We understand that your life doesn't revolve around your nutrition plan—your nutrition plan should revolve around your life.<br className="md:hidden block "/>
                Unlike one-size-fits-all approaches, we create solutions that seamlessly integrate into your unique circumstances.
              </p>
            </div>
          </div>

    <h4 className="px-6  text-xs font-semibold mb-4 ">Your personalized nutrition journey begins by recognizing that:</h4>      
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 ">
  {/* 1 */}
  <div className="flex flex-col items-start ">
  <div className="flex items-center gap-2  ">
      <div className="w-[20px] h-[20px] ">
      <Image src={checkboxcircle} alt="checkbox" className="w-full" />
    </div>
      <p className="font-semibold text-md">Your schedule matters:</p>
  </div>
    <div>
    
      <p className="text-black text-[12px] pl-6">
        Whether you’re juggling long work hours, family responsibilities, or unpredictable commitments, we design meal plans that fit within the constraints of your actual day—not an idealized one.
      </p>
    </div>
  </div>

  {/* 2 */}
  <div className="flex flex-col items-start ">
  <div className="flex items-center gap-2  ">
      <div  className="w-[20px] h-[20px] ">
      <Image src={checkboxcircle} alt="checkbox" className="w-full" />
    </div>
    <p className="font-semibold text-sm">Your limitations are valid:</p>
  </div>
    <div>
      
      <p className="text-black text-[13px] pl-6">
        Limited cooking skills, restricted access to specialty ingredients, budget constraints, or physical challenges—we acknowledge these realities and create practical solutions that work within them.
      </p>
    </div>
  </div>

  {/* 3 */}
  <div className="flex flex-col items-start">
<div className="flex items-center gap-2">
        <div className="w-[20px] h-[20px] ">
      <Image src={checkboxcircle} alt="checkbox" className="w-full" />
     
    </div>
     <p className="font-semibold text-sm">Your social life continues:</p>
</div>
    <div>
      
      <p className="text-black text-[13px] pl-6 ">
        Dining out, family gatherings, and special occasions are part of life. We provide strategies that allow you to participate fully in these moments while supporting your health journey.
      </p>
    </div>
  </div>

  {/* 4 */}
  <div className="flex flex-col items-start">
   <div  className="flex items-center gap-2">
     <div className="w-[20px] h-[20px] ">
      <Image src={checkboxcircle} alt="checkbox" className="w-full" />
    </div>
    <p className="font-semibold text-sm">Your food preferences are honored:</p>
   </div>
    <div>
      
      <p className="text-black text-[13px] pl-6 ">
        Nutritious eating shouldn’t mean sacrificing the foods and flavors you love. We work with your taste preferences, incorporating familiar ingredients and cultural staples while making strategic adjustments to support your health goals.
      </p>
    </div>
  </div>

  {/* 5 */}
  <div className="flex flex-col items-start">
  <div className="flex items-center gap-2">
      <div className="w-[20px] h-[20px] ">
      <Image src={checkboxcircle} alt="checkbox" className="w-full" />
    </div>
    <p className="font-semibold text-sm">Your environment is considered:</p>
  </div>
    <div>
      
      <p className="text-black text-[13px] pl-6 ">
        From available kitchen equipment to local food accessibility, we factor in your entire food environment when crafting recommendations.
      </p>
    </div>
  </div>

  {/* 6 - Conclusion Box */}
  <div className="bg-white border p-2 rounded shadow-sm">
    <p className="text-black text-[13px] pl-6 ">
      By adapting to your specific circumstances rather than forcing rigid protocols, we create sustainable nutrition plans that evolve with you—turning healthy eating from a burdensome chore into a natural part of your everyday life.
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
