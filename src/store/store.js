import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import localStorageMiddleware from "./localStorageMiddleware";

const loadInitialState = () => {
  const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  return {
    cartItems: savedCartItems,
    filter: "",
  };
};

export const store = configureStore({
  reducer: {
    cartItems: cartSlice,
    filter: filterSlice,
  },
  preloadedState: loadInitialState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
