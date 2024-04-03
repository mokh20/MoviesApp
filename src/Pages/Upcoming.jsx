import { useEffect } from "react";
import { useMovies } from "../Context/MovieProvider";
import Movies from "../utils/Movies";
import { Helmet } from "react-helmet";

const Upcoming = () => {
  const { upcomingMovies, getUpcomingMovies } = useMovies();
  useEffect(() => {
    getUpcomingMovies();
  }, []);
  return (
    <section>
      <Helmet>
        <title>Upcoming</title>
      </Helmet>
      <Movies movies={upcomingMovies} />
    </section>
  );
};

export default Upcoming;
