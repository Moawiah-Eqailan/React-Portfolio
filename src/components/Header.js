import React from "react";
import { Link as ScrollLink } from "react-scroll"; // استيراد Link من مكتبة react-scroll
import { Link } from "react-router-dom";

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className={isDarkMode ? 'dark-mode' : ''}>
      <a href="/" className="logo">Moawiah Eqailan</a>
      
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        <i className={isDarkMode ? 'fa fa-sun' : 'fa fa-moon'}></i>
      </button>

      <nav className="navigation">
        <ScrollLink to="Services" >Services</ScrollLink>
        <ScrollLink to="Skills" >Skills</ScrollLink>
        <ScrollLink to="Projects" >Projects</ScrollLink>
        <ScrollLink to="Testimonials" >Testimonials</ScrollLink>
        <ScrollLink to="Highlight" >Highlight</ScrollLink>
        <Link to="/Contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
