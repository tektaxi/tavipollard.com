import React from 'react';
import { experiences } from '../data/content';
import './Experience.css';

const Experience = () => {
  return (
    <div className="container section slide-up" id="experience">
      <h1 className="text-accent" style={{ fontSize: '3.5rem', marginBottom: '3rem', textAlign: 'center' }}>Experience</h1>
      
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item glass-panel">
            <div className="timeline-date">{exp.date}</div>
            <h3 className="timeline-title">{exp.title}</h3>
            <h4 className="timeline-company">{exp.company}</h4>
            <p className="timeline-desc">{exp.description}</p>
            <div className="timeline-tags">
              {exp.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
