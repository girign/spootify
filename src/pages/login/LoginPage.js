import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CLIENT_ID,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  RESPONSE_TYPE,
} from "../../app/constants";
import { setToken } from "./authSlice";

function LoginPage({ landingPagePath }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function setTokenAndLogin(token) {
    dispatch(setToken(token));
    navigate(landingPagePath);
  }

  useEffect(() => {
    if (window.location.href.includes("token")) {
      let urlParts = window.location.href.split("&");
      console.log(urlParts);
      let token = urlParts[0].split("=")[1];
      console.log(token);
      Cookies.set("accessToken", token);
      setTokenAndLogin(token);
    } else {
      let accessToken = Cookies.get("accessToken");
      console.log("came here got", accessToken);
      if (accessToken) {
        setTokenAndLogin(accessToken);
      }
    }
  }, []);

  return (
    <div>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}`}
      >
        Login using Spotify
      </a>
    </div>
  );
}

export default LoginPage;
