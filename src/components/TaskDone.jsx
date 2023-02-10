// component import
import TaskDoneItem from "./TaskDoneIem";

// styles
import styles from "./TaskList.module.css";

const TaskDone = ({ tasks }) => {
  return (
    <ul className={styles.tasks}>
      {tasks
        // .sort((a, b) => b.id - a.id)
        .filter((task) => task.completed)
        .map((task) => (
          <TaskDoneItem key={task.id} task={task} />
        ))}
    </ul>
  );
};
export default TaskDone;
