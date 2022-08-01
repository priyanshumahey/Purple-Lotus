import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Project Organization
// - Intro Screen
//      -> Login
//      -> Set-up
// - Homepage
// - Settings Page
// - Parent Page
// - Child Page
// - Therapist Page

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();