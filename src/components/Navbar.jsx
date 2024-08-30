import { useState } from "react";
import "./style/Navbar.css";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <div className="Navbar">
      <a href="http://localhost:5173/">
        <div className="navLogo">
          <img src={Logo} alt="Logo" />
          <div className="navLogoText">
            <h1>Hospitalline | Hospital Management System</h1>
            <span>Your Time & Data Managed in Line</span>
          </div>
        </div>
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className={`sideMenu ${isOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => scrollToSection("loadingPage")}>Start</li>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About Application</li>
          <li onClick={() => scrollToSection("demo")}>Explore Demo Version</li>
          <li onClick={() => scrollToSection("Full")}>Access Full Version</li>
          <li onClick={() => scrollToSection("contact")}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
