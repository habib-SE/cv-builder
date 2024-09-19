// educationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  schoolName: "",
  schoolLocation: "",
  degree: "",
  fieldOfStudy: "",
  graduationMonth: "",
  graduationYear: "",
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setEducation: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setEducation } = educationSlice.actions;
export default educationSlice.reducer;
