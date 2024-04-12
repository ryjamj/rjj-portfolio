import { Box } from "@mui/material";
import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <Box id="aboutme-id" className="aboutme-section">
      <h2>About Me</h2>
      <Box className="aboutme-container">
        <Box className="aboutme-text">
          <p>
            give a simple breakdown of your background education civil engineering, water science, to data analysis & ML career what brings you to
            here today / goals
          </p>
          <p>talk about your skills: geo-spatial data, python, ml, r, web development</p>
        </Box>
      </Box>
    </Box>
  );
}
