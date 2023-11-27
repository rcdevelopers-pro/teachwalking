import React from "react";
import Link from "next/link";
import { servicesData } from "../../utils/servicesData";

const ServicesStyleFour = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {servicesData &&
              servicesData.map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one white-bg text-center">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={`${value.viewDetails}/${value.id}`}>
                        {value.title}
                      </Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleFour;
