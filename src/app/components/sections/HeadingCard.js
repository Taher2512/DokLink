import React from "react";

function HeadingCard({ heading, services }) {
  return (
    <div className="w-full flex justify-center items-center z-40 -mt-10">
      <div
        className="w-3/4 flex justify-center items-center bg-gray-100 h-20 shadow-2xl rounded-lg z-40 border-2 border-blue-800"
        style={{ marginBottom: services && "-4rem" }}
      >
        <p className="text-4xl font-bold text-blue-800 ManropeBold ">{heading}</p>
      </div>
    </div>
  );
}

export default HeadingCard;
