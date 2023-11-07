import MoviesCard from "./MoviesCard";

const moviesList = ({ movies, title }) => {
  return (
    <section className="page mx-0 h-full flex justify-center sm:ml-64">
      <h2 className="my-8 text-xl text-white font-bold">{title}</h2>
      <section className="flex flex-col w-full gap-4 sm:flex sm:flex-wrap sm:flex-row">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </section>
    </section>
  );
};

export default moviesList;
