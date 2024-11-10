import React from "react";
import './web.css';

function WebCard({ image, title, about,link}) {
    return (
        <div className="web-card">
            <img src={image} alt={title} className="web-image" />
            <h3 className="web-title">{title}</h3>
            <h2 className="web-about">{about}</h2>
            <div className="links-container">
                {link && (
                    <a href={link} className="web-link" target="_blank" rel="noopener noreferrer">
                        Check-It-Out
                    </a>
                )}
                </div>
        </div>
    );
}

export default WebCard;
