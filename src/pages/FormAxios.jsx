import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { useState, useEffect } from "react";
import axios from "axios";
import useAxios from "../hooks/useFetcher";

const FormAxios = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(0);
  const [data, setData] = useState([]);

  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://reqres.in/api/users?page=2")
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

  // console.log(response);

  const handleRedux = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-wrapper ">
      <form onSubmit={handleRedux}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            id="item"
            placeholder="item"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            id="price"
            placeholder="price"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {/* {data.first_name} */}
        <div className="App">
          <h1>Posts</h1>
          {/* <div>{data && <p>{data.id}</p>}</div> */}
          {loading ? (
            <p>loading...</p>
          ) : (
            <div>
              {error && (
                <div>
                  <p>{error.message}</p>
                </div>
              )}
              {/* <div>{data && <p>{data.id}</p>}</div> */}
              {response.data.map((d) => (
                <p key={d.id}>{d.first_name}</p>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormAxios;

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
