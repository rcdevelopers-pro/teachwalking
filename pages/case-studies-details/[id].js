import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Layouts/NavbarSecondary";
import PageBanner from "../../components/Common/PageBanner";
import PortfolioDetailsContent from "../../components/Portfolio/PortfolioDetailsContent";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";

import { caseStudyData } from "../../utils/portfolioData";
import { getDataByValue } from "../../utils/helper";

const PortfolioDetails = () => {
  const router = useRouter()
  const {id } =router.query||{}

  const [details, setDetails] = useState({})

  useEffect(()=>{
    const [caseStudydetails] = getDataByValue(caseStudyData, id)
    setDetails(caseStudydetails)
  },[id]) 
  return (
    <>
      <Navbar />

      <PageBanner pageTitle={details?.title} BGImage={details?.BGImage} />

      <PortfolioDetailsContent details={details}/>

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default PortfolioDetails;
