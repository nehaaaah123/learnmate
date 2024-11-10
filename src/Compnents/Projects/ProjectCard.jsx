import React from "react";
import './Projects.css';

function ProjectCard({ image, title, link}) {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <h3 className="project-title">{title}</h3>
            <div className="links-container">
                {link && (
                    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                )}
                
            </div>
        </div>
    );
}

export default ProjectCard;
