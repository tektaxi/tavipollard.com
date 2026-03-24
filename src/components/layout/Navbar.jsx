import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Initialize state from localStorage or system preference
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'light';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  });

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (link.sectionId) {
      if (location.pathname !== link.path) {
        navigate(link.path);
        setTimeout(() => {
          document.getElementById(link.sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(link.sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link.path);
      window.scrollTo(0, 0);
    }
  };

  const navLinks = [
    { path: '/', sectionId: 'home', label: 'Home' },
    // Temporarily hidden for test deploy
    // { path: '/about', label: 'About' },
    // { path: '/', sectionId: 'experience', label: 'Experience' },
    // { path: '/', sectionId: 'projects', label: 'Projects' },
    { path: '/', sectionId: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <a href="#home" onClick={(e) => handleNavClick(e, navLinks[0])} className="navbar-logo text-accent">TP.</a>
        <div className="nav-actions">
          <ul className="navbar-menu">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.sectionId ? `/#${link.sectionId}` : link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`nav-link ${location.pathname === link.path && !link.sectionId ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Toggle light and dark mode"
          >
            {isLightMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
