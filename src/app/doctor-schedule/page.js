"use client"
import { useState } from 'react';
import Link from 'next/link';
import { doctorData } from "../doctor-data/doctorData";

export default function ManageSchedule() {
  const [appointments, setAppointments] = useState(doctorData.appointments);
  const [availableSlots, setAvailableSlots] = useState(doctorData.availableSlots);

  const handleCancelAppointment = (index) => {
    const newAppointments = [...appointments];
    newAppointments.splice(index, 1);
    setAppointments(newAppointments);
  };

  const handleAddSlot = (event) => {
    event.preventDefault();
    const newSlot = {
      date: event.target.date.value,
      time: event.target.time.value,
    };
    setAvailableSlots([...availableSlots, newSlot]);
    event.target.reset();
  };

  return (
    <div className="bg-[#478de9] min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-[#1E40AF] p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Manage Schedule</h1>
          <Link href="/doctor-dashboard">
            <button className="mt-4 bg-white text-[#1E40AF] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Back to Dashboard
            </button>
          </Link>
        </div>

        <div className="p-4 sm:p-8 space-y-8">
          {/* Appointments */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#1E40AF]">Upcoming Appointments</h2>
            <div className="space-y-4">
              {appointments.map((appointment, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{appointment.patient.name}</p>
                    <p className="text-sm text-gray-600">{appointment.date} at {appointment.time}</p>
                  </div>
                  <button 
                    onClick={() => handleCancelAppointment(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Available Slots */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#1E40AF]">Available Slots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {availableSlots.map((slot, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">{slot.date}</p>
                  <p className="text-sm text-gray-600">{slot.time}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Add New Slot */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#1E40AF]">Add New Slot</h2>
            <form onSubmit={handleAddSlot} className="space-y-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" id="date" name="date" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                <input type="time" id="time" name="time" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <button type="submit" className="bg-[#1E40AF] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Add Slot
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}