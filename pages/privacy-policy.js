import React from "react";
import NavbarTwo from "../components/Layouts/NavbarSecondary";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Privacy Policy"
        BGImage="/images/page-banner5.jpg"
      />

      <div class="text-container ptb-100">
        <div class="container">
          <h2>TechWalking Privacy Policy</h2>

          <p>
            At TechWalking, we are committed to safeguarding your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and protect the
            information gathered through our IT services. By engaging with our
            services, you agree to the terms outlined in this policy.
          </p>

          <h5>Information We Collect</h5>

          <p>We may collect the following types of information:</p>

          <ul>
            <li>
              Contact Information: We may collect your name, email address,
              phone number, and other contact details.
            </li>
            <li>
              Cookies and Tracking Technologies: TechWalking employs cookies and
              similar technologies to enhance user experience, analyze trends,
              and administer the website. Users can control cookie preferences
              through their browser settings.
            </li>
            <li>
              Log Data:We gather data on how our services are utilized,
              including log files, IP addresses, and device information, to
              improve and optimize our offerings.
            </li>
          </ul>

          <h5>How We Use Your Information</h5>

          <p>
            We use the collected information for various purposes, including:
          </p>
          <ul>
            <li>
              <p>
                Service Delivery: Personal information is utilized to deliver
                our IT services, customize user experiences, and respond to
                inquiries.
              </p>
            </li>

            <li>
              <p>
                Improvement of Services: We analyze usage data to enhance the
                performance, features, and functionality of our IT solutions,
                ensuring they meet the evolving needs of our clients.
              </p>
            </li>
            <li>
              <p>
                Communication: We may use your contact information to send
                relevant updates, notifications, and marketing communications.
                Users can opt-out of promotional communications at any time.
              </p>
            </li>
            <li>
              Communicating with you, including sending important notices,
              updates, and promotional information.
            </li>
          </ul>

          <h5>Information Sharing and Disclosure</h5>

          <ul>
            <li>
              Third-Party Service Providers: TechWalking may engage third-party
              service providers to assist with service delivery, analytics, and
              other business operations. These providers are bound by
              confidentiality and privacy obligations.
            </li>
            <li>
              Legal Compliance: We may disclose personal information when
              required by law, legal processes, or to protect our rights and
              interests.
            </li>
          </ul>

          <h5>Security</h5>

          <p>
            TechWalking employs industry-standard security measures to protect
            against unauthorized access, alteration, disclosure, or destruction
            of your personal information.
          </p>
          <h5>Data Retention</h5>
          <p>
            We retain personal information only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>
          <h5>Your Privacy Choices</h5>
          <p>
            Users have the right to access, correct, or delete their personal
            information. If you have concerns about the handling of your data,
            please contact us at{" "}
            <a href="mailto:info@techwalking.com">info@techwalking.com</a>.
          </p>

          <h5>Updates to the Privacy Policy</h5>

          <p>
            TechWalking may update this Privacy Policy periodically to reflect
            changes in our practices and services. Users are encouraged to
            review the policy regularly.
          </p>
          <p>
            By choosing TechWalking as your IT service provider, you entrust us
            with your information. We take this responsibility seriously and are
            dedicated to maintaining the highest standards of privacy and data
            protection.
          </p>
          <p>
            For any questions or concerns regarding this Privacy Policy, please
            contact us at{" "}
            <a href="mailto:info@techwalking.com">info@techwalking.com</a>.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
