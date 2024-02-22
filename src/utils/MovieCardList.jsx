import MovieCard from "./MovieCard";

const MoviesList = ({ movies, title }) => {
  return (
    <section className="page mx-0 h-full flex justify-center">
      <h2 className="my-8 text-xl text-white font-bold">{title}</h2>
      <section className="flex flex-col w-full gap-4 sm:flex sm:flex-wrap sm:flex-row sm:justify-center">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </section>
  );
};

export default MoviesList;
