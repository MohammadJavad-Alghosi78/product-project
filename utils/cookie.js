import { setCookie, destroyCookie, parseCookies } from "nookies";

const ACCESS_TOKEN = "access_token";

const MAX_AGE = 90 * 24 * 60 * 60; // 3 Months

const setAccessToken = (accessToken, serverContext) => {
  setCookie(serverContext, ACCESS_TOKEN, accessToken, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    secure: true,
    path: "/",
  });
};

export default cookieHandlers;
