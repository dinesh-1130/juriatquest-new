

import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Herosection from "./components/Herosection";
import Registrations from './components/Registrations';
// import Posts from './components/Posts';
import ContactUs from './components/ContactUs';
import RulesandGuidelines from "./components/RulesandGuidelines";
import SocialResponsibility from "./components/SocialResponsibility";
import FAQChat from "./components/FAQChat"
import About from "./components/About";
import TrustedBy from "./components/TrustedBy";
import Whoweare from "./components/Whoweare"
// Inner Pages

import Aboutus from "./components/InnerPages/Aboutus"
import Submitform from "./components/InnerPages/Submitform"

import SuccessStories from "./components/SuccessStories"

import { useEffect } from "react";



function Home() {
  return (
    <>
    <FAQChat />
   
     <Herosection />

<div id="about">
  <About />
</div>

<TrustedBy />

<div id="registrations">
  <Registrations />
</div>

<Whoweare />

<div id="rules">
  <RulesandGuidelines />
</div>

<SocialResponsibility />

<SuccessStories />

{/* <div id="faqs">
  <FAQ />
</div> */}

<div id="contact">
  <ContactUs />
</div>

    </>
  );
}




export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden bg-white relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/our-partners" element={<Aboutus />} />
          <Route path="/contact-form" element={<Submitform />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}