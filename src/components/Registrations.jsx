import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RegistrationFinal() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ---------- Desktop & Tablet Layout ---------- */}
      <section className="hidden md:block relative py-20 px-4 md:px-12 font-['Lato'] bg-gradient-to-br from-[#6B21A8] via-[#7D37B5] to-[#A471D1] text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          {/* LEFT IMAGE */}
          <div className="relative w-[300px] h-[500px] flex-shrink-0" data-aos="fade-right">
            <img
              src="/assets/m-2.png"
              alt="Left U"
              className="absolute top-[-120px] left-0 w-full h-full object-contain z-10"
            />
            <img
              src="/assets/m-3.png"
              alt="Statue"
              className="absolute top-[-110px] left-0 w-full h-full object-contain z-20 ml-2"
            />
          </div>

          {/* CENTER TEXT */}
          <div className="flex-1 text-center md:text-left px-4 z-30" data-aos="zoom-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Registrations are <br /> now open for <br /> JuristQuest 2025
            </h1>
            <p className="text-gray-100 text-sm md:text-base mb-8 leading-relaxed">
              This year, we invite law students from across South India <br />
              to compete, collaborate, and connect through dynamic <br />
              rounds, workshops, and immersive legal experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              <div data-aos="fade-up" data-aos-delay="100">
                <h4 className="font-semibold text-white border-b border-white pb-1 inline-block mb-2 text-sm sm:text-base">
                  Who can register?
                </h4>
                <p className="text-gray-100 text-sm mt-1">
                 Students currently enrolled in 3-Year or 5-Year LL.B degree programs from recognized South Indian law colleges.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <h4 className="font-semibold text-white border-b border-white pb-1 inline-block mb-2 text-sm sm:text-base">
                  What’s in it for you?
                </h4>
                <p className="text-gray-100 text-sm mt-1">
                  Participate in challenging rounds, gain insights from expert-led workshops, access the Legal Immersion Program.
                </p>
              </div>
            </div>

            {/* CTA Button for Desktop */}
            <div className="mt-10">
              <a
              href="/contact-form"
                className="bg-white text-[#6B21A8] font-semibold px-6 py-3 rounded-full shadow-lg inline-block"
              >
                Register Now
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-[300px] h-[500px] flex-shrink-0" data-aos="fade-left">
            <img
              src="/assets/m-4.png"
              alt="Right U"
              className="absolute top-[120px] left-0 w-full h-full object-contain z-10"
            />
            <img
              src="/assets/m-1.png"
              alt="Gavel"
              className="absolute top-[120px] left-0 w-full h-full object-contain z-20 ml-2"
            />
          </div>
        </div>
      </section>

      {/* ---------- Mobile Custom Layout ---------- */}
      <section className="block md:hidden py-16 px-6 font-['Lato'] bg-gradient-to-b from-[#6B21A8] via-[#7D37B5] to-[#A471D1] text-white relative overflow-hidden">
        {/* Top Image + Heading */}
        <div className="relative z-10 text-center mb-10">
          <div className="w-36 h-36 mx-auto relative">
            <img
              src="/assets/m-3.png"
              alt="Statue"
              className="absolute w-full h-full object-contain z-10"
            />
            <img
              src="/assets/m-2.png"
              alt="Frame"
              className="absolute w-full h-full object-contain z-0"
            />
          </div>
          <h2 className="text-2xl font-extrabold mt-6 leading-tight">
            JuristQuest 2025 <br /> Registrations Open
          </h2>
          <p className="text-sm text-purple-100 leading-relaxed mt-3">
            South India’s premier moot court challenge invites aspiring legal minds to compete, collaborate, and grow.
          </p>
        </div>

        {/* Info Blocks */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-white text-left space-y-6">
          <div data-aos="fade-up">
            <h4 className="font-semibold border-b border-white pb-1 text-base">
              Who can register?
            </h4>
            <p className="text-sm mt-1">
           Students currently enrolled in 3-Year or 5-Year LL.B degree programs from recognized South Indian law colleges.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-semibold border-b border-white pb-1 text-base">
              What’s in it for you?
            </h4>
            <p className="text-sm mt-1">
              Compete in rounds, attend workshops, and take part in the Legal Immersion Program.
            </p>
          </div>
        </div>

        {/* CTA Button for Mobile */}
        <div className="mt-10 text-center">
          <a
           href="/contact-form"
            className="bg-white text-[#6B21A8] font-semibold px-6 py-3 rounded-full shadow-lg inline-block"
          >
            Register Now
          </a>
        </div>
      </section>
    </>
  );
}
