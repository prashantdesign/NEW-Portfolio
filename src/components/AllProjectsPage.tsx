import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { allProjects } from "./utils/portfolioData";
import { MasonryGrid } from "./Work";
import Lenis from "lenis";
import "./styles/Work.css"; // Reuse masonry styles
import "./styles/AllProjectsPage.css";

const AllProjectsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Basic smooth scroll for this page if needed
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
        });

        let rafId: number;

        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="all-projects-page">
            <div className="all-projects-header-wrapper">
                <div className="header">
                    <a onClick={() => navigate("/")} className="navbar-title" data-cursor="disable">
                        PK
                    </a>
                    <a
                        href="mailto:prashantmali0753@gmail.com"
                        className="navbar-connect"
                        data-cursor="disable"
                    >
                        prashantmali0753@gmail.com
                    </a>
                    <ul>
                        <li>
                            <a onClick={() => navigate("/")}>
                                <div className="hover-link">ABOUT</div>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => navigate("/")}>
                                <div className="hover-link">WORK</div>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => navigate("/")}>
                                <div className="hover-link">CONTACT</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="full-portfolio-header-container">
                <div className="full-portfolio-header">
                    <button
                        className="back-button"
                        onClick={() => navigate("/")}
                        data-cursor="disable"
                    >
                        <MdArrowBack /> <span>Back</span>
                    </button>
                    <h2>All <span>Projects</span></h2>
                </div>
            </div>

            <div className="full-portfolio-content section-container">
                <MasonryGrid projects={allProjects} />
            </div>

            <div className="landing-circle1"></div>
            <div className="landing-circle2"></div>
        </div>
    );
};

export default AllProjectsPage;
