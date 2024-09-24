// clinic-data/clinicData.js
export const clinicData = {
    profileImage: "/clinic-profile.jpg",
    name: "ABC Clinic",
    email: "info@abcclinic.com",
    licenseNumber: "123456789",
    yearsOfOperation: 15,
    address: "123 Main St, Anytown USA",
    contactInfo: {
      officePhone: "555-123-4567",
      emergencyContact: "555-987-6543",
    },
    services: [
      "General Medicine",
      "Pediatrics",
      "Gynecology",
      "Orthopedics",
      "Cardiology",
      "Dermatology",
    ],

    doctors: [
        {
          name: "Dr. John Doe",
          specialization: "General Medicine",
          availableDays: {
            Monday: true,
            Tuesday: false,
            Wednesday: true,
            Thursday: true,
            Friday: true,
            Saturday: false,
            Sunday: false,
          },
        },
        {
          name: "Dr. Jane Smith",
          specialization: "Pediatrics",
          availableDays: {
            Monday: true,
            Tuesday: true,
            Wednesday: false,
            Thursday: true,
            Friday: true,
            Saturday: true,
            Sunday: false,
          },
        },
        {
          name: "Dr. Michael Johnson",
          specialization: "Cardiology",
          availableDays: {
            Monday: false,
            Tuesday: true,
            Wednesday: true,
            Thursday: false,
            Friday: true,
            Saturday: false,
            Sunday: true,
          },
        },
        {
          name: "Dr. Emily Wilson",
          specialization: "Gynecology",
          availableDays: {
            Monday: true,
            Tuesday: true,
            Wednesday: true,
            Thursday: false,
            Friday: true,
            Saturday: false,
            Sunday: false,
          },
        },
      ],
    appointments: [
      {
        doctor: {
          name: "Dr. John Doe",
          specialization: "General Medicine",
        },
        date: "Today",
        time: "10:00 AM",
        status: "confirmed",
        type: "Routine Check-up",
      },
      {
        doctor: {
          name: "Dr. Jane Smith",
          specialization: "Pediatrics",
        },
        date: "Tomorrow",
        time: "2:00 PM",
        status: "pending",
        type: "Vaccination",
      },
      {
        doctor: {
          name: "Dr. Michael Johnson",
          specialization: "Cardiology",
        },
        date: "Next Week",
        time: "9:30 AM",
        status: "confirmed",
        type: "Consultation",
      },
    ],
    stats: {
      totalPatients: 5000,
      averageAppointmentsPerDay: 50,
      satisfactionRate: "90%",
    },
  };