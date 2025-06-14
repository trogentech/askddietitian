import Image from 'next/image'
import scienceBackedFruits from "../../../assets/images/science-backed-fruits.png"
import checkMark from  "../../../assets/images/checkbox-circle-science.png"
import sciencIcon from "../../../assets/images/Science-icon.png"

export default function NutritionApproach() {
  return (
    <section className="py-10  bg-purple px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex    md:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="flex-1 ">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-white  rounded-full">
                <Image src={sciencIcon} alt='science-icon'/>
              </div>
              <h2 className="text-md md:text-xl font-semibold">Science-Backed Solutions, Human-Centered Approach</h2>
            </div>
            <p className="text-black text-[11px] leading-tight md:text-[13px] t mb-4">
              At our core, we bridge the gap between rigorous nutritional science and the realities of your daily life. Our team doesn’t just understand the clinical aspects of nutrition for complex health conditions—we excel at translating that knowledge into practical solutions that work in the real world.
            </p>
            <p className="text-black text-[11px] leading-tight md:text-[13px]  mb-4">
              While our recommendations are firmly grounded in evidence-based research, we recognize that the most scientifically perfect nutrition plan is worthless if it doesn’t fit into your life. That’s why we take the time to understand your schedule, preferences, and challenges before designing your plan.
            </p>
</div>
           </div>
           <h4 className='font-semibold'>Our approach combines:</h4>
           <div className=' flex items-center'>
             <div className=" space-y-3 w-full  md:w-1/2">
              {[
                "Advanced clinical knowledge of how nutrition impacts specific health conditions",
                "Cultural sensitivity to food traditions and preferences",
                "Practical understanding of food availability, preparation time, and budget constraints",
                "Flexibility to adapt as your life circumstances change"
              ].map((point, index) => (
                <div key={index} className="flex items-start  gap-2">
                  <div className=" h-[20px]   w-[20px] ">
                     <Image src={checkMark} alt='science-icon' className=''/>
                  </div>
                  <p className="text-black w-full text-[12px] md:text-[13px]">{point}</p>
                </div>
              ))}
            </div>
            
          {/* Image */}
      <div className='flex-1'>
            <div className="">
            <Image
              src={scienceBackedFruits} 
              alt="Healthy food plate"
              width={500}
              height={300}
              className="rounded-lg shadow-md object-cover w-full"
            />
          </div>
      </div>
          </div>

       

        {/* Bottom Box */}
        <div className="border  border-primary bg-white p-4 mt-8 rounded-md text-xs md:text-[13px] leading-tight text-black">
          We believe in rigid protocols or unrealistic expectations. Instead, we collaborate with you to develop nutrition strategies that are both medically sound and practically achievable—creating a sustainable path to better health that respects who you are and how you live.
        </div>
      </div>
    </section>
  )
}
