import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. Graphic Designer (Intern)</h4>
                <h5>Kaachal Exporters Pvt Ltd</h5>
              </div>
              <h3>2021-22</h3>
            </div>
            <p>
              Collaborated with teams to create cohesive brand designs. Produced digital graphics for websites, social media channels, and online advertisements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer (Remote)</h4>
                <h5>ZETO & Maloo Group</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Leveraged AI to enhance product images across e-commerce platforms. Developed compelling product listings for Amazon and Flipkart, and contributed to visual designs including web layouts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>Bloomberry & Freelance</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing innovative graphics for online platforms and managing social media accounts. Continuously generating AI-powered images tailored to client specifications and boosting audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
