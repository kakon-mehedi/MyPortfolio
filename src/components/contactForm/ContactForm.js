import React from "react";
import "./contact-form.css";

function ContactForm() {
  return (
    <div id="contact" className="contact-me-section">
      <h1 className="contact-title">Contact Me</h1>
      <form action="" className="contact-form">
        <input type="text" placeholder="Your Name" className="form-input" />
        <input type="email" placeholder="Your Email" className="form-input" />
        <textarea
          placeholder="Message"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <button type="submit" className="contact-submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
