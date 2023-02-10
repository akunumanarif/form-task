import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(
    "https://native-guppy-13.hasura.app/api/rest/alterra/tasks"
  );

  return response.data.todos;
});

export const addTodoToAPI = (todo) => {
  return async (dispatch) => {
    try {
      await axios.post(
        "https://native-guppy-13.hasura.app/api/rest/alterra/tasks",
        {
          title: todo.title,
        }
      );
      dispatch(todosSlice.actions.addTodo(todo));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteTodoFromAPI = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `https://native-guppy-13.hasura.app/api/rest/alterra/tasks/${id}`
      );
      dispatch(todosSlice.actions.deleteTodo(id));
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateTodoNameAPI = (id, title) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `https://native-guppy-13.hasura.app/api/rest/alterra/tasks/${id}`,
        {
          title,
        }
      );
      dispatch(todosSlice.actions.updateTodo({ id, title }));
    } catch (error) {
      console.error(error);
    }
  };
};
export const updateTodoCompleteAPI = (id, completed) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `https://native-guppy-13.hasura.app/api/rest/alterra/tasks/completed/${id}`,
        {
          completed,
        }
      );
      dispatch(todosSlice.actions.updateCompleted({ id, completed }));
    } catch (error) {
      console.error(error.config);
    }
  };
};

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    updateTodo: (state, action) => {
      const { id, title } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex >= 0) {
        state.todos[todoIndex].title = title;
      }
    },
    updateCompleted: (state, action) => {
      const { id, completed } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex >= 0) {
        state.todos[todoIndex].completed = !completed;
      }
    },

    deleteTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (todoIndex >= 0) {
        state.todos.splice(todoIndex, 1);
      }
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
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
    [addTodoToAPI.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    [deleteTodoFromAPI.fulfilled]: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (todoIndex >= 0) {
        state.todos.splice(todoIndex, 1);
      }
    },
    [updateTodoNameAPI.fulfilled]: (state, action) => {
      const { id, title } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex >= 0) {
        state.todos[todoIndex].title = title;
      }
    },
  },
});

export default todosSlice.reducer;
