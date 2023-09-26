import React from "react";

const AppDownload = () => {
  return (
    <>
      <div className="app-download-area overflow-hidden pb-100">
        <div className="container">
          <div className="app-download-inner bg-gray">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="app-download-content">
                  <span 
                    className="app-sub-title"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    DOWNLOAD APP
                  </span>

                  <h2
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    Let's Get Your Free Copy From Apple and Play Store
                  </h2>

                  <p
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    Instant free download from store Cloud based storage for
                    your data backup just log in with your mail account from
                    play store and using whatever you want for your business
                    purpose orem ipsum dummy text.
                  </p>

                  <div 
                    className="btn-box"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <a
                      href="https://play.google.com/store/apps"
                      className="playstore-btn"
                      target="_blank"
                    >
                      <img src="/images/app/play-store.png" alt="image" />
                      Get It On
                      <span>Google Play</span>
                    </a>
                    <a
                      href="https://www.apple.com/app-store/"
                      className="applestore-btn"
                      target="_blank"
                    >
                      <img src="/images/app/apple-store.png" alt="image" />
                      Download on the
                      <span>Apple Store</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div
                  className="app-download-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/images/app/download-app.png" alt="app-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
