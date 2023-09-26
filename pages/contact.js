import React from "react";
import Navbar from "../components/Layouts/NavbarSecondary";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Contact Us" BGImage="/images/page-banner1.jpg" />

      <ContactInfo />

      <ContactForm />

      <div className="ptb-100">
        <Newsletter />
      </div>

      <Footer />
    </>
  );
};

export default Contact;
