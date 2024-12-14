import React from "react";
import { FaCode ,FaDatabase   } from "react-icons/fa";
import {FaHtml5,FaCss3Alt,FaJs,FaPhp,FaLaravel,FaReact } from "react-icons/fa";
import {GrMysql } from "react-icons/gr";




function ServicesSection() {
    return (
        <section className="cards" id="Services">
            <h2 className="title">Services</h2>
            <div className="Contact">
                <div className="card">
                    <div className="icon">
                        <FaCode/>
                    </div>
                    <div className="info">
                        <h3>Web Developer</h3> <br/> <br/>
                        {/* <p>Designing and developing responsive websites using HTML and CSS.</p> */}
                    </div>
                </div>
                {/* <div className="card">
                    <div className="icon">
                        <FaCode/>
                    </div>
                    <div className="info">
                        <h3>Full Stack</h3> <br/> <br/>
                        <p>Designing and developing responsive websites using HTML and CSS.</p>
                    </div>
                </div> */}
                <div className="card">
                    <div className="icon">
                        <FaCode/>
                    </div>
                    <div className="info">
                        <h3>Front End 
                        <br/> <br/> <FaHtml5 style={{color:'#ff5733', fontSize:'35px'}} /> <FaCss3Alt style={{fontSize:'35px'}}/> <FaJs style={{color:'#FFFF4D', fontSize:'35px'}}/> <FaReact style={{color:'#58C4DC', fontSize:'35px'}}/>
                        </h3>
                        {/* <p>Designing and developing responsive websites using HTML and CSS.</p> */}
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <FaCode/>
                    </div>
                    <div className="info">
                        <h3>Back End 
                            <br/> <br/> <FaPhp style={{color:'#AEB2D5', fontSize:'35px'}}/> <FaLaravel style={{color:'#E84332', fontSize:'35px'}}/>
                            </h3>
                        {/* <p>Designing and developing responsive websites using HTML and CSS.</p> */}
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <FaDatabase />
                    </div>
                    <div className="info">
                        <h3>Database 
                            <br/> <br/> <GrMysql  style={{color:'#00758F', fontSize:'35px'}} />
                             </h3>
                        {/* <p>Designing and developing responsive websites using HTML and CSS.</p> */}
                    </div>
                </div>
                {/* <div className="card">
                    <div className="icon">
                        <FaFigma  />
                    </div>
                    <div className="info">
                        <h3>UI/UX Design</h3>
                        <p>Designing professional user interfaces using tools like Figma.</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default ServicesSection;
