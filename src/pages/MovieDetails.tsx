import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../shared/Api";
import { useNavigate, useParams } from 'react-router-dom';
import { IMovieDetails } from "../interfaces/IMovieDetails";
import Footer from "../components/Footer";
import GoToVideo from "../components/GoToVideo";

const MovieDetails = () => {
  const { movieId, title } = useParams<{ movieId: string; title: string }>();
  console.log(`Movie title: ${title}`);
  const [singleMovie, setSingleMovie] = useState<IMovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      if (!movieId || isNaN(Number(movieId))) {
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
    <section className="min-h-screen bg-white shadow-lg overflow-hidden">
      <div className="flex justify-center mb-28">
        {singleMovie ? (
          <div className="relative w-full">
            <button
              title="black"
              onClick={() => navigate(-1)}
              className="absolute top-4 left-4 bg-white rounded-xl p-2 py-3 transition z-10"
            >
              <svg
                width="25"
                height="14"
                viewBox="0 0 25 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.15882 6.858H22.1258M7.85782 11.7156L3 6.85782L7.85782 2"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <div className="relative font-size-0 line-height-0 overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
                alt={singleMovie.title}
                className="w-full h-96 object-cover object-top block"
                style={{ clipPath: 'inset(0px 0px 5px 0px)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
            </div>
            <div className="relative">
              <div className="p-6 absolute -top-24">
                <p className="text-center">Movie Details</p>
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
                  {singleMovie.title}
                </h2>
                <p className="text-center mb-6">
                  <span className="font-bold">
                    ⭐ {singleMovie.vote_average.toFixed(1)} •{" "}
                  </span>
                  {singleMovie.release_date && new Date(singleMovie.release_date).toISOString().split("T")[0]}
                  • {singleMovie.genres.map((g) => g.name).join(", ")} •{" "}
                  {Math.floor(singleMovie.runtime / 60)}h {singleMovie.runtime % 60}m
                </p>
                <h3 className="text-lg font-bold mb-2">Overview</h3>
                <p className="mb-4">
                  {singleMovie.overview.length > 200
                    ? singleMovie.overview.slice(
                      0,
                      singleMovie.overview.lastIndexOf(" ", 200)
                    )
                    : singleMovie.overview}
                  <span className="text-red-500"> See more ...</span>
                </p>
                <div className="mb-6 grid grid-cols-2 gap-2">
                  <p className="font-bold">Genres</p>
                  <p>{singleMovie.genres.map((g) => g.name).join(", ")}</p>
                  <p className="font-bold">Languages</p>
                  <p>
                    {singleMovie.spoken_languages
                      .map((l) => l.english_name)
                      .join(", ")}
                  </p>
                </div>
                <GoToVideo />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No movie data found.</p>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default MovieDetails;
