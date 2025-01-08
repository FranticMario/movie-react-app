import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGenreContext } from "../contexts/GenreContext";

const SearchBar = () => {
  const { genres, loading, error } = useGenreContext();
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/search")) {
      setSearch(location.pathname.split("/")[2]);
    }

    if (location.pathname.startsWith("/genre")) {
      setSearch("");
    }
  }, [location.pathname]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search) {
      navigate(`/search/${search}`);
    }
  };

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search Movie ..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          value={search}
          className="w-full px-5 py-3 pr-10 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <button
            title="Search"
            onClick={() => search && navigate(`/search/${search}`)}
          >
            <FiSearch size={20} />
          </button>
        </span>
      </div>

      <div
        id="genreNav"
        className="flex mb-6 space-x-1 w-full overflow-x-scroll"
        // style={{ scrollPadding: "16px" }}
      >
        {genres.map((genre) => (
          <Link
            key={genre.id}
            to={`/genre/${genre.name.toLocaleLowerCase()}`}
            className={`px-4 py-2 min-w-28 text-center rounded-full ${
              location.pathname.startsWith("/genre") &&
              location.pathname
                .toLocaleLowerCase()
                .endsWith(genre.name.toLocaleLowerCase())
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {genre.name
              .replace("Science Fiction", "Sci-Fi")
              .replace("TV Movie", "TV")
              .replace("Documentary", "Docu")}
          </Link>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
