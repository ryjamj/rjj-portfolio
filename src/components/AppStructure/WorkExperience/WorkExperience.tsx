import * as React from "react";
import ImageSlider from "../../Utilities/ImageSlider";
import WorkImages from "../../Data/WorkImages";
import ThesisImages from "../../Data/ThesisImages";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./WorkExperience.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ pt: 4 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function WorkExperience() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box id="experience-id" className="experience-container">
      <span className="section-eyebrow">experience</span>
      <h2>Work Experience</h2>
      <Box className="experience-tabs-wrap">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="work experience tabs"
          TabIndicatorProps={{ style: { backgroundColor: "var(--accent)" } }}
        >
          <Tab
            label="Water Data Exchange Program"
            {...a11yProps(0)}
            sx={{
              fontFamily: "var(--font-mono)",
              textTransform: "none",
              color: "var(--text-secondary)",
              "&.Mui-selected": { color: "var(--accent)" },
            }}
          />
          <Tab
            label="Utah State University"
            {...a11yProps(1)}
            sx={{
              fontFamily: "var(--font-mono)",
              textTransform: "none",
              color: "var(--text-secondary)",
              "&.Mui-selected": { color: "var(--accent)" },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ImageSlider>
          {WorkImages.map((image, index) => {
            return <img className="slider-item-img" key={index} src={image.src} alt={image.imgAlt} />;
          })}
        </ImageSlider>
        <p>
          For over five years I worked for the Western States Water Council (WSWC), a government entity
          whose purpose is to create effective cooperation among western states in the conservation,
          development, and management of water resources. As lead systems analyst for the Water Data
          Exchange (WaDE) program, I designed database schemas to normalize, ingest, and manage millions
          of highly variable administrative and environmental records across western state agencies. I
          built and maintained automated data-cleaning and validation pipelines in Python and SQL to
          enforce database integrity, and partnered with cross-functional technical teams to design and
          scale spatial data interfaces for decision-makers.
        </p>
        <a href="https://westernstateswater.org/wade/" target="_blank" rel="noreferrer">
          <h3>Water Data Exchange (WaDE) Program</h3>
        </a>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ImageSlider>
          {ThesisImages.map((image, index) => {
            return <img className="slider-item-img" key={index} src={image.src} alt={image.imgAlt} />;
          })}
        </ImageSlider>
        <p>
          For my Master's research, I studied how inelastic price responses, demand hardening, and poor
          public awareness reduce the effectiveness of water conservation strategies. I linked household
          survey, municipal billing, aerial imagery, weather, and appliance flow data together to build an
          agent-based model of household water use. I found that households with stronger conservation
          attitudes, peer support, and more opportunities saved the most water &mdash; and that peer
          pressure drove greater savings than manager policies alone, since small, diverse social networks
          could better regulate outlier households.
        </p>
        <a
          href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020EF001883"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Thesis: Agent-Based Model to Manage Household Water Use</h3>
        </a>
      </CustomTabPanel>
    </Box>
  );
}
