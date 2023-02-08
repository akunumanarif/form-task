// component import
import NameItem from "./NameItem";

// styles
import styles from "./TaskList.module.css";

const NameList = ({ names, deleteName, toggleName, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {names
        .sort((a, b) => b.id - a.id)
        .map((name) => (
          <NameItem
            key={name.id}
            name={name}
            deleteName={deleteName}
            toggleName={toggleName}
            enterEditMode={enterEditMode}
          />
        ))}
    </ul>
  );
};
export default NameList;
