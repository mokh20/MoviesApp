import { useEffect } from "react";
import Genre from "../Components/Genre";
import Movies from "./MoviesFiltered";
import Slider from "../utils/Slider";
import { useMovies } from "../Context/MovieProvider";

const Home = () => {
  const {
    movies,
    popularMovies,
    getPopularMovies,
    upcomingMovies,
    getUpcomingMovies,
  } = useMovies();

  useEffect(() => {
    getPopularMovies();
    getUpcomingMovies();
  }, []);
  return (
    <section className="flex justify-center flex-wrap gap-5 w-full overflow-x-hidden page xl:ml-0 lg:ml-0 md:ml-16 sm:ml-8 ">
      <div className="lg:mr-28 md:mr-56 sm:mr-60">
        <Genre />
      </div>
      <Movies>
        <Slider movies={movies} title="All" />
      </Movies>
      <Slider movies={popularMovies} title="Popular" />
      <Slider movies={upcomingMovies} title="Upcoming" />
    </section>
  );
};

export default Home;
