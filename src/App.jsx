import { useEffect, useState } from "react";
import MoviesContainer from "./components/MoviesContainer";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`,
          {
            headers: {
              // TODO: yahan 2 cheezein aayengi
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
              accept: "application/json",
            },
          },
        );

        if (!response.ok) throw new Error("Request failed: " + response.status);

        const data = await response.json();
        setMovies(data.results);

        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [query]);
  return (
    <div>
      <SearchBar onSearch={setQuery} />
      {/* {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <p>Movies found: {movies.length}</p> */}
      <MoviesContainer movies={movies} />
    </div>
  );
};

export default App;
