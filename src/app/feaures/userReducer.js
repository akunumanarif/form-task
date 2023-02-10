import { createSlice, createAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isLoggedIn: !!Cookies.get("isLoggedIn"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      Cookies.set("isLoggedIn", true, { expires: 1 });
    },
    logout: (state) => {
      state.isLoggedIn = false;
      Cookies.remove("isLoggedIn");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   data: [],
// };

// export const userSlice = createSlice({
//   name: "me",
//   initialState,
//   reducers: {
//     submitUser: (state, action) => {
//       let cpData = [{ ...state.data }];
//       cpData.push(action.payload);
//       state.data = cpData;
//     },
//   },
// });

// export const { submitUser } = userSlice.actions;

// export default userSlice.reducer;
