// pages/dashboard.js
import Image from "next/image";
import Link from "next/link";
import { patientData } from "../patient-data/patientData";

export default function Dashboard() {
  const { profileImage, name, email, personalInfo, healthInfo, appointments } =
    patientData;

  return (
    <div className="bg-[#478de9] min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#1E40AF] p-8 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={profileImage}
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="ml-6 text-white">
              <h1 className="text-3xl font-bold">{name}</h1>
              <p className="text-sm opacity-80">{email}</p>
            </div>
          </div>
          <Link href="/edit-profile">
            <button className="text-white hover:bg-white hover:text-teal-600 rounded-full p-2 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Content */}
        <div className="p-8 grid grid-cols-3 gap-8">
          {/* Left Column: Personal and Health Information */}
          <div className="col-span-1 space-y-8">
            {/* Personal Information */}
            <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-[#1E40AF]">
                Personal Information
              </h2>
              <div className="space-y-3">
                {Object.entries(personalInfo).map(([key, value]) => (
                  <InfoItem key={key} label={key} value={value} />
                ))}
              </div>
            </section>

            {/* Health Information */}
            {/* Health Information */}
            <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-[#1E40AF]">
                Health Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(healthInfo).map(([key, value]) => (
                  <HealthInfoItem
                    key={key}
                    icon={key}
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={value}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Appointments */}
          <div className="col-span-2 space-y-8">
            {/* Upcoming Appointments */}
            <section className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-[#1E40AF]">
                  Upcoming Appointments
                </h2>
                <button className="bg-[#1E40AF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-300">
                  Book New Appointment
                </button>
              </div>
              <div className="space-y-4">
                {appointments.map((appointment, index) => (
                  <AppointmentCard key={index} {...appointment} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-600">{label}:</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function HealthInfoItem({ icon, label, value }) {
  const iconMap = {
    bloodType: "blood",
    age: "calendar",
    weight: "scale",
    height: "ruler",
  };

  const icons = {
    blood: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    calendar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    scale: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    ruler: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  };

  const iconName = iconMap[icon] || "calendar"; // Default to calendar if no match

  return (
    <div className="flex items-center space-x-3">
      <div className="bg-indigo-100 rounded-full p-3">{icons[iconName]}</div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

function AppointmentCard({ doctor, specialty, date, time, status }) {
  const statusColor =
    status === "confirmed"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
  return (
    <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="bg-indigo-100 rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div>
          <p className="font-semibold">{doctor}</p>
          <p className="text-sm text-gray-600">{specialty}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{date}</p>
        <p className="text-sm text-gray-600">{time}</p>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
  );
}
