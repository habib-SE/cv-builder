import React, { useState } from "react";
import WorkExperience from "../work/WorkExperience"; // Import the WorkExperience component
import { Link } from "react-router-dom";

const AddExperience = () => {
  const [experiences, setExperiences] = useState([
    {
      jobTitle: "",
      employer: "",
      location: "",
      remote: false,
      startDate: { month: "", year: "" },
      endDate: { month: "", year: "" },
      currentWork: false,
    },
  ]);

  // Function to handle adding a new experience
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        jobTitle: "",
        employer: "",
        location: "",
        remote: false,
        startDate: { month: "", year: "" },
        endDate: { month: "", year: "" },
        currentWork: false,
      },
    ]);
  };

  // Function to handle removing an experience
  const removeExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  // Function to update the state when form inputs change
  const handleExperienceChange = (index, updatedExperience) => {
    const updatedExperiences = experiences.map((exp, i) =>
      i === index ? updatedExperience : exp
    );
    setExperiences(updatedExperiences);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Add Your Work Experience
      </h1>

      {experiences.map((experience, index) => (
        <div key={index} className="mb-6">
          <WorkExperience
            experience={experience}
            onExperienceChange={(updatedExperience) =>
              handleExperienceChange(index, updatedExperience)
            }
          />
          {experiences.length > 1 && (
            <button
              onClick={() => removeExperience(index)}
              className="text-red-500 hover:text-red-700 mt-2"
            >
              Remove Experience
            </button>
          )}
        </div>
      ))}
      <div className=" md:mt-0 mt-16">
        <button
          onClick={addExperience}
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        >
          + Add Another Experience
        </button>
      </div>
      <div className=" flex justify-between items-center mt-6">
        <div>
          <button className=" rounded-full border bg-yellow-200 md:px-20 px-9 py-2 ">
            <Link to="/cv-skills"> Previous</Link>
          </button>
        </div>
        <div>
          <button className=" rounded-full border bg-yellow-200 md:px-20 px-14 py-2 ">
            <Link to="/cv-education"> Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
