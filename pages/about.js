import React from "react";
import { NextSeo } from "next-seo";

import Navbar from "../components/Layouts/NavbarSecondary";
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
      <NextSeo
        title="About Us"
        description="Our vision is simple yet profound: to redefine the possibilities of technology. We envision a world where IT is not just a tool but a transformative force that empowers businesses and individuals to achieve their dreams."
        canonical="https://www.techwalking.com/about/"
      />
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
