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
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = ({ auth }) => {
  //const [items, setItems] = useLocalStorage("react-forms.items", []);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    // setIsLogin(e);
    navigate("/");
    auth(e);
    //console.log(e);
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <form onSubmit={handleSubmit(handleLogin)}>
        <MDBInput
          placeholder="email"
          type="email"
          {...register("email", { required: true })}
        />
        <MDBInput
          placeholder="password"
          type="password"
          {...register("password", { required: true })}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="text-center">
        <p>Login diperlukan untuk React Routing</p>
        <p>Usernam : admin@alta.com</p>
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
