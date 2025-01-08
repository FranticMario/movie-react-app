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

function App() {
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
          <Route path="search/:query/:movieId" element={<MovieDetails />} />
          <Route path="genre/:query/:movieId" element={<MovieDetails />} />
        </Route>
      </>,
    ),
  )

  return (
    <div className="flex items-center justify-center flex-col w-[428px] h-screen">
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </div>
  )
}

export default App
