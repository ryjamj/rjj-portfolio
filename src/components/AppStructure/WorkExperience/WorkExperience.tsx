import * as React from "react";
import ImageSlider from "../../Utilities/ImageSlider";
import WorkImages from "../../Data/WorkImages";
import ThesisImages from "../../Data/ThesisImages";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
      <h2>Work Experience</h2>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Water Data Exchange Program" {...a11yProps(0)} />
          <Tab label="Utah State University" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ImageSlider>
          {WorkImages.map((image, index) => {
            return <img className="slider-item-img" key={index} src={image.src} alt={image.imgAlt} />;
          })}
        </ImageSlider>
        <p>
          For five years I have been working for the Western States Water Council (WSWC), a government entity whose purpose is to create effective cooperation among western states in the conservation, development, and management of water resources. I was a part of the Water Data Exchange (WaDE)
          program, which provides streamlined access to water rights and regulation, water supply, and water use data throughout the western states on a high level, cross regional analysis platform. My responsibilities included the following: 1) gathering, transforming, and analyzing water related
          data; 2) generating models to classify water use & user information; 3) maintain our front-end user interfaces and back-end centralized relational database and APIs; and 4) generate interactive web applications using a mixture of software skills (React, R) to aid data partners on best
          practice decision making when it comes to water resources. I have enjoyed working with the WSWC because I was able to explore and learn a variety of new technologies and practices which we have applied towards aiding both the public, private and federal agencies in improving best practices
          towards water resource data management.
        </p>
        <a href="https://westernstateswater.org/wade/" target="_blank">
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
          For school, I was studying how inelastic price responses, demand hardening, and poor public awareness reduce the effectiveness of water strategies. I did a study that identified and quantified the effects of psychological and social factors such as attitudes, peer support, opportunities to
          conserve, and encouragement on household water use. I linked household survey, municipal billing, aerial imagery, weather, and appliance flow and duration data together to create inputs into a household agent-based-model. In the study, I found that households with stronger conservation
          attitudes, peer support, and more opportunities saved the most water. Pressure from a network of peers caused more water savings compared to water manager policies, because small, diverse social networks could better regulate the behavior of outlier households within the network. Results
          suggest managers should take advantage of platforms for households to share their water use stories and information with each other, with the greatest impact coming from targeting the small fraction of households who use the most water and have the largest large potential to save water.
        </p>
        <a href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2020EF001883" target="_blank">
          <h3>Thesis: Agent-Based Model to Manage Household Water Use Through Social-Environmental Strategies of Encouragement and Peer Pressure</h3>
        </a>
      </CustomTabPanel>
    </Box>
  );
}
