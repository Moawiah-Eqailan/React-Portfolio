import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {  Link } from "react-router-dom"; 

function Header({ isDarkMode, toggleDarkMode }) {  


  return (
    <header className={isDarkMode ? 'dark-mode' : ''}>
      <a href="/" className="logo">Moawiah Eqailan</a> 
      
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        <i className={isDarkMode ? 'fa fa-sun' : 'fa fa-moon'}></i>
      </button>

      <nav className="navigation">
        <a href="/">
      <ScrollLink to="Services" >Services</ScrollLink></a>
      <a href="/">
        <ScrollLink to="Skills" >Skills</ScrollLink>
      </a>
        <a href="/">
         <ScrollLink to="Projects" >Projects</ScrollLink>
       </a>
        <a href="/">
        <ScrollLink to="Testimonials" >Testimonials</ScrollLink>
        </a>
        <a href="/">
        <ScrollLink to="Highlight" >Highlight</ScrollLink>
        </a>
        <Link to="/Contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
