import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cartSlice";
import api from "./api/api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});

export default store;
