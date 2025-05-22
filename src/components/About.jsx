// import { useNavigate } from "react-router-dom";
// import BannerBg from "/assets/hero-17.jpg";

// export default function About() {
//   const navigate = useNavigate();

//   return (
//     <>
//       {/* ---------- Desktop & Tablet Layout ---------- */}
//       <div className="hidden md:flex max-w-[1440px] mx-auto py-[6.25em] flex-row gap-6 xl:gap-20 lg:px-10 px-5">
//         <div className="flex items-start flex-col gap-6 max-w-[300px] w-full">
//           <div
//             data-aos="fade-right"
//             className="border px-4 py-2 rounded-xl font-medium lg:text-2xl"
//             style={{ color: "#6B21A8" }}
//           >
//             About JuristQuest
//           </div>
//           <div
//             className="h-full max-w-[300px] w-full rounded-xl overflow-hidden"
//             data-aos="fade-right"
//           >
//             <img
//               src={BannerBg}
//               loading="lazy"
//               alt="Banner bg"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>

//         <div
//           data-aos="fade-left"
//           className="flex-1 flex flex-col items-start gap-[2em]"
//         >
//           <h2
//             data-aos="fade-up"
//             className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0"
//           >
//             Welcome to <span style={{ color: "#6B21A8" }}>“Jurist Quest – 2025”</span>
//           </h2>
//           <p
//             data-aos="fade-up"
//             className="text-base tracking-tight font-medium text-gray-800"
//           >
//             India’s Most Ambitious Moot Court Challenge Begins Here...
//           </p>
//           <p
//             data-aos="fade-up"
//             className="text-base text-gray-700 font-normal leading-relaxed"
//           >
//             Step into the world of legal intellect and advocacy where the brightest minds compete, argue, and grow. Jurist Quest – 2025 invites aspiring lawyers from across the country to showcase their skills, gain national recognition, and engage with top legal professionals.
//           </p>
//           <p
//             data-aos="fade-up"
//             className="text-sm font-normal text-gray-600"
//           >
//             Conceptualized and developed by Crosby Law Associates and RK Legal Partners, In association with Madras High Court Advocates Association and premier legal institutions.
//           </p>
//           <div className="flex justify-start items-start w-full">
//             <button
//               data-aos="fade-up"
//               style={{ backgroundColor: "#6B21A8" }}
//               className="rounded hover:bg-[#581c87] text-white px-6 py-3 font-semibold transition"
//               onClick={() => navigate("#contactus")}
//             >
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Mobile Layout ---------- */}
//       <div className="md:hidden relative w-full px-4 pt-10 pb-20 mt-6 md:mt-0 overflow-hidden">
//         <img
//           src={BannerBg}
//           alt="Mobile About Background"
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         />
//         <div className="absolute inset-0 bg-black/70 z-10" />
//         <div className="relative z-20 max-w-md mx-auto text-white text-center px-4">
//           <h2 className="text-xl font-bold mb-3">About JuristQuest</h2>
//           <p className="text-sm mb-3">
//             Welcome to <span className="text-purple-300 font-semibold">Jurist Quest – 2025</span>, India’s most ambitious moot court challenge.
//           </p>
//           <p className="text-xs text-gray-200 mb-4">
//             Conceptualized by Crosby Law Associates & RK Legal Partners, In association with Madras High Court Advocates Association and premier legal institutions
//           </p>
//           <button
//             onClick={() => navigate("#contactus")}
//             className="w-full bg-[#6B21A8] text-white py-3 rounded-lg font-semibold hover:bg-[#581c87] transition"
//           >
//             Learn More
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
import { useNavigate } from "react-router-dom";
import BannerBg from "/assets/hero-17.jpg";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* ---------- Desktop & Tablet Layout ---------- */}
      <div className="hidden md:flex max-w-[1440px] mx-auto py-[6.25em] flex-row gap-6 xl:gap-20 lg:px-10 px-5">
        <div className="flex items-start flex-col gap-6 max-w-[300px] w-full">
          <div
            data-aos="fade-right"
            className="border px-4 py-2 rounded-xl font-medium lg:text-2xl"
            style={{ color: "#6B21A8" }}
          >
            About JuristQuest
          </div>
          <div
            className="h-full max-w-[300px] w-full rounded-xl overflow-hidden"
            data-aos="fade-right"
          >
           <img
  src={BannerBg}
  loading="lazy"
  alt="Banner bg"
  className="h-[350px] w-full object-cover rounded-xl"
