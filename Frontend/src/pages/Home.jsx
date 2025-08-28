import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css';

function Home() {
  //(searchQuery) defines the state, (setSearchQuery) is the functions to update the state. "return" rerenders itself anytime state is updated.
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "A", relaeaseDate: "2021" },
    { id: 2, title: "B", relaeaseDate: "2022" },
    { id: 3, title: "C", relaeaseDate: "2023" },
    { id: 4, title: "D", relaeaseDate: "2024" },
  ];

  const handleSearch = (e) => {
    //this prevents the input from going back to default which is empty
    e.preventDefault();
    window.alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="searchForm">
        <input
          type="text"
          placeholder="Search for movie.."
          className="serachInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="searchBtn">
          Search
        </button>
      </form>

      <div className="moviesGrid">
        {movies.map(
          (movie) =>
            //(movie.title.toLowerCase().startsWith(searchQuery) &&) this part is used to set the movie title to lowercase and is used to display a movie card whenever the input value matches the movie title while other movie cards will not be rendered so kind of like a search engine thingy
            (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
