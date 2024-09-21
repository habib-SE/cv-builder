// export const SET_PERSONAL_INFO = 'SET_PERSONAL_INFO';
// export const SET_PROFESSIONAL_SUMMARY = 'SET_PROFESSIONAL_SUMMARY';
// export const SET_SKILLS = 'SET_SKILLS';
// export const SET_EXPERIENCE = 'SET_EXPERIENCE';
// export const SET_EDUCATION = 'SET_EDUCATION';
// export const SET_CUSTOM_DETAILS = 'SET_CUSTOM_DETAILS';

// export const setPersonalInfo = (data) => ({
//   type: SET_PERSONAL_INFO,
//   payload: data,
// });

// export const setProfessionalSummary = (data) => ({
//   type: SET_PROFESSIONAL_SUMMARY,
//   payload: data,
// });

// export const setSkills = (data) => ({
//   type: SET_SKILLS,
//   payload: data,
// });

// export const setExperience = (data) => ({
//   type: SET_EXPERIENCE,
//   payload: data,
// });

// export const setEducation = (data) => ({
//   type: SET_EDUCATION,
//   payload: data,
// });

// export const setCustomDetails = (data) => ({
//   type: SET_CUSTOM_DETAILS,
//   payload: data,
// });
// src/components/redux/action/allFormsActions.js
import { createAction } from '@reduxjs/toolkit';

// Actions
export const updateAllForms = createAction('allForms/update');

// Thunk
export const updateAllFormsThunk = () => (dispatch, getState) => {
  const state = getState();
  dispatch(updateAllForms({
    personalInfo: state.resume,
    professionalSummary: state.professionalSummary,
    skills: state.skills.skills,
    experience: state.work,
    education: state.education,
    customDetails: state.customDetails,
  }));
};
