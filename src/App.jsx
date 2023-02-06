import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import DoneTask from "./pages/DoneTask";
import UseLogin from "./hooks/useLogin";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";

import "./App.css";

function App() {
  // custom hooks

  const [isLogin, setIsLogin, isReady] = UseLogin(false);

  const navigate = useNavigate();
  const handleLogin = (val) => {
    if (val.email !== "admin@alta.com" && password !== "admin") return null;
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
            <Route path="/" element={<Home />}></Route>
            <Route path="/done" element={<DoneTask />}></Route>
            <Route path="*" element={<NotFound />}></Route>
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
