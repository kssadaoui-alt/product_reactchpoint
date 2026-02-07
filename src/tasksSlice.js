import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all", // all, done, notDone
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleDone: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) task.description = description;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleDone, editTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
