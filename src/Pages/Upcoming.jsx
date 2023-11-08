import { useEffect } from "react";
import { useMovies } from "../Context/MovieProvider";
import AllMovies from "../utils/AllMovies";

const Upcoming = () => {
  const { upcomingMovies, getUpcomingMovies } = useMovies();
  useEffect(() => {
    getUpcomingMovies();
  }, []);
  return (
    <section>
      <AllMovies movies={upcomingMovies} />
    </section>
  );
};

export default Upcoming;
