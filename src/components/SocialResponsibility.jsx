// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const chairCommittee = [
//   {
//     name: "Mr. Krishna Kumar",
//     title: "JuristQuest - Legal Affairs Head\nSr. Advocate\nSecretary – Madras High Court Advocates Association\nGeneral Secretary – International Network for Indian Lawyers",
//     image: "/assets/profile-9.png",
//   },
//   {
//     name: "Mr. Dhamodharan M",
//     title: "JuristQuest – Jury Coordination Head\nSr. Advocate\nFounder-Chairman of Universal Dr. Ambedkar Advocate Association",
//     image: "/assets/profile-17.jpeg",
//   },
//   {
//     name: "Mr. Chandirakumar R",
//     title: "JuristQuest - Jury Coordination Head\nSr. Advocate\nState Legal Advisor (National Vigilance)\nState Coordinator (Human Rights)",
//     image: "/assets/profile-22.png",
//   },
//   {
//     name: "Mr. Thangavel",
//     title: "JuristQuest – Investment Planning Head\nFinancial Advisory Expert\nExecutive Director – VSJ Associates",
//     image: "/assets/profile-7.png",
//   },
//   {
//     name: "Mr. Selvakumar R",
//     title: "JuristQuest – Operations Head\nBusiness & Strategy Expert\nRetired CSS officer of MHA\nAssistant Deputy Director of S.F.I.O",
//     image: "/assets/profile-6.png",
//   },
//   {
//     name: "DATO Dr. Samy DST",
//     title: "JuristQuest – International Relationship\nBusiness & Strategy Expert – Overseas (Malaysia & Singapore)",
//     image: "/assets/profile-8.png",
//   },
//   {
//     name: "DR. CHRISTABEL QUEENSLEY A",
//     title: " Youth Diplomat | Lawyer | Global Development Leader | International Relations Expert",
//     image: "/assets/new.jpeg",
//   },
// ];

// const studentCommittee = [
//   {
//     name: "Mr. Kandavel",
//     title: "JuristQuest – Student Coordinator – TN\nSr. Advocate",
//     image: "/assets/profile-19.jpeg",
//   },
//   {
//     name: "Mr. Tejas",
//     title: "JuristQuest – Student Coordinator – Karnataka, AP & Telangana\nAdvocate",
//     image: "/assets/profile-18.jpeg",
//   },
//   // {
//   //   name: "Mr. Sanidhya",
//   //   title: "JuristQuest – Student Coordinator – Karnataka\nAdvocate",
//   //   image: "/assets/profile-20.jpeg",
//   // },
//   {
//     name: "Mr. Robert ",
//     title: "JuristQuest - South India College Coordinator Advocate & TN Lawyers Union President.\n kerela",
//     image: "/assets/profile-25.jpeg",
//   },
// ];

// export default function TeamSection() {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   const renderMembers = (members) => (
//     <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//       {members.map((member, index) => {
//         if (members.length === 4 && index === 3) {
//           return (
//             <div key={index} className="col-span-full flex justify-center">
//               <div
//                 data-aos="fade-up"
//                 className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center group w-full max-w-sm"
//               >
//                 <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 overflow-hidden border-[#C4A0E8] bg-[#F1E7FA]">
//                   <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
//                 </div>
//                 <h3 className="font-semibold text-black text-lg group-hover:text-[#6B21A8] transition-colors">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm whitespace-pre-line text-black group-hover:text-[#6B21A8] transition-colors">
//                   {member.title}
//                 </p>
//               </div>
//             </div>
//           );
//         }

//         return (
//           <div
//             key={index}
//             data-aos="fade-up"
//             className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center group"
//           >
//             <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 overflow-hidden border-[#C4A0E8] bg-[#F1E7FA]">
//               <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
//             </div>
//             <h3 className="font-semibold text-black text-lg group-hover:text-[#6B21A8] transition-colors">
//               {member.name}
//             </h3>
//             <p className="text-sm whitespace-pre-line text-black group-hover:text-[#6B21A8] transition-colors">
//               {member.title}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );

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
//               <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 overflow-hidden border-[#C4A0E8] bg-[#F1E7FA]">
//                 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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
//     <>
//       <section className="bg-gradient-to-b from-white to-[#f3f6ec] py-24 px-6 font-['Lato']">
//         <div className="max-w-7xl mx-auto text-center mb-14">
//           <p className="text-sm font-semibold mb-2 text-[#6B21A8]">Our Team</p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             Meet the Team Behind <span className="text-[#6B21A8]">JuristQuest 2025</span>
//           </h2>
//           <p className="mt-4 text-gray-600 text-sm max-w-2xl mx-auto">
//             A fusion of seasoned legal minds and visionary leaders committed to delivering an extraordinary moot court experience.
//           </p>
//         </div>

//         {/* Chair Committee Section */}
//         <div className="max-w-7xl mx-auto text-left mb-10">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Chair Committee Members</h3>
//           {renderMembers(chairCommittee)}
//           {renderSwiper(chairCommittee)}
//         </div>

