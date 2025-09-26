import React, { useState } from "react";
import "./Button.css";
import ResumeDL from "../modal/ResumeDL";

function Button({ darkMode, setDarkMode }) {
  const [showModal, setShowModal] = useState(false);

  const handleResumeClick = () => {
    setShowModal(true);
  };

  // when user accepts in modal
  const handleAccept = () => {
    setShowModal(false);

    // create hidden link to trigger download
    const link = document.createElement("a");
    link.href = "/Resume/Jorence_Mendoza_Resume.pdf";
    link.download = "Jorence_Mendoza_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // when user declines in modal
  const handleDecline = () => {
    setShowModal(false);
  };

  return (
    <div className={`flex flex-row gap-x-2 z-10`}>
      <button className={`btn-cssbuttons py-2 px-7 lg:py-1`}>
        <span>Contact</span>
        <span></span>
        <ul>
          <li>
            {/* Phone dial link */}
            <a href="tel:+639157970296">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                className="icon"
              >
                <path
                  fill="white"
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                />
              </svg>
            </a>
          </li>
          <li>
            {/* Messenger link */}
            <a href="https://m.me/jorence.mendoza.2024?hash=AbbaeCVQCBZH3mh1&source=qr_link_share" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                className="icon"
              >
                <path
                  fill="white"
                  d="M12.001 2c5.634 0 10 4.127 10 9.7s-4.367 9.7-10 9.7a11 11 0 0 1-2.895-.384a.8.8 0 0 0-.534.039l-1.985.876a.8.8 0 0 1-1.123-.707l-.054-1.78a.8.8 0 0 0-.269-.57c-1.945-1.74-3.14-4.258-3.14-7.174c0-5.573 4.366-9.7 10-9.7M5.996 14.537c-.282.447.268.951.689.631l3.155-2.394a.6.6 0 0 1 .723 0l2.336 1.75a1.5 1.5 0 0 0 2.17-.4l2.937-4.66c.282-.448-.268-.952-.689-.633l-3.155 2.396a.6.6 0 0 1-.723 0l-2.337-1.75a1.5 1.5 0 0 0-2.169.4z"
                />
              </svg>
            </a>
          </li>
          <li>
            {/* Email link */}
            <a href="mailto:jorencemendoza2@gmail.com?subject=Contact%20from%20Website">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                className="icon"
              >
                <path
                  fill="white"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </button>

      <button
        onClick={handleResumeClick}
        className="relative h-10 text-sm font-semibold text-center text-black bg-white shadow lg:w-35 w-30 rounded-2xl group"
        type="button"
      >
        <div
          className="bg-[#E3B555] rounded-xl h-8 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[94%] group-focus:w-[94%] 
       z-21 duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M12 15.248q-.161 0-.298-.053t-.267-.184l-2.62-2.619q-.146-.146-.152-.344t.152-.363q.166-.166.357-.169q.192-.003.357.163L11.5 13.65V5.5q0-.213.143-.357T12 5t.357.143t.143.357v8.15l1.971-1.971q.146-.146.347-.153t.366.159q.16.165.163.354t-.162.353l-2.62 2.62q-.13.13-.267.183q-.136.053-.298.053M6.616 19q-.691 0-1.153-.462T5 17.384v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-1.923q0-.213.143-.356t.357-.144t.357.144t.143.356v1.923q0 .691-.462 1.153T17.384 19z"
            />
          </svg>
        </div>
        <p className="relative z-20 translate-x-2">Resume</p>
      </button>

      {/* Modal */}
      {showModal && (
        <ResumeDL onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </div>
  );
}

export default Button;
