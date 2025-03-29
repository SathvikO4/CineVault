class MovieService {
  static async getMovies(category) {
    const response = await fetch(`http://localhost:8081/${category}`);
    if (!response.ok) throw new Error("Failed to fetch movies");
    return response.json();
  }

  static async getMovieById(id) {
    const response = await fetch(`http://localhost:8081/movies/${id}`);
    if (!response.ok) throw new Error("Failed to fetch movie details");
    return response.json();
  }
}

export default MovieService;
