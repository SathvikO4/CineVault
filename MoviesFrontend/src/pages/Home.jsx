import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const addToFavorites = (movie) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((fav) => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Added to Favorites!");
    } else {
      alert("Already in Favorites!");
    }
  };

  const addToWatchlist = (movie) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (!watchlist.some((item) => item.id === movie.id)) {
      watchlist.push(movie);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      alert("Added to Watchlist!");
    } else {
      alert("Already in Watchlist!");
    }
  };

  const genres = [
    { label: "All", value: "all", className: "all" },
    { label: "Comedy", value: "comedy-movies", className: "comedy" },
    { label: "Action", value: "action-movies", className: "action" },
    { label: "Drama", value: "drama-movies", className: "drama" },
    { label: "Thriller", value: "thriller-movies", className: "thriller" },
    { label: "Sci-Fi", value: "scifi-movies", className: "scifi" },
  ];

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const allMovies = [];
        if (selectedGenre === "all") {
          for (const genre of genres.slice(1)) {
            const res = await fetch(`http://localhost:8081/${genre.value}`);
            if (!res.ok) throw new Error(`Failed to fetch ${genre.label}`);
            const data = await res.json();
            allMovies.push(...data);
          }
        } else {
          const res = await fetch(`http://localhost:8081/${selectedGenre}`);
          if (!res.ok) throw new Error(`Failed to fetch ${selectedGenre}`);
          const data = await res.json();
          allMovies.push(...data);
        }
        setMovies(allMovies);
        setError(null);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [selectedGenre]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Movies</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="genre-buttons">
        {genres.map((genre) => (
          <button
            key={genre.value}
            className={`genre-button ${genre.className} ${selectedGenre === genre.value ? "active" : ""}`}
            onClick={() => setSelectedGenre(genre.value)}
          >
            {genre.label}
          </button>
        ))}
      </div>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div className="grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="card">
              <Link to={`/movie/${selectedGenre}/${movie.id}`}>
                <img src={movie.image_url} alt={movie.title} width="200" />
                <h2>{movie.title}</h2>
                <p>{movie.genre}</p>
              </Link>
              <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
              <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
            </div>
          ))
        ) : (
          !loading && <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;