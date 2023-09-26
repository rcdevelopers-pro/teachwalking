import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// UX Process
const UXProcessData = [
  {
    image: "/images/case-studies/studie1.jpg",
    shapeImage: "/images/case-studies/studie-shape1.png",
    title: "Designing a better cinema experience",
    category: "UX Process",
    viewDetails: "/portfolio-details",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    shapeImage: "/images/case-studies/studie-shape2.png",
    title: "Building design process within teams",
    category: "UX Process",
    viewDetails: "/portfolio-details",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/studie3.jpg",
    shapeImage: "/images/case-studies/studie-shape3.png",
    title: "How intercom brings play into their design process",
    category: "UX Process",
    viewDetails: "/portfolio-details",
    aosDelay: "300",
  },
  {
    image: "/images/case-studies/studie4.jpg",
    shapeImage: "/images/case-studies/studie-shape4.png",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "UX Process",
    viewDetails: "/portfolio-details",
    aosDelay: "400",
  },
  {
    image: "/images/case-studies/studie5.jpg",
    shapeImage: "/images/case-studies/studie-shape5.png",
    title: "Examples of different types of sprints",
    category: "UX Process",
    viewDetails: "/portfolio-details",
    aosDelay: "500",
  },
  {
    image: "/images/case-studies/studie6.jpg",
    shapeImage: "/images/case-studies/studie-shape6.png",
    title: "Redesigning the New York times app",
    category: "UX Process",
    viewDetails: "/portfolio-details",
    aosDelay: "600",
  },
];

// User Experience
const UserExperienceData = [
  {
    image: "/images/case-studies/studie1.jpg",
    shapeImage: "/images/case-studies/studie-shape1.png",
    title: "Designing a better cinema experience",
    category: "User Experience",
    viewDetails: "/portfolio-details",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    shapeImage: "/images/case-studies/studie-shape2.png",
    title: "Building design process within teams",
    category: "User Experience",
    viewDetails: "/portfolio-details",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/studie3.jpg",
    shapeImage: "/images/case-studies/studie-shape3.png",
    title: "How intercom brings play into their design process",
    category: "User Experience",
    viewDetails: "/portfolio-details",
    aosDelay: "300",
  },
  {
    image: "/images/case-studies/studie4.jpg",
    shapeImage: "/images/case-studies/studie-shape4.png",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "User Experience",
    viewDetails: "/portfolio-details",
    aosDelay: "400",
  },
  {
    image: "/images/case-studies/studie5.jpg",
    shapeImage: "/images/case-studies/studie-shape5.png",
    title: "Examples of different types of sprints",
    category: "User Experience",
    viewDetails: "/portfolio-details",
    aosDelay: "500",
  },
  {
    image: "/images/case-studies/studie6.jpg",
    shapeImage: "/images/case-studies/studie-shape6.png",
    title: "Redesigning the New York times app",
    category: "User Experience",
    viewDetails: "/portfolio-details",
    aosDelay: "600",
  },
];

// User Interface
const UserInterfaceData = [
  {
    image: "/images/case-studies/studie1.jpg",
    shapeImage: "/images/case-studies/studie-shape1.png",
    title: "Designing a better cinema experience",
    category: "User Interface",
    viewDetails: "/portfolio-details",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    shapeImage: "/images/case-studies/studie-shape2.png",
    title: "Building design process within teams",
    category: "User Interface",
    viewDetails: "/portfolio-details",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/studie3.jpg",
    shapeImage: "/images/case-studies/studie-shape3.png",
    title: "How intercom brings play into their design process",
    category: "User Interface",
    viewDetails: "/portfolio-details",
    aosDelay: "300",
  },
  {
    image: "/images/case-studies/studie4.jpg",
    shapeImage: "/images/case-studies/studie-shape4.png",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "User Interface",
    viewDetails: "/portfolio-details",
    aosDelay: "400",
  },
  {
    image: "/images/case-studies/studie5.jpg",
    shapeImage: "/images/case-studies/studie-shape5.png",
    title: "Examples of different types of sprints",
    category: "User Interface",
    viewDetails: "/portfolio-details",
    aosDelay: "500",
  },
  {
    image: "/images/case-studies/studie6.jpg",
    shapeImage: "/images/case-studies/studie-shape6.png",
    title: "Redesigning the New York times app",
    category: "User Interface",
    viewDetails: "/portfolio-details",
    aosDelay: "600",
  },
];

