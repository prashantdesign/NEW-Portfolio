import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { top6Projects, processGDriveLink, Project } from "./utils/portfolioData";

export const MasonryGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="masonry-grid">
      {projects.map((project, index) => (
        <div className="masonry-item" key={index}>
          <div className="masonry-content">
            <div className="masonry-image-wrapper">
              <WorkImage image={processGDriveLink(project.image)} alt={project.title} />
            </div>
            <div className="masonry-details">
              <span className="masonry-category">{project.category}</span>
              <h4>{project.title}</h4>
              <p className="masonry-tools">{project.tools}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Work = () => {
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Smooth scroll logic is handled by lenis, but we can animate the page entry in the other component if we want.

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        {/* Top 6 Projects Masonry Grid */}
        <MasonryGrid projects={top6Projects} />

        {/* View More Button */}
        <div className="view-more-container">
          <button
            ref={buttonRef}
            className="view-more-btn"
            onClick={() => navigate("/projects")}
            data-cursor="disable"
          >
            <div className="btn-content">
              <span>View More</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
