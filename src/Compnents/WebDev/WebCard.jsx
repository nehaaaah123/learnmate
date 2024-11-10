import React from "react";
import PropTypes from "prop-types";
import './web.css';

function WebCard({ image, title, about, link, level, review }) {
    return (
        <div className="web-card">
            <img src={image} alt={title} className="web-image" />
            <h3 className="web-title">{title}</h3>
            <p className="web-about">{about}</p>

            {/* Course Level */}
            <div className="web-level">
                <span>{level}</span>
            </div>

            {/* Course Review */}
            <div className="web-review">
                <p>{review}</p>
            </div>

            {/* Course Link */}
            {link && (
                <div className="web-link-container">
                    <a href={link} className="web-link" target="_blank" rel="noopener noreferrer">
                        Check-It-Out
                    </a>
                </div>
            )}
        </div>
    );
}

WebCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
};

export default WebCard;
