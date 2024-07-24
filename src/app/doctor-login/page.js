"use client";

import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import Select from "react-select";
import { City, Country, State } from "country-state-city";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DoctorLogin() {
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
  const [zipCode, setZipCode] = useState("");
  const [genderOpen, setGenderOpen] = useState(false);
  const [genders, setGenders] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ]);
  const [selectedGender, setSelectedGender] = useState("");
  const [loading, setLoading] = useState(true);
  const [countryZIndex, setCountryZIndex] = useState(4000);
  const [stateZIndex, setStateZIndex] = useState(3000);
  const [cityZIndex, setCityZIndex] = useState(2000);
  const [genderZIndex, setGenderZIndex] = useState(1000);
  const [birthDate, setBirthDate] = useState("");
  const [showError, setShowError] = useState(false);

  const options = [
    {
      value: 1,
      label: "Leanne Graham",
    },
    {
      value: 2,
      label: "Ervin Howell",
    },
  ];

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
    if (
      fullName === "" ||
      email === "" ||
      mobile === "" ||
      selectedCountry === "" ||
      selectedState === "" ||
      selectedCity === "" ||
      zipCode === "" ||
      selectedGender === "" ||
      birthDate === ""
    ) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
      console.log({
        fullName,
        email,
        mobile,
        selectedCountry,
        selectedState,
        selectedCity,
        zipCode,
        selectedGender,
        birthDate,
      });
    }
  };

  return (
    <>
      <Navbar />

      <form onSubmit={submitForm} className="max-w-md mx-auto my-16">
        <div className="relative z-0 w-full my-8 group">
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label className="peer-focus:font-medium absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Full Name
          </label>
        </div>
        <div className="relative z-0 w-full my-8 group">
          <input
            type="email"
            className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="peer-focus:font-medium absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full my-8 group">
          <input
            type="number"
            className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <label className="peer-focus:font-medium absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Mobile No.
          </label>
        </div>
        <div className="my-7">
          <Select
            options={countries}
            defaultValue={{}}
            value={selectedCountry}
            placeholder="Select Country..."
            isSearchable
            onChange={setSelectedCountry}
          />
        </div>
        <div className="my-7">
          <Select
            isDisabled={selectedCountry === ""}
            options={states}
            defaultValue={{}}
            value={selectedState}
            placeholder="Select State..."
            isSearchable
            onChange={setSelectedState}
          />
        </div>
        <div className="my-7">
          <Select
            isDisabled={selectedState === ""}
            options={cities}
            defaultValue={{}}
            value={selectedCity}
            placeholder="Select City..."
            isSearchable
            onChange={setSelectedCity}
          />
        </div>
        <div className="relative z-0 w-full my-8 group">
          <input
            type="number"
            className="block py-2.5 px-0 w-full text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
          />
          <label className="peer-focus:font-medium absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            ZIP Code
          </label>
        </div>
        <div className="my-7">
          <Select
            options={genders}
            defaultValue={{}}
            value={selectedGender}
            placeholder="Select Gender..."
            onChange={setSelectedGender}
          />
        </div>
        <div className="my-7">
          <DatePicker
            selected={birthDate}
            value={birthDate}
            onChange={setBirthDate}
            showMonthDropdown
            showYearDropdown
            yearDropdownItemNumber={60}
            scrollableYearDropdown
            showIcon
            withPortal
            placeholderText="Select Birth Date..."
          />
        </div>
        <div className="mt-16">
          {showError && (
            <div className="flex mb-7 bg-red-500 p-3 justify-center items-center rounded-md">
              <p className="text-white font-semibold text-sm">
                Please fill out all the fields!
              </p>
            </div>
          )}

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="min-w-80 text-white hover:text-[#1e40af] bg-transparent hover:bg-white border-2 border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
}

export default DoctorLogin;
