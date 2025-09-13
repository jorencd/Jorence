import './Button.css';

function Button() {
  return (
    <div className="flex flex-row gap-x-2">
        <button 
          className="
            bg-black 
            hover:bg-gray-800 
            px-7 
            py-2 
            text-xs 
            md:text-base 
            lg:text-base 
            rounded-full 
            text-white"
        >
            Resume
        </button>
        <button 
        className="
            contact 
            px-7 
            py-2 
            text-xs 
            md:text-base 
            lg:text-base 
            rounded-full 
            text-black"
        >
            Contact
        </button>
    </div>
  )
}

export default Button