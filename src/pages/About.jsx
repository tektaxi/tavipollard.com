import React from 'react';
import { personalInfo } from '../data/content';

const About = () => {
  return (
    <div className="container section slide-up">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-accent about-title">About Me</h1>
        
        <div className="glass-panel about-panel">
          <p className="about-text-lead">
            Hi! I'm {personalInfo.name}, a {personalInfo.role}. 
          </p>
          <p className="about-text">
            {personalInfo.bio}
          </p>
          <p className="about-text">
            When I'm not coding, I enjoy exploring the intersection of technology and urban infrastructure. I strongly believe in creating digital solutions that actively improve physical communities.
          </p>
          <p className="about-text">
            I'm currently on the lookout for exciting opportunities to learn and grow as an engineer, and I'd love to connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
