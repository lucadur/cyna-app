import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "../slice/addressSlice";
import authReducer from "../slice/authSlice";
import cartReducer from "../slice/cartSlice";
import categoryReducer from "../slice/categorySlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    address: addressReducer,
    categories: categoryReducer,
  },
});

export default store;
