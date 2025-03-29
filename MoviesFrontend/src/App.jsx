import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import Watchlist from "./pages/Watchlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate replace to="/register" />} /> {/* Default to registration */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:category/:id"
            element={
              <ProtectedRoute>
                <MovieDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />
          <Route
            path="/watchlist"
            element={
              <ProtectedRoute>
                <Watchlist />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate replace to="/register" />} /> {/* Fallback route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;