import "./style/HomeSection.css";
import ImageOne from "../assets/Logo.png";
const HomeSection = () => {
  return (
    <div id="home" className="HomeSection section">
      <div className="Intro">
        <h1>Hospitalline</h1>
        <p className="tagLine">Your Time & Data Managed in Line</p>
      </div>
      <div className="contectInSection">
        <div className="sectionOne">
          <div className="text">
            <span>
              Hospitalline is an intuitive and offline hospital management
              application designed to simplify your administrative tasks. It
              offers a user-friendly interface that allows you to efficiently
              manage your data and operations. The application securely stores
              all your information in your local storage, ensuring your data
              remains safe and easily accessible. With Hospitalline, you can
              effortlessly back up and restore your data, giving you peace of
              mind.
            </span>
            <span>Some of the standout features include:</span>
            <ul>
              <li>
                Invoice Generation: Automatically generate detailed invoices for
                your patients, streamlining your billing process.
              </li>
              <li>
                Electronic Prescription Printing: Create and print prescriptions
                electronically, saving time and reducing errors.
              </li>
              <li>
                Medication Management: Keep a comprehensive record of each
                patient's medication history, ensuring accurate and up-to-date
                information.
              </li>
              <li>
                Patient Profiles: Store and access all patient data, including
                appointment history, medical records, and personal information,
                within their dedicated profile.
              </li>
              <li>
                Doctor Profiles: Manage your healthcare team' s profiles,
                allowing you to maintain an organized and efficient workflow.
              </li>
            </ul>
          </div>
          <div className="image">
            <img src={ImageOne} alt="" className="rotate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
