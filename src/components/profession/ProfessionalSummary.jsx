import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSummary } from "../../components/redux/action/summaryActions";
import { Link } from "react-router-dom";

const ProfessionalSummary = () => {
  const summary = useSelector((state) => state.professionalSummary.summary);
  const dispatch = useDispatch();

  // Load saved summary from localStorage when the component mounts
  useEffect(() => {
    const savedSummary = localStorage.getItem("professionalSummary");
    if (savedSummary) {
      dispatch(updateSummary(savedSummary));
    }
  }, [dispatch]);

  const handleChange = (e) => {
    const newSummary = e.target.value;
    dispatch(updateSummary(newSummary));
    // Save the updated summary to localStorage
    localStorage.setItem("professionalSummary", newSummary);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg h-full mt-10 shadow-md">
      {/* Heading */}
      <div className="mb-6 flex items-center justify-between">
        <div>
        <h1 className="text-3xl font-bold text-gray-800">Professional Summary</h1>
        <p className="text-gray-600 mt-2">
          Write a short overview of your experience, skills, and achievements.
        </p>
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
        {/* Professional Summary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Professional Summary
          </label>
          <textarea
            value={summary}
            onChange={handleChange}
            placeholder="e.g. A highly motivated and experienced professional with expertise in..."
            rows="6"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
          />
        </div>
        <div className="flex justify-between items-center mt-6">
          <div>
            <button className="rounded-full border bg-yellow-200 md:px-20 px-9 py-2">
              <Link to="/cv-heading">Previous</Link>
            </button>
          </div>
          <div>
            <button className="rounded-full border bg-yellow-200 md:px-20 px-14 py-2">
              <Link to="/cv-skills">Next</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfessionalSummary;
