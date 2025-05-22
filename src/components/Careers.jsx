// import { useEffect, useState } from "react";

// const images = [
//     "/assets/press-1.jpg",
//     "/assets/press-2.jpg",
//     "/assets/press-3.jpg",
//   ];

// export default function CareersPage() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center font-['Lato']">
//       <div className="flex flex-col w-[95%] max-w-[1400px] gap-6">
//         {/* Top Careers Button */}
//         <div>
//           <button className="text-[#7a1ab3] border border-[#7a1ab3] text-sm px-5 py-1 rounded-full">
//             Careers
//           </button>
//         </div>

//         {/* Main Content: Left Image Slider & Right Text Section */}
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Left Image Slider */}
//           <div className="rounded-3xl overflow-hidden w-full lg:w-[65%] h-[520px]">
//             <img
//               src={images[currentIndex]}
//               alt="Career Slide"
//               className="w-full h-full object-cover transition duration-1000"
//             />
//           </div>

//           {/* Right Content with BG Image */}
//           <div
//             className="rounded-3xl p-10 flex flex-col justify-between w-full lg:w-[35%] h-[520px] bg-no-repeat bg-right-bottom bg-cover"
//             style={{ backgroundImage: "url('/assets/bg-5.jpg')" }}
//           >
//             <div>
//               <button className="text-[#7a1ab3] border border-[#7a1ab3] text-sm px-4 py-1 rounded-full mb-6">
//                 Join Now
//               </button>
//               <h2 className="text-4xl font-bold leading-tight text-[#333] mb-4">
//                 Do you value creativity <br /> and great ideas?{" "}
//                 <span className="text-sky-600">So does Commnet</span>
//               </h2>
//             </div>
//             <button className="bg-sky-600 text-white px-6 py-3 relative top-[-160px] rounded-full w-fit hover:bg-sky-700 transition">
//               View Job Openings
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/assets/press-1.jpg",
  "/assets/press-2.jpg",
  "/assets/press-3.jpg",
];

export default function CareersPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      once: false,
    });

    // Image slider interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Desktop version
  const DesktopLayout = () => (
    <div className="flex flex-col w-[95%] max-w-[1400px] gap-6">
      {/* Top Careers Button */}
      <div data-aos="fade-down">
        <button className="text-[#7a1ab3] border border-[#7a1ab3] text-sm px-5 py-1 rounded-full">
          Careers
        </button>
      </div>

      {/* Main Content: Left Image Slider & Right Text Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Image Slider */}
        <div 
          className="rounded-3xl overflow-hidden w-full lg:w-[65%] h-[520px]"
          data-aos="fade-right"
        >
          <img
            src={images[currentIndex]}
            alt="Career Slide"
            className="w-full h-full object-cover transition duration-1000"
          />
        </div>

        {/* Right Content with BG Image */}
        <div
          className="rounded-3xl p-10 flex flex-col justify-between w-full lg:w-[35%] h-[520px] bg-no-repeat bg-right-bottom bg-cover"
          style={{ backgroundImage: "url('/assets/bg-5.jpg')" }}
          data-aos="fade-left"
        >
          <div>
            <button className="text-[#7a1ab3] border border-[#7a1ab3] text-sm px-4 py-1 rounded-full mb-6">
              Join Now
            </button>
            <h2 className="text-4xl font-bold leading-tight text-[#333] mb-4">
              Do you value creativity <br /> and great ideas?{" "}
              <span className="text-sky-600">So does Commnet</span>
            </h2>
          </div>
          <button className="bg-sky-600 text-white px-6 py-3 relative top-[-160px] rounded-full w-fit hover:bg-sky-700 transition">
            View Job Openings
          </button>
        </div>
      </div>
    </div>
  );

  // Mobile version - Adjusted position and added Careers heading
  const MobileLayout = () => (
    <div className="w-full px-4">
      {/* Careers Heading Above Card */}
      <div className="mb-6 ml-2" data-aos="fade-down">
        <h1 className="text-2xl font-bold text-[#333]">Careers</h1>
      </div>
      
      {/* Card - Slightly left-aligned */}
      <div 
        className="w-[90%] max-w-[380px] mr-auto"
        data-aos="fade-up"
      >
        <div className="bg-[#f9f4fb] rounded-3xl p-6 shadow-sm">
          {/* Join Now Button */}
          <div className="mb-4">
            <button className="text-[#7a1ab3] border border-[#7a1ab3] text-sm px-4 py-1 rounded-full">
              Join Now
            </button>
          </div>
          
          {/* Heading Text */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold leading-tight text-[#333]">
              Do you value creativity and great ideas? <span className="text-[#7a1ab3]">So does GBM</span>
            </h2>
          </div>
          
          {/* City Image */}
          <div className="rounded-xl overflow-hidden mb-4">
            <img
              src={images[currentIndex]}
              alt="City Skyline"
              className="w-full h-40 object-cover"
            />
          </div>
          
          {/* View Job Openings Button */}
          <div>
            <button className="bg-[#7a1ab3] text-white px-6 py-3 rounded-full w-fit hover:bg-[#641a94] transition">
              View Job Openings
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center font-['Lato'] py-8">
      {/* Conditional rendering based on screen size */}
      <div className="hidden lg:block"><DesktopLayout /></div>
      <div className="lg:hidden w-full"><MobileLayout /></div>
    </div>
  );
}