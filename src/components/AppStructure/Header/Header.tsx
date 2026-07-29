import "./Header.scss";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box className="header-container">
      <nav>
        <span className="header-brand">ryan_james</span>
        <ul>
          <li>
            <a href="#aboutme-id">./about</a>
          </li>
          <li>
            <a href="#experience-id">./experience</a>
          </li>
          <li>
            <a href="#projects-id">./projects</a>
          </li>
          <li>
            <a href="#contact-id">./contact</a>
          </li>
        </ul>
      </nav>
    </Box>
  );
}
