import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

import Skills from "./components/SkillsList";
import ProjectPage from "./components/ProjectPage";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='skills' element={<Skills />} />
        <Route path='/about' element={<About />} />
        <Route path='projects' element={<ProjectPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
