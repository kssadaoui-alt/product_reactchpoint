import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
