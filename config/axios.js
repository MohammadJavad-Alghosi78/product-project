import axios from "axios";
import {
  setErrorInterceptor,
  setRequestInterceptor,
  setResponseInterceptor,
} from "./interceptors";

const getAxiosRequestConfig = () => {
  const requestConfiguration = {
    headers: {
      "Content-Type": "application/json",
      "X-client": "web",
    },
    baseURL: "https://fakestoreapi.com",
    timeOut: 10000,
    maxRedirects: 0,
    withCredentials: false,
  };

  return requestConfiguration;
};

const mainHttp = axios.create(getAxiosRequestConfig());

mainHttp.interceptors.request.use(setRequestInterceptor, setErrorInterceptor);
mainHttp.interceptors.response.use(setResponseInterceptor, setErrorInterceptor);
/* axiosInstance.interceptors.request.use(
  (request) => {
    if (true) {
      request.headers["token"] = "=======";
    }
    console.log(request.headers);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
; */
export default mainHttp;
