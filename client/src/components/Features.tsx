import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized solutions that deliver results in milliseconds.'
    },
    {
      icon: '🛡️',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee. Your data is always safe with us.'
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      description: 'Perfect experience on any device. Our solutions work seamlessly across desktop, tablet, and mobile.'
    },
    {
      icon: '⚡',
      title: 'Easy Integration',
      description: 'Get started in minutes with our simple integration process. No complex setup required.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Track your performance with detailed analytics and insights to make data-driven decisions.'
    },
    {
      icon: '🎯',
      title: 'Targeted Solutions',
      description: 'Customized solutions tailored to your specific needs and business objectives.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">Why Choose Our Solution?</h2>
          <p className="features-subtitle">
            Discover the powerful features that make our platform the perfect choice for your business
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
