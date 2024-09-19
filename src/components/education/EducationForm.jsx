import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "../../components/redux/reducer/educationReducer";
import { Link } from "react-router-dom";

const EducationForm = () => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.education);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setEducation({ [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Tell us about your education
      </h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* School Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              School Name *
            </label>
            <input
              type="text"
              name="schoolName"
              value={education.schoolName}
              onChange={handleChange}
              placeholder="e.g. Harvard University"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </div>

          {/* School Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              School Location
            </label>
            <input
              type="text"
              name="schoolLocation"
              value={education.schoolLocation}
              onChange={handleChange}
              placeholder="e.g. Lahore"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          {/* Degree */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Degree
            </label>
            <select
              name="degree"
              value={education.degree}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="bachelor">Bachelor's</option>
              <option value="master">Master's</option>
              <option value="phd">PhD</option>
              <option value="associate">Associate</option>
              <option value="diploma">Diploma</option>
            </select>
          </div>

          {/* Field Of Study */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Field Of Study
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              value={education.fieldOfStudy}
              onChange={handleChange}
              placeholder="e.g. Accountancy"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          {/* Graduation Date */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Graduation Date (Or Expected Graduation Date)
            </label>
            <div className="flex space-x-4">
              <select
                name="graduationMonth"
                value={education.graduationMonth}
                onChange={handleChange}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              >
                <option value="">Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
              <input
                type="text"
                name="graduationYear"
                value={education.graduationYear}
                onChange={handleChange}
                placeholder="Year"
                className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div>
            <button className="rounded-full border bg-yellow-200 md:px-20 px-9 py-2">
              <Link to="/cv-experience">Previous</Link>
            </button>
          </div>
          <div>
            <button className="rounded-full border bg-yellow-200 md:px-20 px-14 py-2">
              <Link to="/cv-details">Next</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
