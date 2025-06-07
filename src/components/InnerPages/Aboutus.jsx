
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaBullhorn, FaHandshake, FaAward } from "react-icons/fa";

// export default function SponsorSection() {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <section className="bg-gradient-to-br from-white via-purple-50 to-white py-24 px-4 font-['Lato'] mt-5">
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <p className="text-sm font-semibold" style={{ color: "#6B21A8" }}>
//           Sponsorship
//         </p>
//         <h2 className="text-4xl font-bold text-gray-900">
//           Why Sponsor <span style={{ color: "#6B21A8" }}>JuristQuest 2025?</span>
//         </h2>
//         <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-sm">
//           Partner with India's premier moot court competition and gain unparalleled access to the country’s future legal minds, top-tier professionals, and media exposure.
//         </p>
//       </div>

//       {/* Vertical Timeline Design */}
//       <div className="relative max-w-4xl mx-auto space-y-10 border-l-2 pl-8" style={{ borderColor: "#D8B4FE" }}>
//         {/* Item 1 */}
//         <div data-aos="fade-up" className="relative group">
//           <span className="absolute -left-5 top-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: "#6B21A8" }}></span>
//           <div className="bg-white backdrop-blur-md border rounded-xl p-6 shadow-xl group-hover:shadow-md transition" style={{ borderColor: "#E9D5FF" }}>
//             <div className="flex items-center gap-3 mb-2">
//               <FaBullhorn className="text-xl" style={{ color: "#6B21A8" }} />
//               <h4 className="text-lg font-semibold" style={{ color: "#4C1D95" }}>Premier Brand Visibility</h4>
//             </div>
//             <p className="text-sm text-gray-600">
//               Stand out through event branding, media coverage, and digital campaigns across top legal and youth platforms.
//             </p>
//           </div>
//         </div>

//         {/* Item 2 */}
//         <div data-aos="fade-up" data-aos-delay="100" className="relative group">
//           <span className="absolute -left-5 top-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: "#6B21A8" }}></span>
//           <div className="bg-white backdrop-blur-md border rounded-xl p-6 shadow-xl group-hover:shadow-md transition" style={{ borderColor: "#E9D5FF" }}>
//             <div className="flex items-center gap-3 mb-2">
//               <FaHandshake className="text-xl" style={{ color: "#6B21A8" }} />
//               <h4 className="text-lg font-semibold" style={{ color: "#4C1D95" }}>Meaningful Engagement</h4>
//             </div>
//             <p className="text-sm text-gray-600">
//               Interact with students, nominate speakers or judges, and gain on-stage recognition during key moments.
//             </p>
//           </div>
//         </div>

//         {/* Item 3 */}
//         <div data-aos="fade-up" data-aos-delay="200" className="relative group">
//           <span className="absolute -left-5 top-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: "#6B21A8" }}></span>
//           <div className="bg-white backdrop-blur-md border rounded-xl p-6 shadow-xl group-hover:shadow-md transition" style={{ borderColor: "#E9D5FF" }}>
//             <div className="flex items-center gap-3 mb-2">
//               <FaAward className="text-xl" style={{ color: "#6B21A8" }} />
//               <h4 className="text-lg font-semibold" style={{ color: "#4C1D95" }}>Custom Sponsorship Tiers</h4>
//             </div>
//             <p className="text-sm text-gray-600">
//               Choose from diverse options — Title, Associate, Certificate, International Program and more — aligned with your brand.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* CTA Button */}
//       <div className="text-center mt-12">
//         <a
//           href="/register"
//           className="text-white px-8 py-3 rounded-full font-semibold transition"
//           style={{
//             backgroundColor: "#6B21A8",
//             display: "inline-block",
//           }}
//           onMouseOver={(e) => (e.target.style.backgroundColor = "#4C1D95")}
//           onMouseOut={(e) => (e.target.style.backgroundColor = "#6B21A8")}
//         >
//           Sponsor now
//         </a>
//       </div>
//     </section>
//   );
// }
import React from 'react';

export default function MediaPartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6B21A8] via-purple-700 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6B21A8]/90 to-purple-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight">
              Media
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Partners
              </span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Collaborating with industry leaders to deliver exceptional content experiences and drive innovation in media landscape.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Partners Section */}
      <div className="relative -mt-10 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Radio Mirchi Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-purple-50 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-purple-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6B21A8] to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v6.114A4 4 0 004 11a4 4 0 104 4V5.114l8-1.6v4.72A4 4 0 0014 8a4 4 0 104 4V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Radio Mirchi</h3>
                      <p className="text-[#6B21A8] font-semibold">98.3 FM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#6B21A8] text-white">
                      LIVE
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  India's premier radio entertainment network, delivering music, comedy, and engaging shows that connect with millions of listeners nationwide.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-purple-50 text-[#6B21A8] rounded-full text-sm font-medium">Radio</span>
                    <span className="px-3 py-1 bg-purple-50 text-[#6B21A8] rounded-full text-sm font-medium">Entertainment</span>
                  </div>
                  <button className="flex items-center space-x-2 text-[#6B21A8] hover:text-purple-800 font-semibold group">
                    <span>Explore</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Vulturelines Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-purple-50 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-purple-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6B21A8] to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Vulturelines</h3>
                      <p className="text-[#6B21A8] font-semibold">Digital Platform</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#6B21A8] text-white">
                      NEW
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Innovative digital media platform creating compelling stories and immersive content experiences for the next generation of audiences.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-purple-50 text-[#6B21A8] rounded-full text-sm font-medium">Digital</span>
                    <span className="px-3 py-1 bg-purple-50 text-[#6B21A8] rounded-full text-sm font-medium">Content</span>
                  </div>
                  <button className="flex items-center space-x-2 text-[#6B21A8] hover:text-purple-800 font-semibold group">
                    <span>Explore</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="bg-white/10 backdrop-blur-lg border-t border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">50M+</div>
              <div className="text-purple-200">Combined Audience Reach</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-purple-200">Content Availability</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">100+</div>
              <div className="text-purple-200">Cities Covered</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="relative">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner?</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Join our network of media partners and unlock new opportunities for growth and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#6B21A8] px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-lg">
              Become a Partner
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#6B21A8] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}