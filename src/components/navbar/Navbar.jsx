import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  
  return (
    <div
      className={`nav fixed top-0 left-1/2 transform -translate-x-1/2 flex items-center w-full rounded px-8 py-2 md:px-6 transition-all duration-500 ease-in-out ${
        darkMode ? "bg-[#313131a6] shadow backdrop-blur-xl" : "bg-[#dfdfdf8d] shadow backdrop-blur-xl"
      } ${showNav ? "translate-y-0" : "-translate-y-24"}`}
    >
      {/* Left - Burger Icon for Mobile */}
      <div
        className="cursor-pointer lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke={darkMode ? "#fff" : "#000"}
            strokeWidth="2"
            d="M3 12h18M3 6h18M3 18h18"
          />
        </svg>
      </div>

      {/* Centered icons */}
      <div className="flex flex-row items-center mx-auto gap-x-7 lg:gap-x-20">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-x-10">
          <li>
            <Link
              to="home" // Link to the "home" section
              smooth={true}
              duration={500}
              offset={-70} // Adjust for sticky navbar height
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about" // Link to the "about" section
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio" // Link to the "portfolio" section
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="contact" // Link to the "portfolio" section
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`absolute py-5 top-full left-1/2 transform -translate-x-1/2 w-full text-center ${darkMode ? "bg-[#313131]" : "bg-[#dfdfdf]"} ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="pb-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="pb-2">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="pb-2">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Project
            </Link>
          </li>
          <li className="pb-2">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Right - Toggle for Dark Mode (Moon Icon) */}
      <div className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M12.741 20.917a9.4 9.4 0 0 1-1.395-.105a9.141 9.141 0 0 1-1.465-17.7a1.18 1.18 0 0 1 1.21.281a1.27 1.27 0 0 1 .325 1.293a8.1 8.1 0 0 0-.353 2.68a8.27 8.27 0 0 0 4.366 6.857a7.6 7.6 0 0 0 3.711.993a1.242 1.242 0 0 1 .994 1.963a9.15 9.15 0 0 1-7.393 3.738"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
            <path
              fill="#000"
              d="M15 2h2v5h-2zm6.688 6.9l3.506-3.506l1.414 1.414l-3.506 3.506zM25 15h5v2h-5zm-3.312 8.1l1.414-1.413l3.506 3.506l-1.414 1.414zM15 25h2v5h-2zm-9.606.192L8.9 21.686l1.414 1.414l-3.505 3.506zM2 15h5v2H2zm3.395-8.192l1.414-1.414L10.315 8.9L8.9 10.314zM16 12a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default Navbar;
