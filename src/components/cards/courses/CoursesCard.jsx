import React from "react";

function CoursesCard({ date, title, description, source, darkMode }) {
  return (
    <div className="flex flex-row w-full gap-x-2">
      <div className="relative flex flex-col items-center">
        {/* Vertical Line */}
        <div className="flex-1 w-px bg-gray-400"></div>

        {/* Circle Marker with SVG */}
        <div
          className={`absolute flex items-center justify-center border border-gray-400 rounded-full lg:size-13 size-10 top-5 ${
            darkMode ? "bg-gray-900 " : "bg-[#f5f5f5]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 497"
            className="size-6 lg:size-10"
          >
            <path
              fill="#a435f0"
              d="M255.982 147.795L127.973 73.898L0 147.795V73.898L127.991 0L256 73.898v73.897z"
            />
            <path
              fill="currentColor"
              d="M0 209.85h67.047v162.9c0 42.086 31.429 62.601 60.944 62.601c29.77 0 60.962-21.061 60.962-63.166V209.85H256v166.78c0 38.771-12.189 68.687-36.566 89.202c-24.396 20.497-54.859 30.481-92.008 30.481c-37.113 0-67.594-9.966-91.406-30.48C12.189 445.334 0 416.53 0 378.287z"
            />
          </svg>
        </div>
      </div>
      <div className="border-b border-gray-400 border-dashed flex flex-col w-full gap-y-0.5 lg:gap-y-1 py-5">
        <p
          className={`text-[10px] ml-5 lg:ml-10 ${
            darkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          {date}
        </p>
        <h1
          className={`text-base ml-5 lg:ml-10 font-normal ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-[10px] ml-5 lg:ml-10 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>
        <div className="flex items-center ml-5 lg:ml-10">
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex gap-x-1 flex-row justify-center items-center text-[10px] px-2 lg:py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300
              ${
                darkMode
                  ? "bg-gray-200 text-black hover:bg-gray-300"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={`size-4 ${darkMode ? "text-black" : "text-white"}`}
            >
              <path
              fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              />
            </svg>
            Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;
