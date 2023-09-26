import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import TeamStyleThree from "../components/Common/TeamStyleThree";
import Feedback from "../components/Common/Feedback";
import Partner from "../components/Common/Partner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" BGImage="/images/page-banner1.jpg" />

      <AboutContent />

      <FunFactsTwo />

      {/* <TeamStyleThree /> */}

      <Feedback />
      <Partner />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default About;
