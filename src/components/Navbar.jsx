// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Initialize AOS when component mounts
//   useEffect(() => {
//     // This is where you would normally initialize AOS
//     // If you're using a script tag to import AOS, you would do:
//     // AOS.init({ duration: 800, once: true });
    
//     // Since AOS should be imported via CDN in your HTML file:
//     // <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
//     // <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    
//     if (typeof window !== 'undefined' && window.AOS) {
//       window.AOS.init({
//         duration: 800,
//         once: true,
//         easing: 'ease-in-out',
//       });
//     }
//   }, []);

//   return (
//     <div className="relative font-['Lato']">
//       {/* Navbar */}
//       <nav
//         data-aos="fade-down"
//         data-aos-duration="600"
//         className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
//           scrolled
//             ? "bg-white/80 backdrop-blur-md shadow-md text-black"
//             : "bg-transparent text-white"
//         }`}
//       >
//         {/* Logo */}
//         <img
//           src="/assets/new-logo-2.png"
//           alt="JuristQuest Logo"
//           className="h-10 w-auto"
//           data-aos="zoom-in"
//           data-aos-delay="100"
//         />

//         {/* Desktop Navigation */}
//         <ul className="hidden lg:flex space-x-10 text-base font-medium text-inherit">
//           <li data-aos="fade-down" data-aos-delay="200"><a href="/" className="hover:text-[#6B21A8] transition-colors">Home</a></li>
//           <li data-aos="fade-down" data-aos-delay="250"><a href="#about" className="hover:text-[#6B21A8] transition-colors">About us</a></li>
//           <li data-aos="fade-down" data-aos-delay="300"><a href="#registrations" className="hover:text-[#6B21A8] transition-colors">Registrations</a></li>
//           <li data-aos="fade-down" data-aos-delay="350"><a href="#rules" className="hover:text-[#6B21A8] transition-colors">Rules & Guidelines</a></li>
//           <li data-aos="fade-down" data-aos-delay="400"><a href="/our-partners" className="hover:text-[#6B21A8] transition-colors">Our Partners</a></li>
//           {/* <li data-aos="fade-down" data-aos-delay="450"><a href="#faqs" className="hover:text-[#6B21A8] transition-colors">FAQ's</a></li> */}
//           <li data-aos="fade-down" data-aos-delay="500"><a href="#contact" className="hover:text-[#6B21A8] transition-colors">Contact Us</a></li>
//         </ul>

//         {/* Register Button */}
//         <div className="hidden lg:flex items-center space-x-4">
//         <a
//   href="https://docs.google.com/forms/d/1v_9q3K1DeL4VfgLaCJLW2CZi8a32T_990g5ux1S4yOA/edit?ts=684129b8"
//   target="blank"
//   className="bg-[#6B21A8] text-white px-5 py-2 rounded font-semibold hover:bg-[#581C87] transition"
//   data-aos="fade-left"
//   data-aos-delay="600"
// >
//   Register now
// </a>
//         </div>

