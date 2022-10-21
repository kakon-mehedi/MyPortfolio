import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

import "./contact-form.css";

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const form = useRef();

  const showEmailSendingStatus = (status) => {
    if (status) {
      setStatusMsg("Message sent successfully!");
    } else {
      setStatusMsg("Sending Failed!");
    }

    setTimeout(() => {
      setStatusMsg("");
    }, 3000);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAIL_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_EMAIL_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          showEmailSendingStatus(true);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          showEmailSendingStatus(false);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="contact-me-section">
      <h1 className="contact-title">Contact Me</h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="form-input"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="form-input"
        />
        <textarea
          placeholder="Message"
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <button type="submit" className="contact-submit-btn">
          Send Message
        </button>
        <h1 className="status-msg">
          {isSending ? "Sending..." : ""} {statusMsg}
        </h1>
      </form>
    </div>
  );
}

export default ContactForm;
