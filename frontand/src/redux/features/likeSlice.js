import { createSlice } from "@reduxjs/toolkit";

const getSavedWishlist = () => {
  try {
    const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
    if (user?.email) {
      const userWishlist = localStorage.getItem(`wishlist_${user.email}`);
      if (userWishlist) return JSON.parse(userWishlist);
      if (user.wishlist?.length) return user.wishlist;
    }
    const guestWishlist = localStorage.getItem("wishlist_guest");
    return guestWishlist ? JSON.parse(guestWishlist) : [];
  } catch {
    return [];
  }
};

const saveWishlist = (wishlistItems) => {
  try {
    const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
    if (user?.email) {
      localStorage.setItem(`wishlist_${user.email}`, JSON.stringify(wishlistItems));
    } else {
      localStorage.setItem("wishlist_guest", JSON.stringify(wishlistItems));
    }
  } catch (e) {
    console.error(e);
  }
};

const initialState = {
  wishlist: getSavedWishlist(),
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistItems: (state, action) => {
      state.wishlist = action.payload || [];
      saveWishlist(state.wishlist);
    },
    addToWishlist: (state, action) => {
      const item = action.payload;
      const itemId = item._id || item.id;

      const exists = state.wishlist.some(
        (product) => (product._id || product.id) === itemId
      );

      if (!exists) {
        state.wishlist.push({
          ...item,
          id: itemId,
          _id: itemId,
        });
      }
      saveWishlist(state.wishlist);
    },

    removeFromWishlist: (state, action) => {
      const targetId = action.payload;
      state.wishlist = state.wishlist.filter(
        (item) => (item._id || item.id) !== targetId
      );
      saveWishlist(state.wishlist);
    },
  },
});

export const { setWishlistItems, addToWishlist, removeFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
