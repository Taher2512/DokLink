import React from "react";
import Image from "next/image";

const content = [
  {
    title: "Real-Time Bed Reservation",
    description:
      "People can instantly reserve hospital beds in advance to get real time updates about bed availability, thus reducing patient waiting time and ensuring a streamlined admission process.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/scroll-2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Seamless Appointment Booking",
    description:
      "Our platform provides a hassle-free experience for scheduling in clinic doctor appointments, reducing wait times and enhancing accessibility.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/scroll-1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Paperless Processes",
    description:
      "DokLink eliminates the hectic physical paperwork required during admission procedure in hospitals to ensure efficient and stress-free patient experience.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/scroll-3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Digital Prescription Storage",
    description:
      "A centralized digital locker for storage of past medical prescriptions and reports for easy access and retrieval for future medical needs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/scroll-5.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Emergency Services Integration",
    description:
      "Quick notifications to police and ambulance services to ensure timely assistance in critical situations.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/problem4.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Multi-language Support",
    description:
      "We offer support for multiple languages, ensuring accessibility for diverse populations and improving user experience.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/scroll-9.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

function Services({ servicesRef }) {
  return (
    <div
      ref={servicesRef}
      className="flex flex-col gap-8 mt-28 mb-20 w-full justify-center items-center"
    >
      {content.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center justify-around gap-4 w-5/6`}
        >
          <div className="md:w-1/2 md:my-0 my-12 relative">
            <img
              src="./hero-blob-1.png"
              className="absolute md:-top-24 -top-12 md:-left-10 md:h-80 h-60 w-auto -z-10 opacity-15"
            />
            <h2 className="md:text-3xl text-2xl font-semibold text-white mb-6 md:text-start text-center">
              {item.title}
            </h2>
            <p className="mt-2 text-white md:text-lg text-base md:text-start text-center">
              {item.description}
            </p>
          </div>
          <div className="rounded-full md:w-auto w-3/4 md:mt-0 mt-4">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
