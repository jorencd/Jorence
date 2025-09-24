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
import Footer from "./components/footer/Footer";
import AnimateOnScroll from "./components/AnimateOnScroll";
import line from "./assets/line/line.svg";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Set darkMode to true by default

  // Optional: remember user preference
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
          ? "bg-[#171717] text-[#dfdfdf] border-white"
          : "bg-[#f5f5f5] text-[#1f1f1f]"
      }`}
    >
      <div className="flex flex-col justify-center px-10 pt-10 sm:px-28 md:px-40 lg:px-56 gap-y-15">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <AnimateOnScroll>
          <Hero />
        </AnimateOnScroll>

        {/* Fixed SVG Position */}

        <div className="fixed bottom-0 z-0 w-full transform -translate-x-1/2 lg:top-60 left-1/2">
          <img
            src={line}
            alt="Wavy Line"
            className={`w-full h-auto ${
              darkMode ? "stroke-white" : "stroke-black"
            }`}
          />
        </div>
        <AnimateOnScroll>
          <Carousel darkMode={darkMode} />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <About darkMode={darkMode} />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <Skills darkMode={darkMode} />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <Project darkMode={darkMode} />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.4}>
          <Courses darkMode={darkMode} />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.5}>
          <Contact darkMode={darkMode} />
        </AnimateOnScroll>
      </div>

      <Footer />
    </div>
  );
}

export default App;
