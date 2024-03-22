import React from "react";

function Hero2() {
  return (
    <div className="w-full h-screen bg-blue-800">
      <div className="w-1/2 h-full flex flex-col justify-center items-center border-2 border-black">
        <p className="text-5xl text-white font-extrabold">
          Your Health, Your Way!
        </p>
        <p className="text-slate-100">
          Seamless Doctor Appointments and Hospital Bed Booking at Your
          Fingertips!
        </p>
        <div className="flex flex-row">
          <button className="bg-white rounded-md p-3 mr-6">Our Services</button>
          <button className="border-white border-2 rounded-md p-3 text-white">
            Contact Us
          </button>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

export default Hero2;
