import { useEffect } from "react";
import { useMovies } from "../Context/MovieProvider";
import AllMovies from "../utils/AllMovies";
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
      <AllMovies movies={upcomingMovies} />
    </section>
  );
};

export default Upcoming;
