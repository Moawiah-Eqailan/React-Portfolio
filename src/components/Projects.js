import React, { useState } from "react";
import { GrMysql } from "react-icons/gr";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaReact } from "react-icons/fa";
import GamiFytech from "../assets/images/GamiFytech.png";
import GoMovies from "../assets/images/GoMovies.png";
import MovieMaze from "../assets/images/MovieMaze.png";

function Projects() {
    const [popupUrl, setPopupUrl] = useState(null);

    const openPopup = (url) => {
        setPopupUrl(url);
    };

    const closePopup = () => {
        setPopupUrl(null);
    };

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
                            <a onClick={() => openPopup("https://drive.google.com/file/d/1q2s8vRgR2aoVECPQ9ClU8eJnM1r37NZf/preview")}>Show Video</a>
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
                            <a onClick={() => openPopup("https://drive.google.com/file/d/1waXXNcHEIgm7UJk-jz4HhTAGXuF5QAtm/preview")}>Show Video</a>
                        </span>
                    </div>
                </div>

                <div className="Projects-card">
                    <div className="Projects-img">
                        <img src={MovieMaze} alt="Movie Maze Project" />
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
                            <a onClick={() => openPopup("https://drive.google.com/file/d/1VmCGD3FHWbIELZ5j97AXKOHT4gDPXjdt/preview")}>Show Video</a>
                        </span>
                    </div>
                </div>
            </div>

            {/* Popup */}
            {popupUrl && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-button" onClick={closePopup}>×</button>
                        <iframe
                            src={popupUrl}
                            width="640"
                            height="480"
                            allow="autoplay"
                            title="Video Preview"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
