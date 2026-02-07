import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { setFilter } from "./tasksSlice";

function ListTask() {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => dispatch(setFilter("all"))}>Toutes</button>
        <button onClick={() => dispatch(setFilter("done"))} style={{ marginLeft: "5px" }}>Terminées</button>
        <button onClick={() => dispatch(setFilter("notDone"))} style={{ marginLeft: "5px" }}>Non terminées</button>
      </div>

      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;
