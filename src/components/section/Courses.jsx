import React from "react";
import CoursesCard from "../cards/courses/CoursesCard";
import { source } from "framer-motion/client";

function Courses({ darkMode }) {
  const courses = [
      {
        date: "November 22, 2023",
        title: "Udemy",
        description: "Udemy is a platform that allows instructors to host online courses on their preferred topics. Instructors can upload videos and other educational material.",
        source:"#",
      },
      {
        date: "November 22, 2023",
        title: "Udemy",
        description: "Udemy is a platform that allows instructors to host online courses on their preferred topics. Instructors can upload videos and other educational material.",
        source:"#",
      },
      {
        date: "November 22, 2023",
        title: "Udemy",
        description: "Udemy is a platform that allows instructors to host online courses on their preferred topics. Instructors can upload videos and other educational material.",
        source:"#",
      },
      ];
  return (
    <div className="flex flex-col pt-4 gap-y-3 lg:gap-y-4 lg:pt-6">
      <h1 className="text-2xl font-semibold sm:text-3xl md:text-3xl lg:text-4xl">
        My IT Learning Journey
      </h1>
      <p className="font-light lg:text-lg">
        Here are some of the key courses I completed during my IT studies that
        helped shape my skills and knowledge.
      </p>
     <div className="flex flex-col p-5 lg:gap-x-14 lg:w-full">
        {courses.map((courses, index) => (
          <CoursesCard key={index} {...courses} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
