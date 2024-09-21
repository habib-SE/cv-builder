import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSkill, addSkill, removeSkill } from "../../components/redux/action/skillsActions";
import { Link } from "react-router-dom";

const SkillsForm = () => {
  const skills = useSelector((state) => state.skills.skills);
  const dispatch = useDispatch();

  // Load saved skills from localStorage when the component mounts
  useEffect(() => {
    const savedSkills = localStorage.getItem("skills");
    if (savedSkills) {
      const parsedSkills = JSON.parse(savedSkills);
      parsedSkills.forEach((skill, index) => dispatch(updateSkill(index, skill)));
    }
  }, [dispatch]);

  const handleChange = (index, event) => {
    dispatch(updateSkill(index, event.target.value));
    // Save the updated skills to localStorage
    const updatedSkills = [...skills];
    updatedSkills[index] = event.target.value;
    localStorage.setItem("skills", JSON.stringify(updatedSkills));
  };

  const handleAddSkill = () => {
    dispatch(addSkill());
    // Add an empty skill to localStorage
    const updatedSkills = [...skills, ""];
    localStorage.setItem("skills", JSON.stringify(updatedSkills));
  };

  const handleRemoveSkill = (index) => {
    dispatch(removeSkill(index));
    // Update localStorage when a skill is removed
    const updatedSkills = skills.filter((_, i) => i !== index);
    localStorage.setItem("skills", JSON.stringify(updatedSkills));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg mt-10 shadow-md h-auto">
      {/* Heading */}
      <div className="mb-6 flex items-center justify-between">
        <div>
        <h1 className="text-3xl font-bold text-gray-800">Skills</h1>
        <p className="text-gray-600 mt-2">Add your skills one by one.</p>
        </div>
        <div className="flex justify-end mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
         <Link to="/cv-template1">preview</Link> 
        </button>
      </div>
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
            {skills.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveSkill(index)}
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
          onClick={handleAddSkill}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Add Skill
        </button>
        <div className=" flex justify-between items-center mt-6">
          <div>
            <button className="rounded-full border bg-yellow-200 md:px-20 px-9 py-2">
              <Link to="/cv-summary">Previous</Link>
            </button>
          </div>
          <div>
            <button className="rounded-full border bg-yellow-200 md:px-20 px-14 py-2">
              <Link to="/cv-experience">Next</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SkillsForm;
