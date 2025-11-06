import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar ">
      <div className="navbar-container">
        {/* LEFT SIDE */}
        <div className="navbar-logo flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            {/* <img src="/Logo.png" alt="Logo" className="h-20 w-20" /> */}
            <span className="logo-text">DisabilityAware</span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          ></span>
        </button>

        {/* RIGHT SIDE MENU + LANGUAGE SWITCHER */}
        <div className={`navbar-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <a href="/disabilities" className="navbar-link">
            Disabilities
          </a>

          <a href="/schemes" className="navbar-link">
            Schemes
          </a>

          <a href="/about" className="navbar-link">
            About
          </a>

          <a href="/contactus" className="navbar-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
