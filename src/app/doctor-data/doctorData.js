// doctor-data/doctorData.js
export const doctorData = {
  profileImage: "/images/dr-jane-smith.jpg",
  name: "Dr. Jane Smith",
  email: "dr.jane.smith@example.com",
  specialization: "Cardiologist",
  licenseNumber: "MD12345",
  yearsOfExperience: 15,
  hospitalAffiliation: "Central Hospital",
  contactInfo: {
    officePhone: "+1 (555) 123-4567",
    emergencyContact: "+1 (555) 987-6543",
  },
  consultationHours: {
    weekdays: "9:00 AM - 5:00 PM",
    weekends: "10:00 AM - 2:00 PM",
  },
  appointments: [
    {
      patient: { name: "John Doe", age: 45, id: "P001" },
      date: "Today",
      time: "09:00 AM",
      status: "confirmed",
      type: "Follow-up",
    },
    {
      patient: { name: "Emily Brown", age: 62, id: "P002" },
      date: "Today",
      time: "10:30 AM",
      status: "confirmed",
      type: "New Patient",
    },
    {
      patient: { name: "Michael Johnson", age: 55, id: "P003" },
      date: "Today",
      time: "02:00 PM",
      status: "confirmed",
      type: "Test Results",
    },
    {
      patient: { name: "Sarah Wilson", age: 38, id: "P004" },
      date: "Today",
      time: "04:30 PM",
      status: "pending",
      type: "Follow-up",
    },
    {
      patient: { name: "Robert Davis", age: 70, id: "P005" },
      date: "Tomorrow",
      time: "09:30 AM",
      status: "confirmed",
      type: "New Patient",
    },
    {
      patient: { name: "Jennifer Lee", age: 42, id: "P006" },
      date: "Tomorrow",
      time: "11:00 AM",
      status: "confirmed",
      type: "Follow-up",
    },
    {
      patient: { name: "William Taylor", age: 58, id: "P007" },
      date: "Tomorrow",
      time: "02:30 PM",
      status: "pending",
      type: "Test Results",
    },
    {
      patient: { name: "Elizabeth Moore", age: 50, id: "P008" },
      date: "Sep 20, 2024",
      time: "10:00 AM",
      status: "confirmed",
      type: "Follow-up",
    },
    {
      patient: { name: "David Anderson", age: 65, id: "P009" },
      date: "Sep 20, 2024",
      time: "03:00 PM",
      status: "confirmed",
      type: "New Patient",
    },
    {
      patient: { name: "Patricia Thomas", age: 48, id: "P010" },
      date: "Sep 21, 2024",
      time: "11:30 AM",
      status: "pending",
      type: "Follow-up",
    },
    
  ],
  stats: {
    totalPatients: 250,
    averageAppointmentsPerDay: 8,
    satisfactionRate: "4.8/5",
  },
  availableSlots: [
    { date: "Sep 24, 2024", time: "11:00 AM" },
    { date: "Sep 24, 2024", time: "02:30 PM" },
    { date: "Sep 25, 2024", time: "09:30 AM" },
    { date: "Sep 25, 2024", time: "04:00 PM" },
    { date: "Sep 26, 2024", time: "10:30 AM" },
  ],
};