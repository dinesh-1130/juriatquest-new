import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaShippingFast,
  FaUsers,
  FaArrowsAltH,
  FaChartLine,
  FaBullseye,
  FaMedal,
  FaTrophy,
  FaUserTie,
  FaHandshake,
  FaPlay,
} from "react-icons/fa";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Hero Section - Dark Theme with Angled Design */}
      <section className="relative bg-gray-900 py-24 overflow-hidden">
  {/* Background image div - fixed with inset-0 to fill the entire section */}
  <div className="absolute inset-0 bg-[url('/assets/sample-5.jpg')] bg-cover bg-center opacity-50"></div>
  
  {/* Optional overlay for better text readability */}
  <div className="absolute inset-0 bg-black/50"></div>
  
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold tracking-wider mb-4">
      WHY CHOOSE US
    </span>
    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
      We Deliver <span className="inline-block">Technology with Purpose</span>
    </h1>
    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
      Discover how Commnet empowers modern businesses with efficiency, reliability, and innovation across regions.
    </p>
  </div>
</section>

    

      {/* Our MD Speaks Section */}
    <section className="py-24 bg-white text-gray-800 relative overflow-hidden">
  {/* Removed background gradient and image overlays */}

  {/* Removed Decorative Elements */}
  
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="text-center mb-16">
      <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-xs font-semibold tracking-wider mb-4">
        LEADERSHIP INSIGHTS
      </span>
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Our MD Speaks
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Hear directly from our Managing Director about our vision, values, and commitment to excellence.
      </p>
    </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="space-y-6">
              <h3 className="text-2xl font-bold">A Message From Our Leadership</h3>
              <p className="text-black">
                Our success is built on understanding the unique challenges our clients face and delivering tailored solutions that drive real business outcomes.
              </p>
              <p className="text-black">
                At Commnet, we believe that technology should serve people - not the other way around. Our approach combines technical excellence with a deep understanding of human needs.
              </p>
              <div className="pt-4">
                <div className="flex items-center space-x-4">
                
                </div>
              </div>
            </div>
            
       <div data-aos="fade-left" className="relative">
  <div className="w-full max-w-4xl h-[350px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl mx-auto">
    <iframe 
      className="w-full h-full"
      src="https://www.youtube.com/embed/lO9M-W085Os"
      title="Message from Our Managing Director"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-sky-400 to-indigo-600 rounded-full opacity-30 blur-lg"></div>
</div>
  </div>
          </div>
        
      </section>

      {/* Image + Content Split Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-sky-500 rounded-lg opacity-10"></div>
              <img
                src="/assets/press-4.jpg"
                alt="Why Choose Us"
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-indigo-100 z-0"></div>
            </div>
            
            <div data-aos="fade-left" className="space-y-12">
              <div className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm">
                Our Approach
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Empowering Your Business with Modern Technology
              </h2>
              
              <p className="text-gray-600 leading-relaxed">
                At Commnet, we believe in delivering solutions that not only meet current needs but anticipate future challenges in the digital landscape.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <FaChartLine className="text-sky-600 text-2xl mb-3" />
                  <h4 className="font-bold text-gray-800 mb-1">Proven Growth</h4>
                  <p className="text-sm text-gray-600">200% Year-over-Year growth across 5 regional markets</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <FaBullseye className="text-sky-600 text-2xl mb-3" />
                  <h4 className="font-bold text-gray-800 mb-1">Strategic Focus</h4>
                  <p className="text-sm text-gray-600">Targeted solutions that improve cash flow and agility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-600 text-xs font-semibold tracking-wider mb-4">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              From Local Consultancy to Regional IT Powerhouse
            </h2>
          </div>
          
          <div className="relative">
            {/* Journey Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-100"></div>
            
            <div className="grid grid-cols-1 gap-12">
              <div data-aos="fade-right" className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Beginning</h3>
                  <p className="text-gray-600">
                    Started as a 2-member consultancy with a vision to transform IT services
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute left-0 md:left-auto md:right-full top-1/2 transform -translate-y-1/2 md:translate-x-1/2 w-12 h-12 rounded-full bg-sky-500 border-4 border-white shadow-lg flex items-center justify-center text-white">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6 ml-16 md:ml-0">
                    <FaChartLine className="text-sky-600 text-3xl mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">Founded Early 2000s</h4>
                    <p className="text-sm text-gray-600">
                      Established with a focus on quality IT consulting services in Dubai
                    </p>
                  </div>
                </div>
              </div>
              
              <div data-aos="fade-left" className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative">
                  <div className="absolute right-0 md:right-auto md:left-full top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-sky-500 border-4 border-white shadow-lg flex items-center justify-center text-white">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6 mr-16 md:mr-0">
                    <FaMedal className="text-sky-600 text-3xl mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">Regional Expansion</h4>
                    <p className="text-sm text-gray-600">
                      Grew operations across India, Qatar, Muscat, and Singapore
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Growth</h3>
                  <p className="text-gray-600">
                    Expanded services and geographical presence to meet growing demand
                  </p>
                </div>
              </div>
              
              <div data-aos="fade-right" className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Today</h3>
                  <p className="text-gray-600">
                    A leading provider of innovative IT solutions across multiple industries
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute left-0 md:left-auto md:right-full top-1/2 transform -translate-y-1/2 md:translate-x-1/2 w-12 h-12 rounded-full bg-sky-500 border-4 border-white shadow-lg flex items-center justify-center text-white">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6 ml-16 md:ml-0">
                    <FaTrophy className="text-sky-600 text-3xl mb-4" />
                    <h4 className="font-bold text-gray-800 mb-2">Industry Leader</h4>
                    <p className="text-sm text-gray-600">
                      Recognized for delivering mission-critical infrastructure to global clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Benefits Section */}
   <section className="py-20 bg-sky-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-sky-600">
        Our <span className="text-sky-600">Vision & Mission</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div data-aos="zoom-in" className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="h-2 bg-sky-600"></div>
        <div className="p-8">
          <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-6 mx-auto">
            <FaUserTie className="text-sky-600 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-center text-sky-600 mb-4">Our Vision</h3>
          <p className="text-black text-center">
            To be the digital partner of choice by driving transformation through trusted and scalable IT solutions.
          </p>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-delay="100" className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="h-2 bg-sky-600"></div>
        <div className="p-8">
          <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-6 mx-auto">
            <FaHandshake className="text-sky-600 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-center text-sky-600 mb-4">Our Mission</h3>
          <p className="text-black text-center">
            We aim to build lasting partnerships by aligning our expertise with your success.
          </p>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-delay="200" className="bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="h-2 bg-sky-600"></div>
        <div className="p-8">
          <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-6 mx-auto">
            <FaMedal className="text-sky-600 text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-center text-sky-600 mb-4">Benefits With Us</h3>
          <ul className="space-y-2 text-black">
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-sky-600 mr-2"></span>
              Better client service
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-sky-600 mr-2"></span>
              Boost agility
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-sky-600 mr-2"></span>
              Increase productivity
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-sky-600 mr-2"></span>
              Optimize IT infrastructure
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-8">
            Join hundreds of businesses that trust Commnet for their technology needs.
          </p>
        <a href="/contactus">
  <button className="bg-white text-sky-700 px-8 py-3 rounded-full font-bold hover:bg-sky-50 transition-colors duration-300 shadow-lg">
    Contact Us Today
  </button>
</a>
        </div>
      </section>
    </>
  );
}

  {/* <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-sky-400">
                    <img 
                      src="/assets/md-profile.jpg" 
                      alt="Managing Director" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">John Smith</h4>
                    <p className="text-sky-300">Managing Director</p>
                  </div> */}