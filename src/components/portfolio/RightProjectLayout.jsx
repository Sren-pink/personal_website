import React from 'react';
import './RightProjectLayout.css';
import { projects } from '../../datas/ProjectData';

export function ProjectLayoutR({ title }) {
  const project = projects[title];

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="project-layout-r">
      <h1 className='r-project-title'>{title}</h1>

      <div className='r-project-image'>
        {project.images.map((src, index) => (
          <img
            className='r-project-image' // Changed to singular since each one is an image, not the wrapper
            key={index}
            src={src}
            alt={`Screenshot ${index + 1} for ${title}`}
          />
        ))}
      </div>

      <p className='r-project-des'>{project.description}</p>
    </div>
  );
}