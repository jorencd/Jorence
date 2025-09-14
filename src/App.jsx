import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Project from "./components/section/Project";
import Courses from "./components/section/Courses";
import Contact from "./components/section/Contact";
import Footer from "./components/footer/Footer";
import AnimateOnScroll from "./components/AnimateOnScroll";

function App() {
  return (
    <div className="flex flex-col">
      <div
        className="
        flex 
        flex-col
        justify-center 
        items-center 
        px-10 
        sm:px-28 
        md:px-40 
        lg:px-56
        pt-10
        gap-y-10"
      >
        <Navbar />

        <AnimateOnScroll><Hero /></AnimateOnScroll>
        <AnimateOnScroll delay={0.1}><About /></AnimateOnScroll>
        <AnimateOnScroll delay={0.2}><Skills /></AnimateOnScroll>
        <AnimateOnScroll delay={0.3}><Project /></AnimateOnScroll>
        <AnimateOnScroll delay={0.4}><Courses /></AnimateOnScroll>
        <AnimateOnScroll delay={0.5}><Contact /></AnimateOnScroll>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
