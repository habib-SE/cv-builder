import {
    SET_SELECTED_IMAGE,
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_PROFESSION,
    SET_CITY_STATE,
    SET_POSTAL_CODE,
    SET_COUNTRY,
    SET_PHONE,
    SET_EMAIL
  } from '../types/headingActionTypes.js';
  
  const initialState = {
    selectedImage: null,
    firstName: '',
    lastName: '',
    profession: '',
    cityState: '',
    postalCode: '',
    country: '',
    phone: '',
    email: '',
  };
  
  const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SELECTED_IMAGE:
        return { ...state, selectedImage: action.payload };
      case SET_FIRST_NAME:
        return { ...state, firstName: action.payload };
      case SET_LAST_NAME:
        return { ...state, lastName: action.payload };
      case SET_PROFESSION:
        return { ...state, profession: action.payload };
      case SET_CITY_STATE:
        return { ...state, cityState: action.payload };
      case SET_POSTAL_CODE:
        return { ...state, postalCode: action.payload };
      case SET_COUNTRY:
        return { ...state, country: action.payload };
      case SET_PHONE:
        return { ...state, phone: action.payload };
      case SET_EMAIL:
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };
  
  export default resumeReducer;
  