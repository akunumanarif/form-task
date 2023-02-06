import { useState } from "react";

// styles
import styles from "./TaskItem.module.css";

// Library imports

const TaskDoneItem = ({ task }) => {
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <label htmlFor={task.id} className={styles.label}>
          {task.checked ? task.name : null}
          {/* {task.name} */}
        </label>
      </div>
    </li>
  );
};
export default TaskDoneItem;
