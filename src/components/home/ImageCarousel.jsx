// ImageCarousel.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../datas/ProjectData";
import "./ImageCarousel.css";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + projectImages.length) % projectImages.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % projectImages.length
    );
  };

  const handleClick = () => {
    const selectedProject = projectImages[currentIndex];
    navigate(`/project/${selectedProject.id}`);
  };

  const projectImages = Object.values(projects).map((project) => ({
    id: project.id,
    image: project.images[0],
  }));

  return (
    <div className="carousel-wrapper">
      <button className="carousel-button left" onClick={handlePrev}>
        ❮
      </button>
      <div className="carousel-container">
        {projectImages.map((project, index) => {
          const isCenter = index === currentIndex;
          const position =
            (index - currentIndex + projectImages.length) %
            projectImages.length;

          const className = `carousel-item ${
            isCenter ? "center" : position === 1 || position === projectImages.length - 1 ? "side" : "hidden"
          }`;

          return (
            <img
              key={project.id}
              src={project.image}
              alt="project preview"
              className={className}
              onClick={isCenter ? handleClick : undefined}
            />
          );
        })}
      </div>
      <button className="carousel-button right" onClick={handleNext}>
        ❯
      </button>
      <button
        className="portfolio-button"
        onClick={() => navigate("/portfolio")}
      >
        Portfolio
      </button>
    </div>
  );
}