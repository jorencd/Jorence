import mypicture from "../../assets/profile/mypicture.png";
import Button from "../button/Button";

function Hero() {
  return (
    <div 
    className="
      flex 
      flex-row 
      sm:gap-x-2 
      md:gap-x-4 
      lg:gap-x-20"
    >
      <div className="w-4/5 flex flex-col gap-y-2">
        <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-bold">
          Hi, I'm Jorence
        </h1>
        <p className="lg:text-xl md:text-md">
          Web & Game Developer | Digital Artist. I love creating interactive worlds, building for the web, and bringing ideas to life.
        </p>
        <Button />
      </div>
      <div className="flex justify-end items-center">
        <img 
          src={mypicture} 
          alt="Jorence" 
          className="object-cover w-36 lg:w-48 md:w-44 sm:w-40 rounded-full" 
        />
      </div>
    </div>
  )
}

export default Hero