import "../css/MovieCard.css";

function MovieCard({ movie }) {
    function onFavorite(){
        alert("clicked");
    }
  return <>
  <div className="movie-card">
    <img src={movie.url} alt={movie.title} />
    <div className="movieOverlay">
        <button className="favoriteBtn" onClick={onFavorite}>
            🤍
        </button>
    </div>
    <div className="movieInfo">
        <h3>{movie.info}</h3>
        <p>{movie.releaseDate}</p>
    </div>
  </div>
  </>;
}

export default MovieCard;
