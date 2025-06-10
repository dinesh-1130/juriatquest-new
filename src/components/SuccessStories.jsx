// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const mootCourtCommittee = [
//   { name: "Mr. Mahesh M", title: "JuristQuest – Moot Court Committee\nSr. Advocate" },
//   { name: "Ms. Lisha R", title: "JuristQuest – Moot Court Committee\nAdvocate" },

//   { name: "Mr. ANANDH KUMAR V M.L(Business Law)., Ph.D in Law", title: "JuristQuest - Mootcourt committee Lead\nAcademician" },
// ];

// const organizingCommittee = [
//   { name: "Mr. Prasad RK", title: "JuristQuest – Organizing Committee Head\nCorporate Lawyer\nManaging Partner – Crosby Law Associates" },
//   { name: "Mr. Sutheesh", title: "JuristQuest – Organizing Committee Member" },
//   { name: "Mr. Samuel", title: "JuristQuest – Organizing Committee Member" },
//   { name: "Mr. Suresh P", title: "JuristQuest – Organizing Committee Member" },
//   { name: "Mr. Sarath", title: "JuristQuest – Organizing Committee Member" },
//   { name: "Mr. Rajesh", title: "JuristQuest – Organizing Committee Member" },
//   { name: "Mr. Selvaraj", title: "JuristQuest – Organizing Committee Member" },
//   { name: "Mr. Dinesh", title: "JuristQuest – Organizing Committee Member" },
// ];

// export default function TeamSection() {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const AvatarIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#6B21A8]" viewBox="0 0 64 64" fill="white">
//       <circle cx="32" cy="32" r="32" fill="#6B21A8" />
//       <path d="M32 18a8 8 0 100 16 8 8 0 000-16zm0 18c-5.33 0-16 2.67-16 8v2h32v-2c0-5.33-10.67-8-16-8z" fill="white" />
//     </svg>
//   );

//   const chunkArray = (arr, size) => {
//     const chunks = [];
//     for (let i = 0; i < arr.length; i += size) {
//       chunks.push(arr.slice(i, i + size));
//     }
//     return chunks;
//   };

