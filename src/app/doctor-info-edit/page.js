"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { doctorData } from '../doctor-data/doctorData'
import { motion } from 'framer-motion'
import Switch from 'react-switch'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'

export default function EditDoctorProfile() {
  const router = useRouter()
  const [formData, setFormData] = useState(doctorData)
  const [consultationHours, setConsultationHours] = useState({
    Monday: { time: '', location: '', available: false },
    Tuesday: { time: '', location: '', available: false },
    Wednesday: { time: '', location: '', available: false },
    Thursday: { time: '', location: '', available: false },
    Friday: { time: '', location: '', available: false },
    Saturday: { time: '', location: '', available: false },
    Sunday: { time: '', location: '', available: false },
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleNestedChange = (category, field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value,
      },
    }))
  }

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prevState => ({
          ...prevState,
          profileImage: reader.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleConsultationChange = (day, field, value) => {
    setConsultationHours(prevState => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [field]: value,
      },
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Updated doctor data:', { ...formData, consultationHours })
    router.push('/doctor-dashboard')
  }

  return (
    <div className="bg-[#478de9] min-h-screen p-4 md:p-8 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:w-1/4 bg-[#1E40AF] p-6 md:p-8 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Edit Doctor Profile</h1>
            <p className="mb-4">Keep your professional information up to date for your patients and colleagues.</p>
            <div className="mt-8 flex flex-col items-center">
              <div className="relative">
                <img 
                  src={formData.profileImage || 'https://via.placeholder.com/150'} 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <label htmlFor="profile-image-upload" className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </label>
                <input 
                  id="profile-image-upload" 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleProfileImageChange}
                />
              </div>
            </div>
          </div>
          <div className="md:w-3/4 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>
              
              <SectionTitle>Professional Information</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Specialization" name="specialization" value={formData.specialization} onChange={handleChange} />
                <InputField label="License Number" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} />
                <InputField label="Years of Experience" name="yearsOfExperience" type="number" value={formData.yearsOfExperience} onChange={handleChange} />
                <InputField label="Hospital Affiliation" name="hospitalAffiliation" value={formData.hospitalAffiliation} onChange={handleChange} />
              </div>

              <SectionTitle>Contact Information</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Office Phone" name="officePhone" value={formData.contactInfo.officePhone} onChange={(e) => handleNestedChange('contactInfo', 'officePhone', e.target.value)} />
                <InputField label="Emergency Contact" name="emergencyContact" value={formData.contactInfo.emergencyContact} onChange={(e) => handleNestedChange('contactInfo', 'emergencyContact', e.target.value)} />
              </div>

              <SectionTitle>Consultation Hours</SectionTitle>
              <div className="space-y-4">
                {Object.entries(consultationHours).map(([day, data]) => (
                  <div key={day} className="flex flex-wrap items-center space-x-2 space-y-2 sm:space-y-0">
                    <span className="w-full sm:w-24 font-medium">{day}</span>
                    <input
                      type="text"
                      placeholder="Time"
                      value={data.time}
                      onChange={(e) => handleConsultationChange(day, 'time', e.target.value)}
                      className="flex-grow sm:flex-grow-0 sm:w-32 p-2 border border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={data.location}
                      onChange={(e) => handleConsultationChange(day, 'location', e.target.value)}
                      className="flex-grow p-2 border border-gray-300 rounded-md"
                    />
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{data.available ? 'Available' : 'Unavailable'}</span>
                      <Switch
                        checked={data.available}
                        onChange={(checked) => handleConsultationChange(day, 'available', checked)}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={24}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        className="react-switch"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end space-x-4 mt-8">
                <Button type="button" onClick={() => router.push('/doctor-dashboard')} variant="secondary">
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      {...props}
      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>
)

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">{children}</h2>
)

const Button = ({ children, variant, ...props }) => (
  <button
    {...props}
    className={`px-6 py-2 rounded-lg font-medium transition-colors ${
      variant === 'primary'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`}
  >
    {children}
  </button>
)