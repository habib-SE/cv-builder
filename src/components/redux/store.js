// import { configureStore } from '@reduxjs/toolkit';
// import resumeReducer from './reducer/resumeReducer';
// import SummaryReducer from './reducer/summaryReducer';
// import skillsReducer from './reducer/skillsReducer';
// import workReducer from './reducer/wrokReducer';
// import educationReducer from './reducer/educationReducer';
// import detailsReducer from './reducer/detailsReducer';
// import AllformReducer from './reducer/allFormsReducer';

// const store = configureStore({
//   reducer: {
//     resume: resumeReducer,
//     professionalSummary: SummaryReducer,
//     skills: skillsReducer,
//     work: workReducer,
//     education: educationReducer,
//     customDetails:detailsReducer,
//     AllformReducer,
//   },
// });

// export default store;
// src/components/redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import your reducers
import resumeReducer from './reducer/resumeReducer';
import summaryReducer from './reducer/summaryReducer';
import skillsReducer from './reducer/skillsReducer';
import workReducer from './reducer/workReducer';
import educationReducer from './reducer/educationReducer';
import detailsReducer from './reducer/detailsReducer';
import allFormsReducer from './reducer/allFormsReducer';

// Define persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  resume: resumeReducer,
  professionalSummary: summaryReducer,
  skills: skillsReducer,
  work: workReducer,
  education: educationReducer,
  customDetails: detailsReducer,
  allForms: allFormsReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Create persistor
export const persistor = persistStore(store);

export default store;
