import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../datas/ProjectData';
import './ImageCarousel.css';

export default function ImageCarousel() {
  const navigate = useNavigate();
  const keys = Object.keys(projects);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + keys.length) % keys.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % keys.length);
  };

  const goToProject = () => {
    const id = keys[currentIndex];
    navigate(`/projects/${id}`);
  };

  const goToPortfolio = () => {
    navigate('/portfolio');
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <button className="nav-btn left" onClick={handlePrev}>‹</button>

        {keys.map((key, idx) => {
          const project = projects[key];
          const isActive = idx === currentIndex;
          return (
            <img
              key={key}
              src={project.images[0]}
              alt={project.title}
              className={`carousel-image ${isActive ? 'active' : 'inactive'}`}
              onClick={isActive ? goToProject : null}
            />
          );
        })}

        <button className="nav-btn right" onClick={handleNext}>›</button>
      </div>

      <button className="portfolio-btn" onClick={goToPortfolio}>Go to Portfolio</button>
    </div>
  );
}
