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
import { AnimatePresence } from "framer-motion";
import MovieLists from "./pages/MovieLists";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Splashscreen />} />
          <Route path="intro" element={<Intro />} />
          <Route path="home" element={<Home />} />
          <Route path="popular" element={<MovieLists />} />
          <Route path="search/:query" element={<MovieLists />} />
          <Route path="genre/:query" element={<MovieLists />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="movie/:movieId/:title" element={<MovieDetails />} />
        </Route>
      </>
    )
  );

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </div>
  );
}

export default App;
