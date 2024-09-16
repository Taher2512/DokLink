"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { patientData } from '../patient-data/patientData'
import { motion } from 'framer-motion'

export default function EditProfile() {
  const router = useRouter()
  const [formData, setFormData] = useState(patientData)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Updated data:', formData)
    router.push('/dashboard')
  }

  return (
    <div className="bg-[#478de9] min-h-screen p-8 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:w-1/3 bg-[#1E40AF] p-8 text-white">
            <h1 className="text-4xl font-bold mb-6">Edit Profile</h1>
            <p className="mb-4">Update your personal and health information to keep your profile current.</p>
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
          <div className="md:w-2/3 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>
              
              <SectionTitle>Personal Information</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(formData.personalInfo).map(([key, value]) => (
                  <InputField 
                    key={key} 
                    label={key} 
                    value={value} 
                    onChange={(e) => handleNestedChange('personalInfo', key, e.target.value)} 
                  />
                ))}
              </div>

              <SectionTitle>Health Information</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(formData.healthInfo).map(([key, value]) => (
                  <InputField 
                    key={key} 
                    label={key} 
                    value={value} 
                    onChange={(e) => handleNestedChange('healthInfo', key, e.target.value)} 
                  />
                ))}
              </div>
              
              <div className="flex justify-end space-x-4 mt-8">
                <Button type="button" onClick={() => router.push('/dashboard')} variant="secondary">
                  Cancel
                </Button>
                <Button type="submit" variant="primary" >
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