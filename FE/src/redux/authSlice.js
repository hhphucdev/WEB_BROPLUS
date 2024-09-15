import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      success: false,
      error: false,
    },
  },
  reducers: {
    // Xử lý đăng nhập
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },

    // Xử lý đăng xuất
    logout: (state) => {
      state.login.currentUser = null;
    },

    // Xử lý đăng ký
    registerStart: (state) => {
      state.register.isFetching = true;
      state.register.success = false;
      state.register.error = false;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.success = true;
      state.register.error = false;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },

    // Cập nhật avatar
    updateUserAvatar: (state, action) => {
      state.login.currentUser.avatar = action.payload;
    },

    // RESET PASSWORD
    resetPassword: (state, action) => {
      state.login.currentUser.password = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  logout,
  registerStart,
  registerSuccess,
  registerFailed,
  updateUserAvatar,
  resetPassword,
} = authSlice.actions;

export default authSlice.reducer;
