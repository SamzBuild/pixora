import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies }) => {
  // const [empty, setEmpty] = useState("");
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-6 py-20">
      {movies.length === 0 ? (
        <div>No movie found. Search with Other title</div>
      ) : (
        movies.map((movie) => {
          return (
            <MovieCard
              idx={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
            />
          );
        })
      )}
    </div>
  );
};

export default MoviesContainer;
