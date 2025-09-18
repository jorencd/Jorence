import React from "react";

function Courses() {
  return (
    <div className="flex flex-col gap-y-3 lg:gap-y-4 lg:pt-6 pt-4">
      <div className="">
        <p className="text-base lg:text-xl font-normal bg-black text-white inline px-3 py-1 rounded-xl">
          Courses
        </p>
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold">
        My IT Learning Journey
      </h1>
      <p className="lg:text-xl font-light">
        Here are some of the key courses I completed during my IT studies that
        helped shape my skills and knowledge.
      </p>
    </div>
  );
}

export default Courses;
