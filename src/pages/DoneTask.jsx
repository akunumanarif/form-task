import React from "react";
import TaskDone from "../components/TaskDone";
import useLocalStorage from "../hooks/useLocalStorage";

const DoneTask = ({}) => {
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);

  return <>{tasks && <TaskDone tasks={tasks} />}</>;
};

export default DoneTask;
