import React from "react";
import './Services.css';

const Services = ({ darkMode }) => {
  const services = [
    {
      title: "Penetration Testing",
      description: "Identify vulnerabilities in your systems before attackers can exploit them.",
      icon: "🔍",
      details: [
        "Web application testing",
        "Network penetration testing",
        "API security testing",
        "Social engineering assessments"
      ]
    },
    {
      title: "Security Audits",
      description: "Comprehensive reviews of your security infrastructure and policies.",
      icon: "📋",
      details: [
        "Infrastructure audits",
        "Compliance assessments",
        "Policy reviews",
        "Configuration audits"
      ]
    },
    {
      title: "Incident Response",
      description: "24/7 support to contain and recover from security breaches.",
      icon: "🚨",
      details: [
        "Breach containment",
        "Forensic analysis",
        "Recovery planning",
        "Post-incident review"
      ]
    },
    {
      title: "Security Training",
      description: "Educate your team on the latest security threats and best practices.",
      icon: "🎓",
      details: [
        "Security awareness training",
        "Phishing simulations",
        "Secure coding practices",
        "Red team training"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Consultation",
      description: "We discuss your security needs and objectives."
    },
    {
      step: "2",
      title: "Assessment",
      description: "Our team performs a thorough evaluation of your systems."
    },
    {
      step: "3",
      title: "Reporting",
      description: "You receive a detailed report with findings and recommendations."
    },
    {
      step: "4",
      title: "Remediation",
      description: "We help you implement security improvements."
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Our <span className="highlight">Services</span></h1>
          <p className="hero-text">
            Comprehensive cybersecurity solutions tailored to your business needs.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Cybersecurity Services" 
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">
          Our full range of cybersecurity services to protect your business
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="card service" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-details">
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-outline">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <h2 className="section-title">Our Process</h2>
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="step-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-content">
          <h2>Ready to Strengthen Your Security?</h2>
          <p>
            Contact us today to discuss how we can help protect your business from cyber threats.
          </p>
          <a href="/contact" className="btn">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default Services;