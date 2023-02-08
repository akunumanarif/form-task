//? Library
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//? Components
import ErrorMsg from "../components/ErrorMsg";

//? Styles
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

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
    <MDBContainer className="p-3 mt-10 d-flex flex-column w-50 justifyContent-center alignItems-center">
      <form onSubmit={handleSubmit(handleLogin)}>
        <img
          src="https://www.alterra.id/wp-content/themes/alterra-wp/assets/revamp/img/logo_nav@2x.png"
          alt="Project logo"
          className="logo-alta"
        />
        <MDBInput
          className="mb-3"
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
        <MDBBtn
          className="mt-3 mx-auto"
          type="submit"
          style={{ color: "blue" }}
        >
          Submit
        </MDBBtn>
        <div className="text-start mt-3 text-secondary">
          <p className="color-grey">Login diperlukan untuk React Routing</p>
          <p>Username : admin@alta.com</p>
          <p>Password : admin</p>
        </div>
      </form>
    </MDBContainer>
  );
};

export default Login;
