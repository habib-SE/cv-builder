// src/components/redux/actions/skillsActions.js

export const UPDATE_SKILL = 'UPDATE_SKILL';
export const ADD_SKILL = 'ADD_SKILL';
export const REMOVE_SKILL = 'REMOVE_SKILL';

export const updateSkill = (index, skill) => {
  return {
    type: UPDATE_SKILL,
    payload: { index, skill },
  };
};

export const addSkill = () => {
  return {
    type: ADD_SKILL,
  };
};

export const removeSkill = (index) => {
  return {
    type: REMOVE_SKILL,
    payload: index,
  };
};
