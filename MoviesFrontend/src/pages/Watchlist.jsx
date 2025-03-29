import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Favorites.css'; // Reuse styles from Favorites

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedWatchlist);
  }, []);

  const removeFromWatchlist = (id) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const filteredWatchlist = watchlist.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="favorites">
      <h1>Watchlist</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search watchlist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid">
        {filteredWatchlist.length > 0 ? (
          filteredWatchlist.map((movie) => (
            <div key={movie.id} className="card">
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.image_url} alt={movie.title} width="200" />
                <h2>{movie.title}</h2>
                <p>{movie.genre}</p>
              </Link>
              <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No movies in watchlist.</p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
