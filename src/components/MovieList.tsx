import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { genreMovies, popularMovies, searchMovies } from "../shared/Api";
import { Movie } from "../interfaces/Movie";
import { useGenreContext } from "../contexts/GenreContext";
import { FavoritesContext } from "../contexts/FavoritesContext";

type Params = {
  query: string;
};

const MovieList = () => {
  const location = useLocation();
  const { query } = useParams<Params>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { genres } = useGenreContext();
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError(null);

      if (location.pathname === "/popular") {
        setMovies(popularMovies.data.results);
      } else {
        if (query && location.pathname.startsWith("/search")) {
          const searchResults = await searchMovies(query);
          console.log("movie_search", searchResults);
          setMovies(searchResults?.data.results);
        } else if (query && location.pathname.startsWith("/genre")) {
          const genreId = genres.find(
            (genre) => genre.name.toLowerCase() === query.toLowerCase()
          )?.id;
          console.log("genreId", { genreId, query });
          if (genreId) {
            const searchResults = await genreMovies(genreId);
            console.log("genre_search", searchResults);
            setMovies(searchResults?.data.results);
          }
        }
      }
    } catch (err) {
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  const addToFavorites = (movie: Movie) => {
    const isFav = favorites.some((favItem) => favItem.id === movie.id);

    if (isFav) {
      const updatedFavorites = favorites.filter((favItem) => favItem.id !== movie.id);
      console.log("Removing from favorites:", movie.title);
      console.log("Updated favorites:", updatedFavorites);
      console.log("localStorage", localStorage);

      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, movie];
      console.log("Adding to favorites:", movie.title);
      console.log("Updated favorites:", updatedFavorites);
      console.log("localStorage", localStorage);

      setFavorites(updatedFavorites);

    }
  }

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }


  return (
    <div className="space-y-4">
      {movies.map((movie) => (
        <div key={movie.id} className="flex items-center bg-white rounded-lg shadow-md p-4">
          <Link
            to={`/movie/${movie.id}/${movie.title
              .trim()
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "")}`}
            key={movie.id}
            className="flex items-center flex-1"
          >
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
              className="w-20 h-28 rounded-lg object-cover"
            />

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

                <span>
                  {genres.find((genre) => genre.id === movie.genre_ids[0])
                    ?.name || "Unknown"}
                </span>
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
          </Link>

          {/* Bookmark Icon */}
          < button onClick={() => {
            addToFavorites(movie);
          }} className="ml-4 m-4 text-gray-400 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={favorites.some((favItem) => favItem.id === movie.id) ? "black" : "none"}
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
          </button>
        </div >
      ))}
    </div >
  );
};

export default MovieList;
