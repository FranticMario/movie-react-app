import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Intro from "./pages/Intro";
import Splashscreen from "./pages/Splashscreen";
import MovieDetails from "./pages/MovieDetails";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MovieLists from "./pages/MovieLists";

function App() {
  const [currentScreen, setCurrentScreen] = useState<
    "splashscreen" | "intro" | "home"
  >("splashscreen");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen("intro");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="search/:query" element={<MovieLists />} />
          <Route path="genre/:query" element={<MovieLists />} />
          <Route path="popular" element={<MovieLists />} />
          <Route
            path="intro"
            element={<Intro onComplete={() => setCurrentScreen("home")} />}
          />
          <Route path="splashscreen" element={<Splashscreen />} />
          <Route path="favorites" element={<Favorites />} />

          <Route path="search/:query/:movieId" element={<MovieDetails />} />
          <Route path="genre/:query/:movieId" element={<MovieDetails />} />
          <Route path="movie/:movieId/:title" element={<MovieDetails />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
  // <div className="flex items-center justify-center">
  {
    /* <AnimatePresence mode="wait">
        {currentScreen === "splashscreen" ? (
          <Splashscreen key="splashscreen" />
        ) : currentScreen === "intro" ? (
          <Intro key="intro" onComplete={() => setCurrentScreen("home")} />
        ) : (
          <RouterProvider router={router} />
        )}
      </AnimatePresence> */
  }
  // </div>
}

export default App;
