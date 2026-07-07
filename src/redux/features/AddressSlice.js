import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: JSON.parse(localStorage.getItem("address")) || {
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  },
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    saveAddress: (state, action) => {
      state.address = action.payload;
      localStorage.setItem("address", JSON.stringify(action.payload));
    },

    clearAddress: (state) => {
      state.address = {
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        pincode: "",
      };

      localStorage.removeItem("address");
    },
  },
});

export const { saveAddress, clearAddress } = addressSlice.actions;

export default addressSlice.reducer;
