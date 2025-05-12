import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Services.css';

const Services = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('web');

  const serviceCategories = [
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'chatbot', name: 'Chatbot Development', icon: '🤖' },
    { id: 'cyber', name: 'Cybersecurity', icon: '🔒' }
  ];

  const allServices = {
    web: [
      {
        title: "Custom Web Applications",
        description: "Tailored web solutions built with modern frameworks for optimal performance.",
        icon: "💻",
        features: [
          "React/Next.js frontends",
          "Node.js/Express backends",
          "Responsive design",
          "Progressive Web Apps",
          "API development"
        ],
        technologies: ["React", "Next.js", "Node.js", "GraphQL", "MongoDB"],
        stats: [
          { value: "2.5s", label: "Avg Load Time" },
          { value: "99%", label: "Client Satisfaction" }
        ]
      },
      {
        title: "E-commerce Solutions",
        description: "Secure and scalable online stores with seamless payment integration.",
        icon: "🛒",
        features: [
          "Payment gateway integration",
          "Inventory management",
          "SEO optimization",
          "Mobile-first design",
          "Analytics dashboard"
        ],
        technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
        stats: [
          { value: "40%", label: "Conversion Boost" },
          { value: "99.9%", label: "Uptime" }
        ]
      }
    ],
    chatbot: [
      {
        title: "AI-Powered Chatbots",
        description: "Intelligent conversational agents that understand natural language.",
        icon: "🧠",
        features: [
          "Natural Language Processing",
          "Multi-language support",
          "Sentiment analysis",
          "24/7 customer service",
          "CRM integration"
        ],
        technologies: ["Python", "Dialogflow", "Rasa", "TensorFlow"],
        stats: [
          { value: "92%", label: "Accuracy" },
          { value: "30%", label: "Cost Reduction" }
        ]
      },
      {
        title: "Voice Assistants",
        description: "Voice-enabled interfaces for hands-free interactions.",
        icon: "🎙️",
        features: [
          "Voice recognition",
          "Multi-platform support",
          "Custom wake words",
          "Home automation integration",
          "Personalized responses"
        ],
        technologies: ["Amazon Alexa", "Google Assistant", "SiriKit"],
        stats: [
          { value: "2.5x", label: "User Engagement" },
          { value: "85%", label: "Success Rate" }
        ]
      }
    ],
    cyber: [
      {
        title: "Penetration Testing",
        description: "Simulate cyber attacks to identify vulnerabilities before hackers do.",
        icon: "🔍",
        features: [
          "Web application testing",
          "Network security assessment",
          "Social engineering",
          "Wireless network testing",
          "Cloud security testing"
        ],
        technologies: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap"],
        stats: [
          { value: "98%", label: "Vulnerability Detection" },
          { value: "100%", label: "Confidentiality" }
        ]
      },
      {
        title: "Security Monitoring",
        description: "24/7 surveillance of your digital assets for potential threats.",
        icon: "👁️",
        features: [
          "Real-time alerts",
          "SIEM integration",
          "Threat intelligence",
          "Incident response",
          "Compliance reporting"
        ],
        technologies: ["Splunk", "ELK Stack", "Wazuh", "Snort"],
        stats: [
          { value: "60%", label: "Faster Detection" },
          { value: "24/7", label: "Protection" }
        ]
      }
    ]
  };

  const processSteps = [
    {
      step: "1",
      title: "Discovery",
      description: "We analyze your requirements and business objectives.",
      icon: "📝"
    },
    {
      step: "2",
      title: "Planning",
      description: "Our team designs a customized solution architecture.",
      icon: "📊"
    },
    {
      step: "3",
      title: "Development",
      description: "Agile implementation with continuous feedback loops.",
      icon: "💻"
    },
    {
      step: "4",
      title: "Testing",
      description: "Rigorous quality assurance and security validation.",
      icon: "🧪"
    },
    {
      step: "5",
      title: "Deployment",
      description: "Smooth rollout with comprehensive documentation.",
      icon: "🚀"
    },
    {
      step: "6",
      title: "Support",
      description: "Ongoing maintenance and optimization services.",
      icon: "🛠️"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="highlight">Services</span>
          </motion.h1>
          <motion.p 
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive digital solutions for web-development, mobile-development, chatbots development, and security needs.
          </motion.p>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Digital services" 
          />
        </motion.div>
      </section>

      {/* Services Tabs */}
      <section className="section tabs-section">
        <div className="tabs-container">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              className={`service-tab ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              <span className="tab-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-section">
        <h2 className="section-title">{serviceCategories.find(c => c.id === activeTab)?.name} Services</h2>
        <p className="section-subtitle">
          Professional solutions tailored to your business requirements
        </p>
        
        <div className="services-grid">
          {allServices[activeTab].map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              
              <div className="service-features">
                <h4>Key Features:</h4>
                <ul>
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="feature-icon">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="service-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="service-stats">
                {service.stats.map((stat, i) => (
                  <div key={i} className="stat-item">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="service-footer">
                <Link to="/contact" className="btn">Get Started</Link>
                <Link to={`/services/${activeTab}#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <h2 className="section-title">Our Development Process</h2>
        <p className="section-subtitle">
          A structured approach to delivering high-quality solutions
        </p>
        
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <motion.div 
              className="process-step"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-header">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Contact us today to discuss your project requirements and get a free consultation.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn">Get Free Quote</Link>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;