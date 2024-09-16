// src/main.jsx or src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new API
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
