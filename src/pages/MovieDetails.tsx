import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../shared/Api";
import { useNavigate, useParams } from "react-router-dom";
import { IMovieDetails } from '../înterfaces/IMovieDetails';
import Footer from "../components/Footer";

const MovieDetails = () => {
  const { movieId, title } = useParams<{ movieId: string, title: string }>();
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
    <section className="mx-auto p-6 max-w-md min-h-screen flex justify-center items-center">
      {singleMovie ? (
        <div className="relative bg-white rounded-3xl shadow-lg max-w-md w-full overflow-hidden">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 bg-white rounded-xl p-2 py-3 transition z-10">
            <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.15882 6.858H22.1258M7.85782 11.7156L3 6.85782L7.85782 2" stroke="black" stroke-width="4" stroke-linecap="round" />
            </svg>
          </button>
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${singleMovie.backdrop_path}`}
              alt={singleMovie.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>
          <div className="p-6">
            <p className="text-center">Movie Details</p>
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
              {singleMovie.title}
            </h2>
            <p className="text-center mb-6">
              <span className="font-bold">
                ⭐ {singleMovie.vote_average.toFixed(1)} •{" "}
              </span>
              {new Date(singleMovie.release_date).toISOString().split("T")[0]} •{" "}
              {singleMovie.genres.map((g) => g.name).join(", ")} •{" "}
              {Math.floor(singleMovie.runtime / 60)}h {singleMovie.runtime % 60}m
            </p>
            <h3 className="text-lg font-bold mb-2">
              Overview
            </h3>
            <p className="mb-4">
              {singleMovie.overview.length > 150
                ? singleMovie.overview.slice(0, singleMovie.overview.lastIndexOf(" ", 150))
                : singleMovie.overview}
              <span className="text-red-500"> See more ...</span>
            </p>
            <div className="mb-6 grid grid-cols-2 gap-2">
              <p className="font-bold">
                Genres
              </p>
              <p>
                {singleMovie.genres.map((g) => g.name).join(", ")}
              </p>
              <p className="font-bold">
                Languages
              </p>
              <p>
                {singleMovie.spoken_languages.map((l) => l.english_name).join(", ")}
              </p>
            </div>
            <button className="bg-red-500 text-white px-8 py-2 mx-auto mb-2 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-3 ">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.558 5.90848C14.011 6.17266 14.3868 6.55096 14.648 7.00566C14.9092 7.46037 15.0467 7.9756 15.0467 8.49998C15.0467 9.02437 14.9092 9.5396 14.648 9.99431C14.3868 10.449 14.011 10.8273 13.558 11.0915L4.512 16.3685C4.05609 16.6345 3.53804 16.7756 3.01019 16.7774C2.48233 16.7791 1.96334 16.6416 1.50563 16.3787C1.04792 16.1158 0.667686 15.7367 0.403328 15.2798C0.13897 14.8229 -0.000154495 14.3043 1.90735e-06 13.7765V3.22248C2.09808e-05 2.69471 0.139275 2.17628 0.403704 1.71952C0.668133 1.26276 1.04838 0.883852 1.50606 0.62103C1.96374 0.358207 2.48266 0.220778 3.01044 0.222613C3.53821 0.224449 4.05616 0.365485 4.512 0.631484L13.558 5.90848Z" fill="white" />
              </svg>
              Watch Trailer
            </button>
          </div>
          <Footer />
        </div>
      ) : (
        <p className="text-center text-gray-500">No movie data found.</p>
      )}
    </section>
  );
};

export default MovieDetails;