//         {/* Mobile Icon */}
//         <div className="lg:hidden flex space-x-2">
//           <div
//             onClick={() => setMobileMenuOpen(true)}
//             className={`w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer ${
//               scrolled ? "border-black text-black" : "border-white text-white"
//             }`}
//             data-aos="fade-left"
//             data-aos-delay="100"
//           >
//             <Menu className="w-5 h-5" />
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="fixed top-0 left-0 w-full h-screen z-50 bg-white text-black p-6 transition-all duration-300 animate-fadeDown overflow-y-auto">
//           <div className="flex justify-between items-center mb-6">
//             <img 
//               src="/assets/new-logo.png" 
//               alt="Logo" 
//               className="h-10" 
//               data-aos="zoom-in"
//               data-aos-duration="400"
//             />
//             <button
//               onClick={() => setMobileMenuOpen(false)}
//               className="w-9 h-9 border border-black rounded-full flex items-center justify-center"
//               data-aos="zoom-in"
//               data-aos-duration="400"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           <ul className="space-y-6 text-lg font-semibold">
//             <li data-aos="fade-right" data-aos-delay="100" data-aos-duration="400">
//               <a href="/About" className="hover:text-[#6B21A8] transition-colors block">Home</a>
//             </li>
//             <li data-aos="fade-right" data-aos-delay="150" data-aos-duration="400">
//               <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">About us</a>
//             </li>
//             <li data-aos="fade-right" data-aos-delay="200" data-aos-duration="400">
//               <a href="#registrations" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">Registrations</a>
//             </li>
//             <li data-aos="fade-right" data-aos-delay="250" data-aos-duration="400">
//               <a href="#rules" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">Rules & Guidelines</a>
//             </li>
//             <li data-aos="fade-right" data-aos-delay="300" data-aos-duration="400">
//               <a href="/our-partners" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">Our partners</a>
//             </li>
//             {/* <li data-aos="fade-right" data-aos-delay="350" data-aos-duration="400">
//               <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">FAQ's</a>
//             </li> */}
//             <li data-aos="fade-right" data-aos-delay="400" data-aos-duration="400">
//               <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">Contact Us</a>
//             </li>
//             <li data-aos="fade-up" data-aos-delay="450" data-aos-duration="400">
//              <a
//    href="https://docs.google.com/forms/d/1v_9q3K1DeL4VfgLaCJLW2CZi8a32T_990g5ux1S4yOA/edit?ts=684129b8"
//   target="blank"
//   className="inline-block mt-4 bg-[#6B21A8] text-white px-6 py-2 rounded font-semibold hover:bg-[#581C87] transition"
// >
//   Register now
// </a>

//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
      });
    }
  }, []);

  return (
    <div className="relative font-['Lato']">
      {/* Navbar */}
      <nav
        data-aos="fade-down"
        data-aos-duration="600"
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-white/80 backdrop-blur-md shadow-md text-black"
            : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <img
          src="/assets/new-logo-2.png"
          alt="JuristQuest Logo"
          className="h-10 w-auto"
          data-aos="zoom-in"
          data-aos-delay="100"
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-10 text-base font-medium text-inherit">
          <li><a href="/" className="hover:text-[#6B21A8] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#6B21A8] transition-colors">About us</a></li>
          <li><a href="#registrations" className="hover:text-[#6B21A8] transition-colors">Registrations</a></li>
          <li><a href="#rules" className="hover:text-[#6B21A8] transition-colors">Rules & Guidelines</a></li>
          <li><a href="/our-partners" className="hover:text-[#6B21A8] transition-colors">Our Partners</a></li>
          <li><a href="#contact" className="hover:text-[#6B21A8] transition-colors">Contact Us</a></li>
        </ul>

        {/* Register Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://docs.google.com/forms/d/1v_9q3K1DeL4VfgLaCJLW2CZi8a32T_990g5ux1S4yOA/edit?ts=684129b8"
            target="blank"
            rel="noopener noreferrer"
            className="bg-[#6B21A8] text-white px-5 py-2 rounded font-semibold hover:bg-[#581C87] transition"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            Register now
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex space-x-2">
          <div
            onClick={() => setMobileMenuOpen(true)}
            className={`w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer ${
              scrolled || !isHome ? "border-black text-black" : "border-white text-white"
            }`}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <Menu className="w-5 h-5" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-50 bg-white text-black p-6 transition-all duration-300 animate-fadeDown overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <img 
              src="/assets/new-logo.png" 
              alt="Logo" 
              className="h-10" 
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 border border-black rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <ul className="space-y-6 text-lg font-semibold">
            <li><a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">Home</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">About us</a></li>
            <li><a href="#registrations" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">Registrations</a></li>
            <li><a href="#rules" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">Rules & Guidelines</a></li>
            <li><a href="/our-partners" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">Our Partners</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6B21A8] transition-colors block">Contact Us</a></li>
            <li>
              <a
                href="https://docs.google.com/forms/d/1v_9q3K1DeL4VfgLaCJLW2CZi8a32T_990g5ux1S4yOA/edit?ts=684129b8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#6B21A8] text-white px-6 py-2 rounded font-semibold hover:bg-[#581C87] transition"
              >
                Register now
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
