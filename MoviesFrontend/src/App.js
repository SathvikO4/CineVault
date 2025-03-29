import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

function App() {
    return (
        <Router>
            <nav className="navbar">
                <Link to="/home" className="nav-link">Movies</Link>
                <Link to="/login" className="nav-link">Login</Link>
            </nav>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
