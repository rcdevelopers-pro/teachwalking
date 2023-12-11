import React from "react";
import { NextSeo } from "next-seo";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/Home/MainBanner";

import FeaturedServices from "../components/Home/FeaturedServices";
import CaseStudies from "../components/Home/CaseStudies";
import FeedbackTwo from "../components/Common/FeedbackTwo";

import WhyChooseUs from "../components/Home/WhyChooseUs";

import BestServices from "../components/Home/BestServices";
import Partner from "../components/Common/Partner";
import Feedback from "../components/Common/Feedback";
import Portfolio from "../components/Home/Portfolio";
import TeamStyleFour from "../components/Common/TeamStyleFour";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import WorkProcess from "../components/Home/WorkProcess";
import PricingStyleThree from "../components/Pricing/PricingStyleThree";
import LatestNews from "../components/Common/LatestNews";
import Newsletter from "../components/Common/Newsletter";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const HomePage = () => {
  return (
    <>
      <NextSeo
        title="TechWalking: Elevating Excellence in IT Solutions - Your Go-To Tech
        Partner!"
        description="At TechWalking, we are more than just a technology company—we are innovators, problem solvers, and partners in your digital journey"
        canonical="https://www.techwalking.com/"
      />
      <Navbar />

      <MainBanner />

      <FeaturedServices />

      <CaseStudies />

      <FeedbackTwo />

      <WhyChooseUs />

      <BestServices />

      <Partner />

      <Feedback />

      {/* <Portfolio /> */}

      {/* <TeamStyleFour /> */}

      <FunFactsTwo />

      <WorkProcess />

      {/* <PricingStyleThree /> */}

      {/* <div className="pt-100">
        <Newsletter />
      </div> */}

      {/* <div className="ptb-100">
        <LatestNews />
      </div> */}

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default HomePage;
