function Skills({ darkMode }) {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <h1 className="text-xl lg:text-3xl font-semibold">Tech Stack</h1>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-8">
        <div className="flex flex-row w-full gap-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 ${darkMode ? " text-white" : "text-black"}`}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm11.448 7.672a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 8.3V9.749h-2v7.223zm-12.572 0L8.07 7.844v-.66h2.551l3.534 9.788h-2.192l-.832-2.287H7.673l-.775 2.287zm3.345-4.233h2.343L9.393 8.922z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <h2 className="font-medium text-sm">Adobe Illustrator</h2>
            <span className="flex flex-row gap-x-2">
              <button className={`rounded-full text-sm px-4 ${darkMode ? "bg-gray-200 text-black" : "bg-[#000000] text-white"}`}>
                10+
              </button>
              <p className="text-gray-500 text-sm">Projects</p>
            </span>
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 ${darkMode ? " text-white" : "text-black"}`}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.17 2.17 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.5 23.5 0 0 0-3.107-.534A24 24 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a23 23 0 0 0-3.113.538a15 15 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05q.684.704 1.36 1.564c-.44-.02-.89-.034-1.345-.034q-.691-.001-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093q.61.874 1.183 1.86q.557.961 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.6 25.6 0 0 1-4.412.005a27 27 0 0 1-1.183-1.86q-.557-.961-1.018-1.946a25 25 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25 25 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16q-.336.585-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0q1.044.153 2.006.387c-.18.632-.405 1.282-.66 1.933a26 26 0 0 0-1.345-2.32zm3.063.675q.727.226 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a24 24 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23 23 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a26 26 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175q.345.586.705 1.143a22 22 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.2 1.2 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64q.661.032 1.345.034q.691.001 1.36-.034c-.44.572-.895 1.095-1.345 1.565q-.684-.706-1.36-1.565"
            />
          </svg>
          <div>
            <h2 className="font-medium text-sm">React</h2>
            <span className="flex flex-row gap-x-2">
              <button className={`rounded-full text-sm px-4 ${darkMode ? "bg-gray-200 text-black" : "bg-[#000000] text-white"}`}>
                10+
              </button>
              <p className="text-gray-500 text-sm">Projects</p>
            </span>
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 ${darkMode ? " text-white" : "text-black"}`}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.01 10.207h-.944l-.515 2.648h.838q.834 0 1.242-.314q.408-.315.55-1.049q.137-.705-.124-.995q-.262-.29-1.047-.29M12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12s-5.373-6.312-12-6.312m-3.26 7.451c-.261.25-.575.438-.917.551q-.505.163-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65q1.195 0 1.744.628q.549.627.33 1.752a2.8 2.8 0 0 1-.305.847q-.215.383-.561.703m4.024.715l.543-2.799q.094-.478-.068-.651q-.16-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218q1.15 0 1.586.401c.436.401.378.7.263 1.299l-.572 2.944zm7.597-2.265a2.8 2.8 0 0 1-.305.847q-.214.383-.561.703a2.44 2.44 0 0 1-.917.551q-.504.163-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649q1.195 0 1.744.628q.55.626.331 1.751m-2.595-1.382h-.943l-.516 2.648h.838q.835 0 1.242-.314q.407-.315.551-1.049q.137-.705-.125-.995c-.262-.29-.524-.29-1.047-.29"
            />
          </svg>
          <div>
            <h2 className="font-medium text-sm">php</h2>
            <span className="flex flex-row gap-x-2">
              <button className={`rounded-full text-sm px-4 ${darkMode ? "bg-gray-200 text-black" : "bg-[#000000] text-white"}`}>
                10+
              </button>
              <p className="text-gray-500 text-sm">Projects</p>
            </span>
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 ${darkMode ? " text-white" : "text-black"}`}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.667 2H8.333a3.333 3.333 0 1 0 0 6.667h3.334z"
              opacity="0.6"
            />
            <path
              fill="currentColor"
              d="M11.667 8.667H8.333a3.333 3.333 0 0 0 0 6.666h3.334z"
              opacity="0.4"
            />
            <path
              fill="currentColor"
              d="M18.333 12a3.333 3.333 0 1 1-6.667 0a3.333 3.333 0 0 1 6.667 0"
            />
            <path
              fill="currentColor"
              d="M8.333 15.334h3.334v3.333a3.333 3.333 0 1 1-3.334-3.334"
              opacity="0.2"
            />
            <path
              fill="currentColor"
              d="M11.666 2h3.333a3.333 3.333 0 1 1 0 6.667h-3.333z"
              opacity="0.8"
            />
          </svg>
          <div>
            <h2 className="font-medium text-sm">Figma</h2>
            <span className="flex flex-row gap-x-2">
              <button className={`rounded-full text-sm px-4 ${darkMode ? "bg-gray-200 text-black" : "bg-[#000000] text-white"}`}>
                10+
              </button>
              <p className="text-gray-500 text-sm">Projects</p>
            </span>
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 ${darkMode ? " text-white" : "text-black"}`}
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M13.24 16.859h5.51l-2.755-6.542zM15.995.01L.917 5.317l2.297 19.677l12.781 6.995l12.786-6.984l2.297-19.688L15.995.015zm9.411 24.396H21.89l-1.896-4.667h-8l-1.896 4.667H6.582l9.411-20.865z"
            />
          </svg>
          <div>
            <h2 className="font-medium text-sm">Angular</h2>
            <span className="flex flex-row gap-x-2">
              <button className={`rounded-full text-sm px-4 ${darkMode ? "bg-gray-200 text-black" : "bg-[#000000] text-white"}`}>
                10+
              </button>
              <p className="text-gray-500 text-sm">Projects</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
