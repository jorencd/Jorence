import "./Projectcard.css";

function Projectcard({ image, gradient, title, description, link }) {
  return (
    <div className="card flex flex-col gap-x-4 rounded-xl p-3 border border-black/20">
      <div className="relative w-full">
        {/* Base image */}
        <img
          className="w-full object-cover rounded-md lg:rounded-md"
          src={image}
          alt={title}
        />
        {/* Gradient overlay */}
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-md lg:rounded-md pointer-events-none"
          src={gradient}
          alt="gradient overlay"
        />
      </div>

      <div className="flex flex-col flex-grow py-2 pr-4">
        <h1 className="font-medium text-sm lg:text-sm">{title}</h1>
        <p className="desc text-gray-600 lg:text-sm font-light text-justify mb-2 mt-2">
          {description}
        </p>
        {/* link pushed to bottom */}
        <div className="flex flex-row justify-end mt-auto">

          <a
            className="font-medium text-xs lg:text-xs underline"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
