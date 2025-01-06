import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

export const popularMovies = await axios.get(
    BASE_URL + "movie/popular",
    {
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
        },
        params: {
            language: "en-US",
            page: 1,
        },
    }
);

export const fetchGenreList = async () => {
    try {
        const response = await axios.get(
            BASE_URL + `genre/movie/list`,
            {
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
                },
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    language: "en-US",
                },
            }
        );
        return response.data.genres;
    } catch (error) {
        console.error(`Failed to fetch runtime`, error);
        return null;
    }
}

export const fetchMovieRuntime = async (movieId: number) => {
    try {
        const response = await axios.get(
            BASE_URL + `movie/${movieId}`,
            {
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
                },
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                    language: "en-US",
                },
            }
        );
        return response.data.runtime;
    } catch (error) {
        console.error(`Failed to fetch runtime for movie ID ${movieId}`, error);
        return null;
    }
};