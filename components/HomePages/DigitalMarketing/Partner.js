import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const Partner = () => {
  return (
    <>
      <div className="partner-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Clients</span>
            <h2>Our Clients</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner1.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner2.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner3.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner4.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner5.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner6.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item text-center">
                <a href="#" className="d-inline-block" target="_blank">
                  <img
                    src="/images/digital-marketing/partner4.png"
                    alt="image"
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
