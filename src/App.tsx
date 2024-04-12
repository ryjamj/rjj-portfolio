import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/AppStructure/Header/Header";
import Hero from "./components/AppStructure/Hero/Hero";
import AboutMe from "./components/AppStructure/AboutMe/AboutMe";
import PersonalProjects from "./components/AppStructure/PersonalProjects/PersonalProjects";
import ContactMe from "./components/AppStructure/ContactMe/ContactMe";
import Footer from "./components/AppStructure/Footer/Footer";
import WorkExperience from "./components/AppStructure/WorkExperience/WorkExperience";

export default function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <AboutMe />
      <WorkExperience />
      <PersonalProjects />
      <ContactMe />
      <Footer />
    </Box>
  );
}
