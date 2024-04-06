import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ switchToSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.error || 'Login failed');
                }
                //setError('');
                //alert('User signed in successfully.');
                //Perform further actions here, such as redirecting to another page
                navigate('/products');

            } catch (error) {
                setError(error.message);
            }
        }
    };
    return (
        <form>
            <h2>Login</h2>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                id="username" 
                name="username" 
                placeholder="Enter your username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" 
                id="password" 
                name="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <span onClick={switchToSignup}>Sign up</span></p>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default LoginForm;
