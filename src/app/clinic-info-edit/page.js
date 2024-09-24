"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { clinicData } from '../clinic-data/clinicData'
import { motion } from 'framer-motion'

export default function EditClinicProfile() {
  const router = useRouter()
  const [formData, setFormData] = useState(clinicData)
  const [newService, setNewService] = useState('')

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

  const handleServiceAdd = () => {
    if (newService.trim() !== '') {
      setFormData(prevState => ({
        ...prevState,
        services: [...prevState.services, newService.trim()]
      }))
      setNewService('')
    }
  }

  const handleServiceRemove = (index) => {
    setFormData(prevState => ({
      ...prevState,
      services: prevState.services.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Updated clinic data:', formData)
    router.push('/clinic-dashboard')
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Edit Clinic Profile</h1>
            <p className="mb-4">Keep your clinic information up to date for your patients and staff.</p>
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
                <InputField label="License Number" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} />
                <InputField label="Years of Operation" name="yearsOfOperation" type="number" value={formData.yearsOfOperation} onChange={handleChange} />
              </div>

              <SectionTitle>Contact Information</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Office Phone" name="officePhone" value={formData.contactInfo.officePhone} onChange={(e) => handleNestedChange('contactInfo', 'officePhone', e.target.value)} />
                <InputField label="Emergency Contact" name="emergencyContact" value={formData.contactInfo.emergencyContact} onChange={(e) => handleNestedChange('contactInfo', 'emergencyContact', e.target.value)} />
                <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
              </div>

              <SectionTitle>Services</SectionTitle>
              <div className="space-y-2">
                {formData.services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{service}</span>
                    <button
                      type="button"
                      className="text-red-600 hover:text-red-800 transition"
                      onClick={() => handleServiceRemove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="flex items-center space-x-2">
                  <InputField
                    label="New Service"
                    name="newService"
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={handleServiceAdd}
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-8">
                <Button type="button" onClick={() => router.push('/clinic-dashboard')} variant="secondary">
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