//         {/* Student Committee Section */}
//         <div className="max-w-7xl mx-auto text-left mt-20">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Student Committee Members</h3>
//           {renderMembers(studentCommittee)}
//           {renderSwiper(studentCommittee)}
//         </div>

//         <style jsx>{`
//           .swiper-pagination-bullet {
//             background-color: #e0c8f2;
//             opacity: 1;
//             margin: 0 5px !important;
//             width: 10px;
//             height: 10px;
//           }
//           .swiper-pagination-bullet-active {
//             background-color: #6B21A8;
//           }
//         `}</style>
//       </section>
//     </>
//   );
// }
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const internationalCommittee = [
  {
    name: "DATO Dr. Samy DST",
    title: "JuristQuest – International Relationship\nBusiness & Strategy Expert – Overseas (Malaysia & Singapore)",
    image: "/assets/profile-8.png",
  },
  {
    name: "DR. CHRISTABEL QUEENSLEY A",
    title: "JuristQuest – International Relationship\nBusiness & Strategy Expert-Youth Diplomat | Lawyer | Global Development Leader | International Relations Expert",
    image: "/assets/new-5.png",
  },
];

const chairCommittee = [
  {
    name: "Mr. Krishna Kumar",
    title: "JuristQuest - Legal Affairs Head\nSr. Advocate\nSecretary – Madras High Court Advocates Association\nGeneral Secretary – International Network for Indian Lawyers",
    image: "/assets/profile-9.png",
  },
  {
    name: "Mr. Dhamodharan M",
    title: "JuristQuest – Jury Coordination Head\nSr. Advocate\nFounder-Chairman of Universal Dr. Ambedkar Advocate Association",
    image: "/assets/profile-17.jpeg",
  },
  {
    name: "Mr. Chandirakumar R",
    title: "JuristQuest - Jury Coordination Head\nSr. Advocate\nState Legal Advisor (National Vigilance)\nState Coordinator (Human Rights)",
    image: "/assets/profile-22.png",
  },
  {
    name: "Mr. Thangavel",
    title: "JuristQuest – Investment Planning Head\nFinancial Advisory Expert\nExecutive Director – VSJ Associates",
    image: "/assets/profile-7.png",
  },
  {
    name: "Mr. Selvakumar R",
    title: "JuristQuest – Operations Head\nBusiness & Strategy Expert\nRetired CSS officer of MHA\nAssistant Deputy Director of S.F.I.O",
    image: "/assets/profile-6.png",
  },
];

const studentCommittee = [
  {
    name: "Mr. Kandavel",
    title: "JuristQuest – Student Coordinator – TN & AP \nSr Advocate ",
    image: "/assets/profile-19.jpeg",
  },
  {
    name: "Mr. Tejas",
    title: "JuristQuest –Student Coordinator – Karnataka, AP & Telangana \nAdvocate",
    image: "/assets/profile-18.jpeg",
  },
  {
    name: "Mr. Robert ",
    title: "JuristQuest -Student Coordinator - KL \nAdvocate",
    image: "/assets/profile-25.jpeg",
  },
];

export default function TeamSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const renderMembers = (members) => {
    const rows = [];
    for (let i = 0; i < members.length; i += 3) {
      const rowItems = members.slice(i, i + 3);
      const isLastRow = i + 3 >= members.length;

      if (isLastRow && rowItems.length < 3) {
        rows.push(
          <div key={i} className="hidden sm:flex justify-center gap-8 flex-wrap">
            {rowItems.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center group w-72"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 overflow-hidden border-[#C4A0E8] bg-[#F1E7FA]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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
      } else {
        rows.push(
          <div key={i} className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rowItems.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center group"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 overflow-hidden border-[#C4A0E8] bg-[#F1E7FA]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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
      }
    }

    return (
      <>
        {/* Mobile Swiper */}
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
                  className="bg-white hover:shadow-xl transition rounded-xl p-6 text-center group w-[90%] mx-auto"
                >
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 overflow-hidden border-[#C4A0E8] bg-[#F1E7FA]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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

        {/* Desktop rows */}
        <div className="space-y-12">{rows}</div>
      </>
    );
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#f3f6ec] py-24 px-6 font-['Lato']">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold mb-2 text-[#6B21A8]">Our Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet the Team Behind <span className="text-[#6B21A8]">JuristQuest 2025</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm max-w-2xl mx-auto">
          A fusion of seasoned legal minds and visionary leaders committed to delivering an extraordinary moot court experience.
        </p>
      </div>

      {/* International Committee */}
      <div className="max-w-7xl mx-auto text-left mb-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">International Committee Members</h3>
        {renderMembers(internationalCommittee)}
      </div>

      {/* Chair Committee */}
      <div className="max-w-7xl mx-auto text-left mb-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Chair Committee Members</h3>
        {renderMembers(chairCommittee)}
      </div>

      {/* Student Committee */}
      <div className="max-w-7xl mx-auto text-left mt-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Student Committee Members</h3>
        {renderMembers(studentCommittee)}
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
