import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to LearnMate</h1>
          <p className="hero-description">
            An all-in-one platform to discover, compare, and learn from top tech courses with expert mentorship and progress tracking.
          </p>
          <div className="cta-buttons">
            <button className="cta-button">Browse Courses</button>
            <button className="cta-button">Get Mentor Support</button>
          </div>
          <div className="extra-content">
            <p>
              We offer personalized mentorship and real-time progress tracking to ensure you never miss a milestone in your learning journey!
            </p>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://mentalhealthcommission.ca/wp-content/uploads/2023/06/Circle-1-App-development-team-working-together-1.jpg" alt="Hero Image" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features">
          <div className="feature-box">
            <div className="feature-icon">🔍</div>
            <h3>Discover Courses</h3>
            <p>Find the best courses tailored to your learning goals.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">💡</div>
            <h3>Expert Mentorship</h3>
            <p>Get one-on-one guidance from industry experts.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">📊</div>
            <h3>Track Your Progress</h3>
            <p>Measure your growth with our real-time tracking system.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to take the next step in your learning journey?</h2>
        <button className="cta-button">Join Now</button>
      </section>
    </div>
  );
}

export default Home;