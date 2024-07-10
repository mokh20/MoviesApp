// import { useState } from "react";
// import { useParams } from "react-router-dom";

// const TvShowData = () => {
//   const APIKEY = "1f2f3b72bcd4f4188e78337d30e9f193";
//   const { id } = useParams();
//   const [state, setstate] = useState([]);
//   return <div></div>;
// };

// export default TvShowData;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TvShowDetails from "../Pages/TvShowDetails";

const TvShowDetailsData = () => {
  const APIKEY = "1f2f3b72bcd4f4188e78337d30e9f193";
  const { id } = useParams();
  const [tvData, setTvData] = useState([]);
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getTvShowDetails();
    getTvShowCast();
  }, []);

  const getTvShowDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`
      );

      setTvData(data);
    } catch (error) {
      throw new Error("data not found");
    }
  };

  const getTvShowCast = async () => {
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
      <TvShowDetails tvData={tvData} casts={casts} />
    </>
  );
};

export default TvShowDetailsData;
