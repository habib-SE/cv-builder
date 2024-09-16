import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomDetailsForm = () => {
  const [customDetails, setCustomDetails] = useState([
    { label: "", value: "" },
  ]);

  const handleDetailChange = (index, field, value) => {
    const updatedDetails = [...customDetails];
    updatedDetails[index][field] = value;
    setCustomDetails(updatedDetails);
  };

  const addNewDetail = () => {
    setCustomDetails([...customDetails, { label: "", value: "" }]);
  };

  const removeDetail = (index) => {
    const updatedDetails = customDetails.filter((_, i) => i !== index);
    setCustomDetails(updatedDetails);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-10 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Add More Custom Details
      </h1>
      <form>
        {customDetails.map((detail, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4"
          >
            {/* Custom Label */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Custom Label
              </label>
              <input
                type="text"
                value={detail.label}
                onChange={(e) =>
                  handleDetailChange(index, "label", e.target.value)
                }
                placeholder="e.g. GitHub Profile"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>

            {/* Custom Value */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Custom Value
              </label>
              <input
                type="text"
                value={detail.value}
                onChange={(e) =>
                  handleDetailChange(index, "value", e.target.value)
                }
                placeholder="e.g. https://github.com/username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              />
            </div>

            {/* Remove Button */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="button"
                onClick={() => removeDetail(index)}
                className="text-red-600 font-bold hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {/* Add New Custom Detail Button */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addNewDetail}
            className="px-4 w-full md:w-52 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Another Detail
          </button>
        </div>
        <div className=" flex justify-between items-center mt-6">
          <div>
            <button className=" rounded-full border bg-yellow-200 md:px-20 px-9 py-2 ">
              <Link to="/cv-education"> previous</Link>
            </button>
          </div>
          <div>
            <button className=" rounded-full border bg-yellow-200 md:px-14 px-4 text-nowrap py-2 ">
              Save & Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomDetailsForm;
