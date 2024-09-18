import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  updateUserInfoStart,
  updateUserInfoSuccess,
  updateUserInfoFailed,
} from "./authSlice";
import { ROUTER } from "utils/router";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    const userData = res.data;
    dispatch(loginSuccess(userData));
    localStorage.setItem("accessToken", userData.accessToken);
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
  dispatch(updateUserInfoStart());
  try {
    const response = await axios.patch("/auth/update-info", user, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    dispatch(updateUserInfoSuccess());
    dispatch(loginSuccess(response.data)); // Cập nhật thông tin user trong store
  } catch (err) {
    dispatch(updateUserInfoFailed());
    console.error("Cập nhật thông tin thất bại", err);
  }
};

export const updateUserAvatar = async (base64Image, dispatch) => {
  try {
    const response = await axios.patch(
      "/auth/update-avatar",
      { base64Image },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    dispatch(loginSuccess({ avatar: response.data.avatar }));
    console.log("Avatar updated successfully");
  } catch (err) {
    console.error("Lỗi khi cập nhật ảnh đại diện:", err);
  }
};
