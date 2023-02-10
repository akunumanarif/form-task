// Library

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Component
import CustomForm from "../components/CustomForm";
import EditForm from "../components/EditForm";
import TaskList from "../components/TaskList";
import {
  addTodoToAPI,
  fetchTodos,
  updateTodoNameAPI,
  updateTodoCompleteAPI,
  deleteTodoFromAPI,
} from "../app/feaures/todoReducer";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({});
  const [previousFocusEl, setPreviousFocusEl] = useState(null);

  // console.log(todos);

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
    dispatch(addTodoToAPI(todo));
  };

  const deleteTask = (id) => {
    dispatch(deleteTodoFromAPI(id));
  };

  const updateTask = (todo) => {
    dispatch(updateTodoNameAPI(todo.id, todo.title));
    closeEditMode();
  };

  const toggleTask = (id, completed) => {
    dispatch(updateTodoCompleteAPI(id, !completed));
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
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </>
  );
};

export default TodoList;
