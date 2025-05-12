/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './AboutUs.css';

const AboutUs = ({ darkMode }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Auto slide projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    {
      name: "Harishankar Kumar",
      role: "Frontend Developer & Cybersecurity Expert",
      bio: "Specializing in React, Next.js, and modern web security practices. 5+ years of experience building secure, performant web applications.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: ["React", "JavaScript", "Node.js", "Cybersecurity", "UI/UX"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Divya Rajput",
      role: "Chatbot Developer & AI Specialist",
      bio: "Expert in conversational AI, NLP, and chatbot development across platforms like Dialogflow, Rasa, and custom solutions.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      skills: ["Python", "NLP", "Dialogflow", "Rasa", "Machine Learning"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Hero Singh",
      role: "Full Stack Developer",
      bio: "Versatile developer with expertise in both frontend and backend technologies, ensuring seamless integration.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      skills: ["MERN Stack", "Python", "AWS", "Docker", "API Development"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      }
    }
  ];

  const values = [
    {
      title: "Quality",
      description: "We deliver pixel-perfect, high-performance solutions.",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies.",
      icon: "💡"
    },
    {
      title: "Reliability",
      description: "Consistent delivery on time, every time.",
      icon: "🛡️"
    },
    {
      title: "Communication",
      description: "Transparent and frequent updates.",
      icon: "📞"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Security Suite",
      description: "Implemented comprehensive security measures for an online retail platform handling 50K+ daily transactions.",
      services: ["Web Development", "Cybersecurity"],
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      devices: [
        { type: "mobile", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { type: "desktop", image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
      ],
      stats: [
        { value: "98%", label: "Threat Reduction" },
        { value: "2.5s", label: "Load Time" },
        { value: "40%", label: "Conversion Increase" }
      ]
    },
    {
      id: 2,
      title: "AI Customer Support Chatbot",
      description: "Developed an NLP-powered chatbot handling 10K+ customer queries daily with 92% accuracy.",
      services: ["Chatbot Development", "AI"],
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      devices: [
        { type: "mobile", image: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { type: "desktop", image: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
      ],
      stats: [
        { value: "92%", label: "Accuracy" },
        { value: "10K", label: "Daily Queries" },
        { value: "30%", label: "Support Cost Reduction" }
      ]
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Secure patient portal with HIPAA compliance and telehealth features.",
      services: ["Web Development", "Cybersecurity"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      devices: [
        { type: "mobile", image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { type: "desktop", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
      ],
      stats: [
        { value: "100%", label: "HIPAA Compliance" },
        { value: "5K", label: "Daily Users" },
        { value: "0", label: "Security Incidents" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      company: "TechCorp",
      role: "CTO",
      text: "The team delivered our e-commerce security solution ahead of schedule with exceptional quality. Their attention to detail is unmatched.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Williams",
      company: "HealthPlus",
      role: "Product Manager",
      text: "Our AI chatbot has transformed customer support. The natural language processing is so accurate it's hard to tell it's not human!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      company: "FinSecure",
      role: "Security Director",
      text: "Implemented robust security measures that passed our rigorous penetration tests on the first attempt. Highly recommended for security projects.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications with cutting-edge technologies.",
      icon: "🌐",
      features: [
        "React/Next.js Development",
        "Performance Optimization",
        "SEO Friendly",
        "Progressive Web Apps"
      ]
    },
    {
      title: "Chatbot Development",
      description: "Intelligent conversational AI solutions for customer support and engagement.",
      icon: "🤖",
      features: [
        "NLP-powered Chatbots",
        "Multi-platform Integration",
        "Sentiment Analysis",
        "24/7 Customer Support"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions.",
      icon: "🔒",
      features: [
        "Penetration Testing",
        "Security Audits",
        "Threat Monitoring",
        "Compliance Consulting"
      ]
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="highlight">Our Team</span>
          </motion.h1>
          <motion.p 
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're a specialized team delivering top-tier web-app development, mobile-app development, chatbot development, and security solutions to clients worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact" className="btn">Hire Our Team</Link>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Our team working on projects" 
          />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <h2 className="section-title">Our Core Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions tailored to your business needs
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className="card service"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link to="/services" className="btn btn-outline">Learn More</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section projects-section" ref={ref}>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Some of our recent successful implementations
        </p>
        
        <div className="project-showcase">
          <button className="nav-button prev" onClick={prevProject} aria-label="Previous project">
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
                  <span key={i} className="service-tag">{service}</span>
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
              
              <Link to="/contact" className="btn">Request Similar Project</Link>
            </div>
          </motion.div>
          
          <button className="nav-button next" onClick={nextProject} aria-label="Next project">
            &gt;
          </button>
        </div>
        
        <div className="project-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentProjectIndex ? 'active' : ''}`}
              onClick={() => setCurrentProjectIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          Dedicated professionals with diverse expertise
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div 
              className="card team-member"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={member.image} alt={member.name} className="member-image" />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
              
              <div className="skills">
                {member.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
              
              <div className="social-links">
                <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          What our clients say about our work
        </p>
        
        <div className="testimonials-slider">
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
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role} • {testimonial.company}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div 
              className="card value"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutUs;