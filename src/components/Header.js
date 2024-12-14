import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
      <header>
        <a href="#" className="logo">Moawiah Eqailan</a>
        <nav className="navigation">
        {/* <Link to="/Services">Services</Link> */}
        {/* <Link to="/Skills">Skills</Link> */}
        {/* <Link to="/Projects">Projects</Link> */}
        {/* <Link to="/Testimonials">Testimonials</Link> */}
        {/* <Link to="/Highlight">Highlight</Link> */}

          <a href="/#Services">Services</a>
          <a href="/#Skills">Skills</a>
          <a href="/#Projects">Projects</a>
          <a href="/#Testimonials">Testimonials</a>
          <a href="/#Highlight">Highlight</a>
          <Link to="/Contact">Contact</Link>
        </nav>
        
      </header>
      
    );
  }
  
  export default Header;