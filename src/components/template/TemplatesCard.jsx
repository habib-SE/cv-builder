import React, { useState } from "react";
import { Link } from "react-router-dom";

const TemplatesCard = ({ templateImage, description, onUseTemplate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full md:w-1/3 lg:w-1/4 p-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Template Image */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <img
          src={templateImage}
          alt="CV Template"
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          {/* Template Description */}
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Use This Template Button (Visible on Hover) */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <button
              onClick={onUseTemplate}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
             <Link to="/cv-heading">Use this Template</Link> 
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatesCard;
