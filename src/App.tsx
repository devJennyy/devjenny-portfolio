import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import AboutMeCard from "./pages/AboutMeCard";
import ProjectsOldVersion from "./pages/ProjectsOldVersion";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="w-full absolute z-0">
        <div className="w-[22.3rem] h-[22.3rem] bg-[#2A3E84] rounded-full top-[-4rem] left-[-4rem] absolute blur-[10rem] object-cover"></div>
        <div className="w-[22.3rem] h-[22.3rem] bg-[#2A3E84] rounded-full top-[-4rem] left-[70rem] absolute blur-[10rem] object-cover"></div>
        <div className="w-[22.3rem] h-[22.3rem] bg-[#192065] rounded-full top-[14rem] left-[60rem] absolute blur-[10rem] object-cover"></div>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/about-me-card" element={<AboutMeCard />} />
        <Route path="/work-experiences" element={<Experience />} />
        <Route path="/projects-oldversion" element={<ProjectsOldVersion />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
