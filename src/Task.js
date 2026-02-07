import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleDone, editTask } from "./tasksSlice";

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [desc, setDesc] = useState(task.description);

  const handleEdit = () => {
    if (!desc.trim()) return;
    dispatch(editTask({ id: task.id, description: desc }));
    setIsEditing(false);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      {isEditing ? (
        <>
          <input value={desc} onChange={(e) => setDesc(e.target.value)} />
          <button onClick={handleEdit}>Sauvegarder</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
            {task.description}
          </span>
          <button onClick={() => dispatch(toggleDone(task.id))} style={{ marginLeft: "5px" }}>
            {task.isDone ? "Annuler" : "Terminé"}
          </button>
          <button onClick={() => setIsEditing(true)} style={{ marginLeft: "5px" }}>Modifier</button>
        </>
      )}
    </div>
  );
}

export default Task;
