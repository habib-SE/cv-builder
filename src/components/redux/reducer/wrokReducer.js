// src/components/redux/reducers/workReducer.js

import { UPDATE_WORK_FIELD, UPDATE_WORK_DATES, TOGGLE_CURRENT_WORK } from '../action/workActions';

const initialState = {
  jobTitle: '',
  employer: '',
  location: '',
  remote: false,
  startDate: { month: '', year: '' },
  endDate: { month: '', year: '' },
  currentWork: false,
};

const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WORK_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case UPDATE_WORK_DATES:
      return {
        ...state,
        [action.payload.dateType]: {
          ...state[action.payload.dateType],
          [action.payload.field]: action.payload.value,
        },
      };
    case TOGGLE_CURRENT_WORK:
      return {
        ...state,
        currentWork: action.payload,
        endDate: action.payload ? { month: '', year: '' } : state.endDate,
      };
    default:
      return state;
  }
};

export default workReducer;
