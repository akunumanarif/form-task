import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://native-guppy-13.hasura.app/api/rest/alterra/tasks";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(baseURL);
  return response.data.todos;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const response = await axios.post(baseURL, {
    title: todo.title,
  });
  return response.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(`${baseURL}/${id}`);
  return id;
});

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (payload) => {
    const { id, title } = payload;
    const response = await axios.put(`${baseURL}/${id}`, {
      title,
    });
    return response.data;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    [deleteTodo.fulfilled]: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (todoIndex >= 0) {
        state.todos.splice(todoIndex, 1);
      }
    },
    [updateTodo.fulfilled]: (state, action) => {
      const { id, title } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex >= 0) {
        state.todos[todoIndex].title = title;
      }
    },
  },
});

export default todosSlice.reducer;
