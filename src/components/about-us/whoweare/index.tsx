// app/components/WhoWeAre.tsx
import React from "react";
import { FaUserAlt, FaHeartbeat, FaChalkboardTeacher, FaRegHeart, FaCheckCircle, FaBullseye } from "react-icons/fa";
import WhoweAreCards from "./whowearecards";
import people from '../../../assets/images/mdi_people.png'
import nutrition_therapay from '../../..//assets/images/therapy.png'
import community_education from '../../../assets/images/community-education-image.png'
import policy_development from '../../../assets/images/healthicons_close-policy-gaps-alt.png'
import pyjamas from "../../../assets/images/pajamas_issue-type-objective.png"
import material from "../../../assets/images/material-symbols_other-admission.png"
import Image from "next/image";
const services = [
  {
    icon: people,
    title: "Personalized Care",
    description:
      "Tailored plans designed around your health goals, lifestyle, and preferences—making healthy eating simple and sustainable.",
  },
  {
    icon: nutrition_therapay,
    title: "Nutrition Therapy",
    description:
      "Expert-led nutrition support for managing conditions like diabetes, hypertension, and HIV/AIDS—backed by clinical science.",
  },
  {
    icon: community_education,
    title: "Community Education",
    description:
      "We educate communities on the power of nutrition through workshops, campaigns, and outreach programs.",
  },
  {
    icon:policy_development,
    title: "Policy Development",
    description:
      "We partner with institutions to design nutrition policies that improve public health and drive long-term impact.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="py-12   bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Who We Are</h2>
        <p className="text-black text-sm md:text-base  ">
          We are a team of dedicated Registered Dietitians passionate about creating sustainable dietary
          solutions that work within your unique environment.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12 ">
        {services.map((service, idx) => (
         <WhoweAreCards key={idx} {...service}/>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-blue-50 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex justify-center items-center w-10 h-10  bg-blue-high rounded-full">
                <Image src={material} alt="health-icon" className="w-6 h-6 rounded-full "/>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Our Mission</h3>
          </div>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-500 mt-1" />
             <p> To help our clients embrace healthy eating habits that work within their unique environmental contexts</p>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <p>To improve overall well-being through sustainable, efficient nutritional choices that create lasting change</p>
            </li>
          </ul>
        </div>

        <div className="bg-purple-100 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex justify-center items-center w-10 h-10  bg-primary rounded-full">
                <Image src={pyjamas} alt="health-icon" className="w-6 h-6 rounded-full "/>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Our Vision</h3>
          </div>
          <p className="text-base text-gray-700 ">
            We aspire to become Africa's leading Nutrition and Dietetic consulting firm. This vision guides every
            recommendation we make and every client we serve.
          </p>
          <p className="text-base text-gray-700">
            We're committed to pioneering advanced nutritional research while maintaining the highest ethical
            standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
