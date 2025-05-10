import React from "react";
import './Home.css';

const Home = ({ darkMode }) => {
  const services = [
    {
      title: "Penetration Testing",
      description: "Simulate cyber attacks to identify vulnerabilities before hackers do.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive scanning to identify security weaknesses in your systems.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Incident Response",
      description: "24/7 emergency support when security breaches occur.",
      icon: "🚨",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Security Training",
      description: "Employee education to prevent social engineering attacks.",
      icon: "🎓",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Cloud Security",
      description: "Protection for your AWS, Azure, and GCP environments.",
      icon: "☁️",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Compliance Consulting",
      description: "Meet GDPR, HIPAA, PCI-DSS and other regulatory requirements.",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CTO, SecureBank",
      text: "Hackcounter's team helped us identify critical vulnerabilities in our online banking platform before they could be exploited.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Williams",
      role: "Security Director, TechCorp",
      text: "Their incident response team contained a ransomware attack within hours, minimizing our downtime and data loss.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  // Placeholder image URLs
  const placeholderImages = {
    hero: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    service: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    testimonial: "https://randomuser.me/api/portraits/lego/5.jpg"
  };

  const handleImageError = (e, fallbackType) => {
    e.target.onerror = null;
    switch(fallbackType) {
      case 'hero':
        e.target.src = placeholderImages.hero;
        break;
      case 'service':
        e.target.src = placeholderImages.service;
        break;
      case 'testimonial':
        default:
        e.target.src = placeholderImages.testimonial;
    }
  };

  return (
    <div className={`home ${darkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Advanced Cybersecurity <span className="highlight">Solutions</span></h1>
          <p className="hero-text">Protecting your digital assets with cutting-edge security.</p>
          <div className="hero-buttons">
            <a href="/services" className="btn">Explore Services</a>
            <a href="/contact" className="btn btn-outline">Get Audit</a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Cybersecurity" 
            onError={(e) => handleImageError(e, 'hero')}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <h2 className="section-title">Our Security Services</h2>
        <p className="section-subtitle">
          Comprehensive protection tailored to your organization's needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="card service-card" key={index}>
              <div className="service-image">
                <img 
                  src={service.image} 
                  alt={service.title}
                  onError={(e) => handleImageError(e, 'service')}
                />
              </div>
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/services" className="btn btn-outline">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="stats-container">
          <div className="stat">
            <h3>500+</h3>
            <p>Security Assessments</p>
          </div>
          <div className="stat">
            <h3>99.7%</h3>
            <p>Threat Detection Rate</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Monitoring & Support</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <h2 className="section-title">Client Success Stories</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="card testimonial" key={index}>
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                  onError={(e) => handleImageError(e, 'testimonial')}
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-content">
          <h2>Ready to Secure Your Business?</h2>
          <p>
            Contact our security experts today for a free consultation and threat assessment.
          </p>
          <a href="/contact" className="btn">Get Protected Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;