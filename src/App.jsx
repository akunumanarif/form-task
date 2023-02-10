import { Routes, Route } from "react-router-dom";
import DoneTask from "./pages/DoneTask";
// import UseLogin from "./hooks/useLogin";
import Navbar from "./components/Navbar";
// import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";
// import Cookies from "js-cookie";

import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import FormAxios from "./pages/FormAxios";
import About from "./pages/About";
import AboutDetail from "./pages/AboutDetail";
import TodoList from "./pages/Todos";
import { useSelector } from "react-redux";

function App() {
  // custom hooks
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/done" element={<DoneTask />}></Route>
            <Route path="/404" element={<ErrorPage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/aboutdetail" element={<AboutDetail />}></Route>
            <Route path="/" element={<TodoList />}></Route>
            <Route path="/form" element={<FormAxios />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
