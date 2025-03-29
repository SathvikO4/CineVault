import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showDetails, setShowDetails] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const navigate = useNavigate();

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    setShowDetails(false); // Close the user details dropdown
    navigate("/register"); // Redirect to the registration page
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/register">Register</Link> {/* Added Register link */}
        <Link to="/home">Movies</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/watchlist">Watchlist</Link>
      </div>
      {user && (
        <div className="user-profile">
          <img
            src={user.dp || "https://via.placeholder.com/50"} // Default DP if none uploaded
            alt="User DP"
            className="user-dp"
            onClick={toggleDetails}
          />
          {showDetails && (
            <div className="user-details">
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Favorites:</strong> {favorites.length}</p>
              <p><strong>Watchlist:</strong> {watchlist.length}</p>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
