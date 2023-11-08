import { useEffect } from "react";
import { useMovies } from "../Context/MovieProvider";
import AllMovies from "../utils/AllMovies";

const Trending = () => {
  const { popularMovies, getPopularMovies } = useMovies();

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <section>
      <AllMovies movies={popularMovies} />
    </section>
  );
};

export default Trending;
