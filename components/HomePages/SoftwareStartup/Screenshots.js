import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Screenshots = () => {
  return (
    <>
      <div className="screenshots-area bg-gradient ptb-100">
        <div className="container">
          <div className="section-title white-color">
            <span className="sub-title">Screenshots</span>
            <h2>
              Easily Customize within <br />
              One Minute
            </h2>
          </div>

          <div className="screenshots-tabs">
            <Tabs>
              <div className="row">
                <div className="col-lg-3 col-sm-4">
                  <TabList>
                    <Tab>
                      <i className="bx bx-data"></i>
                      Budget Overview
                    </Tab>
                    <Tab>
                      <i className="bx bx-add-to-queue"></i>
                      Create & Adjust
                    </Tab>
                    <Tab>
                      <i className="bx bx-file"></i>
                      View Reports
                    </Tab>
                    <Tab>
                      <i className="bx bx-bookmark-plus"></i>
                      Integrations
                    </Tab>
                  </TabList>
                </div>

                <div className="col-lg-9 col-sm-8">
                  <TabPanel>
                    <img
                      src="/images/software/screen1.jpg"
                      alt="screenshots"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    />
                  </TabPanel>

                  <TabPanel>
                    <img
                      src="/images/software/screen2.jpg"
                      alt="screenshots"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    />
                  </TabPanel>

                  <TabPanel>
                    <img
                      src="/images/software/screen3.jpg"
                      alt="screenshots"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    />
                  </TabPanel>

                  <TabPanel>
                    <img
                      src="/images/software/screen4.jpg"
                      alt="screenshots"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    />
                  </TabPanel>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screenshots;
