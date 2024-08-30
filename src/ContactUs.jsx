import ImageFour from "../assets/ImageFour.png";
import "./style/ContactUs.css";
const ContactUs = () => {
  return (
    <div id="contact" className="contactUs">
      <div className="text">
        <h2>Get In Touch With Us</h2>
        <p>And Start Managing Your Time Effeciently & Data Orgnized</p>
        <form className="contactForm">
          <h2 className="headingForm">How Can We Help You</h2>
          <div className="inputHere">
            <label htmlFor="name">Your Name</label>
            <input formAction="name" type="text" placeholder="Your Name" />
          </div>
          <div className="inputHere">
            <label htmlFor="name">Your Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputHere">
            <label htmlFor="name">Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <div className="inputHere">
            <label htmlFor="name">Your Massage</label>
            <textarea placeholder="Message" />
          </div>
          <div className="Button inputHere">
            <button className="submit-btn">Submit</button>
          </div>
        </form>
        <div className="chatBubble">
          <h5>Here is Our Contact Information</h5>
          <p>
            Our Email: <span> hospitallineX@gmail.com</span>
          </p>
          <p>
            Our WhatsApp: <span> +92-32-49873088</span>
          </p>
          <p>
            Our Phone: <span> +92-32-49873088</span>
          </p>
        </div>
      </div>
      <div className="image">
        <img src={ImageFour} />
      </div>
    </div>
  );
};

export default ContactUs;
