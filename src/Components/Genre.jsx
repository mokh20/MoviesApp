import { useEffect } from "react";
import { useMovies } from "../Context/MovieProvider";

const Genre = () => {
  const { genres, getGenres, activeGenre, setActiveGenre } = useMovies();
  useEffect(() => {
    getGenres();
  }, []);

  return (
    <section className="text-white flex flex-wrap justify-center items-start w-full sm:mt-12 ml-0 sm:mt-4">
      {genres.map((gen) => (
        <button
          key={gen.id}
          className={`px-4 py-2 rounded-3xl text-sm m-2 transition-all duration-700 sm:text-base hover:bg-[#01a2ff]  ${
            activeGenre == gen.id ? "bg-[#01a2ff]" : "bg-slate-600"
          }`}
          onClick={() => setActiveGenre(gen.id)}
        >
          {gen.name}
        </button>
      ))}
    </section>
  );
};

export default Genre;
