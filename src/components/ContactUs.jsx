import ImageFour from "../assets/ImageFour.png";
import "./style/ContactUs.css";
import Swal from "sweetalert2";
import React, { useState } from "react";

const ContactUs = () => {
  const initialMessage = "Message From Hospitalline Website To Say = ";
  const [message, setMessage] = useState(initialMessage);

  const handleMessageChange = (e) => {
    const userInput = e.target.value;
    if (userInput.startsWith(initialMessage)) {
      setMessage(userInput);
    } else {
      setMessage(initialMessage);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bb50bf07-1d75-4d34-8728-b1acfceedbfd");
    formData.set("message", message); // Ensure the fixed message is sent

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message Sent Successfully!",
        icon: "success",
      });
      setMessage(initialMessage); // Reset message state after submission
      event.target.reset(); // Clear the rest of the form after successful submission
    }
  };

  return (
    <div id="contact" className="contactUs">
      <div className="text">
        <h2>Get In Touch With Us</h2>
        <p>And Start Managing Your Time Efficiently & Data Organized</p>
        <p>
          We would love to hear from you. Please fill out the form below and
          we'll get back to you as soon as possible.
        </p>
        <form className="contactForm" onSubmit={onSubmit}>
          <h2 className="headingForm">How Can We Help You</h2>
          <div className="inputHere">
            <label htmlFor="name">Your Name</label>
            <input
              formAction="name"
              type="text"
              placeholder="Your Name"
              name="name"
            />
          </div>
          <div className="inputHere">
            <label htmlFor="email">Your Email Address</label>
            <input
              type="email"
              placeholder="Your Email Address"
              name="email"
            />
          </div>
          <div className="inputHere">
            <label htmlFor="subject">Subject</label>
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          <div className="inputHere">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              value={message}
              onChange={handleMessageChange}
              placeholder="Message"
            />
          </div>
          <div className="Button inputHere">
            <button className="submit-btn">Submit</button>
          </div>
        </form>
        <div className="chatBubble">
          <h5>Here is Our Contact Information</h5>
          <p>
            Our Email: <span>hospitallineX@gmail.com</span>
          </p>
          <p>
            Our WhatsApp: <span>+92-32-49873088</span>
          </p>
          <p>
            Our Phone: <span>+92-32-49873088</span>
          </p>
        </div>
      </div>
      <div className="image">
        <img src={ImageFour} alt="Contact Us" />
      </div>
    </div>
  );
};

export default ContactUs;
