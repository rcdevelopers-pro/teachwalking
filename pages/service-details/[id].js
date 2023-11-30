import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Layouts/NavbarSecondary";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";

import { servicesData } from "../../utils/servicesData";
import { getDataByValue } from "../../utils/helper";

const ServiceDetails = () => {
  const router = useRouter();
  const { id } = router.query || {};

  const [details, setDetails] = useState({});

  useEffect(() => {
    const [serviceDetails] = getDataByValue(servicesData, id);
    setDetails(serviceDetails);
  }, [id]);
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle={details?.title}
        BGImage="/images/page-banner1.jpg"
      />

      <ServiceDetailsContent details={details} />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default ServiceDetails;
