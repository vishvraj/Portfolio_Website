import './App.css';
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/themes';
import Navbar from './components/Navbar/navbar';
import Hero from './components/HeroSection/Hero';
import Skills from './components/Skills/skills';
import Education from './components/Education/education';
import Experience from './components/Experience/experience';
import Projects from "./components/Projects/projects";
import ProjectDetails from "./components/ProjectDetails/projectDeatils";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router } from 'react-router-dom';


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
background: ${({ theme }) => theme.gradient};
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
` ;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar toggleTheme={toggleTheme} />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state 
          && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;









