import axios from "axios";
import { loginStart, loginSuccess, loginFailed, updateUserInfoSuccess, updateUserInfoFailed, updateUserInfoStart } from "./authSlice";
import { ROUTER } from "utils/router";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    const userData = res.data;
    dispatch(loginSuccess(res.data));
    // Lưu token vào localStorage
    localStorage.setItem("accessToken", userData.accessToken);
    // Lưu user vào Redux
    dispatch(loginSuccess(userData));
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

export const logout = (dispatch) => {
  dispatch(loginSuccess(null));
  localStorage.removeItem("accessToken");
};

export const updateUserInfo = async (user, dispatch) => {
  try {
    dispatch(updateUserInfoStart());
    const res = await fetch("/auth/update-info", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (res.ok) {
      dispatch(updateUserInfoSuccess());
      dispatch(loginSuccess(data)); // Cập nhật thông tin user trong store
    } else {
      dispatch(updateUserInfoFailed());
      console.error(data.message);
    }
  } catch (err) {
    dispatch(updateUserInfoFailed());
    console.error("Cập nhật thông tin thất bại", err);
  }
};


export const updateUserAvatar = (avatar) => {
  return (dispatch) => {
    dispatch(loginSuccess({ avatar }));
  };
};

