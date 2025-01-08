import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './RootLayout/RootLayout'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Intro from './pages/Intro'
import Splashscreen from './pages/Splashscreen'
import Genre from './pages/Genre'
import MovieDetails from './pages/MovieDetails'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Movie } from './înterfaces/Movie'
import { FavoritesContext } from './components/Context'

function App() {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Splashscreen />} />
          <Route path="intro" element={<Intro />} />
          <Route path="home" element={<Home />} />
          <Route path="popular" element={<Genre />} />
          <Route path="search/:query" element={<Genre />} />
          <Route path="genre/:query" element={<Genre />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="movie/:movieId/:title" element={<MovieDetails />} />
        </Route>
      </>,
    ),
  )

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence>
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>

          <RouterProvider router={router} />

        </FavoritesContext.Provider>
      </AnimatePresence>
    </div>
  )
}

export default App
