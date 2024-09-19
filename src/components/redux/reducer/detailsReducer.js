import {
    ADD_CUSTOM_DETAIL,
    UPDATE_CUSTOM_DETAIL,
    REMOVE_CUSTOM_DETAIL,
  } from "../action/detailActions";
  
  const initialState = [{ label: "", value: "" }];
  
  const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CUSTOM_DETAIL:
        return [...state, { label: "", value: "" }];
      case UPDATE_CUSTOM_DETAIL:
        return state.map((detail, index) =>
          index === action.payload.index
            ? { ...detail, [action.payload.field]: action.payload.value }
            : detail
        );
      case REMOVE_CUSTOM_DETAIL:
        return state.filter((_, index) => index !== action.payload);
      default:
        return state;
    }
  };
  
  export default detailsReducer;
  