//   const renderMembers = (members) => {
//     const rows = chunkArray(members, 3);
//     return (
//       <div className="hidden sm:block space-y-10">
//         {rows.map((row, rowIndex) => {
//           const isSingleCard = row.length === 1;
//           const isSecondRowWithOne = rowIndex === 1 && isSingleCard;
//           return (
//             <div
//               key={rowIndex}
//               className={`flex flex-wrap gap-8 ${
//                 row.length === 2 || isSecondRowWithOne ? "justify-center" : "justify-start"
//               } max-w-6xl mx-auto`}
//             >
//               {row.map((member, index) => (
//                 <div
//                   key={index}
//                   data-aos="fade-up"
//                   className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center group w-full sm:w-[45%] md:w-[30%]"
//                 >
//                   <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#F1E7FA] flex items-center justify-center border-4 border-[#C4A0E8] overflow-hidden">
//                     <AvatarIcon />
//                   </div>
//                   <h3 className="font-semibold text-black text-lg group-hover:text-[#6B21A8] transition-colors">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm whitespace-pre-line text-black group-hover:text-[#6B21A8] transition-colors">
//                     {member.title}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   const renderSwiper = (members) => (
//     <div className="sm:hidden max-w-xs mx-auto">
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1}
//         pagination={{
//           clickable: true,
//           el: ".custom-swiper-pagination",
//           bulletClass: "swiper-pagination-bullet",
//           bulletActiveClass: "swiper-pagination-bullet-active",
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {members.map((member, index) => (
//           <SwiperSlide key={index}>
//             <div
//               data-aos="fade-up"
//               className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center group"
//             >
//               <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#F1E7FA] flex items-center justify-center border-4 border-[#C4A0E8] overflow-hidden">
//                 <AvatarIcon />
//               </div>
//               <h3 className="font-semibold text-black text-lg group-hover:text-[#6B21A8] transition-colors">
//                 {member.name}
//               </h3>
//               <p className="text-sm whitespace-pre-line text-black group-hover:text-[#6B21A8] transition-colors">
//                 {member.title}
//               </p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="custom-swiper-pagination mt-6 flex justify-center" />
//     </div>
//   );

//   return (
//     <section className="bg-gradient-to-b from-white to-[#f3f6ec] py-24 px-6 font-['Lato']">
//       <div className="max-w-7xl mx-auto text-center mb-14">
//         <p className="text-sm font-semibold mb-2 text-[#6B21A8]">Our Team</p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Meet the Team Behind <span className="text-[#6B21A8]">JuristQuest 2025</span>
//         </h2>
//         <p className="mt-4 text-gray-600 text-sm max-w-2xl mx-auto">
//           A fusion of seasoned legal minds and visionary leaders committed to delivering an extraordinary moot court experience.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto text-left mb-10">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Moot Court Committee Members</h3>
//         {renderMembers(mootCourtCommittee)}
//         {renderSwiper(mootCourtCommittee)}
//       </div>

//       <div className="max-w-7xl mx-auto text-left mt-20">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Organizing Committee Members</h3>
//         {renderMembers(organizingCommittee)}
//         {renderSwiper(organizingCommittee)}
//       </div>

//       <style jsx>{`
//         .swiper-pagination-bullet {
//           background-color: #e0c8f2;
//           opacity: 1;
//           margin: 0 5px !important;
//           width: 10px;
//           height: 10px;
//         }
//         .swiper-pagination-bullet-active {
//           background-color: #6B21A8;
//         }
//       `}</style>
//     </section>
//   );
// }
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const mootCourtCommittee = [
  {
    name: "Mr.Sanidhya ",
    title: "JuristQuest – Moot Court Committee\nmember - Advocate ",
    image: "/assets/profile-20.jpeg" // Make sure this path is correct
  },
  {
    name: "Mr. ANANDH KUMAR V M.L(Business Law)., Ph.D in Law",
    title: "JuristQuest - Mootcourt committee Lead\nAcademician - Advocate",
    image: "/assets/anand.jpeg" // Make sure this path is correct
  },
 
   {
    name: "Ms. Lisha R",
    title: "JuristQuest - Mootcourt committee\nmember - Advocate ",
    image: "/assets/profile-26.jpeg" // Make sure this path is correct
  },

  // {
  //   name: "Mr.Anandh ",
  //   title: "JuristQuest – Moot Court Committee\nAdvocate"
  // },
 
];

const organizingCommittee = [
 
  { name: "Mr. Prasad RK", title: "JuristQuest – Organizing Committee Head\nCorporate Lawyer\nManaging Partner – Crosby Law Associates" },
  {
    name: "Ms. Lisha R",
    title: "JuristQuest - JuristQuest – Organizing Committee Member",
    image: "/assets/mdsir.png" // Make sure this path is correct
  },
  { name: "Mr. Samuel", title: "JuristQuest – Organizing Committee Member" },
  { name: "Mr. Suresh P", title: "JuristQuest – Organizing Committee Member " },
  { name: "Mr. Sarath", title: "JuristQuest – Organizing Committee Member" },
  { name: "Mr. Rajesh", title: "JuristQuest – Organizing Committee Member" },

  { name: "Mr. Dinesh", title: "JuristQuest – Organizing Committee Member" },
];

export default function TeamSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const AvatarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#6B21A8]" viewBox="0 0 64 64" fill="white">
      <circle cx="32" cy="32" r="32" fill="#6B21A8" />
      <path d="M32 18a8 8 0 100 16 8 8 0 000-16zm0 18c-5.33 0-16 2.67-16 8v2h32v-2c0-5.33-10.67-8-16-8z" fill="white" />
    </svg>
  );

  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

 
const renderMembers = (members) => {
  const rows = chunkArray(members, 3);
  return (
    <div className="hidden sm:block space-y-10">
      {rows.map((row, rowIndex) => {
        const isSingleCard = row.length === 1;
        return (
          <div
            key={rowIndex}
            className={`flex flex-wrap gap-8 ${isSingleCard || row.length === 2 ? "justify-center" : "justify-start"} max-w-6xl mx-auto`}
          >
            {row.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center group w-full sm:w-[45%] md:w-[30%]"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#F1E7FA] flex items-center justify-center border-4 border-[#C4A0E8] overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <AvatarIcon />
                  )}
                </div>
                <h3 className="font-semibold text-black text-lg group-hover:text-[#6B21A8] transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm whitespace-pre-line text-black group-hover:text-[#6B21A8] transition-colors">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

  const renderSwiper = (members) => (
    <div className="sm:hidden max-w-xs mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <div
              data-aos="fade-up"
              className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#F1E7FA] flex items-center justify-center border-4 border-[#C4A0E8] overflow-hidden">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <AvatarIcon />
                )}
              </div>
              <h3 className="font-semibold text-black text-lg group-hover:text-[#6B21A8] transition-colors">
                {member.name}
              </h3>
              <p className="text-sm whitespace-pre-line text-black group-hover:text-[#6B21A8] transition-colors">
                {member.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-swiper-pagination mt-6 flex justify-center" />
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-white to-[#f3f6ec] py-24 px-6 font-['Lato']">
      <div className="max-w-7xl mx-auto text-center mb-14">
        {/* <p className="text-sm font-semibold mb-2 text-[#6B21A8]">Our Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet the Team Behind <span className="text-[#6B21A8]">JuristQuest 2025</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm max-w-2xl mx-auto">
          A fusion of seasoned legal minds and visionary leaders committed to delivering an extraordinary moot court experience.
        </p> */}
      </div>

      <div className="max-w-7xl mx-auto text-left mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Moot Court Committee Members</h3>
        {renderMembers(mootCourtCommittee)}
        {renderSwiper(mootCourtCommittee)}
      </div>

      <div className="max-w-7xl mx-auto text-left mt-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Organizing Committee Members</h3>
        {renderMembers(organizingCommittee)}
        {renderSwiper(organizingCommittee)}
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #e0c8f2;
          opacity: 1;
          margin: 0 5px !important;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background-color: #6B21A8;
        }
      `}</style>
    </section>
  );
}
