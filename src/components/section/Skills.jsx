import { useState } from "react";
import Techstack from "../techstack/Techstack";
import IconCarousel from "../carousel/IconCarousel";
import { Icon } from "@iconify/react";

function Skills({ darkMode }) {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };

  // Data for Techstack in different categories
  const frontEndTech = [
    { svg: <Icon icon="logos:react" width="30" height="30" />, text: "React" },
    {
      svg: <Icon icon="vscode-icons:file-type-html" width="30" height="30" />,
      text: "HTML",
    },
    { svg: <Icon icon="devicon:css3" width="30" height="30" />, text: "CSS" },
    {
      svg: <Icon icon="skill-icons:flutter-dark" width="30" height="30" />,
      text: "Flutter",
    },
    {
      svg: <Icon icon="devicon:angular" width="30" height="30" />,
      text: "Angular",
    },
  ];

  const backEndTech = [
    {
      svg: <Icon icon="skill-icons:nodejs-dark" width="30" height="30" />,
      text: "Node.js",
    },
    {
      svg: <Icon icon="material-icon-theme:php" width="30" height="30" />,
      text: "PHP",
    },
    {
      svg: <Icon icon="skill-icons:mysql-dark" width="30" height="30" />,
      text: "MySQL",
    },
    {
      svg: <Icon icon="skill-icons:postgresql-dark" width="30" height="30" />,
      text: "Postgre",
    },
  ];

  const toolsTech = [
    {
      svg: <Icon icon="material-icon-theme:git" width="30" height="30" />,
      text: "Git",
    },
    {
      svg: (
        <Icon
          icon="flowbite:github-solid"
          width="30"
          height="30"
          className="#000"
        />
      ),
      text: "GitHub",
    },
    {
      svg: <Icon icon="devicon:figma" width="30" height="30" />,
      text: "Figma",
    },
    {
      svg: <Icon icon="skill-icons:supabase-dark" width="30" height="30" />,
      text: "Supabase",
    },
    {
      svg: (
        <Icon icon="vscode-icons:file-type-firebase" width="30" height="30" />
      ),
      text: "Firebase",
    },
  ];

  const allTech = [
    {
      svg: (
        <Icon
          icon="uil:react"
          width="30"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon
          icon="flowbite:html-solid"
          width="30"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon
          icon="flowbite:css-solid"
          width="30"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon
          icon="material-symbols:flutter"
          width="30"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon
          icon="akar-icons:node-fill"
          width="30"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon
          icon="akar-icons:php-fill"
          width="30"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon
          icon="lineicons:mysql"
          width="30"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon
          icon="carbon:database-postgresql"
          width="30"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon
          icon="octicon:logo-github-16"
          width="84.38"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon
          icon="solar:figma-bold-duotone"
          width="30"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon
          icon="ri:supabase-fill"
          width="30"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon
          icon="devicon-plain:firebase-wordmark"
          width="30"
          height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
    {
      svg: (
        <Icon icon="devicon-plain:angular-wordmark" width="30" height="30"
          className={`${darkMode ? "text-neutral-500" : "text-neutral-600"}`}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col pt-4 pb-4 gap-y-3 lg:gap-y-6 lg:pt-6">
      <h1 className="text-xl font-semibold text-center lg:text-3xl">
        Tech Stack
      </h1>
      <div className={`flex justify-center mt-4 rounded ${darkMode ? "border-b border-t border-neutral-400" : "border-b border-t border-neutral-400"} `}>
        <ul className={`flex justify-between w-full font-medium lg:gap-x-10 gap-x-5 ${darkMode ? "text-neutral-400" : "text-neutral-700"}`}>
          <li
            className={`cursor-pointer text-center w-full p-2 ${
              selected === 0 ? darkMode ? " bg-neutral-800" : "bg-neutral-300" : ""
            }`}
            onClick={() => handleClick(0)}
          >
            Front End
          </li>
          <li
            className={`cursor-pointer text-center w-full p-2 ${
              selected === 1 ? darkMode ? " bg-neutral-800" : "bg-neutral-300" : ""
            }`}
            onClick={() => handleClick(1)}
          >
            Back End
          </li>
          <li
            className={`cursor-pointer text-center w-full p-2 ${
              selected === 2 ? darkMode ? " bg-neutral-800" : "bg-neutral-300" : ""
            }`}
            onClick={() => handleClick(2)}
          >
            Tools
          </li>
        </ul>
      </div>

      {/* Conditionally render content based on the selected tab */}
      <div className="items-center w-full mt-6">
        {selected === 0 && (
          <div className="grid grid-cols-4 gap-y-6 lg:grid-cols-8 lg:gap-y-6 justify-items-center">
            {frontEndTech.map((tech, index) => (
              <Techstack
                darkMode={darkMode}
                key={index}
                svg={tech.svg}
                text={tech.text}
              />
            ))}
          </div>
        )}

        {selected === 1 && (
          <div>
            <div className="grid grid-cols-4 gap-y-6 lg:grid-cols-8 lg:gap-y-6 justify-items-center">
              {backEndTech.map((tech, index) => (
                <Techstack
                  darkMode={darkMode}
                  key={index}
                  svg={tech.svg}
                  text={tech.text}
                />
              ))}
            </div>
          </div>
        )}

        {selected === 2 && (
          <div>
            <div className="grid grid-cols-4 gap-y-6 lg:grid-cols-8 lg:gap-y-6 justify-items-center">
              {toolsTech.map((tech, index) => (
                <Techstack
                  darkMode={darkMode}
                  key={index}
                  svg={tech.svg}
                  text={tech.text}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <IconCarousel allTech={allTech} />
    </div>
  );
}

export default Skills;
