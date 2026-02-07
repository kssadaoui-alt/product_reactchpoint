import { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

function App() {
const [movies, setMovies] = useState([
  {
    title: "Inception",
    description: "Film de science-fiction",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
    rating: 5
  },
  {
    title: "Titanic",
    description: "Film romantique",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg",
    rating: 4
  }
]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: ""
  });

  const [filter, setFilter] = useState({ title: "", rate: 0 });

  const addMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
  };

  const filteredMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rate
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🎬 Movie App</h1>

      <h2>Ajouter un film</h2>

      <input
        placeholder="Titre"
        value={newMovie.title}
        onChange={e => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <br />

      <input
        placeholder="Description"
        value={newMovie.description}
        onChange={e => setNewMovie({ ...newMovie, description: e.target.value })}
      />
      <br />

      <input
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={e => setNewMovie({ ...newMovie, posterURL: e.target.value })}
      />
      <br />

      <input
        type="number"
        placeholder="Rating (1-5)"
        value={newMovie.rating}
        onChange={e =>
          setNewMovie({ ...newMovie, rating: Number(e.target.value) })
        }
      />
      <br />

      <button onClick={addMovie}>Ajouter</button>

      <Filter setFilter={setFilter} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
