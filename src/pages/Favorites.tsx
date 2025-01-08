

import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext)

  if (favorites.length === 0) {
    return (
      <section className="mx-auto p-6 max-w-md min-h-screen flex justify-center items-center">
        <div>
          <h2>Your favorites list is empty</h2>
          <p>Add movies to your favorites to see them here.</p>
          <Link to="popular">
            Go back to the movies list
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto p-6 max-w-md min-h-screen flex justify-center items-center">
      <div>
        <h1>Your Favorite Movies</h1>
        <ul>
          {favorites.map((movie) => (
            <li key={movie.id}>
              {/* Movie Poster */}
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />

              {/* Movie Details */}
              <div>
                <h2>{movie.title}</h2>
                <div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span>•</span>
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                </div>
              </div>

              {/* Remove */}
              <button
              // onClick={() => removeFromFavourites()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
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

  )
}

export default Favorites
