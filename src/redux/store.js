// this is a redux store
import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";

// configureStore creates a store
export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});

console.log(store);
