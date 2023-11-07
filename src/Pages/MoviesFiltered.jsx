import { useEffect } from "react";
import { useMovies } from "../Context/MovieProvider";
import MoviesList from "../utils/MoviesList";
import { NavLink, Route, Routes } from "react-router-dom";
import Genre from "../Components/Genre";
import { BsArrowLeft } from "react-icons/bs";

const Movies = ({ children }) => {
  const { setMovies, movies, filteredGenres, activeGenre, page, setPage } =
    useMovies();
  useEffect(() => {
    filteredGenres();
  }, []);
  useEffect(() => {
    setMovies([]);
    setPage(0);
  }, [activeGenre]);
  useEffect(() => {
    if (page > 0) {
      filteredGenres();
    }
  }, [page]);
  return (
    <section className="w-full flex justify-center ">
      <Routes>
        <Route index element={children} />
        <Route
          path="/All"
          element={
            <section className="flex flex-wrap mt-4 my-4 items-start w-full justify-center relative sm:ml-0">
              <div>
                <Genre />
              </div>
              <NavLink to="/">
                <button className="fixed top-4 left-[60px] text-2xl bg-[#688297] p-2 rounded-full text-white transition-all duration-500 hover:bg-[#01a2ff] sm:left-[210px] sm:top-24 lg:top-10">
                  <BsArrowLeft />
                </button>
              </NavLink>
              <MoviesList movies={movies} />
            </section>
          }
        ></Route>
      </Routes>
    </section>
  );
};

export default Movies;
