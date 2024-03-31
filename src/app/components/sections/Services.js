"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

function Services({ servicesRef }) {
  const content = [
    {
      title: "Seamless Appointment Booking",
      description:
        "Our platform provides a hassle-free experience for scheduling doctor appointments, reducing wait times and enhancing accessibility.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/scroll-1.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Real-time Bed Reservation",
      description:
        "Users can instantly reserve hospital beds, ensuring prompt access to critical care facilities during emergencies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/scroll-2.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "mHealth Solutions:",
      description:
        "Incorporating mobile health applications empowers patients to monitor their health, access medical information, keep track of past medical prescriptions and reports and communicate with healthcare providers through smartphones or wearable devices.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/scroll-3.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "24/7 Emergency Support",
      description:
        "Users have access to round-the-clock emergency assistance, ensuring prompt response and care during critical situations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/scroll-4.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Data-driven Healthcare Delivery",
      description:
        "Utilizing advanced analytics, we optimize resource allocation and improve decision-making for better patient outcomes.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/scroll-5.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Innovative Bed Management System",
      description:
        "Our system streamlines bed allocation, minimizing shortages and maximizing hospital efficiency.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/scroll-6.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Mobile Accessibility",
      description:
        "Access to our services anytime, anywhere, providing convenience and flexibility.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/scroll-7.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Integrated Telemedicine Services:",
      description:
        "Our platform offers integrated telemedicine options, enabling remote consultations and follow-ups for added convenience.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/scroll-8.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
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
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <div ref={servicesRef}>
      <StickyScroll content={content} className="overflow-hidden" />
    </div>
  );
}

export default Services;
