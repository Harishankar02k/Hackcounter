/* eslint-disable */
import React, { useState } from "react";
import './Contact.css';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const errors = validateForm();
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

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
      // Add detailed error logging here
      const errorData = await response.json();
      console.error('Error submitting form:', errorData);
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

  return (
    <div className="contact-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Contact <span className="highlight">Hackcounter</span></h1>
          <p className="hero-text">
            Have questions or need more information? Our team is ready to help you with all your
            cybersecurity needs.
          </p>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Contact Cybersecurity Experts" 
          />
        </div>
      </section>

      <section className="section contact-section">
        <div className="contact-container">
          <div className="contact-form">
            <h2 className="section-title">Send Us a Message</h2>
            {submitted ? (
              <div className="success-message">
                <h3>Thank you for contacting us!</h3>
                <p>We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                  {formErrors.name && <span className="error">{formErrors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                  {formErrors.email && <span className="error">{formErrors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here"
                  ></textarea>
                  {formErrors.message && <span className="error">{formErrors.message}</span>}
                </div>
                <button type="submit" className="btn">Send Message</button>
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
            <a href="https://www.youtube.com/@Hackcounter-2me" className="social-link" aria-label="YouTube">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" className="social-icon" />
            </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg" alt="Twitter" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/company/hackcounter" className="social-link" aria-label="LinkedIn">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://www.instagram.com" className="social-link" aria-label="Instagram">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
