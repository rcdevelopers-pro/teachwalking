import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { feedbacskData } from "../../utils/data";



const FeedbackTwo = () => {
  return (
    <>
      <div className="quotes-area bg-fcfbfb">
        <div className="container">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            className="quotes-slides"
          >
            {feedbacskData &&
              feedbacskData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="quotes-content">
                    <p>{value.feedbacskText}</p>
                    <h3>{value.name}</h3>
                    <span>{value.designation}</span>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackTwo;
