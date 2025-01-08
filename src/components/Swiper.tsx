import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

import { EffectFlip, Pagination } from "swiper/modules";
import { popularMovies } from "../shared/Api";
import { Link } from "react-router-dom";
import { IMovieDetails } from "../interfaces/IMovieDetails";

const SwiperCarousel = () => {
  const [popularMovieList, setPopularMovieList] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      setPopularMovieList(popularMovies.data.results.slice(0, 10));
    };
    fetchMovieList();
  }, []);

  return (
    <div className="slider-container flex flex-col justify-center ">
      <div className="slider__title flex justify-between pb-[18px]">
        <div className="text-black font-poppins text-[20px] font-bold leading-normal">
          Trending Movies
        </div>
        <Link
          to={"/popular"}
          className="text-[#FC2121] font-poppins text-[18px] font-medium leading-normal"
        >
          See all
        </Link>
      </div>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={{
          clickable: true,
          el: "#custom-pagination",
        }}
        modules={[EffectFlip, Pagination]}
        className="mySwiper"
      >
        {popularMovieList.length > 0 &&
          popularMovieList.map((movie: IMovieDetails) => (
            <SwiperSlide id="custom-slide">
              <img
                title="movie"
                className="object-cover w-full h-full"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              ></img>
              <div className="text-white font-poppins text-[16px] font-bold leading-normal absolute z-20 bottom-[55px] left-6">
                <Link
                  to={`/movie/${movie.id}/${movie.title
                    .trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '')}`}
                  className="hover:underline">
                  {movie.original_title}
                </Link>
              </div>
              <div className="text-white font-poppins text-[16px] font-light leading-normal z-20 absolute bottom-[25px] right-6">
                ⭐ {movie.vote_average.toFixed(1)} / 10
              </div>
              <div className="gradient-overlay"></div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div
        id="custom-pagination"
        className="flex items-center justify-center gap-2 p-2 "
      ></div>
    </div>
  );
};
export default SwiperCarousel;
