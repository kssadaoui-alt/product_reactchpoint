import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "260px" }}>
      <h3>{movie.title}</h3>

      <img
        src={movie.posterURL}
        alt={movie.title}
        width="220"
        style={{ display: "block", marginBottom: "10px" }}
      />

      <p>⭐ {movie.rating}</p>

      <Link to={`/movie/${movie.id}`}>
        <button>Voir détails</button>
      </Link>
    </div>
  );
}

export default MovieCard;
