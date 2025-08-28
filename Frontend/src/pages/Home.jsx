import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  //(searchQuery) defines the state, (setSearchQuery) is the functions to update the state. "return" rerenders itself anytime state is updated.
  const [searchQuery, setSearchQuery] = useState("");

  //store in state so anytime the movie list is updated it would automatically rerender the component
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //for the api and shii
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.log(error);
        setMovies([])
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    //this prevents the input from going back to default which is empty
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return
    
    //for loading searched movies
    setLoading(true)
    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults || []) // Ensure movies is always an array
      setError(null)
    } catch (error) {
      console.log(error); // Fixed variable name
      setMovies([]) // Reset movies to empty array on error
      setError("Failed to search movies...")
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="searchForm">
        <input
          type="text"
          placeholder="Search for movie.."
          className="searchInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="searchBtn">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="moviesGrid">
          {movies.map((movie) => (
            //(movie.title.toLowerCase().startsWith(searchQuery) &&) this part is used to set the movie title to lowercase and is used to display a movie card whenever the input value matches the movie title while other movie cards will not be rendered so kind of like a search engine thingy
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
