import React from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "../components/ErrorMsg";

const Login = ({ auth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    if (e.email !== "admin@alta.com" && e.password !== "admin")
      return alert("Data tidak valid");
    auth(e);
    navigate("/");
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 justifyContent-center">
      <form onSubmit={handleSubmit(handleLogin)}>
        <MDBInput
          placeholder="email"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <ErrorMsg message="Email sudah disediakan" />}
        <MDBInput
          placeholder="password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <ErrorMsg message="Password sudah disediakan" />}
        <MDBBtn type="submit" style={{ color: "blue" }}>
          Submit
        </MDBBtn>
      </form>

      <div className="text-center">
        <p>Login diperlukan untuk React Routing</p>
        <p>Username : admin@alta.com</p>
        <p>Password : admin</p>

        <div
          className="d-flex justify-content-between mx-auto"
          style={{ width: "40%" }}
        ></div>
      </div>
    </MDBContainer>
  );
};

export default Login;
