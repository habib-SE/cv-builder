// import {
//     SET_PERSONAL_INFO,
//     SET_PROFESSIONAL_SUMMARY,
//     SET_SKILLS,
//     SET_EXPERIENCE,
//     SET_EDUCATION,
//     SET_CUSTOM_DETAILS,
//   } from '../action/allFormActions';
  
//   const initialState = {
//     personalInfo: {},
//     professionalSummary: {},
//     skills: [],
//     experience: {},
//     education: {},
//     customDetails: [],
//   };
  
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case SET_PERSONAL_INFO:
//         return { ...state, personalInfo: action.payload };
//       case SET_PROFESSIONAL_SUMMARY:
//         return { ...state, professionalSummary: action.payload };
//       case SET_SKILLS:
//         return { ...state, skills: action.payload };
//       case SET_EXPERIENCE:
//         return { ...state, experience: action.payload };
//       case SET_EDUCATION:
//         return { ...state, education: action.payload };
//       case SET_CUSTOM_DETAILS:
//         return { ...state, customDetails: action.payload };
//       default:
//         return state;
//     }
//   };
  
//   export default rootReducer;
  // src/components/redux/reducer/allFormsReducer.js
import { createReducer } from '@reduxjs/toolkit';
import { updateAllForms } from '../action/allFormActions';

const initialState = {
  personalInfo: {},
  professionalSummary: {},
  skills: [],
  experience: {},
  education: {},
  customDetails: [],
};

const allFormsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateAllForms, (state, action) => {
      return { ...state, ...action.payload };
    });
});

export default allFormsReducer;
