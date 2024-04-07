import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import LoginPage from './component/LoginPage';
import SignupPage from './component/SignupPage'; // Import SignupPage
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
                <Navigate to="/signup" />
              )
            }
          />
          <Route
            path="/login"
            element={<LoginPage onLogin={(username, password) => handleLogin(username, password, setIsLoggedIn)} />}
          />
          <Route
            path="/signup"
            element={<SignupPage switchToLogin={() => <Navigate to="/login" />} />} // Pass the switchToLogin function
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
