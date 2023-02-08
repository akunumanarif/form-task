import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { useState, useEffect } from "react";
import axios from "axios";
import useAxios from "../hooks/useFetcher";
import { Link } from "react-router-dom";

const About = () => {
  // const [response, setResponse] = useState(null);
  // const [error, setError] = useState("");
  // const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   const fetchData = () => {
  //     axios
  //       .get("https://reqres.in/api/users/")
  //       .then((res) => {
  //         setResponse(res.data);
  //       })
  //       .catch((err) => {
  //         setError(err);
  //       })
  //       .finally(() => {
  //         setloading(false);
  //       });
  //   };

  //   fetchData();
  // }, []);

  const { response, loading, error } = useAxios({
    // method: "get",
    // url: "/",
  });
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setPersons(response);
    }
  }, [response]);

  console.log(response);

  return (
    <div className="form-wrapper ">
      <form>
        {/* {data.first_name} */}
        <div className="App">
          <h1>Posts</h1>
          {loading ? (
            <p>loading...</p>
          ) : (
            <div>
              {error && (
                <div>
                  <p>{error.message}</p>
                </div>
              )}
              {response?.data.map((user) => {
                return (
                  <div key={user.id}>
                    <p>
                      <strong>{user.first_name}</strong>
                    </p>
                    <p>{user.email}</p>
                    <Link to={`/about/${user.id}`}>
                      <img key={user.avatar} src={user.avatar} />
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </form>
    </div>
  );

  // return (
  //   <div className="form-wrapper ">
  //     <form>
  //       {/* {data.first_name} */}
  //       <div className="App">
  //         <h1>Posts</h1>
  //         {/* <div>{data && <p>{data.id}</p>}</div> */}
  //         {loading ? (
  //           <p>loading...</p>
  //         ) : (
  //           <div>
  //             {error && (
  //               <div>
  //                 <p>{error.message}</p>
  //               </div>
  //             )}
  //             {response.data.map((user) => {
  //               return (
  //                 <div key={user.id}>
  //                   <p>
  //                     <strong>{user.first_name}</strong>
  //                   </p>
  //                   <p>{user.email}</p>
  //                   <Link to={`/about/${user.id}`}>
  //                     <img key={user.avatar} src={user.avatar} />
  //                   </Link>
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         )}
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default About;

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
