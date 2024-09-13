import axios from "axios";
import { loginStart, loginSuccess, loginFailed } from "./authSlice";
import { ROUTER } from "utils/router";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate(`/${ROUTER.USER.HOME}`);
  } catch (err) {
    dispatch(loginFailed());
    console.error("Login failed", err);
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/register", user);
    dispatch(loginSuccess(res.data));
    navigate(`/${ROUTER.USER.LOGIN}`);
  } catch (err) {
    dispatch(loginFailed());
    console.error("Register failed", err);
  }
};
