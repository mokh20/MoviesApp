import { useEffect } from "react";
import { useMovies } from "../Context/MovieProvider";
import { Route, Routes } from "react-router-dom";
import Genre from "../Components/Genre";
import Movies from "../utils/Movies";
import { Helmet } from "react-helmet";

const MoviesByGenres = ({ children }) => {
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
    <section className="w-full flex justify-center sm:mt-8 ">
      <Routes>
        <Route index element={children} />
        <Route
          path="/Movies"
          element={
            <section className="flex flex-wrap mt-4 my-4 items-start w-full justify-center relative">
              <Helmet>
                <title>Movies</title>
              </Helmet>
              <Genre />
              <Movies movies={movies} />
            </section>
          }
        ></Route>
      </Routes>
    </section>
  );
};

export default MoviesByGenres;
