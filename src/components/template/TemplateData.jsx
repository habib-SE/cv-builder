
import React from 'react';
import { useSelector } from 'react-redux';
import CVTemplate from './CvTemplate';

const TemplateData = () => {
  // Fetch data from the Redux store
  const personalInfo = useSelector((state) => state.resume);
  const skills = useSelector((state) => state.skills.skills);
  const workHistory = [useSelector((state) => state.work)]; // Assuming work history is an array; adapt if needed
  const education = [useSelector((state) => state.education)]; // Assuming education is an array; adapt if needed
  const customDetails = useSelector((state) => state.customDetails);

  // Transform data if needed
  const formattedEducation = education.map((edu) => ({
    degree: `${edu.degree}: ${edu.fieldOfStudy}`,
    schoolName: `${edu.schoolName} - ${edu.schoolLocation}`,
    schoolLocation: edu.schoolLocation,
  }));

  const formattedWorkHistory = workHistory.map((work) => ({
    title: work.jobTitle,
    company: work.employer,
    responsibilities: [
      `Location: ${work.location}`,
      `Remote: ${work.remote ? 'Yes' : 'No'}`,
      `Start Date: ${work.startDate.month} ${work.startDate.year}`,
      `End Date: ${work.endDate.year} ${work.endDate.month}`,
      `Current Work: ${work.currentWork ? 'Yes' : 'No'}`,
    ],
  }));

  return (
    <CVTemplate
      personalInfo={{
        selectedImage: personalInfo.selectedImage, // Add image URL or blob
        name: `${personalInfo.firstName} ${personalInfo.lastName}`,
        profession: personalInfo.profession,
        city: personalInfo.cityState,
        postalCode: personalInfo.postalCode,
        country: personalInfo.country,
        email: personalInfo.email,
      }}
      skills={skills}
      workHistory={formattedWorkHistory}
      education={formattedEducation}
      customDetails={customDetails} // Add custom details if needed
    />
  );
};

export default TemplateData;
