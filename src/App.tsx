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
import Genre from "./pages/Genre";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="search/:query" element={<Genre />} />
          <Route path="genre/:query" element={<Genre />} />
          <Route path="popular" element={<Genre />} />
          <Route path="intro" element={<Intro />} />
          <Route path="splashscreen" element={<Splashscreen />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="search/:query/:movieId" element={<MovieDetails />} />
          <Route path="genre/:query/:movieId" element={<MovieDetails />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
