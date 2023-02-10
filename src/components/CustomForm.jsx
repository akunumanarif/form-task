import { useState } from "react";

// library imports
import { PlusIcon } from "@heroicons/react/24/solid";

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState({ title: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      title: task.title,
      id: Date(),
      completed: false,
    });
    setTask({ title: "" });
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task.title}
          onChange={(e) => setTask({ title: e.target.value })}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};
export default CustomForm;
