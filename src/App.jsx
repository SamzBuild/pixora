import { useState } from "react";
import MoviesContainer from "./components/MoviesContainer";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <SearchBar onSearch={setQuery} />
      <MoviesContainer />
    </div>
  );
};

export default App;
