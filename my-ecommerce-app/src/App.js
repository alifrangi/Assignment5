import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage'; // Adjust the import path if necessary
import Productpage from './component/Productpage'; // Adjust the import path if necessary
import LoginPage from './component/LoginPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
