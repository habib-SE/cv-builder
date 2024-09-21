
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaRegListAlt, FaHistory, FaGraduationCap } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import BackButton from "../BackButton/BackButton";

const CVTemplate1 = ({ personalInfo, skills, workHistory, education, customDetails, professionalSummary }) => {
  
  const handleDownload = () => {
    const element = document.getElementById('cv-template'); // This ID will wrap the template
    const opt = {
      margin:       0.5,
      filename:     'my_cv.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div>
      {/* Button to download the CV */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Download CV as PDF
        </button>
      </div>
      <div className="  md:ms-72">
        <BackButton/>
      </div>
      {/* The content to be downloaded */}
      <div id="cv-template" className="max-w-3xl mt-8 mx-auto border border-gray-300 shadow-lg rounded-lg flex">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-800 text-white p-6 rounded-l-lg">
          <div className="flex items-center mb-4">
            <img
              src={personalInfo.selectedImage} // Assuming `selectedImage` is a URL or blob
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white"
            />
          </div>
          <h1 className="text-4xl font-bold">
            {personalInfo.name.split(' ')[0]}{" "}
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
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
            <p className="text-gray-600">{professionalSummary || "Use this section to give recruiters a quick glimpse of your professional profile."}</p>
          </div>

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
          <div className="mb-6">
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

          {/* Custom Details */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <FaRegListAlt className="mr-2 text-blue-600" />
              Custom Details
            </h2>
            {customDetails.map((detail, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold">{detail.label}</h3>
                <p className="text-gray-600">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVTemplate1;
