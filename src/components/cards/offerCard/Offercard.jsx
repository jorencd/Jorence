import { useState, useEffect } from "react";

function Offercard({ title, description, index, darkMode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        className={`relative p-5 space-y-2 overflow-hidden border lg:w-64 lg:h-57 h-44 w-44 lg:p-9 lg:space-y-3 rounded-2xl animate-pulse ${
          darkMode
            ? "bg-[#171717] text-[#e4e4e4] border-gray-600"
            : "bg-white text-gray-900 border-gray-300"
        }`}
      >
        <div className="absolute w-16 h-16 bg-gray-300 rounded-full lg:w-24 lg:h-24 -right-3 -top-4 lg:-right-5 lg:-top-7"></div>
        <div className="w-8 fill-gray-300 lg:w-12">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path>
          </svg>
        </div>
        <div className="w-24 h-4 mb-2 bg-gray-300 rounded"></div> {/* Skeleton for the title */}
        <div className="w-40 h-4 mb-2 bg-gray-300 rounded"></div> {/* Skeleton for the description */}
      </div>
    );
  }

  return (
    <div
      className={`relative p-5 space-y-2 overflow-hidden border lg:w-64 lg:h-57 h-44 w-44 lg:p-9 lg:space-y-3 rounded-2xl ${
        darkMode
          ? "bg-[#171717] text-[#e4e4e4] border-gray-600"
          : "bg-white text-gray-900 border-gray-300"
      }`}
    >
      <div className="w-16 h-16 lg:w-24 lg:h-24 bg-[#e3b655d8] rounded-full absolute -right-3 -top-4 lg:-right-5 lg:-top-7">
        <p className="absolute text-lg text-white bottom-3 left-4 lg:bottom-6 lg:left-7 lg:text-2xl">
          0{index} {/* Displaying dynamic number based on index */}
        </p>
      </div>
      <div className="fill-[#E3B555] w-8 lg:w-12">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path>
        </svg>
      </div>
      <h1 className="text-sm font-bold lg:text-xl">{title}</h1>
      <p className="lg:text-sm text-[10px] clamp line-clamp-2 cursor-pointer" title={description}>
        {description}
      </p>
    </div>
  );
}

export default Offercard;
