import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Project from "./components/section/Project";
import Courses from "./components/section/Courses";
import Contact from "./components/section/Contact";
import Carousel from "./components/carousel/Carousel";
import AnimateOnScroll from "./components/AnimateOnScroll";
import line from "./assets/line/line2.svg";
import Footer from "./components/footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        darkMode
          ? "bg-[#0D1117] text-[#dfdfdf] border-white"
          : "bg-[#f5f5f5] text-[#1f1f1f]"
      }`}
    >
      <div className="flex flex-col justify-center px-10 pt-10 sm:px-28 md:px-40 lg:px-56 gap-y-15">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <AnimateOnScroll>
          <div id="home" className="z-50">
            <Hero />
          </div>
        </AnimateOnScroll>

        <div className="absolute bottom-0 z-0 w-full transform -translate-x-1/2 lg:top-60 md:bottom-0 sm:bottom-0 left-1/2">
          <img
            src={line}
            alt="Line SVG"
            className="z-0 object-contain w-full transition-all duration-300 ease-in-out"
          />
        </div>

        <AnimateOnScroll>
          <div className="z-50">
            <Carousel darkMode={darkMode} />
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll delay={0.1}>
          <div className="z-50" id="about">
            <About darkMode={darkMode} />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <div className="z-50" id="skills">
            <Skills darkMode={darkMode} />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <div className="z-50" id="portfolio">
            <Project darkMode={darkMode} />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.4}>
          <div className="z-50" id="courses">
            <Courses darkMode={darkMode} />
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.5}>
          <div className="z-50" id="contact">
            <Contact darkMode={darkMode} />
          </div>
        </AnimateOnScroll>
        <div>
          <div>
            <Footer darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
