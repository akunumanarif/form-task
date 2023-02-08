//? Library
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//? Components
import Home from "./pages/Home";
import DoneTask from "./pages/DoneTask";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

//? Custom hooks
import UseLogin from "./hooks/useLogin";
//? Css
import "./App.css";

function App() {
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
            <Route path="/" element={<Home />}></Route>
            <Route path="/done" element={<DoneTask />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/404" element={<ErrorPage />}></Route>
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
