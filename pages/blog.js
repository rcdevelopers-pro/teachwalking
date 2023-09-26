import React from "react";
import Navbar from "../components/Layouts/NavbarSecondary";
import PageBanner from "../components/Common/PageBanner";
import BlogGridThree from "../components/Blog/BlogGridThree";
import Footer from "../components/Layouts/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="The Tech Walking Blog"
        BGImage="/images/page-banner3.jpg"
      />

      <BlogGridThree />

      <Footer />
    </>
  );
};

export default Blog;
