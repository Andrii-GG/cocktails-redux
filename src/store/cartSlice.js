import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },

    setToCart: (state, action) => {
      return action.payload;
    },

    removeFromCart: (state, action) => {
      const newCartItems = [...state];
      const index = newCartItems.findIndex(
        (element) => element.idDrink === action.payload
      );
      if (index !== -1) {
        newCartItems.splice(index, 1);
      }
      return newCartItems;
    },
  },
});

export const { addToCart, removeFromCart, setToCart } = cartSlice.actions;
export default cartSlice.reducer;
