import { Box } from "@mui/material";
import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <Box id="aboutme-id" className="aboutme-container">
      <h2>About Me</h2>
      <Box className="aboutme-text">
        <p>
          Professional experience with extracting, transforming, and loading data to deliver insight and solutions for clientele. Passionate about delivering engineered visuals and web applications that produce best practice outcomes. Proven ability to quickly adapt and learn emerging technologies
          and technical concepts.
        </p>
      </Box>
      <Box className="aboutme-list">
        <ul>
          <li>
            <b>Software Languages:</b> Python, SQL, R, HTML, CSS, JavaScript, React, C#
          </li>
          <li>
            <b>Analytics Software</b>: Tableau{" "}
          </li>
          <li>
            <b>UX & UI Design</b>: Adobe XD{" "}
          </li>
          <li>
            <b>Geospatial</b>: ArcGIS Pro, ArcGIS Online{" "}
          </li>
        </ul>
      </Box>
    </Box>
  );
}
