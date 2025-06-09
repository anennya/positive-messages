import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DailyInspiration from './pages/DailyInspiration';
import FeynmanQuotes from './pages/FeynmanQuotes';

function App() {
  return (
    <Router>
      <div className="relative">
        <Navigation />
        <Routes>
          <Route path="/" element={<DailyInspiration />} />
          <Route path="/feynman" element={<FeynmanQuotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;