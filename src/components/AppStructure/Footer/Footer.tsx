import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.scss";

const socialLinks = [
  {
    id: 1,
    icon: <GitHubIcon />,
    url: "https://github.com/ryjamj",
  },
  {
    id: 2,
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/ryan-james-063b339a/",
  },
];

export default function Footer() {
  return (
    <Box className="footer-container">
      <Box className="copyright">This site &copy; 2024 Ryan James.</Box>
      <Box className="social-media-list">
        <ul>
          {socialLinks.map((link) => (
            <a href={link.url} target="__blank" key={link.id}>
              <i>{link.icon}</i>
            </a>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
