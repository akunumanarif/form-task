import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      item: "aaaa",
      price: 1000,
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addData: (state, action) => {
      let cpData = [{ ...state.data }];
      cpData.push(action.payload);
      state.data = action.payload;
    },
  },
});

export const { addData } = productSlice.actions;

export default productSlice.reducer;
