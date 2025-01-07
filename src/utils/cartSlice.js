// How to create a slice in the redux store
// the redux store comes from the redux toolkit

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["burger", "pizza"],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating our state ove r state
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },
    clearItem: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
