import "./PersonalProjects.scss";
import { Box } from "@mui/material";

export default function PersonalProjects() {
  return (
    <Box id="projects-id">
      <h2>Personal Projects</h2>
      <Box className="projects-container">
        <Box className="usarealestate-project">
          <Box className="project-text">
            <h3 className="project-name">USA Real Estate Price Predicition Model</h3>
            <Box className="project-content">
              <p>Machine learning predictive model on real estate cost using scikit-learn.</p>
            </Box>
            <a className="project-button" href="https://github.com/ryjamj/ML-USA-Real-Estate-Dataset?tab=readme-ov-file" target="_blank">
              View Project
            </a>
          </Box>
        </Box>

        <Box className="bbc-project">
          <Box className="project-text">
            <h3 className="project-name">BBC News Clone</h3>
            <Box className="project-content">
              <p>This is an html personal project to clone of the BBC website</p>
            </Box>
            <a className="project-button" href="https://www.bbc.com/news" target="_blank">
              View Project
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
