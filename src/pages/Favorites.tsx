import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../contexts/FavoritesContext";
import Footer from "../components/Footer";

const Favorites = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext)

  if (favorites.length === 0) {
    return (
      <section className="mx-auto p-6 min-h-screen flex justify-center items-center">

        <div className="text-center">
          <h2 className="text-xl font-semibold">Your favorites list is empty</h2>
          <p className="mt-2">
            Add movies to your favorites to see them here.
          </p>
          <Link to="/popular" className="text-red-500 hover:underline mt-4 block">
            Go back to the movies list
          </Link>
        </div>
      </section>
    );
  }

  const removeFromFavorites = (movieId: number) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
  };

  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center mb-32">
        <div className="w-full">
          <h1 className="text-2xl text-center pt-4 font-bold mb-4">Your Favorite Movies</h1>
          <ul className="space-y-4">
            {favorites.map((movie) => (
              <li
                key={movie.id}
                className="w-full flex justify-between items-center bg-white rounded-lg shadow-md p-4"
              >
                {/* Link to Movie Page */}
                <Link
                  to={`/movie/${movie.id}/${movie.title
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "")}`}
                  className="flex items-center flex-1"
                >
                  {/* Movie Poster */}
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.title}
                    className="w-20 h-28 rounded-lg object-cover"
                  />

                  {/* Movie Details */}
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold">{movie.title}</h2>
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
                    </div>
                  </div>
                </Link>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromFavorites(movie.id)}
                  className="ml-4 text-gray-400 hover:text-gray-700"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Favorites
