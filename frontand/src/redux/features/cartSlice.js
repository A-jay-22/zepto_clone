import { createSlice } from "@reduxjs/toolkit";

const getSavedCart = () => {
  try {
    const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
    if (user?.email) {
      const userCart = localStorage.getItem(`cart_${user.email}`);
      if (userCart) return JSON.parse(userCart);
      if (user.cart?.length) return user.cart;
    }
    const guestCart = localStorage.getItem("cart_guest");
    return guestCart ? JSON.parse(guestCart) : [];
  } catch {
    return [];
  }
};

const saveCart = (cartItems) => {
  try {
    const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
    if (user?.email) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cartItems));
    } else {
      localStorage.setItem("cart_guest", JSON.stringify(cartItems));
    }
  } catch (e) {
    console.error(e);
  }
};

const initialState = {
  cartItems: getSavedCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload || [];
      saveCart(state.cartItems);
    },
    // Add item to cart
    addToCart: (state, action) => {
      const item = action.payload;
      const itemId = item._id || item.id;

      const existingItem = state.cartItems.find(
        (cartItem) => (cartItem._id || cartItem.id) === itemId
      );

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.cartItems.push({
          ...item,
          id: itemId,
          _id: itemId,
          quantity: 1,
        });
      }
      saveCart(state.cartItems);
    },

    // Remove item from cart
    removeFromCart: (state, action) => {
      const targetId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => (item._id || item.id) !== targetId
      );
      saveCart(state.cartItems);
    },

    // Clear cart
    clearCart: (state) => {
      state.cartItems = [];
      saveCart(state.cartItems);
    },

    // Increase Quantity
    increaseQty: (state, action) => {
      const targetId = action.payload;
      const item = state.cartItems.find(
        (item) => (item._id || item.id) === targetId
      );

      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
      saveCart(state.cartItems);
    },

    // Decrease Quantity
    decreaseQty: (state, action) => {
      const targetId = action.payload;
      const item = state.cartItems.find(
        (item) => (item._id || item.id) === targetId
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCart(state.cartItems);
    },
  },
});

export const {
  setCartItems,
  addToCart,
  removeFromCart,
  clearCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;
