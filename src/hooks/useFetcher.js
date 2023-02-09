import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (method, endpoint, data) => {
    setLoading(true);
    try {
      const res = await axios({
        baseURL: "https://native-guppy-13.hasura.app/api/rest/alterra",
        url: endpoint,
        method: method,
        data: data,
      });
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTodos = () => {
    fetchData("get", "/tasks");
  };

  const addTodo = (todo) => {
    fetchData("post", "/tasks", { title: todo.title });
  };

  const deleteTodo = (id) => {
    fetchData("delete", `/tasks/${id}`);
  };

  const updateTodo = (id, title) => {
    fetchData("put", `/tasks/${id}`, { title });
  };

  return {
    response,
    error,
    loading,
    fetchTodos,
    addTodo,
    deleteTodo,
    updateTodo,
  };
};

export default useAxios;

// import { useState, useEffect } from "react";
// import axios from "axios";

// const useAxios = () => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const res = await axios({
//         baseURL: "https://reqres.in/api",
//         url: "/users",
//         method: "get",
//       });
//       setResponse(res.data);
//       setError(null);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(response);

//   return { response, error, loading };
// };

// export default useAxios;
