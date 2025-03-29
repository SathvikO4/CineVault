import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const filteredFavorites = favorites.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search favorites..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid">
        {filteredFavorites.length > 0 ? (
          filteredFavorites.map((movie) => (
            <div key={movie.id} className="card">
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.image_url} alt={movie.title} width="200" />
                <h2>{movie.title}</h2>
                <p>{movie.genre}</p>
              </Link>
              <button onClick={() => removeFavorite(movie.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No favorites added.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
