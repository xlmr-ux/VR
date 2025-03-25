import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowRoom from './pages/ShowRoom'; // Update the path as per your file structure
import Home from './pages/HomePage'; // Update the path as per your file structure

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showroom" element={<ShowRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
