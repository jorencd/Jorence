import "./Projectcard.css";

function Projectcard({ image, title, date, link }) {
  return (
    <div className="w-full lg:w-full bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out p-2">
      {/* Image */}
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={image}
        alt={title}
      />

      {/* Content */}
      <div className="px-3 py-4 flex flex-row justify-between">
        <div className="flex flex-col">
        <h2 className="text-xl lg:text-base font-semibold">{title}</h2>
        <p className="text-xs text-gray-500">{date}</p>
        </div>
        <div className="flex items-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#272727] text-sm hover:bg-[#3e3e3e] text-white px-5 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