/>
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="flex-1 flex flex-col items-start gap-[2em]"
        >
          <h2
            data-aos="fade-up"
            className="text-[2em] lg:text-[2.5em] xl:text-[3em] font-semibold tracking-tighter leading-[1.14] mb-0"
          >
             Welcome to <span style={{ color: "#6B21A8" }}>“JuristQuest 2025”</span> 
          </h2>
          <p
            data-aos="fade-up"
            className="text-base tracking-tight font-medium text-gray-800"
          >
            India’s Most Ambitious & Prestigious Moot Court Challenge Begins Here...
          </p>
          <p
            data-aos="fade-up"
            className="text-base text-gray-700 font-normal leading-relaxed"
          >
            Step into the future of legal advocacy with JuristQuest 2025 – a groundbreaking
            initiative redefining the landscape of moot court competitions in India. As the
            nation’s first-ever moot court marathon, JuristQuest is more than just a competition;
            it is a celebration of potential, perseverance, and passion for the law.
          </p>
          <p
            data-aos="fade-up"
            className="text-base text-gray-700 font-normal leading-relaxed"
          >
            This pioneering event brings together not only the brightest legal minds from across
            the country but also opens its doors to all budding law students—from every corner of
            India, regardless of language, medium, or background. JuristQuest is designed to offer
            an inclusive platform for those taking their first step into advocacy, encouraging
            every voice that seeks to be heard in the courtroom.
          </p>
          <p
            data-aos="fade-up"
            className="text-base text-gray-700 font-normal leading-relaxed"
          >
            With a unique format that blends the intensity of a moot court with the stamina of a
            marathon, participants will be challenged on their skills, strategic thinking, and
            ability to thrive under pressure—preparing them for the real-world demands of legal
            practice.
          </p>
          <p
            data-aos="fade-up"
            className="text-base text-gray-700 font-normal leading-relaxed"
          >
            Join us in shaping a more inclusive and vibrant legal community. JuristQuest 2025 is
            not just a competition—it’s your gateway to the world of advocacy.
          </p>
          <div className="flex justify-start items-start w-full">
            <button
              data-aos="fade-up"
              style={{ backgroundColor: "#6B21A8" }}
              className="rounded hover:bg-[#581c87] text-white px-6 py-3 font-semibold transition"
              onClick={() => navigate("#contactus")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Layout ---------- */}
      <div className="md:hidden relative w-full px-4 pt-10 pb-20 mt-6 md:mt-0 overflow-hidden">
        <img
          src={BannerBg}
          alt="Mobile About Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 max-w-md mx-auto text-white text-center px-4">
          <h2 className="text-xl font-bold mb-3">About JuristQuest</h2>
          <p className="text-sm mb-3">
            🌟 Welcome to <span className="text-purple-300 font-semibold">“JuristQuest 2025”</span> 🌟
          </p>
          <p className="text-sm mb-3">
            India’s Most Ambitious & Prestigious Moot Court Challenge Begins Here...
          </p>
          <p className="text-xs text-gray-200 mb-3">
            JuristQuest 2025 is redefining legal competitions with a one-of-a-kind moot court
            marathon that celebrates every aspiring advocate in India—regardless of background.
          </p>
          <p className="text-xs text-gray-200 mb-3">
            Join this inclusive platform that builds your real-world legal acumen through challenge,
            skill, and passion.
          </p>
          <p className="text-xs text-gray-200 mb-4">
            Conceptualized by Crosby Law Associates & RK Legal Partners in association with the
            Madras High Court Advocates Association.
          </p>
          <button
            onClick={() => navigate("#contactus")}
            className="w-full bg-[#6B21A8] text-white py-3 rounded-lg font-semibold hover:bg-[#581c87] transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
