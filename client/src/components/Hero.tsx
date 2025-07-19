import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Business with
            <span className="gradient-text"> Modern Solutions</span>
          </h1>
          <p className="hero-description">
            We help businesses grow with cutting-edge technology and innovative strategies. 
            Join thousands of satisfied clients who have transformed their digital presence.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('features')}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-visual">
            <div className="floating-card card-1">
              <span className="card-icon">🚀</span>
              <p>Fast Performance</p>
            </div>
            <div className="floating-card card-2">
              <span className="card-icon">⚡</span>
              <p>Quick Setup</p>
            </div>
            <div className="floating-card card-3">
              <span className="card-icon">🎯</span>
              <p>Targeted Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
