import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const featuredServicesData = [
  {
    iconName: "pe-7s-filter",
    // 🚀
    title: " Innovative Technology Solutions",
    bgText: "Ia",
    shortText:
      "Embark on a journey of technological advancement with TechWalking. Our team of experts is dedicated to crafting and implementing state-of-the-art solutions that cater to your unique needs. From software development and IT consulting to cloud services and cybersecurity, we cover the entire spectrum of modern technology.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-display1",
    // 💡
    title: "Strategic IT Consulting",
    bgText: "Ba",
    shortText:
      "Maximize your business potential with our strategic IT consulting services. TechWalking brings a wealth of expertise to the table, assisting you in making informed decisions that drive growth and efficiency. We understand the dynamic nature of the tech landscape and provide tailored advice to keep your business ahead of the curve.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-plugin",
    // 🌐
    title: " Digital Transformation Services",
    bgText: "Id",
    shortText:
      "Stay ahead in the digital age with our comprehensive digital transformation services. TechWalking empowers businesses to evolve, adapt, and thrive in the ever-changing technological landscape. Whether you're looking to streamline operations, enhance customer experiences, or optimize processes, we've got you covered.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-arc",
    // 🔐
    title: "Robust Cybersecurity Solutions",
    bgText: "Ia",
    shortText:
      "Security is paramount in the digital era, and TechWalking is your trusted partner in safeguarding your digital assets. Our cybersecurity solutions are designed to protect your data and systems from evolving threats, ensuring that your business remains resilient in the face of cybersecurity challenges.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-diamond",
    // 🌈
    title: " User-Centric Design",
    bgText: "Vd",
    shortText:
      "TechWalking understands the importance of user experience. Our design philosophy revolves around creating intuitive and engaging interfaces that resonate with your audience. From web and mobile app design to user experience optimization, we prioritize the user journey at every step.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-helm",
    // 🤝
    title: "Client-Centric Approach",
    bgText: "Cs",
    shortText:
      "TechWalking embraces a client-centric approach, prioritizing your unique needs. We stride alongside you, tailoring innovative solutions and delivering unparalleled service. Your satisfaction is our compass, guiding us to elevate your tech experience. Trust TechWalking for personalized, cutting-edge solutions that truly walk with you.",
    viewDetails: "/service-details",
  },
];

const FeaturedServices = () => {
  return (
    <>
      <section className="featured-services-area">
        <div className="container">
          <div className="row">
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
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="featured-services-slides"
            >
              {featuredServicesData &&
                featuredServicesData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="col-lg-12">
                      <div className="featured-services-box">
                        <div className="icon">
                          <i className={value.iconName}></i>
                        </div>

                        <h3>
                          {/* <Link href={value.viewDetails}>{value.title}</Link> */}
                          {value.title}
                        </h3>

                        <p>{value.shortText}</p>

                        {/* <Link
                          href={value.viewDetails}
                          className="read-more-btn"
                        >
                          Read More
                        </Link> */}

                        <div className="back-text">{value.bgText}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedServices;
