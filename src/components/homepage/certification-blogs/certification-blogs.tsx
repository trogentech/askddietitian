// // components/CertificationsAndBlogs.tsx

// import Image from 'next/image';
// import blogImage from '@/public/images/blog.jpg'; // Replace with real image
// import { FiClock } from 'react-icons/fi';
// import { FaRegCalendarAlt } from 'react-icons/fa';

// const certifications = [
//   'Dietetic Association of Nigeria (DAN)',
//   'British Dietetic Association (BDA)',
//   'The Health and Care Professions Council (HCPC)',
//   'FIDES (WHO)',
// ];

// const blogs = [
//   {
//     title: 'Managing Diabetes Through Strategic Meal Planning',
//     description:
//       'Practical strategies for creating diabetes-friendly meal plans that don’t compromise on taste or cultural preferences.',
//     date: '1/10/2024',
//     readTime: '8 min read',
//     image: blogImage,
//   },
//   // You can duplicate this or loop for more items
// ];

// export default function CertificationsAndBlogs() {
//   return (
//     <section className="bg-white py-10">
//       {/* Certifications Section */}
//       <div className="px-4 md:px-20 text-center mb-12">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6">
//           Our Nutrition Solutions Are Certified and Accredited
//         </h2>
//         <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-blue-800 font-medium text-sm md:text-base">
//           {certifications.map((cert, idx) => (
//             <span key={idx} className="border-l md:border-none pl-2 md:pl-0 md:px-4">
//               {cert}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Blog Section */}
//       <div className="bg-[#F3EAFA] py-10 px-4 md:px-20">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
//           Explore Our Nutrition & Wellness Insights
//         </h2>

//         {/* Blog Cards */}
//         <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch">
//           {blogs.map((blog, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md"
//             >
//               <Image src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
//               <div className="p-4 text-left">
//                 <h3 className="font-semibold text-sm md:text-base mb-2">
//                   {blog.title}
//                 </h3>
//                 <p className="text-xs text-gray-600 mb-4">{blog.description}</p>
//                 <div className="flex text-xs text-gray-500 gap-6 items-center mb-4">
//                   <div className="flex items-center gap-1">
//                     <FaRegCalendarAlt />
//                     {blog.date}
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <FiClock />
//                     {blog.readTime}
//                   </div>
//                 </div>
//                 <button className="bg-purple-600 text-white text-xs px-4 py-1 rounded hover:bg-purple-700 transition">
//                   Read More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Read Blog Button + Arrows (mobile center-aligned) */}
//         <div className="flex flex-col items-center mt-8">
//           <div className="flex gap-3 mb-4">
//             <button className="w-8 h-8 rounded-full bg-white shadow-md">{'<'}</button>
//             <button className="w-8 h-8 rounded-full bg-white shadow-md">{'>'}</button>
//           </div>
//           <button className="border border-gray-400 px-6 py-2 rounded-md text-sm hover:bg-gray-100 transition">
//             Read Blog
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
