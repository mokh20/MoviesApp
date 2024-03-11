import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../Pages/MovieDetails";

const MovieDetailsData = () => {
  const APIKEY = "1f2f3b72bcd4f4188e78337d30e9f193";
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getMovieDetails();
    getMovieCast();
  }, []);

  const getMovieDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`
      );

      setMovieData(data);
    } catch (error) {
      throw new Error("data not found");
    }
  };

  const getMovieCast = async () => {
    try {
      const {
        data: { cast },
      } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}`
      );
      setCasts(cast.slice(0, 20));
    } catch (error) {
      throw Error("cast not found");
    }
  };
  return (
    <>
      <MovieDetails movieData={movieData} casts={casts} />
    </>
  );
};

export default MovieDetailsData;
