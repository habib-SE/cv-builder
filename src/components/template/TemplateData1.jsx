import CVTemplate1 from "./Cv-Template1";

const TemplateData1 = () => {
    const personalInfo = {
      name: 'Abdur Rahman',
      profession: 'Student',
      city: 'Peshawar',
      postalCode: '25000',
      country: 'Pakistan',
      email: 'hab67603@gmail.com'
    };
  
    const skills = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'];
  
    const workHistory = [
      {
        title: 'Job Title 1',
        company: 'Company Name',
        responsibilities: ['Responsibility 1', 'Responsibility 2']
      },
      {
        title: 'Job Title 2',
        company: 'Company Name',
        responsibilities: ['Responsibility 1', 'Responsibility 2']
      }
    ];
  
    const education = [
      {
        degree: 'Degree: Field of study',
        schoolName: 'School Name - City',
        schoolLocation: 'Mention if applicable'
      },
      {
        degree: 'Degree: Field of study',
        schoolName: 'School Name - City',
        schoolLocation: 'Mention if applicable'
      }
    ];
  
    return <CVTemplate1 personalInfo={personalInfo} skills={skills} workHistory={workHistory} education={education} />;
  };
  
  export default TemplateData1;
  