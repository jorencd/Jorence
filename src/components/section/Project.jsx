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
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "#",
    },
    {
      image: picture2,
      gradient: gradientImage2,
      title: "Finance Tracker",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "#",
    },
    {
      image: picture3,
      gradient: gradientImage3,
      title: "Portfolio Website",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col pt-4 gap-y-3 lg:gap-y-6 lg:pt-6">
      <h1 className="text-2xl font-semibold sm:text-3xl md:text-3xl lg:text-4xl">
        Check out my latest work
      </h1>
      <p className="font-light lg:text-lg">
        I’ve worked on a wide range of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>

      {/* ✅ Auto-loop projects */}
      <div className="text-[#2e2e2e] flex flex-col lg:grid lg:grid-cols-3 gap-y-6 lg:gap-x-14 lg:flex-row lg:w-full">
        {projects.map((project, index) => (
          <Projectcard key={index} {...project} darkMode={darkMode} />
        ))}
      </div>
      <a className="mt-2 underline" href="">See more</a>
    </div>
  );
}

export default Project;
