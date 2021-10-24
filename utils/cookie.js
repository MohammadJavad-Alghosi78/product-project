import { setCookie, destroyCookie, parseCookies } from "nookies";

const ACCESS_TOKEN = "access_token";

const MAX_AGE = 90 * 24 * 60 * 60; // 3 Months

const setAccessToken = (accessToken, serverContext = null) => {
  setCookie(serverContext, ACCESS_TOKEN, accessToken, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    secure: true,
    path: "/",
  });
  console.log("cookie has been set");
};

const getAccessToken = () => {
  const cookie = parseCookies();
  return cookie[ACCESS_TOKEN];
};

const destroyAuthToken = (serverContext = null) => {
  destroyCookie(serverContext, ACCESS_TOKEN, { path: "/" });
};

const cookieHandlers = {
  setAccessToken,
  getAccessToken,
  destroyAuthToken,
};
export default cookieHandlers;
