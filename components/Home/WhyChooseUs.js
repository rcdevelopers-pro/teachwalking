import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { companyName } from "../../utils/portfolio";

const WhyChooseUs = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox toggler={toggler} sources={["https://youtu.be/AmztjuhvlW"]} />

      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div
                className="about-content about-content-two pl-0 mt-0"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="section-title">
                  <h2>Why Choose Us</h2>
                  <p>
                    Welcome to <b>{companyName}</b>, where innovation meets
                    reliability. We understand that choosing the right IT
                    partner for your business is a critical decision, and we're
                    here to make that choice an easy one. Here's why you should
                    choose us:
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                    At <b>{companyName}</b>, we are more than just a technology
                    company—we are innovators, problem solvers, and partners in
                    your digital journey.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                    The story of <b>{companyName}</b> is one of ambition,
                    innovation, and unwavering dedication to transforming the IT
                    landscape. Our history is a testament to the remarkable
                    journey we've undertaken since our inception, and it
                    reflects the milestones that have shaped our identity as a
                    forward-thinking IT startup.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <p>
                    At <b>{companyName}</b>, our mission is clear and
                    unwavering: to revolutionize the IT landscape through
                    innovation, excellence, and client empowerment.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div
                className="about-image right-image"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img
                  src="/images/about-img3.jpg"
                  alt="image"
                  className="rounded-10"
                />

                <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
