"use client";
import axios from "axios";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useState, useRef, useEffect } from "react";
import { db } from "../components/utils/config";
import { useRouter } from "next/navigation";

const DoctorOtpVerification = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const [data, setdata] = useState();
  useEffect(() => {
    inputs.current[0].focus();
    // console.log(JSON.stringify(localStorage.getItem('details')))
    // setdata(JSON.parse(localStorage.getItem('details')))
    getData();
  }, []);
  const router = useRouter();
  const getData = async () => {
    console.log(localStorage.getItem("details"));
    setdata(JSON.parse(localStorage.getItem("details")));
  };
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    const q = query(
      collection(db, "otp"),
      where("otp", "==", verificationCode),
      where("email", "==", data.email),
      where("used", "==", 0)
    );

    const docSnap = onSnapshot(q, async (response) => {
      if (response.empty) {
        // alert("Invalid OTP")
        return;
      }
      const data1 = response.docs[0].data();
      if (data1.expiresIn > Date.now()) {
        await updateDoc(doc(db, "otp", response.docs[0].id), { used: 1 });
        await addDoc(collection(db, "doctordetail"), {
          ...data,
          createdAt: Date.now(),
        });
        await addDoc(collection(db, "doctors"), {
          email: data.email,
          data: Date.now(),
          googleLogin: 0,
        });
        localStorage.setItem("details", {});
        const queryParams = new URLSearchParams({
          id: response.docs[0].id,
        }).toString();

        router.push(`/coming-soon?${queryParams}`);
        return;
      } else {
        alert("OTP expired");
        return;
      }
    });

    // Here you would typically send the code to your server for verification
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-#1e40af-100">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Enter Verification Code
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="flex space-x-2 mb-4">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(ref) => (inputs.current[index] = ref)}
              className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none"
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default DoctorOtpVerification;
