import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox toggler={toggler} sources={["https://youtu.be/AmztjuhvlW"]} />

      <div
        className="hero-banner overly"
        style={{
          backgroundImage: `url(/images/hero-banner1.jpg)`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content text-center">
                <span
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  We are a
                </span>

                <h1
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Creative agency
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link
                  href="/contact"
                  className="btn btn-primary"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  Get Started
                </Link>

                <button
                  onClick={() => setToggler(!toggler)}
                  className="btn btn-secondary"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <i className="fa-solid fa-play me-1"></i> How it works
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="curve-shape">
          <img src="/images/curve-shape.png" alt="Shape" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
