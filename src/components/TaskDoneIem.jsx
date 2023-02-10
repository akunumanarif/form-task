// styles
import styles from "./TaskItem.module.css";

// Library imports

const TaskDoneItem = ({ task }) => {
  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <label htmlFor={task.id} className={styles.label}>
          {task.completed ? task.title : null}
        </label>
      </div>
    </li>
  );
};
export default TaskDoneItem;
