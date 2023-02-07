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
      state.data = action.payload;
    },
  },
});

export const { addData } = productSlice.actions;

export default productSlice.reducer;
