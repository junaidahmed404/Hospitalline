<<<<<<< HEAD
import "./style/LoadingPage.css";
import Logo from "../assets/Logo.png";
import UpArrow from "../assets/up-arrow.png";
const LoadingPage = () => {
  return (
    <div id="loadingPage" className="LoadingPage">
      <a href="http://localhost:5173/">
        <div className="appLogo">
          <img src={Logo} alt="+" />
          <div className="logoText">
            <h1>Hospitalline | Hospital Management System</h1>
            <span>Your Time & Data Managed in Line</span>
          </div>
        </div>
      </a>
      <div className="scrollBtn o">
        <span>
          <img src={UpArrow} alt="^" />
        </span>
      </div>
      <div className="scrollBtn t">
        <span>
          <img src={UpArrow} alt="^" />
        </span>
      </div>
      <div className="scrollBtn th">
        <span>
          <img src={UpArrow} alt="^" />
        </span>
      </div>
    </div>
  );
};

export default LoadingPage;
=======
import "./style/LoadingPage.css";
import Logo from "../assets/Logo.png";
import UpArrow from "../assets/up-arrow.png";
const LoadingPage = () => {
  return (
    <div id="loadingPage" className="LoadingPage">
      <a href="http://localhost:5173/">
        <div className="appLogo">
          <img src={Logo} alt="+" />
          <div className="logoText">
            <h1>Hospitalline | Hospital Management System</h1>
            <span>Your Time & Data Managed in Line</span>
          </div>
        </div>
      </a>
      <div className="scrollBtn o">
        <span>
          <img src={UpArrow} alt="^" />
        </span>
      </div>
      <div className="scrollBtn t">
        <span>
          <img src={UpArrow} alt="^" />
        </span>
      </div>
      <div className="scrollBtn th">
        <span>
          <img src={UpArrow} alt="^" />
        </span>
      </div>
    </div>
  );
};

export default LoadingPage;
>>>>>>> 29b66b9429399e29c93bf194e48b4cd8db1fc8ce
