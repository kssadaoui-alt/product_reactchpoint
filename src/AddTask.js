import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./tasksSlice";

function AddTask() {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!description.trim()) return;
    dispatch(addTask({ id: Date.now(), description, isDone: false }));
    setDescription("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAdd} style={{ marginLeft: "10px" }}>Ajouter</button>
    </div>
  );
}

export default AddTask;
