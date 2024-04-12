import { Box } from "@mui/material";
import "./Hero.scss";
import RyanJheadershot from "../../../assets/RyanJheadshot.png";

export default function Hero() {
  return (
    <Box className="hero-container">
      <Box className="hero-section">
        <img src={RyanJheadershot} alt="RyanJheadershot" />
        <h1>Hi! My name is Ryan. I work with data, machine learning and web development</h1>
      </Box>
    </Box>
  );
}
