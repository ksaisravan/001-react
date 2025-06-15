import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fourth from './Fourth';
import Frist from './Frist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Fourth />} />
        <Route path="/signin" element={<Frist />} />
      </Routes>
    </Router>
  );
}

export default App;