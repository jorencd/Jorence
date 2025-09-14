import picture1 from "../../../assets/projectPictures/Screenshot 2024-12-03 234840.png";
import picture2 from "../../../assets/projectPictures/Screenshot 2024-12-15 092329.png";
import picture3 from "../../../assets/projectPictures/Screenshot 2025-01-31 124715.png";
import "./Projectcard.css";

function Project() {
  return (
    <div className="flex flex-col lg:items-center lg:justify-center gap-y-6 lg:gap-x-8">
      <div className="flex flex-col gap-y-6 lg:gap-x-8 lg:flex-row lg:w-3/4">
        <div className="card flex flex-row lg:flex-col gap-x-4 rounded-lg">
          <img
            className="w-1/4 lg:w-full object-cover rounded-l-lg lg:rounded-l-none"
            src={picture1}
            alt=""
          />
          <div className="flex flex-col justify-between gap-y-2 py-2 pr-4 lg:px-5 lg:py-4">
            <h1 className="font-medium text-xs lg:text-sm">
              TaskFlow - Task Management Application
            </h1>
            <p className="text-xs lg:text-sm font-light text-justify">
              TaskFlow is a modern, user-friendly task management application
              designed to help individuals
            </p>
            <span className="text-xs lg:text-sm underline decoration-1 font-medium">
              View Project
            </span>
          </div>
        </div>
        <div className="card flex flex-row lg:flex-col gap-x-4 rounded-lg">
          <img
            className="w-1/4 lg:w-full object-cover rounded-l-lg lg:rounded-l-none"
            src={picture2}
            alt=""
          />
          <div className="flex flex-col justify-between gap-y-2 py-2 pr-4 lg:px-5 lg:py-4">
            <h1 className="font-medium text-xs lg:text-sm">
              TaskFlow - Task Management Application
            </h1>
            <p className="text-xs lg:text-sm font-light text-justify">
              TaskFlow is a modern, user-friendly task management application
              designed to help individuals
            </p>
            <span className="text-xs lg:text-sm underline decoration-1 font-medium">
              View Project
            </span>
          </div>
        </div>
        <div className="card flex flex-row lg:flex-col gap-x-4 rounded-lg">
          <img
            className="w-1/4 lg:w-full object-cover rounded-l-lg lg:rounded-l-none"
            src={picture3}
            alt=""
          />
          <div className="flex flex-col justify-between gap-y-2 py-2 pr-4 lg:px-5 lg:py-4">
            <h1 className="font-medium text-xs lg:text-sm">
              TaskFlow - Task Management Application
            </h1>
            <p className="text-xs lg:text-sm font-light text-justify">
              TaskFlow is a modern, user-friendly task management application
              designed to help individuals
            </p>
            <span className="text-xs lg:text-sm underline decoration-1 font-medium">
              View Project
            </span>
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
