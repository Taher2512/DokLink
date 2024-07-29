import React from "react";

function Problems2() {
  return (
    <div className="px-4 sm:px-60 h-auto my-4 sm:my-16">
      <div className="flex flex-col gap-4">
        <div className="bg-white/30 w-full sm:h-60 rounded-xl flex flex-col-reverse gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-4">
          <span className="text-center sm:text-left">
            <h1 className="GilroyBold text-white text-xl sm:text-3xl">
              Long Wait Times
            </h1>
            <p className="GilroyLight text-white text-md sm:text-xl">
              Patients often face long wait times for doctor appointments and
              hospital admissions, causing stress and potential health risks.
            </p>
          </span>
          <span className="blobright sm:w-80 sm:h-80 w-40 h-40 mr-8 overflow-hidden ">
            <img src="problem1.jpg" className="object-cover h-full sm:h-2/3" />
          </span>
        </div>
        <div className="bg-white/30 w-full sm:h-60 h-auto rounded-xl flex flex-col gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-4">
          <span className="blobleft sm:w-80 sm:h-80 w-32 h-32 mr-8 overflow-hidden">
            <img src="problem2.jpg" className="object-cover h-full sm:h-2/3" />
          </span>
          <span className="text-center sm:text-left">
            <h1 className="GilroyBold text-white text-xl sm:text-3xl">
              Complex Paperwork
            </h1>
            <p className="GilroyLight text-white text-md sm:text-xl">
              The extensive paperwork required for hospital admissions and
              medical records management is cumbersome and time-consuming.
            </p>
          </span>
        </div>
        <div className="bg-white/30 w-full sm:h-60 rounded-xl flex flex-col-reverse gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-4">
          <span className="text-center sm:text-left">
            <h1 className="GilroyBold text-white text-xl sm:text-3xl">
              Limited Access to Real Time Information
            </h1>
            <p className="GilroyLight text-white text-md sm:text-xl">
              Patients lack access to real-time updates on doctor availability,
              hospital bed status, and emergency services.
            </p>
          </span>
          <span className="blobright sm:w-80 sm:h-80 w-32 h-32 mr-8 overflow-hidden">
            <img src="problem3.jpg" className="object-cover h-full sm:h-2/3" />
          </span>
        </div>
        <div className="bg-white/30 w-full sm:h-60 h-auto rounded-xl flex flex-col gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-4">
          <span className="blobleft sm:w-80 sm:h-80 w-32 h-32 mr-8 overflow-hidden">
            <img src="problem4.jpg" className="object-cover h-full sm:h-2/3" />
          </span>
          <span className="text-center sm:text-left">
            <h1 className="GilroyBold text-white text-xl sm:text-3xl">
              Inadequate Emergency Response
            </h1>
            <p className="GilroyLight text-white text-md sm:text-xl">
              During critical situations, coordinating with emergency services
              like police and ambulances is often slow and inefficient.
            </p>
          </span>
        </div>
        <div className="bg-white/30 w-full sm:h-60 h-auto rounded-xl flex flex-col-reverse gap-4 sm:flex-row items-center justify-between px-4 sm:px-8 py-4">
          <span className="text-center sm:text-left">
            <h1 className="GilroyBold text-white text-xl sm:text-3xl">
              Disorganized Medical Records
            </h1>
            <p className="GilroyLight text-white text-md sm:text-xl">
              Patients struggle with maintaining and accessing their medical
              records, leading to fragmented healthcare experiences.
            </p>
          </span>
          <span className="blobright sm:w-80 sm:h-80 w-32 h-32 mr-8 overflow-hidden">
            <img src="problem5.jpg" className="object-cover h-full sm:h-2/3" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Problems2;
