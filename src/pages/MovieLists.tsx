import MovieList from "../components/MovieList";
import SearchBar from "../components/Searchbar";
import { useLocation } from "react-router-dom";

const MovieLists = () => {
  const location = useLocation();
  const isPopular = location.pathname === "/popular";

  return (
    <div className="w-full sm:mx-12 sm:px-12 pt-8">
      <SearchBar />
      {isPopular && <h1 className="text-2xl font-bold pb-3">Popular</h1>}
      <MovieList />
    </div>
  );
};

export default MovieLists;
