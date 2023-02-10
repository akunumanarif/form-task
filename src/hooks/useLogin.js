import { useEffect } from "react";
import { useState } from "react";

const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const getToken = localStorage.getItem("token");
  const setReady = () => setIsReady(true);

  useEffect(() => {
    if (getToken) {
      setIsLogin(true);
    }
    setTimeout(setReady, 1000);

    return () => clearTimeout(setReady);
  }, [getToken]);

  return [isLogin, setIsLogin, isReady];
};
export default useLogin;
