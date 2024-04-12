import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./Header.scss";
import { Box } from "@mui/material";

const sections = [
  { title: "About Me", url: "#" },
  { title: "Projects", url: "#" },
  { title: "Contact", url: "#" },
];

export default function Header() {
  return (
    <Box className="header-container">
      <h1>My Protfolio</h1>
      <Toolbar component="nav" variant="dense" sx={{ justifyContent: "space-between", overflowX: "auto" }}>
        {sections.map((section) => (
          <Link className="header-links">{section.title}</Link>
        ))}
      </Toolbar>
    </Box>
  );
}
