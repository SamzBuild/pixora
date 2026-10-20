import { movies } from "./fakeData";
import MovieCard from "./MovieCard";

const MoviesContainer = () => {
  return (
    <div className="flex w-full max-w-7xl mx-auto gap-6">
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
