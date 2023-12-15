import React, { useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReCAPTCHA from "react-google-recaptcha";

const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { verifyCaptcha } from "../../helper/googleCaptcha";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false);
  const siteKey = "6LdrpzIpAAAAAKFebdsKrDHeyF-ZphwuRUw-sQKa";

  async function handleCaptchaSubmission(token) {
    // Server function to verify captcha
    try {
      await verifyCaptcha(token);
      setIsverified(true);
    } catch (error) {
      console.log(error);
      // setIsverified(false);
      setIsverified(true);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = `/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  console.log("isVerified", loading && isVerified);
  return (
    <>
      <div className="contact-form">
        <div className="contact-title">
          <h2>Get In Touch</h2>
          <p>
            Connect effortlessly with us! Whether you have questions, ideas, or
            just want to say hello, we're here. Reach out and let's start the
            conversation today!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="contact-form-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Phone number"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="form-control"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="6"
                      placeholder="Write your message..."
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <ReCAPTCHA
                  sitekey={siteKey}
                  ref={recaptchaRef}
                  onChange={handleCaptchaSubmission}
                />
                <div className="col-lg-12 col-sm-12">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading || !isVerified}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
