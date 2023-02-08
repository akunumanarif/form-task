import React from "react";
import { useState, useEffect } from "react";
import CustomForm from "../CustomForm";
import EditForm from "./EditFormNames";
import NameList from "./NameList";
import apiNames from "../../api/fetchApi";

const NameApps = () => {
  //   const [names, setNames] = useLocalStorage("react-todo.names", []);

  const API_URL = "http://localhost:5000/items";

  const [names, setNames] = useState([]);
  //   const [names, setNames] = useState(
  //     JSON.parse(localStorage.getItem("name-lists")) || []
  //   );
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedName, setEditedName] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const refreshPage = () => {
    window.location.reload();
  };

  //   useEffect(() => {
  //     const fetchAPI = async () => {
  //       try {
  //         const response = await fetch(API_URL);
  //         if (!response.ok) throw Error("Data error");
  //         const listnames = await response.json();
  //         setNames(listnames);
  //       } catch (error) {
  //         console.log(error.stack);
  //       }
  //     };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await apiNames.get("/items");
        setNames(response.data);
      } catch (error) {
        console.log(error.stack);
      }
    };

    fetchAPI();
  }, []);

  //     fetchAPI();
  //   }, []);
  //   useEffect(() => {
  //     localStorage.setItem("name-lists", JSON.stringify(names));
  //   }, [names]);

  const addNames = async (names) => {
    try {
      const response = await apiNames.post("/items", names);
      setNames((prevState) => [...prevState, response.data]);
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  };

  const deleteName = async (id) => {
    try {
      await apiNames.delete(`/items/${id}`);
      setNames((prevState) => prevState.filter((t) => t.id !== id));
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  };

  const updateName = async (name) => {
    try {
      const response = await apiNames.put(`/items/${name.id}`, name);
      setNames((prevState) =>
        prevState.map((t) =>
          t.id === response.id ? { ...t, name: response.name } : t
        )
      );
      closeEditMode();
    } catch (error) {
      console.log(`Error : ${error.message}`);
    }
  };

  const toggleName = (id) => {
    setNames((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const closeEditMode = () => {
    setIsEditing(false);
    // previousFocusEl.focus();
    refreshPage();
  };

  const enterEditMode = (name) => {
    setEditedName(name);
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
          editedName={editedName}
          updateName={updateName}
          closeEditMode={closeEditMode}
        />
      )}

      <CustomForm addTask={addNames} />
      {names && (
        <NameList
          names={names}
          deleteName={deleteName}
          toggleName={toggleName}
          enterEditMode={enterEditMode}
        />
      )}
    </>
  );
};

export default NameApps;
