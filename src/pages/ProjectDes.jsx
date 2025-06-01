// pages/ProjectDes.jsx
import { useParams } from 'react-router-dom';
import { projects } from '../datas/ProjectData';
import { Slideshows } from '../components/projectdetails/Slideshows';
import { ArtGallery } from '../components/projectdetails/ArtGallery';
import '../components/projectdetails/projectdetails.css';
import './ProjectDes.css';

export function ProjectDes() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-detail">
      <div className="topsection">
        <h1 className="project_title">{project.title}</h1>
        <img src={project.images[0]} alt={project.title} className="cover_img" />
        <p className="project_des">{project.description}</p>
      </div>

      <div className="bottomsection">
        {/* <p className="project_yr">{project.year}</p> */}
        <Slideshows project={project} />
        <ArtGallery artGallery={project.artGallery} />
      </div>
    </div>
  );
}
