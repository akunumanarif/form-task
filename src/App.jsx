import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DoneTask from "./pages/DoneTask";
import UseLogin from "./hooks/useLogin";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import FormRedux from "./pages/FormRedux";

import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import NameApps from "./components/mockFolder/NameApps";
import FormAxios from "./pages/FormAxios";
import About from "./pages/About";
import AboutDetail from "./pages/AboutDetail";
import TodoList from "./pages/Todos";

function App() {
  // custom hooks

  const [isLogin, setIsLogin, isReady] = UseLogin(false);

  const navigate = useNavigate();
  const handleLogin = (val) => {
    localStorage.setItem("token", "123");
    setIsLogin(true);
    navigate("/");
  };

  if (!isReady) return null;
  return (
    <>
      {isLogin ? (
        <>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/names" element={<NameApps />}></Route>
            <Route path="/done" element={<DoneTask />}></Route>
            <Route path="/404" element={<ErrorPage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/aboutdetail" element={<AboutDetail />}></Route>
            <Route path="/" element={<TodoList />}></Route>
            {/* <Route path="/form" element={<FormRedux />}></Route> */}
            <Route path="/form" element={<FormAxios />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </>
      ) : (
        <Routes>
          <Route
            path="*"
            element={<Login auth={(val) => handleLogin(val)} />}
          ></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
