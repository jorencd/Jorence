import React from "react";
import "./Projectcard.css";

function Projectcard({ image, title, description, link, darkMode }) {
  return (
    <div
      className={`max-w-sm border rounded-lg shadow-sm z-1 overflow-hidden ${
        darkMode
          ? "bg-[#151B23] text-[#b4b4b4] border-gray-600" 
          : "bg-white text-gray-900 border-gray-300"
      } group`}
    >
      {/* Image */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          className="object-cover w-full h-40 transition-all duration-300 group-hover:scale-110 group-hover:brightness-75"
          src={image}
          alt={title}
        />
      </a>

      {/* Content */}
      <div className="p-5">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-xl font-medium tracking-tight">{title}</h5>
        </a>
        <p title={description}  className={`line-clamp-3 mb-3 text-xs font-normal lg:text-sm ${darkMode ? "text-neutral-500" : ""}`}>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center py-2 text-sm font-normal text-center rounded-lg"
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
