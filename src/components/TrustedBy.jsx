import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullseye, FaEye, FaGavel } from "react-icons/fa";

const VisionMission = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:grid max-w-[1440px] mx-auto px-4 py-20 grid-cols-1 md:grid-cols-3 gap-10">
        {[{
          icon: <FaEye />,
          title: "Our Vision",
          text: "To establish JuristQuest as India’s most prestigious moot court competition, recognized nationally and internationally for excellence in legal advocacy and education.",
        }, {
          icon: <FaBullseye />,
          title: "Our Mission",
          text: "To provide a competitive, structured environment that sharpens students’ skills in legal research, drafting and oral advocacy through real-world simulations.",
        }, {
          icon: <FaGavel />,
          title: "What we do",
          text: "We offer national exposure, global immersion programs (Singapore & Malaysia – 2025), and networking with senior advocates, judges, and legal scholars.",
        }].map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="relative bg-white rounded-2xl shadow-lg pt-16 pb-10 px-6 text-center border-t-[8px]"
            style={{ borderTopColor: "#6B21A8" }}
          >
            <div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-md"
              style={{ backgroundColor: "#6B21A8" }}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: "#6B21A8" }}>
              {item.title}
            </h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">{item.text}</p>
            {/* <a
              href="/register"
              className="font-medium hover:underline"
              style={{ color: "#6B21A8" }}
            >
              Register now
            </a> */}
          </div>
        ))}
      </div>

      {/* Alternative Premium Mobile Layout */}
      <div className="md:hidden px-4 py-16 space-y-10 bg-[#f5f5f5]">
        {[{
          icon: <FaEye />,
          title: "Our Vision",
          text: "To establish JuristQuest as India’s most prestigious moot court competition, recognized nationally and internationally for excellence in legal advocacy and education.",
        }, {
          icon: <FaBullseye />,
          title: "Our Mission",
          text: "To provide a competitive, structured environment that sharpens students’ skills in legal research, drafting and oral advocacy through real-world simulations.",
        }, {
          icon: <FaGavel />,
          title: "What we do",
          text: "We offer national exposure, global immersion programs (Singapore & Malaysia – 2025), and networking with senior advocates, judges, and legal scholars.",
        }].map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#6B21A8] to-[#9F7AEA] text-white">
              <div className="text-xl">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <div className="px-6 py-4">
              <p className="text-sm text-gray-700 mb-4">{item.text}</p>
              {/* <a
                href="/register"
                className="inline-block text-sm font-medium text-[#6B21A8] hover:underline"
              >
                Register now
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VisionMission;
