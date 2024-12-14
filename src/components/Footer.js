import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer" id="Contact">
          
            <div className="contact-info">
                <p>Email: <a href="mailto:moawiah.eqailan@gmail.com">moawiah.eqailan@gmail.com</a></p>
            <p>Phone: <a href="tel:+962792667253">+962 792667253</a></p>

            </div>
      
        
            <p className="footer-title">
            @<span>Moawiah Eqailan</span> 2025
            </p>
           
            <div className="social-icons">
                
                <a
                    href="https://github.com/Moawiah-Eqailan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaSquareGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/moawiah-eqailan-2ba635178/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                
            </div>
        </footer>
    );
}

export default Footer;
