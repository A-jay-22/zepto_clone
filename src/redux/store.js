import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import wishlistReducer from "./features/likeSlice";
import searchReducer from "./features/searchSlice";
import addressReducer from "./features/AddressSlice";
import invoiceReducer from "./features/InvoiceSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    search: searchReducer,
    address: addressReducer,
    invoice: invoiceReducer,
  },
});
