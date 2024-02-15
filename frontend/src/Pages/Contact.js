import React from "react";
import { Container } from "reactstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <section>
      <Container>
        <div className="contact">
          <div className="content">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate nihil reprehenderit necessitatibus neque iusto cum?
              Corrupti, debitis ipsam commodi ea ullam excepturi! Provident
              veniam asperiores inventore sed, debitis neque ipsa!
            </p>
          </div>
          <div className="container1">
            <div className="contactInfo">
              <div className="box">
                <div className="icon1">
                  <i className="ri-map-pin-line"></i>
                </div>
                <div className="text">
                  <h3>Address </h3>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
                    elit.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon1">
                  <i class="ri-phone-line"></i>
                </div>
                <div className="text">
                  <h3>Phone </h3>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
                    elit.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon1">
                  <i className="ri-mail-line"></i>
                </div>
                <div className="text">
                  <h3>Email </h3>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
                    elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="contactForm">
              <form action="">
                <h2>Send Message</h2>
                <div className="inputBox">
                  <input type="text" name="" required />
                  <span>Full Name</span>
                </div>
                <div className="inputBox">
                  <input type="text" name="" required />
                  <span>Email</span>
                </div>
                <div className="inputBox">
                  <textarea required></textarea>
                  <span>Type Your Message...</span>
                </div>
                <div className="inputBox">
                  <input type="submit" name="" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
    
      </Container>
    </section>
  );
};

export default Contact;
