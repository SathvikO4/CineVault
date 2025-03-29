import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dp, setDp] = useState(null); // State to store the uploaded DP
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Validate password constraints
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long, contain at least one number, and one uppercase letter.");
      return;
    }

    // Check if email already exists in the database
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.email === email)) {
      alert("User with this email already exists!");
      return;
    }

    const newUser = { username, email, password, dp };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("User successfully registered!");
    navigate("/login"); // Redirect to login page
  };

  const handleDpChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setDp(reader.result); // Convert image to base64
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="auth-container">
      <h1>CineVault</h1>
      <h2>Register</h2>
      <form className="form" onSubmit={handleRegister}>
        <span className="title">One stop destination for Movies</span>
        <span className="sub mb">Register to get full access now :)</span>
        <input
          type="text"
          className="input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className="avatar">
          <input
            type="file"
            id="dp"
            accept="image/*"
            onChange={handleDpChange}
            style={{ display: "none" }}
          />
          <span>
            {dp ? (
              <img src={dp} alt="DP Preview" className="dp-preview" />
            ) : (
              "Upload DP"
            )}
          </span>
        </label>
        <span className="sub">
          Already have an account? <a href="/login">Sign in</a>
        </span>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
