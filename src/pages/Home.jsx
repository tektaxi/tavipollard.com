import React from 'react';
import { contactInfo, personalInfo, skills } from '../data/content';
// import Experience from './Experience';
// import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="container section slide-up" id="home">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="text-accent hero-title">Hi, I'm {personalInfo.name.split(' ')[0]}.</h1>
          <h2 className="hero-subtitle">
            {personalInfo.role}
          </h2>
          <p className="hero-text">
            {personalInfo.bio}
          </p>

          <div className="hero-actions">
            <a href={`${contactInfo.linkedin}`} target="_blank" rel="noreferrer" className="btn-primary">LinkedIn</a>
            {/* <button onClick={() => scrollTo('experience')} className="btn-primary">View Experience</button> */}
            <a href={`${import.meta.env.BASE_URL}${personalInfo.resumeUrl}`} target="_blank" rel="noreferrer" className="btn-secondary">View Resume</a>
            <button onClick={() => scrollTo('contact')} className="btn-secondary">Get in Touch</button>
          </div>

          {/* Temporarily hidden skills block
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Technical Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {skills.map((skill, index) => (
                <span key={index} style={{ 
                  background: 'var(--glass-bg)', 
                  padding: '0.6rem 1.2rem', 
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>

      {/* <Experience /> */}
      {/* <Projects /> */}
      <Contact />
    </>
  );
};

export default Home;
