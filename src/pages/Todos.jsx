import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomForm from "../components/CustomForm";
import EditForm from "../components/EditForm";
import TaskList from "../components/TaskList";
import {
  addTodo,
  fetchTodos,
  updateTodo,
  deleteTodo,
} from "../app/feaures/todoReducer";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({});
  const [previousFocusEl, setPreviousFocusEl] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const addTask = (todo) => {
    dispatch(addTodo(todo));
  };

  const deleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  const updateTask = (todo) => {
    dispatch(updateTodo(todo.id, todo.title));
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    setEditedTask(null);
    previousFocusEl.focus();
  };

  const enterEditMode = (todo) => {
    setEditedTask(todo);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  return (
    <>
      <header className="header-container">
        <h1 className="todo-text">Todos</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}

      <CustomForm addTask={addTask} />
      {todos && (
        <TaskList
          tasks={todos}
          deleteTask={deleteTask}
          enterEditMode={enterEditMode}
        />
      )}
    </>
  );
};

export default TodoList;
