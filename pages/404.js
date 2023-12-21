import React from "react";
import Navbar from "../components/Layouts/NavbarSecondary";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";
import Footer from "../components/Layouts/Footer";

const Error = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="404 Error " BGImage="/images/page-banner3.jpg" />

      <ErrorContent />

      <Footer />
    </>
  );
};

export default Error;
