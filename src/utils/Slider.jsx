import MoviesCard from "./MovieCard";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
// Import Swiper React components
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ movies, title }) => {
  const moviesList = movies.slice(0, 12);
  const [isEnd, setIstEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    if (swiper.isEnd) {
      setIstEnd(true);
    } else {
      setIstEnd(false);
    }
  };

  return (
    <section className="w-11/12 my-4">
      <NavLink to={"/" + title} className="text-lg text-white">
        <h2 className="mb-2 hover:active-btn">{title}</h2>
      </NavLink>
      <section className="bg-slate-800 p-4 pl-6 rounded-xl">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          onSlideChange={handleSlideChange}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            550: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            750: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1080: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
            1400: {
              slidesPerView: 7,
              spaceBetween: 0,
            },
          }}
        >
          <AiOutlineLeftCircle className="swiper-button-prev text-[#01a2ff] w-12"></AiOutlineLeftCircle>
          <AiOutlineRightCircle
            className={`swiper-button-next text-[#01a2ff] w-12 transition-all ease-in-out duration-500 ${
              isEnd ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"
            }`}
          ></AiOutlineRightCircle>
          {moviesList.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MoviesCard movie={movie} />
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <NavLink
              to={"/" + title}
              className={`w-28 mt-16 py-6 flex-col justify-center items-center text-ms font-medium ${
                moviesList.length === 0 ? "hidden" : "flex"
              } `}
            >
              <section className="hover:active-btn grid justify-items-center">
                <BsArrowRight className="text-2xl"></BsArrowRight>
                <p>See All Movies</p>
              </section>
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};

export default Slider;
