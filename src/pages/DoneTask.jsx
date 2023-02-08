//? Library
import React from "react";

//? Components
import TaskDone from "../components/TaskDone";

//? Custom hooks
import useLocalStorage from "../hooks/useLocalStorage";

//? Styles

const DoneTask = ({}) => {
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);

  return <>{tasks && <TaskDone tasks={tasks} />}</>;
};

export default DoneTask;
