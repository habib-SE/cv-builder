
import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaRegListAlt,
  FaHistory,
  FaGraduationCap,
} from "react-icons/fa";

const CVTemplate = ({ personalInfo, skills, workHistory, education, customDetails }) => {
  return (
    <div className=" w-full">
      <div className="max-w-sm mx-auto flex flex-col-2 border border-gray-600 shadow-lg rounded-lg">
        <div className=" w-[30%] h-[%] rounded-l-lg bg-blue-600">
          
        </div>
        <div className=" section p-4">
          <div className="">
            <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
            <p className="text-xl">{personalInfo.profession}</p>
          </div>

          <div className="my-4">
            <div className="flex text-blue-600">
              <FaMapMarkerAlt />
              <span className="ml-2">{`${personalInfo.city}, ${personalInfo.postalCode} ${personalInfo.country}`}</span>
            </div>
            <div className="flex mt-2 text-blue-600">
              <FaEnvelope />
              <span className="ml-2">{personalInfo.email}</span>
            </div>
          </div>

          <div className="my-4">
            <h2 className="text-2xl font-semibold flex items-center">
              <FaRegListAlt className="mr-2" />
              Skills
            </h2>
            <ul className="list-disc ml-6">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="my-4">
            <h2 className="text-2xl font-semibold flex items-center">
              <FaHistory className="" />
              Work History
            </h2>
            {workHistory.map((job, index) => (
              <div key={index} className="mt-2">
                <h3 className="font-bold">{job.title}</h3>
                <p>{job.company}</p>
                <ul className="list-disc ml-6">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="my-4">
            <h2 className="text-2xl font-semibold flex items-center">
              <FaGraduationCap className="mr-2" />
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mt-2">
                <h3 className="font-bold">{edu.degree}</h3>
                <p>
                  {edu.schoolName} - {edu.schoolLocation}
                </p>
              </div>
            ))}
          </div>

          {/* Custom Details */}
          <div className="my-4">
            <h2 className="text-2xl font-semibold flex items-center">
              <FaRegListAlt className="mr-2" />
              Custom Details
            </h2>
            {customDetails.map((detail, index) => (
              <div key={index} className="mt-2">
                <h3 className="font-bold">{detail.label}</h3>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVTemplate;
