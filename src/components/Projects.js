import React, { useState } from "react";
import {GrMysql } from "react-icons/gr";
import {FaHtml5,FaCss3Alt,FaJs,FaPhp,FaLaravel,FaReact } from "react-icons/fa";
import GamiFytech from "../assets/images/GamiFytech.png";
import GoMovies from "../assets/images/GoMovies.png";
import MovieMaze from "../assets/images/MovieMaze.png";

function Projects() {
  

    return (
        <section id="Projects">
            <h2 className="title">Projects</h2>
            <div className="content">
            <div className="Projects-card">
                    <div className="Projects-img">
                        <img src={GoMovies} alt="Go Movies Project" />
                    </div>
                    <div className="Projects-info">
    <strong className="Projects-title">
        <span>Go Movies</span>
        <a 
            href="https://github.com/Moawiah-Eqailan/Movies-Project-React-LarvelApi/tree/main" 
            className="Project-presentation" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            Project presentation 
        </a>
    </strong>
    <br/>
    <FaReact style={{color:'#58C4DC', fontSize:'25px'}}/> <FaLaravel style={{color:'#E84332', fontSize:'25px'}}/> <GrMysql style={{color:'#00758F', fontSize:'25px'}}/>
    <br/>
    <span className="Show-video-button">
        <a href="https://drive.google.com/file/d/1q2s8vRgR2aoVECPQ9ClU8eJnM1r37NZf/view" target="_blank" rel="noopener noreferrer">
        Show Video
        </a>
    </span>
</div>

                </div> 
                <div className="Projects-card">
                    <div className="Projects-img">
                        <img src={GamiFytech} alt="Gami Fytech Project" />
                    </div>
                    <div className="Projects-info">
                        <strong className="Projects-title">
                            <span>Gami Fytech</span>
                            <a 
                                href="https://github.com/Moawiah-Eqailan/GamifyTech" 
                                className="Project-presentation" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Project presentation
                            </a>
                        </strong>
                        <br/>
                        <FaPhp style={{color:'#AEB2D5', fontSize:'25px'}}/> <GrMysql style={{color:'#00758F', fontSize:'25px'}}/> <FaHtml5 style={{color:'#ff5733', fontSize:'25px'}} /> <FaCss3Alt style={{color:'#3a6cf4', fontSize:'25px'}}/> <FaJs style={{color:'#FFFF4D', fontSize:'25px'}} />

                        <br/>
                        <span className="Show-video-button">
        <a href="https://drive.google.com/file/d/1waXXNcHEIgm7UJk-jz4HhTAGXuF5QAtm/view" target="_blank" rel="noopener noreferrer">
        Show Video
        </a>
    </span>
                    </div>
                </div>
                <div className="Projects-card">
                    <div className="Projects-img">
                        <img src={MovieMaze} alt="Go Movies Project" />
                    </div>
                    <div className="Projects-info">
                        <strong className="Projects-title">
                            <span>Movie Maze</span>
                            <a 
                                href="https://github.com/Moawiah-Eqailan/Movies-Web-App" 
                                className="Project-presentation" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Project presentation
                            </a>
                        </strong>
                        <br/>
                        <FaHtml5 style={{color:'#ff5733' , fontSize:'25px'}} /> <FaCss3Alt style={{color:'#3a6cf4', fontSize:'25px'}}/> <FaJs style={{color:'#FFFF4D', fontSize:'25px'}} />
                        <br/>
                        <span className="Show-video-button">
        <a href="https://drive.google.com/file/d/1VmCGD3FHWbIELZ5j97AXKOHT4gDPXjdt/view" target="_blank" rel="noopener noreferrer">
        Show Video
        </a>
    </span>
                       
                    </div>
                </div>
            </div>

        
        </section>
    );
}

export default Projects;
