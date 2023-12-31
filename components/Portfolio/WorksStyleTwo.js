import React from "react";
import Link from "next/link";
import { caseStudyData } from "../../utils/portfolioData";

// const ourWorksData = [
//   {
//     image: "/images/works/work1.jpg",
//     title: "Designing a better cinema experience",
//     category: "Development",
//     viewDetails: "/portfolio-details",
//     aosDelay: "100",
//   },
//   {
//     image: "/images/works/work2.jpg",
//     title: "Building design process within teams",
//     category: "Web Design",
//     viewDetails: "/portfolio-details",
//     aosDelay: "200",
//   },
//   {
//     image: "/images/works/work3.jpg",
//     title: "How intercom brings play into their design process",
//     category: "eCommerce",
//     viewDetails: "/portfolio-details",
//     aosDelay: "300",
//   },
//   {
//     image: "/images/works/work4.jpg",
//     title: "Stuck with to-do list, I created a new app for myself",
//     category: "Email Marketing",
//     viewDetails: "/portfolio-details",
//     aosDelay: "400",
//   },
//   {
//     image: "/images/works/work5.jpg",
//     title: "Examples of different types of sprints",
//     category: "Marketing & Reporting",
//     viewDetails: "/portfolio-details",
//     aosDelay: "500",
//   },
//   {
//     image: "/images/works/work6.jpg",
//     title: "Redesigning the New York times app",
//     category: "App Development",
//     viewDetails: "/portfolio-details",
//     aosDelay: "600",
//   },
// ];

const WorksStyleTwo = () => {
  return (
    <>
      <div className="case-studies-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Our All Projects</h2>
            <p>
              Innovative projects delivering cutting-edge solutions, optimizing
              efficiency, and fostering growth through strategic implementation
              and advanced technologies.
            </p>
          </div>

          <div className="row justify-content-center">
            {caseStudyData &&
              caseStudyData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="work-card">
                    <img src={value.image} alt="image" />

                    <div className="content">
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
                </div>
              ))}
          </div>

          <div className="view-more-work">
            <Link href="/portfolio" className="btn btn-primary">
              <i className="fa-solid fa-list-check"></i> View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksStyleTwo;
