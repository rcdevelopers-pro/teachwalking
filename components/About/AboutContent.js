import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { companyName } from "../../utils/portfolio";

const AboutContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox toggler={toggler} sources={["https://youtu.be/AmztjuhvlW"]} />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about-img2.jpg"
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

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>About Us</h2>
                  {/* <h4>Transforming Possibilities into Reality</h4> */}
                  <p>
                    At {companyName}, we are not just an IT startup; we are a
                    catalyst for change in the digital realm. Our story is one
                    of innovation, determination, and a relentless pursuit of
                    excellence.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Vision</h4>
                  <p>
                    Our vision is simple yet profound: to redefine the
                    possibilities of technology. We envision a world where IT is
                    not just a tool but a transformative force that empowers
                    businesses and individuals to achieve their dreams.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Commitment</h4>
                  <p>
                    We are committed to being at the forefront of technological
                    advancement. Our team is comprised of industry experts,
                    creative thinkers, and problem solvers who thrive on
                    challenges. We are driven to deliver solutions that don't
                    just meet expectations – they exceed them.
                  </p>
                </div>

                <div className="about-text">
                  <h4>What Sets Us Apart</h4>

                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Innovative Thinking
                      {/* : Innovation is in our DNA. We embrace
                      change, adapt to evolving landscapes, and pioneer
                      solutions that others can only dream of. */}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Client-Centric Approach
                      {/* : Your success is our success. We
                      listen, we understand, and we tailor our solutions to your
                      unique needs. */}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Quality Assurance
                      {/* : We don't compromise on quality. Our
                      solutions are robust, secure, and built to perform
                      flawlessly. */}
                    </li>

                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Sustainability
                      {/* : We're not just about technology; we care
                      about the planet. Our solutions are designed with
                      sustainability in mind. */}
                    </li>
                  </ul>
                </div>
                {/* 
                <div className="about-text">
                  <h4>Our Promise</h4>
                  <p>
                    When you partner with [Your Company Name], you're not just
                    hiring a service provider; you're collaborating with a team
                    that is passionate about your success. We promise to be your
                    trusted technology partner, guiding you through the
                    complexities of the digital landscape.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Join Us on the Journey</h4>
                  <p>
                    Whether you're a business aiming to stay competitive in the
                    digital age, an individual looking to leverage technology to
                    its fullest, or a potential collaborator excited about
                    innovation, we invite you to join us on this incredible
                    journey. Let's turn possibilities into reality.
                  </p>
                  <p>
                    Connect with [Your Company Name] today and be a part of a
                    brighter, tech-driven future.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
