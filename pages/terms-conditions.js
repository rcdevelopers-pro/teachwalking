import React from "react";
import NavbarTwo from "../components/Layouts/NavbarSecondary";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

const TermsConditions = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Terms Conditions"
        BGImage="/images/page-banner2.jpg"
      />

      <div class="text-container ptb-100">
        <div class="container">
          <h4>TechWalking Terms and Conditions</h4>
          <p>
            Welcome to TechWalking! We're delighted to have you as part of our
            community. Before you dive into the exciting world of our services,
            please take a moment to familiarize yourself with our Terms and
            Conditions. By using our services, you agree to abide by the
            following guidelines:
          </p>
          <h5>Acceptance of Terms:</h5>
          <p>
            {" "}
            By accessing or using TechWalking's services, you acknowledge that
            you have read, understood, and agree to comply with these Terms and
            Conditions. If you do not agree with any part of these terms, please
            refrain from using our services.
          </p>{" "}
          <h5>User Eligibility: </h5>
          <p>
            {" "}
            Our services are intended for users who are at least 18 years old.
            If you are under 18, you may use our services only with the
            involvement and consent of a parent or guardian.
          </p>{" "}
          <h5>Account Information:</h5>
          <p>
            {" "}
            To access certain features of our services, you may need to create a
            TechWalking account. You are responsible for maintaining the
            confidentiality of your account information and for all activities
            that occur under your account.
          </p>{" "}
          <h5>Service Usage:</h5>
          <p>
            {" "}
            TechWalking provides various services, and you agree to use them
            only for lawful purposes. You may not use our services in any way
            that could harm TechWalking, its users, or any third party.
          </p>{" "}
          <h5>Intellectual Property: </h5>
          <p>
            All content and materials available on TechWalking, including but
            not limited to text, graphics, logos, button icons, images, audio
            clips, and software, are the property of TechWalking or its
            licensors and are protected by intellectual property laws.
          </p>{" "}
          <h5>Privacy Policy:</h5>
          <p>
            {" "}
            We take your privacy seriously. Please review our Privacy Policy to
            understand how we collect, use, and protect your personal
            information.
          </p>{" "}
          <h5>Third-Party Links:</h5>
          <p>
            {" "}
            TechWalking may contain links to third-party websites or services
            that are not owned or controlled by us. We are not responsible for
            the content or practices of any third-party site and encourage you
            to review their terms and privacy policies.
          </p>{" "}
          <h5>Termination of Services:</h5>
          <p>
            {" "}
            TechWalking reserves the right to terminate or suspend your access
            to our services at any time, with or without cause, and without
            notice.
          </p>{" "}
          <h5>Changes to Terms: </h5>
          <p>
            TechWalking may update these Terms and Conditions from time to time.
            It is your responsibility to review them periodically. Your
            continued use of our services after any modifications indicates your
            acceptance of the updated terms.
          </p>{" "}
          <h5>Contact Information:</h5>
          <p>
            {" "}
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at{" "}
            <a href="mailto:info@techwalking.com">info@techwalking.com</a> .
          </p>
          <p>
            Thank you for choosing TechWalking. We look forward to providing you
            with an outstanding service experience!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsConditions;
