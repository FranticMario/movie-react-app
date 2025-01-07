import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../shared/Api";
import { useParams } from "react-router-dom";
import { IMovieDetails } from "../interfaces/IMovieDetails";

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [singleMovie, setSingleMovie] = useState<IMovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!movieId) {
        setError("No movie ID provided.");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const movieData = await fetchMovieDetails(Number(movieId));
        setSingleMovie(movieData);
      } catch (err) {
        setError("Failed to load movie details.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section>
      {loading ? (
        <p>Loading...</p>
      ) : singleMovie ? (
        <div className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
            alt={singleMovie.title}
          />
          <h1>{singleMovie.title}</h1>
          <p>{singleMovie.overview.slice(0, 300)}</p>
        </div>
      ) : (
        <p>No movie data found.</p>
      )}
    </section>
  );
};

export default MovieDetails;
