import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 50) {
      // Scrolling down, hide the navbar
      setShowNavbar(true);
      setShowHamburger(false); // Hide the hamburger when near the top
    } else {
      // Scrolling up, show the navbar
      setShowNavbar(false);
    }

    if (currentScrollY > 200) {
      setShowHamburger(true);
    } else {
      setShowHamburger(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    if (showNavbar) {
      setIsMenuOpen(false);
    }
  }, [showNavbar]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          showNavbar ? "visible" : "hidden"
        }`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Owen Reedy
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resume" onClick={closeMenu}>
                  Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hamburger Menu */}
      <div
        className={`hamburger-menu ${showHamburger ? "visible" : ""}`}
        onClick={showHamburger ? toggleMenu : undefined}
      >
        <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Side Menu */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              onClick={closeMenu}
              className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : "")}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
