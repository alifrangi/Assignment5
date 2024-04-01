// LoginForm.js
import React from 'react';

const LoginForm = ({ switchToSignup }) => {
    return (
        <form>
            <h2>Login</h2>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <span onClick={switchToSignup}>Sign up</span></p>
        </form>
    );
};

export default LoginForm;
