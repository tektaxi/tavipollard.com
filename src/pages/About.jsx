import React from 'react';
import { personalInfo } from '../data/content';

const About = () => {
  return (
    <div className="container section slide-up">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-accent" style={{ fontSize: '4.5rem', marginBottom: '2rem' }}>About Me</h1>
        
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Hi! I'm {personalInfo.name}, a {personalInfo.role}. 
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            {personalInfo.bio}
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            When I'm not coding, I enjoy exploring the intersection of technology and urban infrastructure. I strongly believe in creating digital solutions that actively improve physical communities.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            I'm currently on the lookout for exciting opportunities to learn and grow as an engineer, and I'd love to connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
