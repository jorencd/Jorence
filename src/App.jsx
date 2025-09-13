import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/section/Hero'

function App() {
  return (
    <div className="flex justify-center items-center px-10 sm:px-28 md:px-40 lg:px-56">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
