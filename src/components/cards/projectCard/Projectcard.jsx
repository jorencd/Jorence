import "./Projectcard.css";

function Projectcard({ image, title, description, link }) {
  return (
    <div className="w-full lg:w-full bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Image */}
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={image}
        alt={title}
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 text-base">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A2847] text-sm hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
