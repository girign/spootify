import axios from "axios";
import Cookies from "js-cookie";

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${Cookies.get("accessToken")}`;
  return config;
});

axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    console.log(error);
    if (error.code === "ERR_BAD_REQUEST") {
      Cookies.remove("accessToken");
      window.location = "/login";
    }
    return Promise.reject(error);
  }
);

export default axios;
