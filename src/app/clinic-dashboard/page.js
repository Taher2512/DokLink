// pages/clinic-dashboard.js
import Image from "next/image";
import Link from "next/link";
import { clinicData } from "../clinic-data/clinicData";

export default function ClinicDashboard() {
  const {
    profileImage,
    name,
    email,
    licenseNumber,
    yearsOfOperation,
    address,
    contactInfo,
    services,
    appointments,
    stats,
    doctors,
  } = clinicData;

  return (
    <div className="bg-[#478de9] min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#1E40AF] p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
            <Image
              src={profileImage}
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full border-4 border-white shadow-lg mb-4 sm:mb-0"
            />
            <div className="ml-0 sm:ml-6 text-white text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold">{name}</h1>
              <p className="text-sm opacity-80">{email}</p>
              <p className="text-sm opacity-80">{address}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <Link href="/doctor-login">
              <button className="bg-white text-[#1E40AF] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
                Add Doctor
              </button>
            </Link>
            <Link href="/clinic-info-edit">
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
        </div>


        {/* Content */}
        <div className="p-4 sm:p-8 space-y-8">
          {/* Clinic Details - Full Width */}
          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#1E40AF]">
              Clinic Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <InfoItem label="Years of Operation" value={yearsOfOperation} />
              <InfoItem label="License Number" value={licenseNumber} />
              <InfoItem label="Address" value={address} />
              <InfoItem label="Office Phone" value={contactInfo.officePhone} />
              <InfoItem
                label="Emergency Contact"
                value={contactInfo.emergencyContact}
              />
              <InfoItem label="Total Patients" value={stats.totalPatients} />
              <InfoItem
                label="Avg. Appointments/Day"
                value={stats.averageAppointmentsPerDay}
              />
              <InfoItem
                label="Satisfaction Rate"
                value={stats.satisfactionRate}
              />
            </div>
          </section>

          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1E40AF]">
                Services Offered
              </h2>
              <Link href="/add-service">
                <button className="bg-[#1E40AF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-300">
                  Add Service
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-2 rounded-lg flex items-center"
                >
                  <div className="bg-indigo-100 rounded-full p-2 flex-shrink-0 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-sm truncate">{service}</p>
                </div>
              ))}
            </div>
          </section>


          <section className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1E40AF]">
                Doctors Available
              </h2>
              <Link href="/doctor-login">
                <button className="bg-[#1E40AF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-300">
                  Add Doctor
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg flex flex-col justify-between"
                >
                  <div>
                    <p className="font-semibold">{doctor.name}</p>
                    <p className="text-sm text-gray-600">
                      {doctor.specialization}
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {Object.entries(doctor.availableDays).map(
                      ([day, available]) => (
                        <span
                          key={day}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            available
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {day.slice(0, 3)}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* Today's Appointments and Upcoming Appointments side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Today's Appointments */}
            <section className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#1E40AF]">
                Today&apos;s Appointments
              </h2>
              <div className="space-y-4">
                {appointments
                  .filter((app) => app.date === "Today")
                  .map((appointment, index) => (
                    <AppointmentCard
                      key={index}
                      {...appointment}
                      showDoctorInfo={true}
                    />
                  ))}
              </div>
            </section>

            {/* Upcoming Appointments */}
            <section className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-[#1E40AF] mb-4 sm:mb-0">
                  Upcoming Appointments
                </h2>
                <Link href="/clinic-schedule">
                  <button className="bg-[#1E40AF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 w-full sm:w-auto">
                    Manage Schedule
                  </button>
                </Link>
              </div>
              <div className="space-y-4">
                {appointments
                  .filter((app) => app.date !== "Today")
                  .map((appointment, index) => (
                    <AppointmentCard
                      key={index}
                      {...appointment}
                      showDoctorInfo={true}
                    />
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

function AppointmentCard({
  doctor,
  date,
  time,
  status,
  type,
  showDoctorInfo,
}) {
  const statusColor =
    status === "confirmed"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
  return (
    <div className="bg-gray-50 p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
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
          {showDoctorInfo && (
            <>
              <p className="font-semibold truncate max-w-[180px] sm:max-w-[220px]">
                {doctor.name}
              </p>
              <p className="text-sm text-gray-600">
                Specialization: {doctor.specialization}
              </p>
              <p className="text-sm text-gray-600">{type}</p>
            </>
          )}
        </div>
      </div>
      <div className="text-left sm:text-right mb-4 sm:mb-0">
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