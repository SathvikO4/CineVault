import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            navigate('/home'); // Redirect to home page on successful login
        } else {
            alert('Invalid credentials'); // Show error for invalid login
        }
    };

    return (
        <div className="auth-container">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <p>
                Don't have an account?{' '}
                <span
                    className="link"
                    onClick={() => navigate('/register')} // Navigate to registration page
                >
                    Register
                </span>
            </p>
        </div>
    );
}

export default LoginPage;