// Brand
const BrandData = [
  {
    image: "/images/case-studies/studie1.jpg",
    shapeImage: "/images/case-studies/studie-shape1.png",
    title: "Designing a better cinema experience",
    category: "Brand",
    viewDetails: "/portfolio-details",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    shapeImage: "/images/case-studies/studie-shape2.png",
    title: "Building design process within teams",
    category: "Brand",
    viewDetails: "/portfolio-details",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/studie3.jpg",
    shapeImage: "/images/case-studies/studie-shape3.png",
    title: "How intercom brings play into their design process",
    category: "Brand",
    viewDetails: "/portfolio-details",
    aosDelay: "300",
  },
  {
    image: "/images/case-studies/studie4.jpg",
    shapeImage: "/images/case-studies/studie-shape4.png",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "Brand",
    viewDetails: "/portfolio-details",
    aosDelay: "400",
  },
  {
    image: "/images/case-studies/studie5.jpg",
    shapeImage: "/images/case-studies/studie-shape5.png",
    title: "Examples of different types of sprints",
    category: "Brand",
    viewDetails: "/portfolio-details",
    aosDelay: "500",
  },
  {
    image: "/images/case-studies/studie6.jpg",
    shapeImage: "/images/case-studies/studie-shape6.png",
    title: "Redesigning the New York times app",
    category: "Brand",
    viewDetails: "/portfolio-details",
    aosDelay: "600",
  },
];

// Product
const ProductData = [
  {
    image: "/images/case-studies/studie1.jpg",
    shapeImage: "/images/case-studies/studie-shape1.png",
    title: "Designing a better cinema experience",
    category: "Product",
    viewDetails: "/portfolio-details",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    shapeImage: "/images/case-studies/studie-shape2.png",
    title: "Building design process within teams",
    category: "Product",
    viewDetails: "/portfolio-details",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/studie3.jpg",
    shapeImage: "/images/case-studies/studie-shape3.png",
    title: "How intercom brings play into their design process",
    category: "Product",
    viewDetails: "/portfolio-details",
    aosDelay: "300",
  },
  {
    image: "/images/case-studies/studie4.jpg",
    shapeImage: "/images/case-studies/studie-shape4.png",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "Product",
    viewDetails: "/portfolio-details",
    aosDelay: "400",
  },
  {
    image: "/images/case-studies/studie5.jpg",
    shapeImage: "/images/case-studies/studie-shape5.png",
    title: "Examples of different types of sprints",
    category: "Product",
    viewDetails: "/portfolio-details",
    aosDelay: "500",
  },
  {
    image: "/images/case-studies/studie6.jpg",
    shapeImage: "/images/case-studies/studie-shape6.png",
    title: "Redesigning the New York times app",
    category: "Product",
    viewDetails: "/portfolio-details",
    aosDelay: "600",
  },
];

