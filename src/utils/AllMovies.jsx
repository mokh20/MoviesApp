import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import MovieCardList from "./MovieCardList";

const AllMovies = ({ movies }) => {
  return (
    <section className="relative my-4">
      <NavLink to="/">
        <button className="btn-back-home top-16 left-4 z-10 hover:bg-[#01a2ff] sm:left-[210px] sm:top-28 lg:top-10">
          <BsArrowLeft />
        </button>
      </NavLink>
      <MovieCardList movies={movies} />
    </section>
  );
};

export default AllMovies;
