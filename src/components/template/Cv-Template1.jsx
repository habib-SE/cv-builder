import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaRegListAlt,
  FaHistory,
  FaGraduationCap,
} from "react-icons/fa";

const CVTemplate1 = ({ personalInfo, skills, workHistory, education }) => {
  return (
    <div className="max-w-3xl mx-auto border border-gray-300 shadow-lg rounded-lg flex">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-gray-800 text-white p-6 rounded-l-lg">
        <h1 className="text-4xl font-bold">{personalInfo.name.split(' ')[0]}{" "}
          <span className="font-normal">{personalInfo.name.split(' ')[1]}</span>
        </h1>
        <p className="mt-2 text-lg">{personalInfo.profession}</p>

        {/* Contact Info */}
        <div className="mt-6">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="mr-2 text-blue-400" />
            <span>{`${personalInfo.city}, ${personalInfo.postalCode}, ${personalInfo.country}`}</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-blue-400" />
            <span>{personalInfo.email}</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-2/3 bg-white p-8 rounded-r-lg">
        {/* Professional Summary */}
        <p className="mb-6 text-sm text-gray-600">
          Use this section to give recruiters a quick glimpse of your professional profile. In just 3-4 lines, highlight your background, education, and main skills.
        </p>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <FaRegListAlt className="mr-2 text-blue-600" />
            Skills
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Work History */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <FaHistory className="mr-2 text-blue-600" />
            Work History
          </h2>
          {workHistory.map((job, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <ul className="list-disc list-inside space-y-1">
                {job.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <FaGraduationCap className="mr-2 text-blue-600" />
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.schoolName}, {edu.schoolLocation}</p>
              <p className="text-gray-600">{edu.timePeriod}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CVTemplate1;
