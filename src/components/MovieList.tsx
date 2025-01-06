import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { popularMovies } from "../shared/Api";
import { Movie } from "../înterfaces/Movie";
import { genres } from "../înterfaces/Genres";

type Params = {
  query: string;
};

const MovieList = () => {
  const { query } = useParams<Params>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log(import.meta.env.VITE_API_KEY);

      setMovies(popularMovies.data.results);
    } catch (err) {
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="flex justify-center mb-6 space-x-4">
        {Object.entries(genres).map(([id, name], index) => (
          <button
            key={id}
            className={`px-4 py-2 rounded-full ${
              index === 0
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Movie List */}
      <ul className="space-y-4">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="flex items-center bg-white rounded-lg shadow-md p-4"
          >
            {/* Movie Poster */}
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
              className="w-20 h-28 rounded-lg object-cover"
            />

            {/* Movie Details */}
            <div className="ml-4 flex-1">
              <h2 className="text-lg font-semibold truncate">{movie.title}</h2>
              <div className="flex items-center space-x-2 mt-2 text-gray-500">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-400 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  {movie.vote_average.toFixed(1)}
                </span>
                <span className="mx-1">•</span>
                <span>{new Date(movie.release_date).getFullYear()}</span>
                <span className="mx-1">•</span>
                <span>{genres[movie.genre_ids[0]] || "Unknown"}</span>
                <span className="mx-1">•</span>
                {movie.runtime ? (
                  <span>
                    {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                  </span>
                ) : (
                  <span>Unknown</span>
                )}
              </div>
            </div>

            {/* Bookmark Icon */}
            <Link className="ml-4 text-gray-400 hover:text-gray-700" to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3h10.5c.69 0 1.25.56 1.25 1.25v16.5L12 15.75l-6.5 4.5V4.25C5.5 3.56 6.06 3 6.75 3z"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
