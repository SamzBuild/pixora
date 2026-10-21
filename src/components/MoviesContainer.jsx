import { movies } from "./fakeData";
import MovieCard from "./MovieCard";

const MoviesContainer = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl justify-center gap-6 py-20">
      {movies.map((movie) => {
        return (
          <MovieCard
            title={movie.title}
            posterPath={movie.posterPath}
            voting_average={movie.voting_average}
            release_date={movie.release_date}
          />
        );
      })}
    </div>
  );
};

export default MoviesContainer;
