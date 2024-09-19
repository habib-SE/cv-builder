// src/components/redux/reducers/skillsReducer.js

import { UPDATE_SKILL, ADD_SKILL, REMOVE_SKILL } from '../action/skillsActions';

const initialState = {
  skills: [""],
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SKILL:
      const updatedSkills = [...state.skills];
      updatedSkills[action.payload.index] = action.payload.skill;
      return {
        ...state,
        skills: updatedSkills,
      };
    case ADD_SKILL:
      return {
        ...state,
        skills: [...state.skills, ""],
      };
    case REMOVE_SKILL:
      return {
        ...state,
        skills: state.skills.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default skillsReducer;
