import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateWorkField } from '../../components/redux/action/workActions';
import { Link } from 'react-router-dom';

const WorkExperience = () => {
  const work = useSelector((state) => state.work);
  const dispatch = useDispatch();

  // Load saved work experience data from localStorage on component mount
  useEffect(() => {
    const savedWork = localStorage.getItem('work');
    if (savedWork) {
      const parsedWork = JSON.parse(savedWork);
      Object.keys(parsedWork).forEach((field) => {
        dispatch(updateWorkField(field, parsedWork[field]));
      });
    }
  }, [dispatch]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    dispatch(updateWorkField(name, fieldValue));
    
    // Save to localStorage
    const updatedWork = { ...work, [name]: fieldValue };
    localStorage.setItem('work', JSON.stringify(updatedWork));
  };

  const handleDateChange = (fieldName, fieldValue) => {
    dispatch(updateWorkField(fieldName, fieldValue));

    // Save updated dates to localStorage
    const updatedWork = {
      ...work,
      [fieldName]: { ...work[fieldName], ...fieldValue },
    };
    localStorage.setItem('work', JSON.stringify(updatedWork));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md ">
      {/* Heading */}
      <div className="mb-6">
        <div className=' flex items-center justify-between'>
        <div>
        <h1 className="text-3xl font-bold text-gray-800">Tell us about your most recent job</h1>
        <p className="text-gray-600 mt-2">We'll start there and work backward.</p>
        </div>
        <div className="flex justify-end mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
         <Link to="/cv-template1">preview</Link> 
        </button>
      </div>
        </div>
        <p className="text-red-600 mt-1">*</p><span className="text-sm">indicates a required field</span>
      </div>

      {/* Form */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
            <input
              type="text"
              name="jobTitle"
              value={work.jobTitle}
              onChange={handleChange}
              placeholder="e.g. Software Engineer"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          {/* Employer */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Employer *</label>
            <input
              type="text"
              name="employer"
              value={work.employer}
              onChange={handleChange}
              placeholder="e.g. Best Business Solutions"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={work.location}
              onChange={handleChange}
              placeholder="e.g. Swabi"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          {/* Remote Checkbox */}
          <div className="flex items-center mt-6">
            <input
              type="checkbox"
              name="remote"
              checked={work.remote}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-400"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">Remote</label>
          </div>
        </div>

        {/* Start Date and End Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <div className="flex space-x-4">
              <select
                name="startMonth"
                value={work.startDate.month}
                onChange={(e) => handleDateChange('startDate', { month: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              >
                <option value="">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                {/* Add more months */}
              </select>

              <input
                type="text"
                name="startYear"
                value={work.startDate.year}
                onChange={(e) => handleDateChange('startDate', { year: e.target.value })}
                placeholder="Year"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <div className="flex space-x-4">
              <select
                name="endMonth"
                value={work.endDate.month}
                onChange={(e) => handleDateChange('endDate', { month: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                // disabled={work.currentWork}
              >
                <option value="">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                {/* Add more months */}
              </select>

              <input
                type="text"
                name="endYear"
                value={work.endDate.year}
                onChange={(e) => handleDateChange('endDate', { year: e.target.value })}
                placeholder="Year"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                disabled={work.currentWork}
              />
            </div>

            {/* Current Work Checkbox */}
            <div className="mt-4">
              <input
                type="checkbox"
                name="currentWork"
                checked={work.currentWork}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-400"
              />
              <label className="ml-2 text-sm font-medium text-gray-700">I currently work here</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkExperience;