const CaseStudies = () => {
  return (
    <>
      <section className="case-studies-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Case Studies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="case-studies-tabs">
            <Tabs>
              <TabList>
                <Tab>UX Process</Tab>
                <Tab>User Experience</Tab>
                <Tab>User Interface</Tab>
                <Tab>Brand</Tab>
                <Tab>Product</Tab>
              </TabList>

              <TabPanel>
                <div className="row justify-content-center">
                  {UXProcessData &&
                    UXProcessData.slice(0, 6).map((value, i) => (
                      <div className="col-lg-4 col-md-6 mt-40" key={i}>
                        <div
                          className="single-case-studies"
                          style={{
                            backgroundImage: `url(${value.image})`,
                          }}
                          data-aos="fade-in"
                          data-aos-duration="1200"
                          data-aos-delay={value.aosDelay}
                        >
                          <div className="content">
                            <span>
                              <Link href={value.viewDetails}>
                                {value.category}
                              </Link>
                            </span>
                            <h3>
                              <Link href={value.viewDetails}>
                                {value.title}
                              </Link>
                            </h3>
                          </div>

                          <Link
                            href={value.viewDetails}
                            className="btn btn-primary"
                          >
                            View Case Study
                          </Link>

                          <div className="shape">
                            <img src={value.shapeImage} alt="logo" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  {UserExperienceData &&
                    UserExperienceData.slice(0, 6).map((value, i) => (
                      <div className="col-lg-4 col-md-6 mt-40" key={i}>
                        <div
                          className="single-case-studies"
                          style={{
                            backgroundImage: `url(${value.image})`,
                          }}
                          data-aos="fade-in"
                          data-aos-duration="1200"
                          data-aos-delay={value.aosDelay}
                        >
                          <div className="content">
                            <span>
                              <Link href={value.viewDetails}>
                                {value.category}
                              </Link>
                            </span>
                            <h3>
                              <Link href={value.viewDetails}>
                                {value.title}
                              </Link>
                            </h3>
                          </div>

                          <Link
                            href={value.viewDetails}
                            className="btn btn-primary"
                          >
                            View Case Study
                          </Link>

                          <div className="shape">
                            <img src={value.shapeImage} alt="logo" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  {UserInterfaceData &&
                    UserInterfaceData.slice(0, 6).map((value, i) => (
                      <div className="col-lg-4 col-md-6 mt-40" key={i}>
                        <div
                          className="single-case-studies"
                          style={{
                            backgroundImage: `url(${value.image})`,
                          }}
                          data-aos="fade-in"
                          data-aos-duration="1200"
                          data-aos-delay={value.aosDelay}
                        >
                          <div className="content">
                            <span>
                              <Link href={value.viewDetails}>
                                {value.category}
                              </Link>
                            </span>
                            <h3>
                              <Link href={value.viewDetails}>
                                {value.title}
                              </Link>
                            </h3>
                          </div>

                          <Link
                            href={value.viewDetails}
                            className="btn btn-primary"
                          >
                            View Case Study
                          </Link>

                          <div className="shape">
                            <img src={value.shapeImage} alt="logo" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  {BrandData &&
                    BrandData.slice(0, 6).map((value, i) => (
                      <div className="col-lg-4 col-md-6 mt-40" key={i}>
                        <div
                          className="single-case-studies"
                          style={{
                            backgroundImage: `url(${value.image})`,
                          }}
                          data-aos="fade-in"
                          data-aos-duration="1200"
                          data-aos-delay={value.aosDelay}
                        >
                          <div className="content">
                            <span>
                              <Link href={value.viewDetails}>
                                {value.category}
                              </Link>
                            </span>
                            <h3>
                              <Link href={value.viewDetails}>
                                {value.title}
                              </Link>
                            </h3>
                          </div>

                          <Link
                            href={value.viewDetails}
                            className="btn btn-primary"
                          >
                            View Case Study
                          </Link>

                          <div className="shape">
                            <img src={value.shapeImage} alt="logo" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  {ProductData &&
                    ProductData.slice(0, 6).map((value, i) => (
                      <div className="col-lg-4 col-md-6 mt-40" key={i}>
                        <div
                          className="single-case-studies"
                          style={{
                            backgroundImage: `url(${value.image})`,
                          }}
                          data-aos="fade-in"
                          data-aos-duration="1200"
                          data-aos-delay={value.aosDelay}
                        >
                          <div className="content">
                            <span>
                              <Link href={value.viewDetails}>
                                {value.category}
                              </Link>
                            </span>
                            <h3>
                              <Link href={value.viewDetails}>
                                {value.title}
                              </Link>
                            </h3>
                          </div>

                          <Link
                            href={value.viewDetails}
                            className="btn btn-primary"
                          >
                            View Case Study
                          </Link>

                          <div className="shape">
                            <img src={value.shapeImage} alt="logo" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
