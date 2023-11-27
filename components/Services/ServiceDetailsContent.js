import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import RenderHtml from "../Common/RenderHtml";

const ServiceDetailsContent = ({ details }) => {
  const [toggler, setToggler] = useState(false);
  const { content, rightSideContent } = details || {};
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-image">
                <img src="/images/services/single-service.jpg" alt="image" />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <RenderHtml content={content} />
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3>Our Working Process</h3>
                <RenderHtml content={rightSideContent} />
                {/* <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </li>
                  <li>
                    Creative Team Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem.
                  </li>
                  <li>
                    Branding But I must explain to you how all this mistaken
                    idea of denouncing.
                  </li>
                  <li>
                    Clean Code At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui.
                  </li>
                  <li>
                    UX/UI Friendly On the other hand, we denounce with righteous
                    indignation.
                  </li>
                  <li>
                    24/7 Support There are many variations of passages of Lorem
                    Ipsum available.
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
