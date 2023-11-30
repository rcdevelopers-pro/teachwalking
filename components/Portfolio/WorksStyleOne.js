import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { caseStudyData } from "../../utils/portfolioData";

// const ourWorksData = [
//   {
//     image: "/images/works/work1.jpg",
//     title: "Designing a better cinema experience",
//     category: "Development",
//     viewDetails: "/portfolio-details",
//   },
//   {
//     image: "/images/works/work2.jpg",
//     title: "Building design process within teams",
//     category: "Web Design",
//     viewDetails: "/portfolio-details",
//   },
//   {
//     image: "/images/works/work3.jpg",
//     title: "How intercom brings play into their design process",
//     category: "eCommerce",
//     viewDetails: "/portfolio-details",
//   },
//   {
//     image: "/images/works/work4.jpg",
//     title: "Stuck with to-do list, I created a new app for myself",
//     category: "Email Marketing",
//     viewDetails: "/portfolio-details",
//   },
//   {
//     image: "/images/works/work5.jpg",
//     title: "Examples of different types of sprints",
//     category: "Marketing & Reporting",
//     viewDetails: "/portfolio-details",
//   },
//   {
//     image: "/images/works/work6.jpg",
//     title: "Redesigning the New York times app",
//     category: "App Development",
//     viewDetails: "/portfolio-details",
//   },
//   {
//     image: "/images/works/work7.jpg",
//     title: "Design the Web, Mobile, and eCommerce",
//     category: "SEO Optimization",
//     viewDetails: "/portfolio-details",
//   },
//   {
//     image: "/images/works/work8.jpg",
//     title: "Redesigning the New York times app",
//     category: "Digital Marketing",
//     viewDetails: "/portfolio-details",
//   },
//   {
//     image: "/images/works/work9.jpg",
//     title: "We provide any type of app development",
//     category: "App Development",
//     viewDetails: "/portfolio-details",
//   },
//   {
//     image: "/images/works/work10.jpg",
//     title: "We provide any type of marketing support",
//     category: "SEO Marketing",
//     viewDetails: "/portfolio-details",
//   },
//   {
//     image: "/images/works/work11.jpg",
//     title: "We provide any type of Email Marketing",
//     category: "Email Marketing",
//     viewDetails: "/portfolio-details",
//   },
//   {
//     image: "/images/works/work12.jpg",
//     title: "We provide any type of Marketing & Reporting",
//     category: "Marketing & Reporting",
//     viewDetails: "/portfolio-details",
//   },
// ];

const WorksStyleOne = () => {
  return (
    <>
      <div className="case-studies-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Our Recent Projects</h2>
            <p>
              Revolutionary project transforming industries, optimizing
              efficiency, and exceeding expectations with cutting-edge
              technology and innovative solutions. Unleashing tomorrow's
              possibilities today.
            </p>
          </div>

          <Swiper
            cssMode={true}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1800: {
                slidesPerView: 5,
              },
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="work-slides"
          >
            {caseStudyData &&
              caseStudyData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="work-card">
                    <img src={value.image} alt="image" />

                    <div className="content text-center">
                      <span>
                        <Link href={`${value.viewDetails}/${value.id}`}>
                          {value.category}
                        </Link>
                      </span>

                      <h3>
                        <Link href={`${value.viewDetails}/${value.id}`}>
                          {value.title}
                        </Link>
                      </h3>

                      <Link
                        href={`${value.viewDetails}/${value.id}`}
                        className="custom-btn"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default WorksStyleOne;
