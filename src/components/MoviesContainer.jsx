import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies, query, loading }) => {
  if (loading) {
    return (
      <div className="py-20 text-center">
        <p>Searching movies...</p>
      </div>
    );
  }

  if (!query) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">Welcome to Movie Search</h2>
        <p className="mt-2 text-neutral-500">
          Search for a movie to discover your next favorite.
        </p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="py-20 text-center">
        <p>No movies found. Try another title.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-6 py-20">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          release_date={movie.release_date}
        />
      ))}
    </div>
  );
};

export default MoviesContainer;
