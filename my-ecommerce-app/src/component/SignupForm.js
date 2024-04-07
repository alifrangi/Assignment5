import React, { useState } from 'react';

const SignupForm = ({ onSignup, switchToLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password, confirmPassword, email } = formData;
        if (!username || !password || !confirmPassword || !email) {
            setError('All fields are required.');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match.');
        } else {
            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password, email }),
                });
                if (!response.ok) {
                    throw new Error('Registration failed');
                }
                const data = await response.json();
                setError('');
                onSignup(); // Callback to parent component
                alert('User signed up successfully.');
            } catch (error) {
                setError('Registration failed. Please try again.'); // Generic error message
            }
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
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit">Submit</button>
            <p>Already have an account? <span onClick={switchToLogin}>Login</span></p>
        </form>
    );
};

export default SignupForm;
