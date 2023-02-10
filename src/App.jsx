import { Routes, Route } from "react-router-dom";
import DoneTask from "./pages/DoneTask";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

import "./App.css";
import ErrorPage from "./pages/ErrorPage";
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
            <Route path="/" element={<TodoList />}></Route>
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
