import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fourth from './Fourth';
import Frist from './Frist'; 

function App() {
  return (
    <Router basename="/001-react">
      <Routes>
        <Route path="/register" element={<Fourth />} />
        <Route path="/" element={<Frist />} /> 
      </Routes>
    </Router>
  );
}

export default App;
