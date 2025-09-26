import { useState, useEffect } from "react";
import mypicture from "../../assets/profile/mypicture.png";
import Button from "../button/Button";

function Hero({ darkMode, setDarkMode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="z-10 flex flex-row pt-15 sm:gap-x-2 md:gap-x-4 lg:gap-x-20">
        <div className="flex flex-col w-4/5 gap-y-2 animate-pulse">
          <div className="w-1/3 h-8 mb-2 bg-gray-300 rounded"></div> {/* Skeleton for the name */}
          <div className="w-2/3 h-4 mb-2 bg-gray-300 rounded"></div> {/* Skeleton for the paragraph */}
          <div className="w-24 h-10 bg-gray-300 rounded"></div> {/* Skeleton for the button */}
        </div>
        <div className="z-10 flex items-start justify-end animate-pulse">
          <div className="bg-gray-300 rounded-full w-36 h-36"></div> {/* Skeleton for image */}
        </div>
      </div>
    );
  }

  return (
    <div className="z-10 flex flex-row pt-15 sm:gap-x-2 md:gap-x-4 lg:gap-x-20">
      <div className="flex flex-col w-4/5 gap-y-2">
        <h1 className="z-10 text-3xl font-bold sm:text-3xl md:text-3xl lg:text-5xl">
          Hi, I'm Jorence
        </h1>
        <p className="z-10 pr-2 text-sm lg:text-base md:text-m lg:pr-0">
          Web & Game Developer | Digital Artist. I love creating interactive worlds, building for the web, and bringing ideas to life.
        </p>
        <Button darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="z-10 flex items-start justify-end">
        <img 
          src={mypicture} 
          alt="Jorence" 
          className="object-cover rounded-full w-36 lg:w-48 md:w-44 sm:w-40" 
        />
      </div>
    </div>
  );
}

export default Hero;
