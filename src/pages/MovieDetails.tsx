import { useEffect, useState } from "react";

interface RatedMoviesResponse {
  page: number;
  results: RatedMovie[];
  total_pages: number;
  total_results: number;
}

interface RatedMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating: number;
}

const MovieDetails = () => {
  const [movies, setMovies] = useState<RatedMoviesResponse[]>([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    // ${query}
    const fetchMovieDetails = async () => {

      const options = {
        method: 'GET',
        headers: { accept: 'application/json', Authorization: `Bearer ${API_KEY}` }
      };

      try {
        const response = await fetch('https://api.themoviedb.org/3/account/null/lists?page=1', options);
        const data = await response.json();
        console.log(data);

        setMovies(data);
      } catch (err) {
        console.error("Error fetching movie data:", err);
      }
    }
    fetchMovieDetails();
  }, [API_KEY]);
  console.log(movies);


  return (
    <section>

    </section>
  )
}

export default MovieDetails
