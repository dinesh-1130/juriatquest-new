import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUsers, FaUserGraduate, FaProjectDiagram } from "react-icons/fa";
import "swiper/css";

const ruleCards = [
  {
    title: "Team Composition",
    description:
      "Each team must consist of three members: two orators and one researcher for balanced participation and preparation.",
    icon: <FaUsers className="text-xl text-purple-800" />,
    image: "/assets/social-1.jpg",
  },
  {
    title: "Eligibility",
    description:
      "Only students from recognized South Indian law colleges are eligible to participate in the competition.",
    icon: <FaUserGraduate className="text-xl text-purple-800" />,
    image: "/assets/social-2.jpg",
  },
  {
    title: "Competition Format",
    description:
      "The competition begins with virtual preliminaries and quarter-finals, progressing to on-site semi-finals and a grand finale - testing legal reasoning, adaptability, and courtroom presence through complex corporate law issues, mirroring real-world legal practice.",
    icon: <FaProjectDiagram className="text-xl text-purple-800" />,
    image: "/assets/social-3.jpg",
  },
  {
    title: "Team Composition",
    description:
      "Each team must consist of three members: two orators and one researcher for balanced participation and preparation.",
    icon: <FaUsers className="text-xl text-purple-800" />,
    image: "/assets/pic-1.jpg",
  },
  {
    title: "Eligibility",
    description:
      "Only students from recognized South Indian law colleges are eligible to participate in the competition.",
    icon: <FaUserGraduate className="text-xl text-purple-800" />,
    image: "/assets/pic-2.jpg",
  },
  {
    title: "Competition Format",
    description:
      "Starts online with prelims and quarters, then transitions onsite for semifinals and finale to test performance under varied environments.",
    icon: <FaProjectDiagram className="text-xl text-purple-800" />,
    image: "/assets/pic-3.jpg",
  },
];

const RulesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative bg-white py-20 px-4 font-['Lato']">
      <div className="text-sm font-semibold mb-2 text-purple-800">
        Rules & Guidelines
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-10">
        Registrations Open for JuristQuest 2025
        <br /> Calling All South Indian Law Colleges!
      </h2>

      <Swiper
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        className="rule-swiper"
      >
        {ruleCards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              data-aos="fade-up"
              className="relative h-[320px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white p-2 rounded-full">{card.icon}</div>
                  <h3 className="font-semibold text-lg">{card.title}</h3>
                </div>
                <p className="text-sm mb-4">{card.description}</p>
                <a
              href="/contact-form"
                  className="text-sm font-medium underline transition"
                  style={{ color: "#9F7AEA" }}
                  onMouseOver={(e) => (e.target.style.color = "#6B21A8")}
                  onMouseOut={(e) => (e.target.style.color = "#9F7AEA")}
                >
                  Register now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RulesSection;
