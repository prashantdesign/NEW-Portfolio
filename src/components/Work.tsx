import { useState, useRef, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack } from "react-icons/md";
import { top6Projects, allProjects, processGDriveLink, Project } from "./utils/portfolioData";
import { gsap } from "gsap";

const MasonryGrid = ({ projects }: { projects: Project[] }) => {
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
  const [showFullPortfolio, setShowFullPortfolio] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (showFullPortfolio && overlayRef.current) {
      // Animate opening
      gsap.fromTo(
        overlayRef.current,
        {
          clipPath: "circle(0% at 50% 90%)",
          opacity: 0,
          display: "none"
        },
        {
          clipPath: "circle(150% at 50% 90%)",
          opacity: 1,
          display: "block",
          duration: 1,
          ease: "power3.inOut"
        }
      );
    } else if (!showFullPortfolio && overlayRef.current) {
      // Animate closing
      gsap.to(overlayRef.current, {
        clipPath: "circle(0% at 50% 90%)",
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          if (overlayRef.current) overlayRef.current.style.display = "none";
        }
      });
    }
  }, [showFullPortfolio]);

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
            onClick={() => setShowFullPortfolio(true)}
            data-cursor="disable"
          >
            <div className="btn-content">
               <span>View More</span>
            </div>
          </button>
        </div>
      </div>

      {/* Full Portfolio Overlay */}
      <div 
        ref={overlayRef}
        className="full-portfolio-overlay" 
        style={{ display: "none" }}
      >
        <div className="full-portfolio-header">
           <button 
             className="back-button"
             onClick={() => setShowFullPortfolio(false)}
             data-cursor="disable"
           >
             <MdArrowBack /> <span>Back</span>
           </button>
           <h2>All <span>Projects</span></h2>
        </div>
        
        <div className="full-portfolio-content section-container">
           <MasonryGrid projects={allProjects} />
        </div>
      </div>
    </div>
  );
};

export default Work;
