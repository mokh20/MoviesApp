import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Icon
import {
  AiFillPlayCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  EffectCreative,
  Navigation,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

const MovieDetails = ({ movieData, casts }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Get Time of Movie
  const movieTime = movieData?.runtime;
  const hour = movieTime && Math.floor(movieTime / 60);
  const minute = movieTime && Math.floor(movieTime % 60);
  // Get Genres of Movie
  const genres = movieData?.genres?.map((gen) => gen.name);
  return (
    <div className="w-full -mt-16">
      <Link to="/">
        <button className="btn-back-home text-xl top-16 left-4 z-10 hover:bg-hoverBtn sm:left-9 sm:top-20">
          <BsArrowLeft />
        </button>
      </Link>
      <div
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movieData.backdrop_path}')`,
        }}
        className="bg-cover bg-center min-h-[300px] flex flex-wrap content-end items-end shadow-titleDetail sm:min-h-[360px] lg:min-h-[500px] xl:h-screen"
      >
        <div className="w-full mx-2 pl-2 py-2  border-b-[1px] border-borderBottom">
          {/* Title of movie detail */}
          <div>
            <span className="md:text-lg lg:text-2xl">
              {movieData?.title?.toUpperCase()}
            </span>
            <span className="ml-2 text-xs">
              ( {movieData?.release_date?.split("-")[0]} )
            </span>
          </div>
          {/* Information of movie (Time & Genres) */}
          <div className="text-xs md:text-sm ">
            <span className="border-r-2 pr-2 mr-2 border-current">
              {hour}h {minute}m
            </span>
            <span>{genres?.join(" , ")}</span>
          </div>
        </div>
        <AiFillPlayCircle
          onClick={() => setIsOpen((prev) => !prev)}
          className="fixed top-4 right-4 text-4xl text-slate-600 hover:text-hoverBtn z-20"
        />
      </div>
      <p className="m-2 border-b-[1px] border-borderBottom pb-2 px-2">
        {movieData.overview}
      </p>
      <RenderSlider casts={casts} />
    </div>
  );
};

export default MovieDetails;

const CastMovie = ({ cast }) => {
  return (
    <div className="text-xs rounded-lg">
      {cast.profile_path === null ? (
        <LazyLoadImage
          effect="blur"
          src="/assets/NoImg.jpg"
          className="rounded-lg"
        />
      ) : (
        <LazyLoadImage
          className="rounded-t-lg"
          effect="blur"
          src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
        />
      )}
      <div className="pl-2 py-3">
        <p>{cast.original_name}</p>
        <p className="font-light text-slate-500 ">{cast.character}</p>
      </div>
    </div>
  );
};

// Show slider of cast
const RenderSlider = ({ casts }) => {
  return (
    <section className="w-full my-4">
      <h2 className="px-4 text-white font-bold text-xl">Top Cast</h2>
      {/* Slider in mobile device */}
      <section className="w-full my-4 block sm:hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={20}
          // loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Navigation]}
          breakpoints={{
            400: { spaceBetween: 50 },
            500: { spaceBetween: 80 },
          }}
        >
          <AiOutlineLeftCircle className="swiper-button-prev text-hoverBtn w-12" />
          <AiOutlineRightCircle className="swiper-button-next text-hoverBtn w-12 " />
          {casts.map((cast) => (
            <SwiperSlide key={cast.id}>
              <CastMovie cast={cast} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Slider in other devices */}
      <section className="w-full my-4 hidden sm:block sm:px-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          stopOnLastSlide={false}
          breakpoints={{
            600: { slidesPerView: 6 },
            800: { slidesPerView: 8 },
            1000: { slidesPerView: 9 },
          }}
          modules={[Autoplay, EffectCreative]}
        >
          {casts.map((cast) => (
            <SwiperSlide key={cast.id}>
              <CastMovie cast={cast} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};
