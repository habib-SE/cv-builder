import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './reducer/resumeReducer';
import SummaryReducer from './reducer/summaryReducer';
import skillsReducer from './reducer/skillsReducer';
import workReducer from './reducer/wrokReducer';
import educationReducer from './reducer/educationReducer';
import detailsReducer from './reducer/detailsReducer';
import rootReducer from './reducer/allFormsReducer';

const store = configureStore({
  reducer: {
    resume: resumeReducer,
    professionalSummary: SummaryReducer,
    skills: skillsReducer,
    work: workReducer,
    education: educationReducer,
    customDetails:detailsReducer,
    rootReducer,
  },
});

export default store;
