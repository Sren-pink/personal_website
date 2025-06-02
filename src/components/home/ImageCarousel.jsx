import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '@/datas/ProjectData';
import './ImageCarousel.css';

const orderedKeys = [
  'pick-your-pc',
  'recovered',
  'pet-care',
  'fictional-object',
  'road-safety',
  'routsy',
  'dreams',
];

function ImageCarousel() {
  const navigate = useNavigate();
  const allProjects = orderedKeys.map((key) => projects[key]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);

  const extendedProjects = [
    allProjects[allProjects.length - 1],
    ...allProjects,
    allProjects[0],
  ];

  const slideTo = (index) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
  };

  const prevImage = () => slideTo(currentIndex - 1);
  const nextImage = () => slideTo(currentIndex + 1);

  useEffect(() => {
    const track = trackRef.current;
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
      if (currentIndex === 0) {
        setCurrentIndex(allProjects.length);
      } else if (currentIndex === allProjects.length + 1) {
        setCurrentIndex(1);
      }
    };

    if (track) {
      track.addEventListener('transitionend', handleTransitionEnd);
    }
    return () => {
      if (track) {
        track.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [currentIndex, allProjects.length]);

  const getTransform = () => {
  const offset = currentIndex * (70 + 2); // width + gap
  const peekOffset = (100 - 100) / 2; // center 70vw in 100vw space
  return `translateX(-${offset - peekOffset}vw)`;
};

  return (
    <div className="carousel-wrapper">
      <button className="carousel-button left" onClick={prevImage}>←</button>

      <div className="carousel-container">
        <div
          className={`carousel-track ${isTransitioning ? 'transition' : 'no-transition'}`}
          style={{ transform: getTransform() }}
          ref={trackRef}
        >
          {extendedProjects.map((project, index) => {
            const image = project?.images?.[0];
            if (!image) return null;

            const realIndex = (index - 1 + allProjects.length) % allProjects.length;
            const isActive = realIndex === ((currentIndex - 1 + allProjects.length) % allProjects.length);

            return (
              <div className="carousel-item" key={`${project.id}-${index}`}>
                <img
                  src={image}
                  alt={project.title}
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className={`carousel-img ${isActive ? 'active' : ''}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <button className="carousel-button right" onClick={nextImage}>→</button>

      <button className="carousel-link-button" onClick={() => navigate('/portfolio')}>
        Portfolio
      </button>
    </div>
  );
}

export default ImageCarousel;
