import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import MovieCardList from "./MovieCardList";

const Movies = ({ movies }) => {
  return (
    <section className="relative my-4">
      <NavLink to="/">
        <button className="btn-back-home top-16 left-4 z-10 hover:bg-hoverBtn sm:left-9 sm:top-20">
          <BsArrowLeft />
        </button>
      </NavLink>
      <MovieCardList movies={movies} />
    </section>
  );
};

export default Movies;
