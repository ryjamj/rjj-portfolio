import "./PersonalProjects.scss";
import { Box } from "@mui/material";

export default function PersonalProjects() {
  return (
    <Box id="projects-id" className="projects-container">
      <h2>Personal Projects</h2>
      <Box className="projects-container-row">
        <Box className="usarealestate-project">
          <Box className="project-text">
            <h3>USA Real Estate Price Predicition Model</h3>
            <p>Machine learning predictive model on real estate cost using scikit-learn.</p>
            <a className="project-button" href="https://github.com/ryjamj/ML-USA-Real-Estate-Dataset?tab=readme-ov-file" target="_blank">
              View Project
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
