import React from "react";
import Navbar from "../components/Layouts/NavbarSecondary";
import PageBanner from "../components/Common/PageBanner";
import WorksStyleOne from "../components/Portfolio/WorksStyleOne";
import WorksStyleTwo from "../components/Portfolio/WorksStyleTwo";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Our Work" BGImage="/images/page-banner3.jpg" />

      <WorksStyleOne />

      <WorksStyleTwo />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default Portfolio;
