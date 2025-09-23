import Projectcard from "../cards/projectCard/Projectcard";

import picture1 from "../../assets/projectPictures/Screenshot 2024-12-03 234840.png";
import picture2 from "../../assets/projectPictures/Screenshot 2024-12-15 092329.png";
import picture3 from "../../assets/projectPictures/Screenshot 2025-01-31 124715.png";
import gradientImage1 from "../../assets/projectPictures/gradientblue.png";
import gradientImage2 from "../../assets/projectPictures/Gradientvio.png";
import gradientImage3 from "../../assets/projectPictures/gradientViolet.png";

function Project({ darkMode }) {
  // ✅ Project data array
  const projects = [
    {
      image: picture1,
      gradient: gradientImage1,
      title: "TaskFlow",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "#",
    },
    {
      image: picture2,
      gradient: gradientImage2,
      title: "Finance Tracker",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "#",
    },
    {
      image: picture3,
      gradient: gradientImage3,
      title: "Portfolio Website",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col pt-4 gap-y-3 lg:gap-y-4 lg:pt-6">
      <p
        className={`text-xs font-semibold lg:text-sm ${
          darkMode ? "text-[#9d9d9d]" : "text-gray-600"
        }`}
      >
        PROJECT
      </p>
      <h1 className="text-2xl font-semibold sm:text-3xl md:text-3xl lg:text-4xl">
        Check out my latest work
      </h1>
      <p className="font-light lg:text-lg lg:mb-2">
        I’ve worked on a wide range of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>

      {/* ✅ Auto-loop projects */}
      <div className="text-[#2e2e2e] flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-y-6 lg:gap-x-14 lg:flex-row lg:w-full">
        {projects.map((project, index) => (
          <Projectcard key={index} {...project} darkMode={darkMode} />
        ))}
      </div>
      <a className="flex items-center mt-2 font-bold w-fit gap-x-2 group" href="#">
        <div className="px-2 py-1 transition bg-gray-900 rounded group-hover:bg-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="22"
            viewBox="0 0 12 24"
            className="text-white"
          >
            <defs>
              <path
                id="SVG1pzpbdYY"
                fill="currentColor"
                d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
              />
            </defs>
            <use
              fillRule="evenodd"
              href="#SVG1pzpbdYY"
              transform="rotate(-180 5.02 9.505)"
            />
          </svg>
        </div>
        <span className="group-hover:underline">See more</span>
      </a>
    </div>
  );
}

export default Project;
