import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "../components/ErrorMsg";
import Cookies from "js-cookie";

const Login = ({ auth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    Cookies.set("token", "123");
    // if (e.email !== "admin@alta.com" && e.password !== "admin")
    //   return alert("Data tidak valid");
    auth(e);
    navigate("/");
  };
  return (
    <div className="form-wrapper ">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
            aria-describedby="emailHelp"
            {...register("email", { required: true })}
          />
          {errors.email && <ErrorMsg message="Email salah" />}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <ErrorMsg message="Password salah" />}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <div className="data mt-8">
          <div id="emailHelp" className="form-text">
            Username = admin@alta.com
          </div>
          <div id="emailHelp" className="form-text">
            Password = admin
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
