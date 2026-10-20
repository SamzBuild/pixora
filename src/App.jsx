import API_Testing from "./components/API_Testing"
import MoviesContainer from "./components/MoviesContainer"
import SearchBar from "./components/SearchBar"

const App = () => {
  
  return (
    <div>
      <SearchBar/>
      <MoviesContainer/>
      <API_Testing/>
    </div>
  )
}

export default App
