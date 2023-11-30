import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { servicesData } from "../../utils/servicesData";

const BestServices = () => {
  return (
    <>
      <section className="services-area">
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-lg-5 p-0">
              <div className="services-inner">
                <div className="services-section-title">
                  <h2>Offering The Best of Services</h2>
                  <div className="bar"></div>
                  <p>
                    TechWalking: Elevating Excellence in IT Services. At
                    TechWalking, we redefine industry standards by offering
                    unparalleled IT solutions. From cutting-edge software
                    development to seamless network management, our dedicated
                    team ensures your technological journey is marked by
                    innovation, reliability, and unmatched quality. Choose
                    TechWalking for a service-centric approach that propels your
                    business forward in the digital landscape.
                  </p>

                  <img src="/images/women-with-table.png" alt="Women" />
                </div>
              </div>
            </div>

            <div className="col-lg-7 p-0">
              <div className="services-list">
                <Swiper
                  spaceBetween={30}
                  navigation={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    600: {
                      slidesPerView: 2,
                    },
                    1400: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Autoplay, Navigation]}
                  className="services-slides"
                >
                  {servicesData &&
                    servicesData.map((value, i) => (
                      <SwiperSlide key={i}>
                        <div className="single-services">
                          <img
                            src={value.image}
                            alt="image"
                            className="w-100"
                          />

                          <div className="content">
                            <div className="icon">
                              <i className={value.iconName}></i>
                            </div>

                            <h3>{value.title}</h3>
                            <p>{value.shortText}</p>

                            <Link
                              // href={value.detailsLink}
                              href={`${value.viewDetails}/${value.id}`}
                              className="read-more-btn"
                            >
                              {" "}
                              Read More
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestServices;
