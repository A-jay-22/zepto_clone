import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: null,
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    createInvoice: (state, action) => {
      const order = action.payload;

      state.invoice = {
        invoiceNo: `INV-${Date.now()}`,
        orderId: order.orderId,
        date: new Date().toLocaleString(),
        customer: order.customer,
        email: order.email,
        phone: order.phone,
        address: order.address,
        paymentMethod: order.paymentMethod,
        items: order.items,
        subtotal: order.subtotal,
        tax: order.tax,
        shipping: order.shipping,
        total: order.total,
      };
    },

    clearInvoice: (state) => {
      state.invoice = null;
    },
  },
});

export const { createInvoice, clearInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
