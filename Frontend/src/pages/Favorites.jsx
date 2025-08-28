import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const {favorites} = useMovieContext();

    if(favorites){
       return (
       <div className="moviesGrid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
       );
    }

    return (
    <div className="favoriteSection">
            <h2>No favorite movies yet ☹</h2>
        </div>
    );
}

export default Favorites;
