import './Button.css';

function Button() {
  return (
    <div className="flex flex-row gap-x-2">
        <button 
          className="
            resume 
            py-2
            px-7 
            lg:py-1 
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
            border
            contact
            py-2
            px-7 
            lg:py-1 
            text-xs 
            md:text-base 
            lg:text-base 
            rounded-full 
            text-gray-700"
        >
            Contact
        </button>
    </div>
  )
}

export default Button