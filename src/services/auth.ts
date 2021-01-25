import { setToastParameters } from "redux/Actions/toastActions";
import { getExpireDate, setCookie, deleteCookie } from "helpers/cookies";
import { setRequestStatus } from "redux/Actions/sessionActions";
import { setLoggedUser } from "redux/Actions/sessionActions";
import { axiosInstance } from "services/api";
import { setServerStatus } from "redux/Actions/statusActions";

interface DataType {
  name: string;
  password: string;
}

type AuthType = "login" | "register";

export const authRequest = (
  option: AuthType,
  data: DataType,
  dispatch: any
) => {
  axiosInstance
    .post(`/auth/${option}`, data)
    .then((res) => {
      const { name, token, tokenLifeTime } = res.data;
      const expireTokenDate: Date = getExpireDate(tokenLifeTime);
      setCookie("token", token, expireTokenDate);
      setCookie("name", name, expireTokenDate);
      dispatch(setLoggedUser(name));
      dispatch(setRequestStatus(true));
      option === "login"
        ? dispatch(setToastParameters(true, "Successfully logged in"))
        : dispatch(setToastParameters(true, "Successfully registered"));
    })
    .catch((error) => {
      const errorMessage = { ...error.response }.data;
      dispatch(setRequestStatus(false));
      dispatch(
        setToastParameters(true, `${errorMessage}`, "exclamation-circle")
      );
    });
};

export const manageServerStatus = (dispatch: any): void => {
  axiosInstance
    .get("/auth")
    .then(() => {
        dispatch(setServerStatus(true))
    }).catch(() =>
        dispatch(setToastParameters(true, "Reload the page", "exclamation-circle"))
    );
};

export const logout = () => {
  deleteCookie("token");
  deleteCookie("name");
};
