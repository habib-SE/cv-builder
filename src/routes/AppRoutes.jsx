import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import ResumeHeading from '../components/heading/ResumeHeading';
import ProfessionalSummary from '../components/profession/ProfessionalSummary';
import SkillsForm from '../components/skills/SkillsForm';
import AddExperience from '../components/experiance/AddExperience';
import EducationForm from '../components/education/EducationForm';
import CustomDetailsForm from '../components/moredetails/CustomDetailsForm';
import TemplateData from '../components/template/TemplateData';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import ForgotPassword from '../components/auth/ForgotPassword';
import TemplateData1 from '../components/template/TemplateData1';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv-heading" element={<ResumeHeading/>} />
      <Route path="/cv-summary" element={<ProfessionalSummary/>} />
      <Route path="/cv-skills" element={<SkillsForm />} />
      <Route path="/cv-experience" element={<AddExperience />} />
      <Route path="/cv-education" element={<EducationForm />} />
      <Route path="/cv-details" element={<CustomDetailsForm />} />
      <Route path="/cv-template" element={<TemplateData />} />
      <Route path="/cv-template1" element={<TemplateData1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AppRoutes;
