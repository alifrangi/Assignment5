import React from 'react';
import SignupForm from './SignupForm';

const SignupPage = ({ switchToLogin }) => {
  return (
    <div className="signup-page">
      <SignupForm switchToLogin={switchToLogin} />
    </div>
  );
};

export default SignupPage;
