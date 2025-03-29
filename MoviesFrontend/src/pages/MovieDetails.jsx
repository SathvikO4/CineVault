import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { category, id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const endpoint = `http://localhost:8081/${category}`;
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Failed to fetch movie details");
        const data = await res.json();
        const selectedMovie = data.find((m) => m.id === parseInt(id));
        if (!selectedMovie) {
          setError("Movie not found.");
          return;
        }
        setMovie(selectedMovie);
        setError(null);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [category, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={movie.image_url} alt={movie.title} width="300" />
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Year:</strong> {movie.release_year || "N/A"}</p>
      <p><strong>Duration:</strong> {movie.duration} min</p>
      <p><strong>Language:</strong> {movie.language}</p>
      {movie.trailer && (
        <div>
          <h3>Trailer</h3>
          <iframe
            width="560"
            height="315"
            src={
              movie.trailer.includes("watch?v=")
                ? movie.trailer.replace("watch?v=", "embed/")
                : movie.trailer
            }
            title={`${movie.title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;