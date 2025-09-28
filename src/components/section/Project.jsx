import Projectcard from "../cards/projectCard/Projectcard";

import picture1 from "../../assets/projectPictures/Interllux.png";
import picture2 from "../../assets/projectPictures/Villa.png";
import picture3 from "../../assets/projectPictures/School.png";

function Project({ darkMode }) {
  // ✅ Project data array
  const projects = [
    {
      image: picture1,
      title: "E-Commerce Website",
      description:
        "An online marketplace designed to provide a seamless shopping experience. The platform supports easy navigation, quick checkouts, and secure payment options.",
      link: "https://interllux.vercel.app/",
    },
    {
      image: picture2,
      title: "Reservation Website",
      description:
        "A website built to manage reservations for events, restaurants, and accommodations. Features include real-time availability checks, booking confirmations, and calendar integration.",
      link: "#",
    },
    {
      image: picture3,
      title: "Equipment Monitoring",
      description:
        "A web application designed to monitor the status and performance of equipment in real-time. Provides insights on maintenance schedules, usage statistics, and efficiency metrics.",
      link: "https://qc-system.vercel.app/",
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
      <div className="text-[#2e2e2e] mt-3 grid grid-cols-1 justify-items-center sm:grid-cols-2 sm:gap-x-4 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-x-6 w-full">
        {projects.map((project, index) => (
          <Projectcard key={index} {...project} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}

export default Project;
