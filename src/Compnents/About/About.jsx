import React from 'react';
import './About.css'; // Import the CSS file

export default function About() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-content grid-container">
                    <div className="text-content">
                        <div className="text-container">
                            <h6 className="main-title">Find the Perfect Course with Confidence</h6>
                            <p className="description">
                                Choosing the right course can be overwhelming, especially with countless options available. 
                                Our platform simplifies this process by offering concise reviews and comparisons of top courses in your chosen tech stack. 
                                We aggregate feedback from experts and learners alike, allowing you to make an informed decision based on your expertise level and the experiences of others.
                                But that's not all—our platform also connects you with industry mentors, ready to support you throughout your learning journey. 
                                With progress tracking built in, you can visualize your growth and stay motivated as you move forward in your course. 
                                Join us and make learning more effective and goal-oriented.
                            </p>
                        </div>
                        <div className="info-boxes">
                            <div className="info-box">
                                <h4 className="info-title">50+ Courses Reviewed</h4>
                                <p className="info-description">Compare and choose courses that best suit your needs</p>
                            </div>
                            <div className="info-box">
                                <h4 className="info-title">10+ Industry Mentors</h4>
                                <p className="info-description">Guidance from top professionals to help you succeed</p>
                            </div>
                            <div className="info-box">
                                <h4 className="info-title">100+ User Reviews</h4>
                                <p className="info-description">Get real-world insights from peers who have taken the courses</p>
                            </div>
                            <div className="info-box">
                                <h4 className="info-title">Progress Tracker</h4>
                                <p className="info-description">Track your learning progress, stay on top of your goals</p>
                            </div>
                        </div>
                        <button className="explore-courses-btn">
                            <span>Explore Courses</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                                    stroke="#4F46E5"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="image-content">
                        <div className="image-wrapper">
                            <img
                                className="about-image"
                                src="https://pagedone.io/asset/uploads/1717742431.png" // Keep your image URL here
                                alt="about us"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
