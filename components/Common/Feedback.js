import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const feedbacskData = [
  {
    name: "John Smith",
    designation: "CEO & Founder, Envato",
    feedbacskText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    name: "Oliver Smith",
    designation: "React JS Specialist",
    feedbacskText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    name: "Thomas John",
    designation: "Angular JS Specialist",
    feedbacskText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

const Feedback = () => {
  return (
    <>
      <div className="feedback-area ptb-100">
        <div className="container">
          <div className="feedback-list">
            <div className="quotes-icon">
              <img src="/images/left-quote-white.png" alt="icon" />
            </div>

            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={30}
              slidesPerView={1}
              modules={[Autoplay, Pagination]}
              className="feedback-slides"
            >
              {feedbacskData &&
                feedbacskData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="single-feedback">
                      <p><q>{value.feedbacskText}</q></p>

                      <div className="bar"></div>

                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        {/* Client image */}
        <div className="client-image-box">
          <img
            src="/images/clients/client1.png"
            className="client1"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="200"
          />

          <img
            src="/images/clients/client2.png"
            className="client2"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="300"
          />

          <img
            src="/images/clients/client3.png"
            className="client3"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          />

          <img
            src="/images/clients/client4.png"
            className="client4"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          />

          <img
            src="/images/clients/client5.png"
            className="client5"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="600"
          />

          <img
            src="/images/clients/client6.png"
            className="client6"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="700"
          />

          <img
            src="/images/clients/client7.png"
            className="client7"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="800"
          />

          <img
            src="/images/clients/client8.png"
            className="client8"
            alt="client"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="900"
          />
        </div>
      </div>
    </>
  );
};

export default Feedback;
