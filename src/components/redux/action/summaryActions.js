// src/components/redux/actions/professionalSummaryActions.js

export const UPDATE_SUMMARY = 'UPDATE_SUMMARY';

export const updateSummary = (summary) => {
  return {
    type: UPDATE_SUMMARY,
    payload: summary,
  };
};
