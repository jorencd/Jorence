import mypicture from "../../assets/profile/mypicture.png";
import Button from "../button/Button";


function Hero({ darkMode, setDarkMode }) {
  return (
    <div className="flex flex-row pt-20 sm:gap-x-2 md:gap-x-4 lg:gap-x-20">
      <div className="flex flex-col w-4/5 gap-y-2">
        <h1 className="text-3xl font-bold sm:text-3xl md:text-3xl lg:text-5xl ">
          Hi, I'm Jorence
        </h1>
        <p className="pr-2 lg:text-lg md:text-m lg:pr-0">
          Web & Game Developer | Digital Artist. I love creating interactive worlds, building for the web, and bringing ideas to life.
        </p>
        <Button darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="flex items-start justify-end">
        <img 
          src={mypicture} 
          alt="Jorence" 
          className="object-cover rounded-full w-36 lg:w-48 md:w-44 sm:w-40" 
        />
      </div>
    </div>
  )
}

export default Hero