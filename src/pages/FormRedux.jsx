import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { productSlice } from "../app/feaures/productReducer";
import { userSlice } from "../app/feaures/userReducer";
import { addData } from "../app/feaures/productReducer";
import { submitUser } from "../app/feaures/userReducer";

const FormRedux = () => {
  const userData = useSelector((state) => state.me.data);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(0);
  const dispatch = useDispatch();

  const handleRedux = (e) => {
    e.preventDefault();
    // console.log(email, password);

    dispatch(submitUser({ name: email, password: password }));

    // dispatch(submitUser({name: }));
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
            type="number"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            id="price"
            placeholder="price"
          />
        </div>
        {/* {userData} */}
        {userData.map((d, i) => (
          <div key={i} style={{ color: "red", fontSize: "30px" }}>
            <p>{d.name}</p>
            <p>{d.password}</p>
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormRedux;
