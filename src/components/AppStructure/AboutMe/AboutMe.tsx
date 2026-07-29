import { Box } from "@mui/material";
import "./AboutMe.scss";

const skillGroups = [
  {
    label: "Data Systems & Databases",
    skills: ["SQL", "Schema Design", "Relational Databases", "Geodatabase Architecture"],
  },
  {
    label: "Programming & Automation",
    skills: ["Python", "Pandas", "GeoPandas", "R", "ETL/ELT Pipelines", "Streamlit"],
  },
  {
    label: "Cloud & Streaming Data",
    skills: ["Google Cloud Platform", "BigQuery", "Cloud Run", "Live Data Streaming", "APIs"],
  },
  {
    label: "Geospatial",
    skills: ["ArcGIS Pro", "Spatial Analysis", "Vector GIS", "Map Production"],
  },
];

export default function AboutMe() {
  return (
    <Box id="aboutme-id" className="aboutme-container">
      <span className="section-eyebrow">// about</span>
      <h2>About Me</h2>
      <Box className="aboutme-text">
        <p>
          I'm a Data Systems Developer and Environmental Engineer (E.I.T.) with a Master's in Civil and
          Environmental Engineering and 7+ years designing, automating, and maintaining database
          architectures and data-streaming pipelines. I specialize in turning complex environmental data
          into reliable, scalable systems and user-facing analytical applications &mdash; with expertise in
          programmatic GIS, Python, SQL, and cloud-native data pipelines built for high-stakes
          decision-making.
        </p>
      </Box>
      <Box className="aboutme-skills">
        {skillGroups.map((group) => (
          <Box className="skill-group" key={group.label}>
            <span className="skill-group-label">{group.label}</span>
            <Box className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
