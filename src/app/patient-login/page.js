"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { addDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../components/utils/config";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import Select from "react-select";
import { City, Country, State } from "country-state-city";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PatientLogin() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [countryOpen, setCountryOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [stateOpen, setStateOpen] = useState(false);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cityOpen, setCityOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [genderOpen, setGenderOpen] = useState(false);
  const [genders, setGenders] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ]);
  const [selectedGender, setSelectedGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [countryZIndex, setCountryZIndex] = useState(4000);
  const [stateZIndex, setStateZIndex] = useState(3000);
  const [cityZIndex, setCityZIndex] = useState(2000);
  const [genderZIndex, setGenderZIndex] = useState(1000);
  const [birthDate, setBirthDate] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [showError, setShowError] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    const formattedCountries = allCountries.map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountries(formattedCountries);
  }, []);

  useEffect(() => {
    const countryStates = State.getStatesOfCountry(selectedCountry?.value);
    const formattedStates = countryStates.map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));
    setStates(formattedStates);
    setSelectedState("");
    setSelectedCity("");
  }, [selectedCountry]);

  useEffect(() => {
    const allCities = City.getCitiesOfState(
      selectedCountry?.value,
      selectedState?.value
    );
    const formattedCities = allCities.map((city) => ({
      value: city.name,
      label: city.name,
    }));
    setCities(formattedCities);
    setSelectedCity("");
  }, [selectedState]);

  const onCountryOpen = useCallback(() => {
    setStateOpen(false);
    setCityOpen(false);
    setGenderOpen(false);
    setCountryZIndex(4000);
    setStateZIndex(3000);
    setCityZIndex(2000);
    setGenderZIndex(1000);
  }, []);

  const onStateOpen = useCallback(() => {
    setCountryOpen(false);
    setCityOpen(false);
    setGenderOpen(false);
    setCountryZIndex(2000);
    setStateZIndex(4000);
    setCityZIndex(3000);
    setGenderZIndex(1000);
  }, []);

  const onCityOpen = useCallback(() => {
    setCountryOpen(false);
    setStateOpen(false);
    setGenderOpen(false);
    setCountryZIndex(2000);
    setStateZIndex(3000);
    setCityZIndex(4000);
    setGenderZIndex(1000);
  }, []);

  const onGenderOpen = useCallback(() => {
    setCountryOpen(false);
    setStateOpen(false);
    setCityOpen(false);
    setCountryZIndex(1000);
    setStateZIndex(2000);
    setCityZIndex(3000);
    setGenderZIndex(4000);
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      fullName === "" ||
      email === "" ||
      mobile === "" ||
      selectedCountry.value === "" ||
      selectedState.value === "" ||
      selectedCity.value === "" ||
      pinCode === "" ||
      selectedGender.value === "" ||
      birthDate === ""
    ) {
      setShowError(true);
      setLoading(false);
      return;
    } else {
      setShowError(false);
      const q = query(
        collection(db, "userdetail"),
        where("email", "==", email)
      );
      const unsubscribe = onSnapshot(q, async (querySnapshot) => {
        let arr = querySnapshot.docs.filter((doc) => doc.email === email);
        if (querySnapshot.docs.length > 0) {
          setLoading(false);
        } else {
          axios
            .post("https://gmtserver.onrender.com/generateOtp", {
              email: email,
            })
            .then(async (response) => {
              if (response.data.error == 0) {
                addDoc(collection(db, "otp"), {
                  email,
                  otp: response.data.otp,
                  expiresIn: Date.now() + 9 * 60 * 1000,
                  used: 0,
                }).then(() => {
                  localStorage.setItem(
                    "details",
                    JSON.stringify({
                      fullName,
                      email,
                      mobile,
                      country: selectedCountry,
                      state: selectedState,
                      city: selectedCity,
                      pinCode,
                      gender: selectedGender,
                      dob: birthDate,
                      suggestions: suggestions,
                    })
                  );
                  router.push("/patient-otp-verification");
                  setLoading(false);
                });
              }
            });
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#478de9]">
      <div className="pt-4">

      <Navbar />
      </div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Patient Sign In</h2>
        <form onSubmit={submitForm} className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Full Name" value={fullName} onChange={setFullName} />
            <InputField label="Email address" type="email" value={email} onChange={setEmail} />
            <InputField label="Mobile No." type="tel" value={mobile} onChange={setMobile} />
            <SelectField label="Country" options={countries} value={selectedCountry} onChange={setSelectedCountry} />
            <SelectField label="State" options={states} value={selectedState} onChange={setSelectedState} isDisabled={!selectedCountry} />
            <SelectField label="City" options={cities} value={selectedCity} onChange={setSelectedCity} isDisabled={!selectedState} />
            <InputField label="Pin Code" type="number" value={pinCode} onChange={setPinCode} />
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Birth Date</label>
              <DatePicker
                selected={birthDate}
                onChange={setBirthDate}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholderText="Select Birth Date..."
                showMonthDropdown
                showYearDropdown
                yearDropdownItemNumber={60}
                scrollableYearDropdown
              />
            </div>
            <SelectField label="Gender" options={genders} value={selectedGender} onChange={setSelectedGender} />
          </div>
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Anything you want to suggest?</label>
            <textarea
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
            />
          </div>
          {showError && (
            <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              <p className="text-center">Please fill out all the fields!</p>
            </div>
          )}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 ease-in-out"
            >
              {loading ? "Submitting..." : "Create Account"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

const InputField = ({ label, type = "text", value, onChange }) => (
  <div className="relative">
    <label className="text-sm font-medium text-gray-700 mb-1 block">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

const SelectField = ({ label, options, value, onChange, isDisabled = false }) => (
  <div className="relative">
    <label className="text-sm font-medium text-gray-700 mb-1 block">{label}</label>
    <Select
      options={options}
      value={value}
      onChange={onChange}
      isDisabled={isDisabled}
      className="react-select-container"
      classNamePrefix="react-select"
      styles={{
        control: (provided, state) => ({
          ...provided,
          borderColor: state.isFocused ? '#3B82F6' : '#D1D5DB',
          boxShadow: state.isFocused ? '0 0 0 1px #3B82F6' : 'none',
          '&:hover': {
            borderColor: '#3B82F6',
          },
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#3B82F6' : state.isFocused ? '#E5E7EB' : 'white',
          color: state.isSelected ? 'white' : '#1F2937',
        }),
      }}
    />
  </div>
);

export default PatientLogin;