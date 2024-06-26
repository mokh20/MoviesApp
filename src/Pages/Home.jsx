import { useEffect } from "react";
import Genre from "../Components/Genre";
import Movies from "./MoviesByGenres";
import Slider from "../utils/Slider";
import { useMovies } from "../Context/MovieProvider";
import { Helmet } from "react-helmet";
import HeaderSlider from "../Components/HeaderSlider";

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
    <section className="flex justify-center flex-wrap gap-5 w-full overflow-x-hidden page ">
      <HeaderSlider />
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Genre />
      <Movies>
        <Slider movies={movies} title="Movies" />
      </Movies>
      <Slider movies={popularMovies} title="Popular" />
      <Slider movies={upcomingMovies} title="Upcoming" />
    </section>
  );
};

export default Home;
