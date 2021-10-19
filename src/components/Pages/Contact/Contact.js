import React from "react";
import aboutImg from "./../../../images/contact-img/contactImg.svg";

const Contact = () => {
  return (
    <section id="contactUs" className="py-4 py-lg-5 position-relative d-flex ">
      <div className="container py-4 py-lg-5 d-flex">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="position-relative fs-35 fw-400 mb-5">
              <span className="title-border mb-2 mb-lg-4 mt-0"></span>
              <h1 className="fw-bold">Contact US</h1>
              <hr className="text-danger" />
            </h2>
          </div>
          <div className="col-md-7 mb-4 mb-md-0 ">
            <div className="card card-body p-4">
              <div className="panel panel-default">
                <div className="panel-body">
                  <form id="contact_us">
                    <input
                      type="hidden"
                      name="csrfmiddlewaretoken"
                      value="80kY54Wb9Ij5lw6yE60XMuGIIMK5uZXDCPKpcGcw9akR39mLWOB1P7ZFMMdvN12w"
                    />
                    <div className="contact-body">
                      <div className="row">
                        <div className="form-group col-12">
                          <label>Your Name</label>
                          <input
                            name="name"
                            className="form-control"
                            type="text"
                            placeholder="Enter Your name"
                            required
                          />
                        </div>
                        <div className="form-group col-12">
                          <label>Your email</label>
                          <input
                            name="email"
                            className="form-control"
                            type="email"
                            placeholder="Enter Your email"
                            required
                          />
                        </div>
                        <div className="form-group col-12">
                          <label>Phone Number</label>
                          <input
                            className="form-control"
                            type="text"
                            name="phone"
                            placeholder="Enter Your Phone number"
                            required
                          />
                        </div>
                        <div className="form-group col-12">
                          <label>Your Subject</label>
                          <input
                            name="subject"
                            className="form-control"
                            type="text"
                            placeholder="Enter Your Subject"
                          />
                        </div>
                        <div className="form-group col-12">
                          <label>Your Message</label>
                          <textarea
                            name="message"
                            className="form-control"
                            rows="5"
                            placeholder="Enter Your Message Here.."
                          ></textarea>
                        </div>
                      </div>
                      <div className="send-btn">
                        <div className="custom-control custom-checkbox"></div>
                        <button className="btn fw-bold text-white btn-info my-5">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
            <img src={aboutImg} alt="" width="400px" className="p-5 text-end" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
