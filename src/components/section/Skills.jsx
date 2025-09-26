import { useState } from "react";

function Skills({ darkMode }) {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="flex flex-col pt-4 gap-y-3 lg:gap-y-6 lg:pt-6">
      <h1 className="text-xl font-semibold lg:text-3xl">Tech Stack</h1>
      <div className="mt-4 ">
        <ul className={`flex font-medium lg:gap-x-10 gap-x-5`}>
          <li
            className={`cursor-pointer ${selected === 0 ? "border-b-3 border-[#E3B555]" : ""}`}
            onClick={() => handleClick(0)}
          >
            Front end
          </li>
          <li
            className={`cursor-pointer ${selected === 1 ? "border-b-3 border-[#E3B555]" : ""}`}
            onClick={() => handleClick(1)}
          >
            Back end
          </li>
          <li
            className={`cursor-pointer ${selected === 2 ? "border-b-3 border-[#E3B555]" : ""}`}
            onClick={() => handleClick(2)}
          >
            Tools
          </li>
        </ul>
      </div>

      {/* Conditionally render content based on the selected tab */}
      <div className="">
        {selected === 0 && (
          <div>
            <h2 className="text-lg font-semibold">Front End</h2>
            <p>
              front end
            </p>
          </div>
        )}

        {selected === 1 && (
          <div>
            <h2 className="text-lg font-semibold">Back End</h2>
            <p>
              back end
            </p>
          </div>
        )}

        {selected === 2 && (
          <div>
            <h2 className="text-lg font-semibold">Tools</h2>
            <p>
              tools
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
