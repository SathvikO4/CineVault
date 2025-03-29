import React, { useEffect, useState } from 'react';
import { getMovieDetails } from './services/movieService';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieId = match.params.id;
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          {/* Add more movie details here */}
        </div>
      ) : (
        <div>No movie details found</div>
      )}
    </div>
  );
};

export default MovieDetails;
