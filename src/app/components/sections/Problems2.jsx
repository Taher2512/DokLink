import React from "react";

function Problems2() {
  return (
      <div className="px-4 sm:px-60 h-auto my-4 sm:my-16">
        <div className="flex flex-col gap-4">
          <div className="bg-white/30 w-full sm:h-60 rounded-xl flex flex-col-reverse gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-4">
            <span className="text-center sm:text-left">
              <h1 className="GilroyBold text-white text-xl sm:text-3xl">
                Limited access to timely medical services
              </h1>
              <p className="GilroyLight text-white text-md sm:text-xl">
                Many individuals face delays in accessing critical medical care,
                leading to preventable fatalities.
              </p>
            </span>
            <span className="blobright sm:w-80 sm:h-80 w-40 h-40 mr-8 overflow-hidden ">
              <img src="problem1.svg" className="object-cover" />
            </span>
          </div>
          <div className="bg-white/30 w-full sm:h-60 h-auto rounded-xl flex flex-col gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-4">
            <span className="blobleft sm:w-80 sm:h-80 w-32 h-32 mr-8 overflow-hidden">
              <img src="problem2.jpg" className="object-cover" />
            </span>
            <span className="text-center sm:text-left">
              <h1 className="GilroyBold text-white text-xl sm:text-3xl">
                Insufficient medical facilities in urban and rural area
              </h1>
              <p className="GilroyLight text-white text-md sm:text-xl">
                Urban and rural regions lack adequate healthcare infrastructure,
                exacerbating the challenge.
              </p>
            </span>
          </div>
          <div className="bg-white/30 w-full sm:h-60 rounded-xl flex flex-col-reverse gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-4">
            <span className="text-center sm:text-left">
              <h1 className="GilroyBold text-white text-xl sm:text-3xl">
                Inefficient doctor appointment booking systems
              </h1>
              <p className="GilroyLight text-white text-md sm:text-xl">
                Current methods for booking appointments are cumbersome and
                time-consuming, hindering access to care.
              </p>
            </span>
            <span className="blobright sm:w-80 sm:h-80 w-32 h-32 mr-8 overflow-hidden">
              <img src="problem3.svg" className="object-cover" />
            </span>
          </div>
          <div className="bg-white/30 w-full sm:h-60 h-auto rounded-xl flex flex-col gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-4">
            <span className="blobleft sm:w-80 sm:h-80 w-32 h-32 mr-8 overflow-hidden">
              <img src="problem4.svg" className="object-cover" />
            </span>
            <span className="text-center sm:text-left">
              <h1 className="GilroyBold text-white text-xl sm:text-3xl">
                Challenges in hospital bed management
              </h1>
              <p className="GilroyLight text-white text-md sm:text-xl">
                Hospitals struggle with bed allocation, resulting in shortages
                during emergencies.
              </p>
            </span>
          </div>
          <div className="bg-white/30 w-full sm:h-60 h-auto rounded-xl flex flex-col-reverse gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-4">
            <span className="text-center sm:text-left">
              <h1 className="GilroyBold text-white text-xl sm:text-3xl">
                Lack of systematic approach to appointments and bed booking
              </h1>
              <p className="GilroyLight text-white text-md sm:text-xl">
                The absence of streamlined processes leads to confusion and
                inefficiencies in healthcare delivery.
              </p>
            </span>
            <span className="blobright sm:w-80 sm:h-80 w-32 h-32 mr-8 overflow-hidden">
              <img src="problem5.svg" className="object-cover" />
            </span>
          </div>
        </div>
      </div>
  );
}

export default Problems2;
