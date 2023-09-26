import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="app-main-banner">
        <div className="container">
          <div className="app-main-banner-inner">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="content">
                  <span className="sub-title">
                    # Get your 14 days free trail!
                  </span>
                  <h1>
                    The Revolutionary App That Makes Your Life Easier Than
                    Others App
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    tincidunt eifend odio viverra diam aliquet donec again.
                  </p>
                  <Link href="#" className="app-banner-btn">
                    Start Free Trial{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/images/app/mobile-app.png" alt="banner-img" />
                </div>
              </div>
            </div>

            {/* Shape Images */}
            <div className="app-banner-shape1">
              <img src="/images/app/shape1.png" alt="image" />
            </div>
            <div className="app-banner-shape2">
              <img src="/images/app/shape2.png" alt="image" />
            </div>
            <div className="app-banner-shape3">
              <img src="/images/app/shape2.png" alt="image" />
            </div>
            <div className="app-banner-shape4">
              <img src="/images/app/shape3.png" alt="image" />
            </div>
            <div className="app-banner-shape5">
              <img src="/images/app/shape4.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
