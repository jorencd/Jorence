import Projectcard from "../cards/projectCard/Projectcard";

function Project() {
  return (
    <div className="flex flex-col gap-y-3 lg:gap-y-4 lg:pt-6 pt-4 lg:justify-center lg:items-center">
      <div className="">
        <p className="text-base lg:text-xl font-normal bg-black text-white inline px-3 py-1 rounded-xl">
          My Projects
        </p>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold">
        Check out my latest work
      </h1>
      <p className="lg:text-xl lg:text-center font-light text-gray-700">
        I’ve worked on a wide range of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      <Projectcard />
    </div>
  );
}

export default Project;
