import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { companyName } from "../../utils/portfolio";

const feedbacskData = [
  {
    name: "Michael",
    designation: "CEO of Maraketing Agency",
    feedbacskText: `As the CEO of our marketing agency, I want to express my gratitude and satisfaction with the exceptional work carried out by ${companyName}. Your team has truly demonstrated expertise, professionalism, and dedication in delivering outstanding IT solutions tailored to our marketing needs. This partnership has not only improved our internal processes but has also empowered us to better serve our clients. Thank you for your outstanding contributions to our success.`,
  },
  {
    name: "Anuj Jain",
    designation: "CEO & Founder of Jai Jinendra apliances",
    feedbacskText: `Choosing ${companyName} was one of the best decisions we made for our shop. Their experience help us our unique needs but also exceeded our expectations. They've played a pivotal role in our growth and success. We couldn't be happier with their services!`,
  },
  {
    name: "Dr. Sajid Hussain",
    designation: "Maryam Hospital",
    feedbacskText:
      "I am truly impressed with the IT company's expertise and efficiency in launching our website. The seamless transition to an online platform is crucial for our healthcare practice, and they have executed it flawlessly. The website looks professional, is user-friendly, and meets all our requirements. I believe this collaboration will enhance our patient experience and streamline our operations. Kudos to the entire team!",
  },
  {
    name: "Sagar",
    designation: "CEO of Nearme App",
    feedbacskText:
      `We're thrilled with the social media application and management system developed by ${companyName}. Your team has created a game-changer that has streamlined our social media operations. It's user-friendly, efficient, and has truly elevated our online presence. Thanks for turning our vision into reality!`,
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
                      <p>
                        <q>{value.feedbacskText}</q>
                      </p>

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
