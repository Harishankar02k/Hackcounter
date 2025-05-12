/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Home.css";

const Home = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Auto slide for featured projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      category: "Cybersecurity",
      items: [
        {
          title: "Penetration Testing",
          description:
            "Simulate cyber attacks to identify vulnerabilities before hackers do.",
          icon: "🔍",
          image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Vulnerability Assessment",
          description:
            "Comprehensive scanning to identify security weaknesses in your systems.",
          icon: "📊",
          image:
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Incident Response",
          description: "24/7 emergency support when security breaches occur.",
          icon: "🚨",
          image:
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
    },
    {
      category: "Development",
      items: [
        {
          title: "Web Development",
          description:
            "Modern, responsive websites with cutting-edge technologies.",
          icon: "🌐",
          image:
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Mobile Development",
          description: "iOS and Android apps with flawless user experience.",
          icon: "📱",
          image:
            "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Chatbot Development",
          description:
            "AI-powered conversational interfaces for better engagement.",
          icon: "🤖",
          image:
            "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Security Suite",
      description:
        "Implemented comprehensive security measures for an online retail platform handling 50K+ daily transactions.",
      services: ["Web Development", "Cybersecurity"],
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      stats: [
        { value: "98%", label: "Threat Reduction" },
        { value: "40%", label: "Conversion Increase" },
      ],
    },
    {
      id: 2,
      title: "Banking Mobile App",
      description:
        "Secure mobile banking application with biometric authentication and fraud detection.",
      services: ["Mobile Development", "Cybersecurity"],
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      stats: [
        { value: "1M+", label: "Downloads" },
        { value: "99.9%", label: "Uptime" },
      ],
    },
    {
      id: 3,
      title: "AI Customer Support Chatbot",
      description:
        "NLP-powered chatbot handling 10K+ customer queries daily with 92% accuracy.",
      services: ["Chatbot Development", "AI"],
      image:
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      stats: [
        { value: "92%", label: "Accuracy" },
        { value: "30%", label: "Cost Reduction" },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CTO, SecureBank",
      text: "HackShield's team helped us identify critical vulnerabilities in our online banking platform before they could be exploited.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Security Director, TechCorp",
      text: "Their incident response team contained a ransomware attack within hours, minimizing our downtime and data loss.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO, RetailPlus",
      text: "The e-commerce platform they developed has been running flawlessly with zero security incidents for 2 years.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "99.7%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Availability" },
    { value: "100+", label: "Happy Clients" },
  ];

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProjects.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  const currentProject = featuredProjects[currentIndex];

  return (
    <div className={`home ${darkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Secure <span className="highlight">Development</span> Solutions
          </motion.h1>
          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We build secure web and mobile applications with integrated
            cybersecurity, powered by cutting-edge technologies and AI-driven
            solutions.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/services" className="btn">
              Our Services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Secure development"
          />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          Comprehensive solutions combining development expertise with
          security-first approach
        </p>

        {services.map((serviceCategory, index) => (
          <div key={index} className="service-category">
            <h3 className="service-category-title">
              {serviceCategory.category}
            </h3>
            <div className="services-grid">
              {serviceCategory.items.map((service, i) => (
                <motion.div
                  className="card service-card"
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to="/services" className="btn btn-outline">
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              className="stat"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section projects-section" ref={ref}>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Our successful implementations combining development and security
        </p>

        <div className="project-showcase">
          <button
            className="nav-button prev"
            onClick={prevItem}
            aria-label="Previous project"
          >
            &lt;
          </button>

          <motion.div
            className="project-content"
            key={currentProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-info">
              <h3>{currentProject.title}</h3>
              <p>{currentProject.description}</p>

              <div className="project-services">
                {currentProject.services.map((service, i) => (
                  <span key={i} className="service-tag">
                    {service}
                  </span>
                ))}
              </div>

              <div className="project-stats">
                {currentProject.stats.map((stat, i) => (
                  <div key={i} className="stat">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn">
                Request Similar Project
              </Link>
            </div>

            <div className="project-image">
              <img src={currentProject.image} alt={currentProject.title} />
            </div>
          </motion.div>

          <button
            className="nav-button next"
            onClick={nextItem}
            aria-label="Next project"
          >
            &gt;
          </button>
        </div>

        <div className="project-dots">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">What our clients say about our work</p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="card testimonial"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-content">
          <h2>Ready to Build Something Secure?</h2>
          <p>
            Whether you need a new application or want to secure your existing
            systems, our team is ready to help.
          </p>
          <Link to="/contact" className="btn">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
