import "./Header.scss";
import { Box } from "@mui/material";


export default function Header() {
  return (
    <Box className="header-container">
      <nav>
        <ul>
          <li>
            <a href="#aboutme-id">About Me</a>
          </li>
          <li>
            <a href="#experience-id">Work Experience</a>
          </li>
          <li>
            <a href="#projects-id">Personal Projects</a>
          </li>
          <li>
            <a href="#contact-id">Contact Me</a>
          </li>
        </ul>
      </nav>
    </Box>
  );
}
