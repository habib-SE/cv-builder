// // src/main.jsx or src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Import the new API
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './components/redux/store';
// const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
// root.render(
//   <BrowserRouter>
//   <Provider store={store}>
//     <App />
//   </Provider>
//   </BrowserRouter>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store, { persistor } from './components/redux/store'; // Import store and persistor
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* PersistGate ensures the persisted state is rehydrated before rendering the app */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
