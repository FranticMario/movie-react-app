import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGenreContext } from "../contexts/GenreContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/free-mode"; // Free-mode specific styles

const SearchBar = () => {
  const { genres, loading, error } = useGenreContext();
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (location.pathname.startsWith("/search")) {
      setSearch(location.pathname.split("/")[2]);
    }

    if (location.pathname.startsWith("/genre")) {
      setSearch("");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (swiperRef.current) {
      const activeSlideIndex = genres.findIndex((genre) =>
        location.pathname
          .toLocaleLowerCase()
          .endsWith(genre.name.toLocaleLowerCase())
      );

      if (activeSlideIndex !== -1) {
        swiperRef.current.swiper.slideTo(activeSlideIndex); // Navigate to the selected slide
      }
    }
  }, [location.pathname, genres]);

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

      <Swiper
        spaceBetween={10} // Space between slides
        slidesPerView="auto" // Dynamically adjusts to fit buttons
        freeMode={true} // Allows free scrolling
        ref={swiperRef}
        className="bg-gray-100 rounded-lg p-4 mb-4"
      >
        {genres.map((genre) => (
          <SwiperSlide
            key={genre.id}
            className="flex-shrink-0" // Prevents resizing of slides
            style={{ width: "auto" }} // Ensures the button fits its content
          >
            <Link
              key={genre.id}
              to={`/genre/${genre.name.toLocaleLowerCase()}`}
              className={`block px-4 py-2 min-w-28 text-center rounded-full ${
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SearchBar;
