import { useEffect, useState } from "react";

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

const MovieDetails = () => {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    // ${query}
    const fetchMovieDetails = async () => {

      const options = {
        method: 'GET',
        headers: { accept: 'application/json', Authorization: `Bearer ${API_KEY}` }
      };

      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/278?language=en-US', options);
        const data = await response.json();
        console.log(data);

        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieDetails();
  }, []);
  console.log(movie);


  return (
    <section>
      {loading ? (
        <p>Loading...</p>
      ) : movie ? (
        <div className="movie-card">
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
        </div>
      ) : (
        <p>No movie data found.</p>
      )}
    </section>
  )
}

export default MovieDetails
