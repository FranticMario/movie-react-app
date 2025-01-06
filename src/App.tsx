import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './RootLayout/RootLayout'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Intro from './pages/Intro'
import Splashscreen from './pages/Splashscreen'
import Genre from './pages/Genre'
import MovieDetails from './pages/MovieDetails'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [currentScreen, setCurrentScreen] = useState<'splashscreen' | 'intro' | 'home'>('splashscreen')

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('intro')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="search/:query" element={<Genre />} />
          <Route path="genre/:query" element={<Genre />} />
          <Route path="intro" element={<Intro />} />
          <Route path="splashscreen" element={<Splashscreen />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="search/:query/:movieDetails" element={<MovieDetails />} />
          <Route path="genre/:query/:movieDetails" element={<MovieDetails />} />
        </Route>
      </>,
    ),
  )

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence mode="wait">
        {currentScreen === 'splashscreen' ? (
          <Splashscreen key="splashscreen" />
        ) : currentScreen === 'intro' ? (
          <Intro key="intro" onComplete={() => setCurrentScreen('home')} />
        ) : (
          <RouterProvider router={router} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
