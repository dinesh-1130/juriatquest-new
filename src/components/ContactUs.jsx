
// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaEnvelope, FaPhoneAlt, FaRegHandshake } from "react-icons/fa";

// export default function ContactSection() {
//   const [showFormMobile, setShowFormMobile] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <section className="bg-white py-20 px-6 font-['Lato']">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">

//         {/* Left - Contact Info */}
//         <div
//           data-aos="fade-right"
//           className="w-full md:w-1/2 p-0 flex flex-col justify-between"
//         >
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-wide text-[#6B21A8]">Registrations</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
//             <p className="text-gray-600 mb-6 mt-2">
//               Reach out to our coordination team for queries related to participation, sponsorship, or support.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-xl shadow-sm min-h-[90px]">
//                 <FaEnvelope className="text-xl text-[#6B21A8] mt-1" />
//                 <div className="break-all">
//                   <p className="text-sm text-gray-500">General Inquiries</p>
//                   <p className="font-medium text-gray-800">info@juristquest.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center bg-gray-100 p-4 rounded-xl shadow-sm min-h-[90px]">
//                 <div className="text-xl text-[#6B21A8] mr-2 flex-shrink-0">
//                   <FaEnvelope />
//                 </div>
//                 <div className="flex flex-col justify-center">
//                   <p className="text-sm text-gray-500 leading-tight">Customer Support</p>
//                   <p className="font-medium text-gray-800 leading-tight">customersupport@juristquest.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-xl shadow-sm md:col-span-2 min-h-[90px]">
//                 <FaRegHandshake className="text-xl text-[#6B21A8] mt-1" />
//                 <div className="break-all">
//                   <p className="text-sm text-gray-500">Sponsorship / Partnership</p>
//                   <p className="font-medium text-gray-800">partners@juristquest.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-xl shadow-sm min-h-[90px]">
//                 <FaPhoneAlt className="text-xl text-[#6B21A8] mt-1" />
//                 <div>
//                   <p className="text-sm text-gray-500">General Inquiry / Sponsorship / Partnership</p>
//                   <p className="font-medium text-gray-800">+91-xxxxxxxxxx</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-xl shadow-sm min-h-[90px]">
//                 <FaPhoneAlt className="text-xl text-[#6B21A8] mt-1" />
//                 <div>
//                   <p className="text-sm text-gray-500">Customer Support</p>
//                   <p className="font-medium text-gray-800">+91-xxxxxxxxxx</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="md:hidden text-center mt-6">
//             <button
//               onClick={() => setShowFormMobile(true)}
//               className="bg-[#6B21A8] text-white py-3 px-6 rounded-lg font-bold transition hover:bg-[#581c87]"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>

//         {/* Right - Form (visible only on desktop) */}
//         <div
//           className="hidden md:flex w-full md:w-1/2 bg-white p-10 rounded-2xl shadow-lg border border-gray-200 flex-col justify-between"
//           data-aos="fade-left"
//         >
//           <h3 className="text-2xl font-bold text-gray-800 mb-6">Fill the Form</h3>
//           <form className="space-y-5">
//             <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
//             <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
//             <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
//             <input type="text" placeholder="Full Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
//             <input type="text" placeholder="District" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
//             <button type="submit" className="w-full text-white py-3 rounded-lg font-bold bg-[#6B21A8] hover:bg-[#581c87] transition">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Mobile Form Modal (blurred background) */}
//       {showFormMobile && (
//         <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center md:hidden px-4">
//           <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl relative">
//             <button
//               onClick={() => setShowFormMobile(false)}
//               className="absolute top-2 right-4 text-gray-500 text-xl font-bold"
//             >
//               ×
//             </button>
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Fill the Form</h3>
//             <form className="space-y-4">
//               <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
//               <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
//               <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
//               <input type="text" placeholder="Full Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
//               <input type="text" placeholder="District" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
//               <button type="submit" className="w-full text-white py-3 rounded-lg font-bold bg-[#6B21A8] hover:bg-[#581c87] transition">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt, FaRegHandshake } from "react-icons/fa";

export default function ContactSection() {
  const [showFormMobile, setShowFormMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white py-20 px-6 font-['Lato']">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* Left - Get in Touch */}
        <div
          data-aos="fade-right"
          className="w-full md:w-1/2 flex flex-col justify-between"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#6B21A8]">Registrations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600 mb-6 mt-2">
              Reach out to our coordination team for queries related to participation or support.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-xl shadow-sm min-h-[90px]">
                <FaEnvelope className="text-xl text-[#6B21A8] mt-1" />
                <div className="break-all">
                  <p className="text-sm text-gray-500">General Inquiries</p>
                  <p className="font-medium text-gray-800">info@juristquest.com</p>
                </div>
              </div>

              <div className="flex items-center bg-gray-100 p-4 rounded-xl shadow-sm min-h-[90px]">
                <div className="text-xl text-[#6B21A8] mr-2 flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-gray-500 leading-tight">Customer Support</p>
                  <p className="font-medium text-gray-800 leading-tight">customersupport@juristquest.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-xl shadow-sm md:col-span-2 min-h-[90px]">
                <FaRegHandshake className="text-xl text-[#6B21A8] mt-1" />
                <div className="break-all">
                  <p className="text-sm text-gray-500">Sponsorship / Partnership</p>
                  <p className="font-medium text-gray-800">partners@juristquest.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-xl shadow-sm min-h-[90px]">
                <FaPhoneAlt className="text-xl text-[#6B21A8] mt-1" />
                <div>
                  <p className="text-sm text-gray-500">General Inquiry / Sponsorship / Partnership</p>
                  <p className="font-medium text-gray-800">+91-9677873855</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-100 p-4 rounded-xl shadow-sm min-h-[90px]">
                <FaPhoneAlt className="text-xl text-[#6B21A8] mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Customer Support</p>
                  <p className="font-medium text-gray-800">+91-9677883855</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden text-center mt-6">
            {/* <button
              onClick={() => setShowFormMobile(true)}
              className="bg-[#6B21A8] text-white py-3 px-6 rounded-lg font-bold transition hover:bg-[#581c87]"
            >
              Contact Us
            </button> */}
          </div>
        </div>

        {/* Right - Image Section */}
       {/* Right - Image Section */}
<div className="relative w-full md:w-1/2 lg:ml-16" data-aos="fade-left">
  <div className="rounded-xl overflow-hidden shadow-xl w-full">
    <img
      src="/assets/court.jpg"
      alt="Running"
      className="w-full h-[360px] object-cover rounded-xl"
    />
  </div>
  <div className="absolute bottom-[-30px] left-[-20px] md:bottom-[-40px] md:left-[-40px] w-32 md:w-48 rounded-lg overflow-hidden border-4 border-white shadow-lg">
    <img
      src="/assets/hero-11.png"
      alt="Inset"
      className="w-full h-24 md:h-36 object-cover"
    />
  </div>
</div>
</div>

      {/* Mobile Form Modal */}
      {/* {showFormMobile && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center md:hidden px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl relative">
            <button
              onClick={() => setShowFormMobile(false)}
              className="absolute top-2 right-4 text-gray-500 text-xl font-bold"
            >
              ×
            </button>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Fill the Form</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
              <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
              <input type="text" placeholder="Full Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
              <input type="text" placeholder="District" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700" />
              <button type="submit" className="w-full text-white py-3 rounded-lg font-bold bg-[#6B21A8] hover:bg-[#581c87] transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      )} */}
    </section>
  );
}
