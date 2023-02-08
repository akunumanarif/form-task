import { useState } from "react";

// styles
import styles from "./TaskItem.module.css";

// Library imports
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

const NameItem = ({ name, deleteName, toggleName, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(name.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleName(name.id);
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={name.name}
          id={name.id}
        />
        <label htmlFor={name.id} className={styles.label}>
          {name.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${name.name} Task`}
          onClick={() => enterEditMode(name)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${name.name} Task`}
          onClick={() => deleteName(name.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};
export default NameItem;
