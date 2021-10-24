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

export default mainHttp;
