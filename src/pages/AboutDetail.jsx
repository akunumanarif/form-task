import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { useState, useEffect } from "react";
import axios from "axios";
import useAxios from "../hooks/useFetcher";
import { useParams } from "react-router-dom";
const AboutDetail = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const { id } = useParams();

  //   const persons = response.data.find((p) => p.id === id);

  useEffect(() => {
    const fetchData = () => {
      axios
        // .get(`https://reqres.in/api/users/${id}`)
        .get(`https://native-guppy-13.hasura.app/api/rest/alterra/tasks`)
        .then((res) => {
          setResponse(res.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setloading(false);
        });
    };

    fetchData();
  }, []);

  //console.log(response?.todos[0].title);

  return (
    <div className="form-wrapper ">
      <form>
        {/* {data.first_name} */}
        <div className="App">
          <h1>Posts</h1>
          {/* <div>{data && <p>{data.id}</p>}</div> */}
          {/* {loading ? (
            <p>loading...</p>
          ) : (
            <div>
              {error && (
                <div>
                  <p>{error.message}</p>
                </div>
              )}

              <p>
                <strong>{response.data.first_name}</strong>
              </p>
              <p>{response.data.email}</p>
            </div>
          )} */}

          {response?.todos.map((task) => {
            return <p key={task.id}>{task.title}</p>;
          })}
        </div>
      </form>
    </div>
  );
};

export default AboutDetail;

// console.log(userData);

// useEffect(() => {
//   axios({
//     method: "get",
//     url: "https://reqres.in/api/users?page=2",
//     responseType: "stream",
//   }).then(function (response) {
//     response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
//   });
// }, [input]);
