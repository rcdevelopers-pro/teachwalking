import React from "react";
import Link from "next/link";

const funFactsData = [
  {
    iconName: "fa-solid fa-circle-check",
    number: "380+",
    shortText: "Completed Projects",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-heart",
    number: "360+",
    shortText: "Happy Clients",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-list-check",
    number: "80+",
    shortText:"Ongoing Projects",
    aosDelay: "300",
  },
  {
    iconName: "fa-solid fa-trophy",
    number: "15+",
    shortText:"Winning Awards",
    aosDelay: "400",
  },
];

const FunFactsTwo = () => {
  return (
    <>
      <div className="funfacts-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>We always try to understand users expectation</h2>
            <p>
              We always strive to empathetically grasp and exceed our users'
              expectations. Your satisfaction fuels our relentless pursuit of
              excellence.
            </p>
          </div>

          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="funfact"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>{value.number}</h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>

          <div
            className="contact-cta-box"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <h3>Have any questions about us?</h3>
            <p>Don't hesitate to contact us</p>

            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          <div className="map-bg">
            <img src="/images/map.png" alt="map" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactsTwo;
