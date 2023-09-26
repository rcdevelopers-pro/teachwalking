import React from "react";

const NewsletterForm = () => {
  return (
    <>
      <div className="subscribe-wrap-area with-black-color">
        <div className="container">
          <div className="subscribe-wrap-inner-box">
            <div className="subscribe-content">
              <h2>Join Our Newsletter</h2>

              <form 
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Enter your email"
                  name="EMAIL"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>

            <div className="subscribe-shape-1">
              <img
                src="/images/cryptocurrency-home/subscribe/shape-1.png"
                alt="image"
              />
            </div>
            <div className="subscribe-shape-2">
              <img
                src="/images/cryptocurrency-home/subscribe/shape-2.png"
                alt="image"
              />
            </div>
            <div className="subscribe-shape-3">
              <img
                src="/images/cryptocurrency-home/subscribe/shape-3.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
