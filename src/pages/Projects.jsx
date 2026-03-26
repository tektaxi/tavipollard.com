import React from 'react';
import { projects } from '../data/content';

const Projects = () => {
  return (
    <div className="container section slide-up" id="projects">
      <h2 className="text-accent section-title">Projects</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
        {projects.map((project) => (
          <div key={project.id} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
            <p style={{ flex: 1, marginBottom: '1.5rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>{project.description}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
              {(project.tech || project.tags || []).map(tech => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>GitHub</a>
              )}
              {project.live && project.live !== '#' && (
                <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
