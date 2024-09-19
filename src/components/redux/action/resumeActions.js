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
  
  export const setSelectedImage = (image) => ({
    type: SET_SELECTED_IMAGE,
    payload: image,
  });
  
  export const setFirstName = (firstName) => ({
    type: SET_FIRST_NAME,
    payload: firstName,
  });
  
  export const setLastName = (lastName) => ({
    type: SET_LAST_NAME,
    payload: lastName,
  });
  
  export const setProfession = (profession) => ({
    type: SET_PROFESSION,
    payload: profession,
  });
  
  export const setCityState = (cityState) => ({
    type: SET_CITY_STATE,
    payload: cityState,
  });
  
  export const setPostalCode = (postalCode) => ({
    type: SET_POSTAL_CODE,
    payload: postalCode,
  });
  
  export const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country,
  });
  
  export const setPhone = (phone) => ({
    type: SET_PHONE,
    payload: phone,
  });
  
  export const setEmail = (email) => ({
    type: SET_EMAIL,
    payload: email,
  });
  