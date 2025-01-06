import axios from "axios";


export const popularMovies = await axios.get(
    "https://api.themoviedb.org/3/movie/popular",
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


export const fetchMovieRuntime = async (movieId: number) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
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

export const fetchMovieDetails = async (movieId: number) => {

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
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
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch runtime for movie ID ${movieId}`, error);
        return null;
    }
}
