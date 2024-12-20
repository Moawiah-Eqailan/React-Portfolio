import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";


function MainSection() {
    return (
      <section className="main">
        <div>
          <h2>Hello, I'm Moawiah Eqailan<br /><span>Software Engineer</span></h2>
          <h3>I'm a Full Stack</h3>
          <a href="">
         <ScrollLink to="Projects" className="main-btn">View my work</ScrollLink>
        </a>
          <div className="social-icons">
                <a href="https://github.com/Moawiah-Eqailan" target="_blank" rel="noopener noreferrer">
                <FaSquareGithub/>

                </a>
                <a href="https://www.linkedin.com/in/moawiah-eqailan-2ba635178/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                </a>
            </div>
          </div>
      </section>
    );
  }
  
  export default MainSection;
  