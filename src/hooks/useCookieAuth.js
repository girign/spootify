import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FALLBACK_PAGE } from "../app/constants";

function useCookieAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    let accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      navigate(FALLBACK_PAGE);
    }
  }, []);
}

export default useCookieAuth;
