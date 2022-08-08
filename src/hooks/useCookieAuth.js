import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useCookieAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    let accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, []);
}

export default useCookieAuth;
