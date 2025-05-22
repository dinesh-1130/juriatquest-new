
// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const tabs = ["Blogs", "Events", "Press Release"];

// export default function MediaCenter() {
//   const [activeTab, setActiveTab] = useState("Blogs");
//   const [data, setData] = useState({
//     Blogs: [],
//     Events: [],
//     "Press Release": [],
//   });

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   useEffect(() => {
//     async function fetchData() {
//       const blogData = [
//         {
//           title: "Overcoming AI Challenges: The Path to Innovation",
//           description:
//             "The global Artificial Intelligence (AI) market, valued at over $200 billion, is reshaping industries and redefining the future of automation, decision-making, and digital services at scale.",
//           author: "Rania Wehbi",
//           image: "/assets/press-3.jpg",
//         },
//         {
//           title: "Leveraging Platformation for Public Sector Transformation",
//           description:
//             "As organizations in the UAE continue to navigate the complexities of digital transformation, Platformation provides a strategic path for government scalability and resilience.",
//           author: "Ossama El Samadoni",
//           image: "/assets/press-4.jpg",
//         },
//         {
//           title: "Simplifying the Transition to Hybrid MultiCloud",
//           description:
//             "Organizations today face mounting pressure to innovate and streamline operations to stay competitive. Hybrid MultiCloud solutions combine public, private, and edge computing seamlessly.",
//           author: "Somas K Balasubramanian",
//           image: "/assets/press-5.jpg",
//         },
//         {
//           title: "Future of Banking: Embracing the Experiential, Collaborative",
//           description:
//             "The banking sector in the UAE has always been among the leaders in adapting quickly to change. The focus is now shifting toward enhancing user experience, agility, and service automation.",
//           author: "Hasanian Alkassab",
//           image: "/assets/press-6.jpg",
//         },
//       ];

//       const eventData = [
//         {
//           title: "Kuwait Innovation Summit 2025",
//           description:
//             "AI is transforming the way we live our lives with intelligent systems, smart cities, and autonomous solutions. This summit will showcase top regional innovation in AI and digital services.",
//           date: "28-Apr-2025",
//           location: "Kuwait",
//           image: "/assets/sample-1.jpg",
//         },
//         {
//           title: "COMMNET at Cyber First Kuwait Conference",
//           description:
//             "COMMNET is proud to bring the innovation story to Kuwait’s top cybersecurity stage. Join us as we unveil the future of secure digital infrastructure.",
//           date: "22-Apr-2025",
//           location: "Kuwait",
//           image: "/assets/sample-2.jpg",
//         },
//         {
//           title: "Upgrade to BIG-IP rSeries: Future-Proof Your Infra",
//           description:
//             "Secure your business with the next-gen application delivery and security solutions that reduce total cost of ownership while improving scale and automation.",
//           date: "30-May-2025",
//           location: "Dubai - UAE",
//           image: "/assets/sample-3.jpg",
//         },
//         {
//           title: "Secure Your Applications & APIs with COMMNET and F5",
//           description:
//             "Learn how F5 WAAP and COMMNET's security experts are protecting modern workloads using adaptive threat models and holistic API protection frameworks.",
//           date: "30-May-2025",
//           location: "Dubai - UAE",
//           image: "/assets/sample-4.jpg",
//         },
//       ];

//       const pressData = [
//         {
//           title: "COMMNET Celebrates 35 Years of Legacy and Innovation",
//           description:
//             "COMMNET, a leading digital solutions provider, is marking its 35th anniversary with a renewed focus on hybrid cloud, AI, and intelligent networking. Celebrations will be held across all regions.",
//           image: "/assets/pic-1.jpg",
//         },
//         {
//           title: "COMMNET Partners with Splunk to Drive Transformation",
//           description:
//             "Enhance threat detection, secure systems and safeguard data with COMMNET and Splunk’s joint enterprise analytics and observability platform.",
//           image: "/assets/pic-2.jpg",
//         },
//         {
//           title: "COMMNET to Deliver Comprehensive IT Services",
//           description:
//             "This strategic partnership will see COMMNET oversee complete infrastructure, cloud, cybersecurity, and software modernization for major clients in finance and government.",
//           image: "/assets/pic-3.jpg",
//         },
//         {
//           title: "COMMNET to Implement Next-Gen Firewall Solutions",
//           description:
//             "Zero-trust tech offers multiple advantages. COMMNET's integration with top firewall vendors brings deep inspection, cloud-native access control, and threat intelligence in one suite.",
//           image: "/assets/pic-1.jpg",
//         },
//       ];

//       setData({
//         Blogs: blogData,
//         Events: eventData,
//         "Press Release": pressData,
//       });
//     }

//     fetchData();
//   }, []);

//   const renderCards = (items) => (
//     // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
//     <div className="flex mt-10">
//       <Swiper
//         spaceBetween={24}
//         breakpoints={{
//           320: { slidesPerView: 1.1 },
//           640: { slidesPerView: 1.5 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//           1280: { slidesPerView: 4 },
//         }}
//       >
//         {items.map((item, index) => (
//           <SwiperSlide key={index} className="">
//             <div
//               key={index}
//               className="bg-white hover:bg-purple-50 transition-all duration-200 rounded-xl shadow-md overflow-hidden flex flex-col justify-between min-h-[520px]"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="p-5 flex flex-col justify-between flex-grow">
//                 <h3 className="text-lg font-semibold font-['Plus Jakarta Sans'] text-gray-900 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-700 font-['Lato'] mb-3">
//                   {item.description}
//                 </p>
//                 {item.author && (
//                   <p className="text-sm text-purple-700 font-semibold font-['Lato']">
//                     Author: {item.author}
//                   </p>
//                 )}
//                 {item.date && (
//                   <p className="text-xs text-gray-500 mt-2 font-['Lato']">
//                     {item.date}
//                   </p>
//                 )}
//                 {item.location && (
//                   <p className="text-sm mt-1 font-['Lato']">
//                     <span className="font-semibold">Location:</span>{" "}
//                     <span className="text-purple-700">{item.location}</span>
//                   </p>
//                 )}
//                 {item.date && (
//                   <div className="mt-4">
//                     <button className="w-full px-4 py-2 bg-purple-700 text-white rounded-full text-sm font-semibold">
//                       Register Now
//                     </button>
//                   </div>
//                 )}
//               </div>
//               <img
//                 src={item.image}
//                 alt="media"
//                 className="w-full h-[250px] object-cover"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );

//   return (
//     <section
//       className="px-6 md:px-16 py-12 font-['Lato'] bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/assets/bg-2.jpg')" }}
//       data-aos="fade-in"
//     >
//       <div className="flex flex-col md:flex-row items-start justify-start pb-4 gap-10">
//         <button className="border border-purple-700 text-purple-700 rounded-full px-4 py-1 text-sm font-semibold">
//           Media Center
//         </button>
//         <div className="flex gap-10">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`relative text-2xl font-['Plus Jakarta Sans'] font-bold focus:outline-none ${
//                 activeTab === tab ? "text-gray-900" : "text-gray-400"
//               }`}
//             >
//               {tab}
//               {activeTab === tab && (
//                 <span className="absolute left-0 -bottom-1 w-full h-1 bg-purple-600" />
//               )}
//             </button>
//           ))}
//         </div>
//       </div>

//       {renderCards(data[activeTab])}
//     </section>
//   );
// }
