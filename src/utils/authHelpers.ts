import Cookies from "js-cookie";

export const setTokenCookie = (token: string) => {
  Cookies.set("amazToken", token, { expires: 20 });
};

export const removeTokenCookie = () => {
  Cookies.remove("amazToken");
};

export const getTokenCookie = () => {
  return Cookies.get("amazToken");
};
