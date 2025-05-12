import React, { useState } from "react";
import { motion } from "framer-motion";
import './Contact.css';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mnndzebn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `New Contact from ${formData.name} - Hackcounter Website`
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setFormErrors({});
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        setFormErrors({ 
          submit: 'Failed to send message. Please try again later.' 
        });
      }
    } catch (error) {
      console.error('Network error:', error);
      setFormErrors({ 
        submit: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact <span className="highlight">Hackcounter</span>
          </motion.h1>
          <motion.p 
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions or need more information? Our team is ready to help you with all your
            cybersecurity needs.
          </motion.p>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Contact Cybersecurity Experts" 
          />
        </motion.div>
      </section>

      <section className="section contact-section">
        <div className="contact-container">
          <div className="contact-form">
            <h2 className="section-title">Send Us a Message</h2>
            {submitted ? (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3>Thank you for contacting us!</h3>
                <p>We've received your message and will get back to you soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={`form-group ${formErrors.name ? 'error' : ''}`}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={formErrors.name ? 'error-input' : ''}
                  />
                  {formErrors.name && (
                    <motion.span 
                      className="error-message"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {formErrors.name}
                    </motion.span>
                  )}
                </div>
                
                <div className={`form-group ${formErrors.email ? 'error' : ''}`}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={formErrors.email ? 'error-input' : ''}
                  />
                  {formErrors.email && (
                    <motion.span 
                      className="error-message"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {formErrors.email}
                    </motion.span>
                  )}
                </div>
                
                <div className={`form-group ${formErrors.message ? 'error' : ''}`}>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    className={formErrors.message ? 'error-input' : ''}
                  ></textarea>
                  {formErrors.message && (
                    <motion.span 
                      className="error-message"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {formErrors.message}
                    </motion.span>
                  )}
                </div>
                
                {formErrors.submit && (
                  <motion.div 
                    className="submit-error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {formErrors.submit}
                  </motion.div>
                )}
                
                <motion.button 
                  type="submit" 
                  className="btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <h2 className="section-title">Contact Information</h2>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>harishankar2me@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">🏢</div>
              <div>
                <h4>Address</h4>
                <p>123 Security Ave, Cyber City</p>
              </div>
            </div>
            <div className="social-links">
              <motion.a 
                href="https://www.youtube.com/@Hackcounter-2me" 
                className="social-link" 
                aria-label="YouTube"
                whileHover={{ y: -3 }}
              >
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" className="social-icon" />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                className="social-link" 
                aria-label="Twitter"
                whileHover={{ y: -3 }}
              >
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg" alt="Twitter" className="social-icon" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/hackcounter" 
                className="social-link" 
                aria-label="LinkedIn"
                whileHover={{ y: -3 }}
              >
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com" 
                className="social-link" 
                aria-label="Instagram"
                whileHover={{ y: -3 }}
              >
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" className="social-icon" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;