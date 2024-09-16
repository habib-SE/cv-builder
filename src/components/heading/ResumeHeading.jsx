import React from "react";
import BackButton from "../BackButton/BackButton";
import { Link } from "react-router-dom";

const ResumeHeading = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-10 rounded-lg shadow-md">
      <div className="mb-4">
        <BackButton />
      </div>
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Resume Heading</h1>
        <p className="text-gray-600 mt-2">
          We suggest including an email and phone number.
        </p>
        <p className="text-red-600 mt-1">*</p>
        <span className="text-sm">indicates a required field</span>
      </div>

      {/* Form */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>

          {/* Surname */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>

          {/* Profession */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profession
            </label>
            <input
              type="text"
              placeholder="profession"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>

          {/* City - State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City - State
            </label>
            <input
              type="text"
              placeholder="city"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              placeholder="25000"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              placeholder="country"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              placeholder="e.g. +92-31-45712345"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              placeholder="Example@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>
        </div>
        <div className=" flex justify-between items-center mt-6">
          <span></span>
          <div>
            <button className=" rounded-full border bg-yellow-200 md:px-20 px-14 py-2 ">
              <Link to="/cv-summary"> Next</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResumeHeading;
