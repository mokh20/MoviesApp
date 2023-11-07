import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const MoviesCard = ({ movie }) => {
  return (
    <div className="grid relative w-[145px] group text-[.7rem] text-white overflow-hidden cursor-pointer">
      <div className="w-full absolute bottom-2 left-0 pl-2 z-10 break-word p-1 bg-[#00000046] ">
        {movie.title || movie.name}
      </div>
      <span
        className={`absolute top-2 right-1 z-10  rounded-full p-1  ${
          movie.vote_average >= 7
            ? "bg-green-600"
            : movie.vote_average >= 5
            ? "bg-yellow-400"
            : "bg-red-600"
        }`}
      >
        {movie.vote_average.toFixed(1)}
      </span>
      <span className="overflow-hidden rounded-lg ">
        {movie.poster_path === null ? (
          <img className="img object-cover" src={NoImg} />
        ) : (
          <LazyLoadImage
            effect="blur"
            className="img object-cover rounded-lg group-hover:scale-105"
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          />
        )}
      </span>
    </div>
  );
};

export default MoviesCard;
