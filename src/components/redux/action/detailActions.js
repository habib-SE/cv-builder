export const ADD_CUSTOM_DETAIL = "ADD_CUSTOM_DETAIL";
export const UPDATE_CUSTOM_DETAIL = "UPDATE_CUSTOM_DETAIL";
export const REMOVE_CUSTOM_DETAIL = "REMOVE_CUSTOM_DETAIL";

// Action creators
export const addCustomDetail = () => ({
  type: ADD_CUSTOM_DETAIL,
});

export const updateCustomDetail = (index, field, value) => ({
  type: UPDATE_CUSTOM_DETAIL,
  payload: { index, field, value },
});

export const removeCustomDetail = (index) => ({
  type: REMOVE_CUSTOM_DETAIL,
  payload: index,
});
