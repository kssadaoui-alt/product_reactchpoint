import AddTask from "./AddTask";
import ListTask from "./ListTask";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>📝 Redux ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
