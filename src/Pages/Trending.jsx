import { useEffect } from "react";
import { useMovies } from "../Context/MovieProvider";
import Movies from "../utils/Movies";
import { Helmet } from "react-helmet";

const Trending = () => {
  const { popularMovies, getPopularMovies } = useMovies();

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <section className="sm:mt-16">
      <Helmet>
        <title>Popular</title>
      </Helmet>
      <Movies movies={popularMovies} />
    </section>
  );
};

export default Trending;
