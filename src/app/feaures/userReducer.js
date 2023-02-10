import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      name: "tes",
      password: "123",
    },
  ],
};

export const userSlice = createSlice({
  name: "me",
  initialState,
  reducers: {
    submitUser: (state, action) => {
      let cpData = [{ ...state.data }];
      cpData.push(action.payload);
      state.data = action.payload;
    },
  },
});

export const { submitUser } = userSlice.actions;

export default userSlice.reducer;
