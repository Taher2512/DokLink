"use client";
import React, { useState } from "react";

const ComingSoonPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="mx-auto w-20 h-20 mb-6 text-purple-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Thank You!
        </h1>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Registration Successful! 🥳
        </h1>

        <p className="text-center text-gray-600 mb-6">
          We&apos;re excited to announce that our app is coming soon to the
          Google Play Store. Stay tuned for updates and be among the first to
          experience our amazing features!
        </p>

        {/* <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ${
            isHovered ? "bg-purple-700 transform scale-105" : ""
          }`}
        >
          Now Grab Your Chocolate!! 🍫
        </button> */}
      </div>
    </div>
  );
};

export default ComingSoonPage;
