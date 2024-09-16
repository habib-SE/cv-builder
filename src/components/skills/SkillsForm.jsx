import React, { useState } from "react";
import { Link } from "react-router-dom";

const SkillsForm = () => {
  const [skills, setSkills] = useState([""]);

  // Handle input change
  const handleChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  // Add new skill
  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  // Remove a skill
  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg mt-10 shadow-md h-auto">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Skills</h1>
        <p className="text-gray-600 mt-2">Add your skills one by one.</p>
      </div>

      {/* Form */}
      <form>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4 flex items-center">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleChange(index, e)}
              placeholder="e.g. JavaScript, Teamwork, Communication"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
            />
            {/* Remove button for each skill */}
            {skills.length > 1 && (
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="ml-3 px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        {/* Add Skill Button */}
        <button
          type="button"
          onClick={addSkill}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Add Skill
        </button>
        <div className=" flex justify-between items-center mt-6">
          <div>
            <button className=" rounded-full border bg-yellow-200 md:px-20 px-9 py-2 ">
              <Link to="/cv-summary"> Previous</Link>
            </button>
          </div>
          <div>
            <button className=" rounded-full border bg-yellow-200 md:px-20 px-14 py-2 ">
              <Link to="/cv-experience"> Next</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SkillsForm;
