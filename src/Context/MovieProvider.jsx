import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const PageContext = createContext();

const MovieProvider = ({ children }) => {
  const APIKEY = "1f2f3b72bcd4f4188e78337d30e9f193";

  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState([28]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (page < 1) {
      setPage(1);
    }
  }, [page]);
  const getGenres = async () => {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}&language=en-US`
      );
      const gen = await data.data;
      setGenres(gen.genres.slice(0, 3).concat(gen.genres.slice(7, 12)));
    } catch (error) {
      throw new Error("Get API failed .Try again  😐");
    }
  };
  const filteredGenres = async () => {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${activeGenre}&api_key=${APIKEY}&page=${page}`
      );
      const filteredGenres = await data.data.results;
      setMovies(filteredGenres);
    } catch (error) {
      throw new Error("no data movie find");
    }
  };
  const getPopularMovies = async () => {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`
      );
      const trending = await data.data.results;
      setPopularMovies(trending);
    } catch (error) {
      throw new Error("no data movie find");
    }
  };

  const getUpcomingMovies = async () => {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`
      );
      const upcoming = await data.data.results;
      setUpcomingMovies(upcoming);
    } catch (error) {
      throw new Error("no data movie find");
    }
  };

  return (
    <PageContext.Provider
      value={{
        genres,
        setGenres,
        getGenres,
        movies,
        setMovies,
        filteredGenres,
        activeGenre,
        setActiveGenre,
        page,
        setPage,
        popularMovies,
        setPopularMovies,
        getPopularMovies,
        upcomingMovies,
        setUpcomingMovies,
        getUpcomingMovies,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default MovieProvider;

export function useMovies() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("Movies Context was used outside of moviesProvider");
  }
  return context;
}
