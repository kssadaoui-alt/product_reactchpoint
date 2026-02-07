import { useParams, Link } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return <h2>Film introuvable</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{movie.title}</h1>

      <img src={movie.posterURL} alt={movie.title} width="300" />

      <p>{movie.description}</p>

      <h3>🎬 Bande-annonce</h3>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="trailer"
        allowFullScreen
      ></iframe>

      <br /><br />

      <Link to="/">
        <button>Retour à l’accueil</button>
      </Link>
    </div>
  );
}

export default MovieDetails;
