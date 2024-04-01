import React, { useState } from 'react';

const SignupForm = ({ switchToLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password || !confirmPassword || !email) {
            setError('All fields are required.');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match.');
        } else {
            // Simulate successful signup
            setError('');
            alert('User signed up successfully.');
            // You may want to perform further actions here, such as redirecting to another page
        }
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <h2>Sign Up</h2>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            {error && <div className="error">{error}</div>} {/* Wrapped error in a div */}
            <button type="submit">Submit</button>
            <p>Already have an account? <span onClick={switchToLogin}>Login</span></p>
        </form>
    );
};

export default SignupForm;
