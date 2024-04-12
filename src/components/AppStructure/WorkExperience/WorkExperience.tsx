import "./WorkExperience.scss";
import ImageSlider from "../../Utilities/ImageSlider";
import Images from "../../Data/Images";
import { Box } from "@mui/material";

export default function WorkExperience() {
  return (
    <Box id="experience-id">
      <h2>Work Experience</h2>
      <Box className="experience-container">
        {/* <img src={WadEShot} alt="WadEShot" /> */}
        <ImageSlider>
          {Images.map((image, index) => {
            return <img key={index} src={image.src} alt={image.imgAlt} />;
          })}
        </ImageSlider>
        <p>
          For five years I have been working for the Western States Water Council (WSWC), a government entity whose purpose is to create effective cooperation among western states in the conservation, development, and management of water resources. I was a part of the Water Data Exchange (WaDE)
          program, which provides streamlined access to water rights and regulation, water supply, and water use data throughout the western states on a high level, cross regional analysis platform. My responsibilities included the following: 1) gathering, transforming, and analyzing water related
          data; 2) generating models to classify water use & user information; 3) maintain our front-end user interfaces and back-end centralized relational database and APIs; and 4) generate interactive web applications using a mixture of software skills (React, R) to aid data partners on best
          practice decision making when it comes to water resources. I have enjoyed working with the WSWC because I was able to explore and learn a variety of new technologies and practices which we have applied towards aiding both the public, private and federal agencies in improving best practices
          towards water resource data management.
        </p>
      </Box>
    </Box>
  );
}
