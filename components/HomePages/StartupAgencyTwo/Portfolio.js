import React from "react";
import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio-area pt-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Portfolio</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="mw-1920">
          <div className="row m-0">
            <div className="col-lg-3 col-sm-6 p-0">
              <div 
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src="/images/portfolio/portfolio1.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      UX Workflow
                    </Link>
                  </h3>

                  <Link href="/portfolio-details" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>

              <div 
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src="/images/portfolio/portfolio2.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      Web Development
                    </Link>
                  </h3>

                  <Link href="/portfolio-details" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div 
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src="/images/portfolio/portfolio3.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      Web Design
                    </Link>
                  </h3>

                  <Link href="/portfolio-details" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div 
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <img src="/images/portfolio/portfolio4.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      React Development
                    </Link>
                  </h3>

                  <Link href="/portfolio-details" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>

              <div 
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <img src="/images/portfolio/portfolio5.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      Mobile Apps Development
                    </Link>
                  </h3>

                  <Link href="/portfolio-details" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-0">
              <div 
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <img src="/images/portfolio/portfolio6.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      eCommerce
                    </Link>
                  </h3>

                  <Link href="/portfolio-details" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>

              <div 
                className="single-portfolio"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="800"
              >
                <img src="/images/portfolio/portfolio7.jpg" alt="image" />

                <div className="portfolio-content">
                  <h3>
                    <Link href="/portfolio-details">
                      UX for Mobile Apps
                    </Link>
                  </h3>

                  <Link href="/portfolio-details" className="link-btn">
                    <i className="pe-7s-link"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
