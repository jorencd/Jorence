import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/section/Hero'
import About from './components/section/About'
import Skills from './components/section/Skills'
import Project from './components/section/Project'

function App() {
  return (
    <div className="
    flex 
    flex-col
    justify-center 
    items-center 
    px-10 
    sm:px-28 
    md:px-40 
    lg:px-56
    pt-10
    gap-y-10">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
