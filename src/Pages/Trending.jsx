import { useEffect } from "react";
import { useMovies } from "../Context/MovieProvider";
import AllMovies from "../utils/AllMovies";
import { Helmet } from "react-helmet";

const Trending = () => {
  const { popularMovies, getPopularMovies } = useMovies();

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <section>
      <Helmet>
        <title>Popular</title>
      </Helmet>
      <AllMovies movies={popularMovies} />
    </section>
  );
};

export default Trending;
