import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/'

export const popularMovies = async (): Promise<AxiosResponse<any, any> | null> => {
  try {
    const response = await axios.get(BASE_URL + 'movie/popular', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
      },
      params: {
        language: 'en-US',
        page: 1,
      }
    })
    return response
  } catch (error) {
    console.error(`Failed to fetch runtime`, error)
    return null
  }
}



export const searchMovies = async (query: string): Promise<AxiosResponse<any, any> | null> => {
  try {
    const response = await axios.get(BASE_URL + `search/movie`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
      },
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        query: query,
        language: 'en-US',
        page: 1,
      },
    })
    return response
  } catch (error) {
    console.error(`Failed to fetch runtime`, error)
    return null
  }
}


export const genreMovies = async (genreId: number): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL + `discover/movie`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
      },
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        with_genres: genreId,
        language: "en-US",
        sort_by: "popularity.desc",
        page: 1,
      },
    })
    return response
  } catch (error) {
    console.error(`Failed to fetch runtime`, error)
    return null
  }
}


export const fetchGenreList = async () => {
  try {
    const response = await axios.get(BASE_URL + `genre/movie/list`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
      },
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'en-US',
      },
    })
    return response.data.genres
  } catch (error) {
    console.error(`Failed to fetch runtime`, error)
    return null
  }
}

export const fetchMovieRuntime = async (movieId: number) => {
  try {
    const response = await axios.get(BASE_URL + `movie/${movieId}`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
      },
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'en-US',
      },
    })
    return response.data.runtime
  } catch (error) {
    console.error(`Failed to fetch runtime for movie ID ${movieId}`, error)
    return null
  }
}

export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
      },
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'en-US',
      },
    })
    return response.data
  } catch (error) {
    console.error(`Failed to fetch movie ${movieId}`, error)
    return null
  }
}

export const fetchMovieVideo = async (movieId: number) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY,
      },
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'en-US',
      },
    })
    return response.data
  } catch (error) {
    console.error(`Failed to fetch movie ${movieId}`, error)
    return null
  }
}
