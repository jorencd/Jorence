import React from "react";

function ResumeDL({ onAccept, onDecline }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#00000036] z-50 transition-opacity duration-300 ease-out animate-fadeIn">
      {/* Modal container */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 transform transition-all duration-300 ease-out animate-scaleIn flex flex-col items-center">
            <h2 className="text-lg font-semibold">Download Resume</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
            Do you accept to download this resume?
            </p>
            <div className="flex text-sm justify-end gap-3 mt-4">
            <button
                className="px-5 py-2 rounded-full bg-gray-300 hover:bg-gray-400 transition"
                onClick={onDecline}
            >
                Decline
            </button>
            <button
                className="px-5 py-2 rounded-full bg-[#E3B555] text-white hover:bg-[#eec875] transition"
                onClick={onAccept}
            >
                Accept
            </button>
            </div>
      </div>
    </div>
  );
}

export default ResumeDL;
