import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import RenderHtml from "../Common/RenderHtml";

const PortfolioDetailsContent = ({ details }) => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox toggler={toggler} sources={["https://youtu.be/AmztjuhvlW"]} />

      <div className="portfolio-details ptb-100">
        <div className="container">
          <div className="pd-preview-img">
            <img src="/images/portfolio-details.jpg" alt="Portfolio Img" />

            <div className="video-box">
              <div onClick={() => setToggler(!toggler)} className="video-btn">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
          </div>

          <div className="service-details-info">
            <div className="single-info-box">
              <h4>Client</h4>
              <span>{details?.client}</span>
            </div>

            <div className="single-info-box">
              <h4>Category</h4>
              <span>{details?.category}</span>
            </div>

            <div className="single-info-box">
              <h4>Date</h4>
              <span>{details?.date}</span>
            </div>

            <div className="single-info-box">
              <h4>Share</h4>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="single-info-box">
              <a href="#" className="default-btn" target="_blank">
                Live Preview
              </a>
            </div>
          </div>

          <div className="portfolio-desc style-2">
            <RenderHtml content={details?.content} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsContent;
