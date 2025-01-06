import { NavLink, useLocation } from "react-router-dom";
import MovieList from "../components/MovieList";

const Genre = () => {
  const location = useLocation();
  const isPopular = location.pathname === "/popular";
  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Movie ..."
          className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {isPopular && <h1 className="text-3xl">Popular</h1>}
      <NavLink to="/genre/Action">Action</NavLink>
      <NavLink to="/search/Matrix">S:Matrix</NavLink>

      <MovieList />
    </>
  );
};

export default Genre;
