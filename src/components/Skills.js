import React from "react";
import {GrMysql } from "react-icons/gr";
import {FaHtml5,FaCss3Alt,FaJs,FaPhp,FaLaravel,FaReact } from "react-icons/fa";


function Skills() {
    return (
        <section id="Skills">
            <h2 className="title">Skills</h2>
            <div className="Contact">
                <div className="card">
                    <div className="icon">
                        <FaHtml5  style={{color:'#ff5733'}}  />
                    </div>
                    <div className="info">
                        <h3  style={{color:'#ff5733'}}>HTML5</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaCss3Alt /> 
                    </div>
                    <div className="info">
                        <h3>CSS3</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaJs  style={{color:'#FFFF4D'}}  />
                    </div>
                    <div className="info">
                        <h3 style={{color:'#FFFF4D'}}>JS</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaPhp style={{color:'#AEB2D5'}}  />
                    </div>
                    <div className="info">
                        <h3 style={{color:'#AEB2D5'}}>PHP</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <GrMysql style={{color:'#00758F'}}  />
                    </div>
                    <div className="info">
                        <h3 style={{color:'#00758F'}}>My <span style={{color:'#F29111'}}>SQL</span></h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaLaravel style={{color:'#E84332'}} />
                    </div>
                    <div className="info">
                        <h3 style={{color:'#E84332'}}>LARAVEL</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaReact style={{color:'#58C4DC'}} />
                    </div>
                    <div className="info">
                        <h3 style={{color:'#58C4DC'}}>REACT</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
