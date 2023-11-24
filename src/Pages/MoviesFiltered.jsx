import { useEffect } from "react";
import { useMovies } from "../Context/MovieProvider";
import { Route, Routes } from "react-router-dom";
import Genre from "../Components/Genre";
import AllMovies from "../utils/AllMovies";
import { Helmet } from "react-helmet";

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
              <Helmet>
                <title>All Movies</title>
              </Helmet>
              <div className="2xl:mr-44">
                <Genre />
              </div>
              <AllMovies movies={movies} />
            </section>
          }
        ></Route>
      </Routes>
    </section>
  );
};

export default Movies;
