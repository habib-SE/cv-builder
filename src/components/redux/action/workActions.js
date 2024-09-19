// src/components/redux/actions/workActions.js

export const UPDATE_WORK_FIELD = 'UPDATE_WORK_FIELD';
export const UPDATE_WORK_DATES = 'UPDATE_WORK_DATES';
export const TOGGLE_CURRENT_WORK = 'TOGGLE_CURRENT_WORK';

export const updateWorkField = (name, value) => {
  return {
    type: UPDATE_WORK_FIELD,
    payload: { name, value },
  };
};

export const updateWorkDates = (dateType, field, value) => {
  return {
    type: UPDATE_WORK_DATES,
    payload: { dateType, field, value },
  };
};

export const toggleCurrentWork = (checked) => {
  return {
    type: TOGGLE_CURRENT_WORK,
    payload: checked,
  };
};
