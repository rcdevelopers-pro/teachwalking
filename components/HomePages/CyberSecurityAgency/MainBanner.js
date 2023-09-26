import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="cs-banner-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="cs-banner-content">
                <span 
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  No #1 Cyber Security Company Of The World
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  We Provide The Best Cyber Security
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  Cybersecurity is the protection from the theft to protect of
                  our computer systems and networks or being damaged of our
                  hardware, software and more.
                </p>

                <ul 
                  className="banner-btn"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <li>
                    <Link href="/contact" className="default-btn-two">
                      Contact Us{" "}
                      <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={() => setToggler(!toggler)}
                      className="video-btn"
                    >
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="cs-banner-image"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <img
                  src="/images/cyber-security/banner/main.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="cs-banner-shape">
          <img src="/images/cyber-security/banner/shape.png" alt="image" />
        </div>
        <div className="cs-lock">
          <img src="/images/cyber-security/banner/lock.png" alt="image" />
        </div>
      </div>
    </>
  );
}

export default MainBanner;