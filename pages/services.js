import React from "react";
import { NextSeo } from "next-seo";

import Navbar from "../components/Layouts/NavbarSecondary";
import PageBanner from "../components/Common/PageBanner";
import OurServices from "../components/Services/OurServices";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const Services = () => {
  return (
    <>
      <NextSeo
        title="Our Services"
        description="TechWalking: Empowering Digital Transformation with Innovative Tech Solutions"
        canonical="https://www.techwalking.com/services/"
      />
      <Navbar />

      <PageBanner pageTitle="Our Services" BGImage="/images/page-banner1.jpg" />

      <OurServices />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Services;
