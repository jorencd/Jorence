import { div } from "framer-motion/client";

function Skills({ darkMode }) {
  return (
    <div className="flex flex-col pt-4 gap-y-3 lg:gap-y-6 lg:pt-6">
      <h1 className="text-xl font-normal sm:text-3xl md:text-3xl lg:text-4xl">
        Tech Stack
      </h1>
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="text-xl tab hover:text-[#E3B555] focus:text-[#E3B555]"
          aria-label="Front end"
        />
        <div className="p-10 tab-content">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="text-xl tab hover:text-[#E3B555] focus:text-[#E3B555]"
          aria-label="Back end"
          defaultChecked
        />
        <div className="p-10 tab-content">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="text-xl tab hover:text-[#E3B555] focus:text-[#E3B555]"
          aria-label="Tools"
        />
        <div className="p-10 tab-content">
          Tab content 3
        </div>
      </div>
    </div>
  );
}

export default Skills;
