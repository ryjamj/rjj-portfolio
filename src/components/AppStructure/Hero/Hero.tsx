import { Box } from "@mui/material";
import "./Hero.scss";
import RyanJheadershot from "../../../assets/RyanJheadshot.png";

export default function Hero() {
  return (
    <Box className="hero-container">
      <svg
        className="hero-waveform"
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="hero-waveform-path"
          d="M0,60 L60,60 L80,20 L100,100 L120,40 L140,60 L260,60 L280,15 L300,105 L320,60 L440,60 L460,30 L480,90 L500,60 L620,60 L640,10 L660,110 L680,60 L800,60 L820,25 L840,95 L860,60 L1000,60"
          fill="none"
        />
      </svg>

      <img className="hero-headshot" src={RyanJheadershot} alt="Ryan James" />

      <span className="hero-eyebrow">// data systems developer</span>
      <h1>Ryan James, E.I.T.</h1>
      <p className="hero-subtitle">
        I design database architectures and streaming data pipelines that turn messy environmental data into
        systems people can trust for high-stakes decisions.
      </p>

      <Box className="hero-actions">
        <a className="hero-btn hero-btn-primary" href="#projects-id">
          View Projects
        </a>
        <a
          className="hero-btn hero-btn-ghost"
          href="https://github.com/ryjamj"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="hero-btn hero-btn-ghost"
          href="https://www.linkedin.com/in/ryan-james-063b339a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </Box>
    </Box>
  );
}
