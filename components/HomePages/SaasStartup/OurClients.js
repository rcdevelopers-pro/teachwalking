import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const ourClientsData = [
  {
    image: "/images/business-consulting/partner-white1.png",
  },
  {
    image: "/images/business-consulting/partner-white2.png",
  },
  {
    image: "/images/business-consulting/partner-white3.png",
  },
  {
    image: "/images/business-consulting/partner-white4.png",
  },
  {
    image: "/images/business-consulting/partner-white5.png",
  },
  {
    image: "/images/business-consulting/partner-white6.png",
  },
  {
    image: "/images/business-consulting/partner-white4.png",
  },
];

const OurClients = () => {
  return (
    <>
      <div className="partner-area bg-dark ptb-100">
        <div className="container">
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
            {ourClientsData &&
              ourClientsData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="partner-item text-center">
                    <a
                      href={value.url}
                      className="d-inline-block"
                      target="_blank"
                    >
                      <img src={value.image} alt="image" />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurClients;
