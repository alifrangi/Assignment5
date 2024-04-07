import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import LoginPage from './component/LoginPage';
import { handleLogin, handleLogout } from './auth'; // Import authentication functions

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/products" />
              ) : (
                <Homepage onLogin={(username, password) => handleLogin(username, password, setIsLoggedIn)} />
              )
            }
          />
          <Route
            path="/products"
            element={
              isLoggedIn ? (
                <Productpage onLogout={() => handleLogout(setIsLoggedIn)} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={<LoginPage onLogin={(username, password) => handleLogin(username, password, setIsLoggedIn)} />}
          />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
