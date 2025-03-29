import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate user credentials
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home"); // Redirect to home page
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="card">
        <h1 className="title">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <input
              type="email"
              className="input-field"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 17c1.66 0 2.99-1.34 2.99-3L15 7c0-1.66-1.34-3-3-3s-3 1.34-3 3v7c0 1.66 1.34 3 3 3zm-1-3h2v-2h-2v2zm0-4h2V7h-2v3z" />
            </svg>
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Log In
          </button>
          <a href="/register" className="btn-link">
            Don't have an account? Register
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;