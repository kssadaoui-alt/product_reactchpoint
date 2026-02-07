import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Filter from "./Filter";

function App() {
  const [movies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "Un film de science-fiction sur les rêves et la réalité.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Titanic",
      description: "Une histoire d’amour tragique en pleine mer.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ"
    }
  ]);

  const [filter, setFilter] = useState({ title: "", rate: 0 });

  const filteredMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rate
  );

  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>🎬 Movie App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setFilter={setFilter} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
