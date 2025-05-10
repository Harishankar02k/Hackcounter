import React from "react";
import './AboutUs.css';

const AboutUs = ({ darkMode }) => {
  const teamMembers = [
    {
      name: "Harishankar Kumar",
      role: "Lead Security Engineer",
      bio: "10+ years in penetration testing. OSCP, CISSP certified. Specializes in network security and red team operations.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Divya Rajput",
      role: "Chief Security Officer",
      bio: "Former security architect at Fortune 500 companies. Expert in security frameworks and compliance.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Shalu Kumari",
      role: "Malware Analyst",
      bio: "Reverse engineering specialist with a focus on advanced persistent threats and zero-day vulnerabilities.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We operate with the highest ethical standards in all our engagements.",
      icon: "🔒"
    },
    {
      title: "Innovation",
      description: "Constantly evolving our techniques to stay ahead of emerging threats.",
      icon: "💡"
    },
    {
      title: "Protection",
      description: "Our primary goal is safeguarding our clients' digital assets.",
      icon: "🛡️"
    },
    {
      title: "Transparency",
      description: "Clear communication and honest reporting in all our findings.",
      icon: "🌐"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About <span className="highlight">Hackcounter</span></h1>
          <p className="hero-text">
            We're a team of cybersecurity experts dedicated to making the digital world safer.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="About Hackcounter" 
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="mission-content">
          <h2 className="section-title">Our Mission</h2>
          <p>
            At Hackcounter, we're on a mission to identify and neutralize digital threats before they
            can cause harm. We believe in proactive security measures that anticipate and prevent
            attacks rather than just responding to them.
          </p>
          <div className="mission-stats">
            <div className="stat">
              <h3>2015</h3>
              <p>Year Founded</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Security Experts</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="mission-image">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Our Mission" 
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          Certified security professionals with decades of combined experience
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="card team-member" key={index}>
              <img src={member.image} alt={member.name} className="member-image" />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div className="card value" key={index}>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-content">
          <h2>Ready to Work With Us?</h2>
          <p>
            Contact our team today to discuss your security needs and how we can help protect your business.
          </p>
          <a href="/contact" className="btn">Get in Touch</a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;




