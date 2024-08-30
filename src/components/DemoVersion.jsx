import "./style/demoSection.css";
import ImageThree from "../assets/ImageFive.png";
const demoSection = () => {
  return (
    <section id="demo" className="demo-section section">
      <div className="demo-container">
        <div className="text">
          <h2 className="demo-heading">Explore Our Demo Version</h2>
          <p className="demo-paragraph">
            We invite you to experience the Hospitalline Application through our
            demo version. You can choose to download the desktop demo
            application or visit the web version to get a taste of what we
            offer.
          </p>
          <p className="demo-paragraph">
            The demo version provides a preview of the full application. While
            you can explore many features, please note that some functionalities
            are restricted in the demo. To unlock the complete set of features,
            we encourage you to try the full version of the application.
          </p>
          <p className="demo-paragraph">
            Click the buttons below to start using the demo. We appreciate your
            interest in Hospitalline and look forward to assisting you!
          </p>
          <span className="demoButtons">
            <button>Download Demo Application</button>
            <button>Access Web Demo</button>
          </span>
        </div>
        <div className="image">
          <img src={ImageThree} />
        </div>
      </div>
    </section>
  );
};

export default demoSection;
