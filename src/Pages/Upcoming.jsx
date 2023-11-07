import { useEffect } from "react";
import { useMovies } from "../Context/MovieProvider";
import MoviesList from "../utils/MoviesList";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Upcoming = () => {
  const { upcomingMovies, getUpcomingMovies } = useMovies();
  useEffect(() => {
    getUpcomingMovies();
  }, []);
  return (
    <section className="relative my-4">
      <NavLink to="/">
        <button className="fixed top-4  text-2xl bg-[#688297] p-2 rounded-full text-white transition-all duration-500 hover:bg-[#01a2ff] sm:left-[210px]">
          <BsArrowLeft />
        </button>
      </NavLink>
      <MoviesList movies={upcomingMovies} />;
    </section>
  );
};

export default Upcoming;
