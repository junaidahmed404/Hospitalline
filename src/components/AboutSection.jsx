import "./style/AboutSection.css";
import ImageTwo from "../assets/ImageTwo.png";
const AboutSection = () => {
  return (
    <section id="about" className="about-section section">
      <div className="about-container">
        <div className="image">
          <img src={ImageTwo} />
        </div>
        <div className="text">
          <h2 className="about-heading">About Hospitalline</h2>
          <p className="about-paragraph">
            Hospitalline was born out of a need for a more efficient and secure
            way to manage Clinical Data, especially in environments where
            reliable internet access is not guaranteed. Our mission is to
            empower healthcare providers with a robust, offline solution that
            simplifies administrative tasks while ensuring data security and
            accessibility.
          </p>
          <p className="about-paragraph">
            Designed with healthcare professionals in mind, Hospitalline focuses
            on providing a seamless user experience, allowing you to concentrate
            on what truly matters—patient care. Whether you're a small clinic or
            a larger healthcare facility, Hospitalline adapts to your needs,
            helping you streamline workflows, reduce errors, and enhance the
            overall efficiency of your operations.
          </p>
          <p className="about-paragraph">
            At Hospitalline, we believe in the power of simplicity, security,
            and accessibility. Our commitment is to continually innovate and
            improve, ensuring that you have the tools you need to manage your
            hospital with confidence.
          </p>
          <p>
            I am Junaid Ahmed The Founder Of Hospitalline | Hospital Management
            Syatem, To Read About Me Please <a href="#">Click Here</a> To Visit
            My Personal Portfolio (Under Development)
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
