// src/components/redux/reducers/professionalSummaryReducer.js

import { UPDATE_SUMMARY } from '../action/summaryActions';

const initialState = {
  summary: '',
};

const SummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SUMMARY:
      return {
        ...state,
        summary: action.payload,
      };
    default:
      return state;
  }
};

export default SummaryReducer;
