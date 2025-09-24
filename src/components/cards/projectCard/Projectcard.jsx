import React from "react";
import "./Projectcard.css";

function Projectcard({ image, title, description, link , darkMode}) {
  return (
    <div className={`max-w-sm border rounded-lg shadow-sm z-1 ${
            darkMode ? "bg-gray-800 text-gray-300 border-gray-700" : "bg-[#f5f5f5] text-gray-800 border-gray-200"
          }`}>
      {/* Image */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="object-cover w-full h-40 rounded-t-lg"
          src={image}
          alt={title}
        />
      </a>

      {/* Content */}
      <div className="p-5">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-medium tracking-tight">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-xs font-normal lg:text-sm">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center px-3 py-2 text-sm font-normal text-center rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 ${
            darkMode ? "bg-white hover:bg-[#e3e3e3] text-gray-900 " : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          View Project
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Projectcard;
