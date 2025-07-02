// app/components/WhoWeAre.tsx
import React from "react";
import { FaUserAlt, FaHeartbeat, FaChalkboardTeacher, FaRegHeart, FaCheckCircle, FaBullseye } from "react-icons/fa";

const services = [
  {
    icon: <FaUserAlt className="text-purple-500 text-2xl" />,
    title: "Personalized Care",
    description:
      "Tailored plans designed around your health goals, lifestyle, and preferences—making healthy eating simple and sustainable.",
  },
  {
    icon: <FaHeartbeat className="text-purple-500 text-2xl" />,
    title: "Nutrition Therapy",
    description:
      "Expert-led nutrition support for managing conditions like diabetes, hypertension, and HIV/AIDS—backed by clinical science.",
  },
  {
    icon: <FaChalkboardTeacher className="text-purple-500 text-2xl" />,
    title: "Community Education",
    description:
      "We educate communities on the power of nutrition through workshops, campaigns, and outreach programs.",
  },
  {
    icon: <FaRegHeart className="text-purple-500 text-2xl" />,
    title: "Policy Development",
    description:
      "We partner with institutions to design nutrition policies that improve public health and drive long-term impact.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
        <p className="text-gray-600">
          We are a team of dedicated Registered Dietitians passionate about creating sustainable dietary
          solutions that work within your unique environment.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 text-center space-y-3"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-blue-high rounded-2xl ">
          <div className="flex items-center gap-3 mb-3">
            <FaBullseye  className="text-blue-500  md:text-xl " />
            <h3 className="text-lg font-semibold text-gray-800">Our  Mission</h3>
          </div>
          <ul className="space-y-2 text-xs md:text:md text-black">
            <li className="flex items-start gap-2">
              <FaCheckCircle   className="text-blue-500  md:text-xl mt-1" />
             <p> To help our clients embrace healthy eating habits that work within their unique environmental contexts</p>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle   className="text-blue-500  md:text-xl mt-1" />
            <p>  To improve overall well-being through sustainable, efficient nutritional choices that create lasting change</p>
            </li>
          </ul>
        </div>

        <div className="bg-purple-100 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <FaBullseye   className="text-purple-600 text-xl" />
            <h3 className="text-lg font-semibold text-black">Our Vision</h3>
          </div>
          <p className="text-xs md:text-sm text-black mb-3">
            We aspire to become Africa's leading Nutrition and Dietetic consulting firm. This vision guides every
            recommendation we make and every client we serve.
          </p>
          <p className="text-xs md:text-sm text-black">
            We're committed to pioneering advanced nutritional research while maintaining the highest ethical
            standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
