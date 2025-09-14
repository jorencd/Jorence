import picture1 from "../../../assets/projectPictures/Screenshot 2024-12-03 234840.png";
import picture2 from "../../../assets/projectPictures/Screenshot 2024-12-15 092329.png";
import picture3 from "../../../assets/projectPictures/Screenshot 2025-01-31 124715.png";
import gradientImage1 from "../../../assets/projectPictures/gradientblue.png";
import gradientImage2 from "../../../assets/projectPictures/Gradientvio.png";
import gradientImage3 from "../../../assets/projectPictures/gradientViolet.png";
import "./Projectcard.css";

function Project() {
  return (
    <div className="flex flex-col lg:items-center lg:justify-center gap-y-6 lg:gap-x-8">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-6 lg:gap-x-8 lg:flex-row lg:w-3/4">
        <div className="card flex flex-col gap-x-4 rounded-xl p-3">
          <div className="relative w-full">
            {/* Base image */}
            <img
              className="w-full object-cover rounded-l-lg lg:rounded-l-none"
              src={picture1}
              alt=""
            />
            {/* Gradient image overlay */}
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-l-lg lg:rounded-l-none pointer-events-none"
              src={gradientImage1}
              alt="gradient overlay"
            />
          </div>

          <div className="flex flex-col justify-between gap-y-2 py-2 pr-4 lg:px-5 lg:py-4">
            <h1 className="font-medium text-sm lg:text-sm">
              TaskFlow - Task Management Application
            </h1>
            <p className="text-xs lg:text-sm font-light text-justify">
              TaskFlow is a modern, user-friendly task management application
              designed to help individuals
            </p>
            <div>
              <button className="text-xs lg:text-sm bg-black text-white px-4 py-2 rounded-full">
                View Project
              </button>
            </div>
          </div>
        </div>

        <div className="card flex flex-col gap-x-4 rounded-xl p-3">
          <div className="relative w-full">
            {/* Base image */}
            <img
              className="w-full object-cover rounded-l-lg lg:rounded-l-none"
              src={picture2}
              alt=""
            />
            {/* Gradient image overlay */}
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-l-lg lg:rounded-l-none pointer-events-none"
              src={gradientImage2}
              alt="gradient overlay"
            />
          </div>
          
          <div className="flex flex-col justify-between gap-y-2 py-2 pr-4 lg:px-5 lg:py-4">
            <h1 className="font-medium text-sm lg:text-sm">
              TaskFlow - Task Management Application
            </h1>
            <p className="text-xs lg:text-sm font-light text-justify">
              TaskFlow is a modern, user-friendly task management application
              designed to help individuals
            </p>
            <div>
              <button className="text-xs lg:text-sm bg-black text-white px-4 py-2 rounded-full">
                View Project
              </button>
            </div>
          </div>
        </div>
        <div className="card flex flex-col gap-x-4 rounded-xl p-3">
          <div className="relative w-full">
            {/* Base image */}
            <img
              className="w-full object-cover rounded-l-lg lg:rounded-l-none"
              src={picture3}
              alt=""
            />
            {/* Gradient image overlay */}
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-l-lg lg:rounded-l-none pointer-events-none"
              src={gradientImage3}
              alt="gradient overlay"
            />
          </div>
          <div className="flex flex-col justify-between gap-y-2 py-2 pr-4 lg:px-5 lg:py-4">
            <h1 className="font-medium text-sm lg:text-sm">
              TaskFlow - Task Management Application
            </h1>
            <p className="text-xs lg:text-sm font-light text-justify">
              TaskFlow is a modern, user-friendly task management application
              designed to help individuals
            </p>
            <div>
              <button className="text-xs lg:text-sm bg-black text-white px-4 py-2 rounded-full">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-medium underline decoration-1">See more</p>
      </div>
    </div>
  );
}

export default Project;
