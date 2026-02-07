function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "260px" }}>
      <h3>{movie.title}</h3>

      <img
        src={movie.posterURL}
        alt={movie.title}
        width="220"
        style={{ display: "block", marginBottom: "10px" }}
        onError={(e) => {
          e.target.src = "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg";
        }}
      />

      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
