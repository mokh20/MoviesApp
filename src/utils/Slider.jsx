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
      <NavLink to={"/" + title} className="text-lg text-white ">
        <h2 className="mb-2 hover:active">{title}</h2>
      </NavLink>
      <section className="bg-slate-800 p-4 pl-6 rounded-xl lg:pr-8">
        <Swiper
          speed={1000}
          spaceBetween={50}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },

            768: {
              slidesPerView: 4.2,
            },
            1024: {
              slidesPerView: 5.4,
            },
            1280: {
              slidesPerView: 7,
            },
            1536: {
              slidesPerView: 8,
            },
          }}
        >
          <AiOutlineLeftCircle className="swiper-button-prev text-hoverBtn w-12 hover:animate-leftBtn" />
          <AiOutlineRightCircle
            className={`swiper-button-next text-hoverBtn w-12 transition-all ease-in-out duration-500 hover:animate-rightBtn ${
              isEnd ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"
            }`}
          />
          {moviesList.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MoviesCard movie={movie} />
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <NavLink
              to={"/" + title}
              className={`w-28 mt-16 py-6 flex-col justify-center items-center text-xs sm:text-base font-medium  ${
                moviesList.length === 0 ? "hidden" : "flex"
              } `}
            >
              <section className="hover:active grid justify-items-center">
                <BsArrowRight className="text-lg sm:text-2xl"></BsArrowRight>
                <p>See Movies</p>
              </section>
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
};

export default Slider;
