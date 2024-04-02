import React from "react";

function HeadingCard({ heading, services }) {
  return (
    <div className="w-full flex justify-center items-center z-40">
      <div
        className="md:w-3/4 w-5/6 flex justify-center items-center bg-transparent md:h-20 h-16 shadow-2xl rounded-lg z-40 border-2 border-white"
        style={{ marginBottom: services && "-4rem" }}
      >
        <p className="md:text-3xl text-lg font-bold text-white ManropeBold ">
          {heading}
        </p>
      </div>
    </div>
    // <div className="w-full flex justify-start items-center mt-20 mb-12 z-40 ml-20">
    //   <div
    //     className="w-3/4 flex justify-start items-center z-40"
    //     style={{ marginBottom: services && "-4rem" }}
    //   >
    //     <p className="text-4xl font-bold text-white ManropeBold ">{heading}</p>
    //   </div>
    // </div>
  );
}

export default HeadingCard;
