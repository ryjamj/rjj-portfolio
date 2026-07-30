import "./PersonalProjects.scss";
import { Box } from "@mui/material";
import USARealEstateImg from "../../../assets/USARealEstatePredictionModel.png";
import RealTimeRiverSenorAnalyticsAIAgent from "../../../assets/RealTimeRiverSenorAnalyticsAIAgent.png";
import DontPanicLabLogo from "../../../assets/DontPanicLabLogo.png";


const projects = [
  {
    title: "GCP Data Pipeline & GenAI SQL Agent",
    tag: "python . gcp . bigquery . langchain",
    description:
      "Automated Python pipeline streaming live USGS lake data into BigQuery, with a LangChain agent that translates natural-language questions into SQL, and a Streamlit dashboard to explore the results.",
    href: "https://github.com/ryjamj",
    image: RealTimeRiverSenorAnalyticsAIAgent,
  },
  {
    title: "USA Real Estate Price Prediction Model",
    tag: "python . scikit-learn . pandas",
    description: "Feature-engineered supervised machine learning model to predict home prices across the US.",
    href: "https://github.com/ryjamj/ML-USA-Real-Estate-Dataset?tab=readme-ov-file",
    image: USARealEstateImg,
  },
  {
    title: "Volunteer-One Class Project",
    tag: "c# . typescript . html . css",
    description:
      "Sponsored by Doane University \u2014 a collaborative full-stack team project to design and build a volunteer management tool, built with agile development practices.",
    href: "https://github.com/ryjamj",
    image: DontPanicLabLogo,
  },
];

export default function PersonalProjects() {
  return (
    <Box id="projects-id" className="projects-container">
      <span className="section-eyebrow">projects</span>
      <h2>Personal Projects</h2>
      <Box className="projects-grid">
        {projects.map((project) => (
          <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
            <Box
              className="project-card-media"
              sx={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
            >
              {!project.image && <span className="project-card-media-tag">{`</>`}</span>}
            </Box>
            <Box className="project-card-body">
              <span className="project-card-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-card-link">View Project &rarr;</span>
            </Box>
          </a>
        ))}
      </Box>
    </Box>
  );
}
