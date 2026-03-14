import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: { // we are writing multiple reducers

    // Vanilla(older) Redux => DON'T MUTATE STATE, returning was mandatory
    // we are taking copy
    // const newState = [...state];
    // newState.items.push(action.payload);
    // return newState;

    // In new redux toolkit -> we are mutating -> internaly immuatating uses immer library
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;   // state = [] will not work
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer; // exporting one reducer
