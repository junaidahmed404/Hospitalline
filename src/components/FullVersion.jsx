import "./style/FullVersion.css";
import ImageSix from "../assets/ImageSix.png";
const FullSection = () => {
  return (
    <section id="Full" className="Full-section section">
      <div className="Full-container">
        <div className="imageFull">
          <img src={ImageSix} />
        </div>
        <div className="text">
          <h2 className="Full-heading">
            Unlock the Full Potential with Hospitalline
          </h2>
          <p className="Full-paragraph">
            Experience the complete power of Hospitalline by upgrading to the
            full version. While our demo provides a valuable preview, the full
            version unlocks the full suite of features and functionalities
            designed to elevate your operations.
          </p>
          <p className="Full-paragraph">
            We’re excited to offer you a comprehensive manual for our
            application. Simply click the button below to download it. This
            manual provides detailed descriptions of every feature, along with
            helpful screenshots to ensure you fully understand how to make the
            most of our application. We believe this resource will offer
            valuable insights and help you appreciate the full capabilities of
            our service. Should you have any questions or need further
            assistance, please don’t hesitate to reach out.
          </p>
          <p className="Full-paragraph">
            Elevate your experience and maximize the benefits of Hospitalline by
            moving to the full version. Click the link below to explore pricing
            options and secure your subscription today. Our team is here to help
            you transition smoothly and ensure you get the most out of our
            application.
          </p>
          <div className="buttons">
            <button className="Button">Select Your Plan</button>
            <button className="Button">Download Manuall</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullSection;
