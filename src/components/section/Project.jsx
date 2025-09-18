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
        "TaskFlow is a modern, user-friendly task management application designed to help individuals.",
      link: "#",
    },
    {
      image: picture2,
      gradient: gradientImage2,
      title: "Finance Tracker",
      description:
        "A finance tracker app that allows users to monitor expenses and manage budgets with ease.",
      link: "#",
    },
    {
      image: picture3,
      gradient: gradientImage3,
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing skills, projects, and experiences with a clean UI design.",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col gap-y-3 lg:gap-y-4 lg:pt-6 pt-4">
      <div>
        <p className={`text-base lg:text-xl font-normal inline px-3 py-1 rounded-xl ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}>
          My Projects
        </p>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold">
        Check out my latest work
      </h1>
      <p className="lg:text-xl font-light">
        I’ve worked on a wide range of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>

      {/* ✅ Auto-loop projects */}
      <div className="text-[#2e2e2e] flex flex-col lg:grid lg:grid-cols-3 gap-y-6 lg:gap-x-14 lg:flex-row lg:w-full">
        {projects.map((project, index) => (
          <Projectcard key={index} {...project} />
        ))}
      </div>
      <a className="underline mt-2" href="">See more</a>
    </div>
  );
}

export default Project;
