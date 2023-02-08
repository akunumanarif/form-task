import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/api";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios({
        baseURL: "https://reqres.in/api",
        url: "/users",
        method: "get",
      });
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(response);

  return { response, error, loading };
};

export default useAxios;
