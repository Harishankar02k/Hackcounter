import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Contact from "./Contact";
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then check system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Hackcounter | Cybersecurity Solutions";
  }, []);

  useEffect(() => {
    // Save to localStorage whenever darkMode changes
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRouteChange = () => setMobileMenuOpen(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
        <nav className={`navbar ${isScrolled ? "scrolled" : ""} ${darkMode ? "dark" : "light"}`}>
          <Link to="/" className="nav-brand" onClick={handleRouteChange}>
            {"< Hackcounter />"}
          </Link>
          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={handleRouteChange}>Home</Link></li>
            <li><Link to="/about-us" onClick={handleRouteChange}>About Us</Link></li>
            <li><Link to="/services" onClick={handleRouteChange}>Services</Link></li>
            <li><Link to="/contact" onClick={handleRouteChange}>Contact</Link></li>
            <li>
              <button 
                className="theme-toggle"
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
          <div 
            className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about-us" element={<AboutUs darkMode={darkMode} />} />
            <Route path="/services" element={<Services darkMode={darkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} Hackcounter. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;