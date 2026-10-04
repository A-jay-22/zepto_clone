import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, createProduct, deleteProduct, updateProduct } from '../../api/api';

// Async Thunks
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ category = '', search = '' } = {}, { rejectWithValue }) => {
    try {
      const data = await getProducts(category, search);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewProduct = createAsyncThunk(
  'products/addNewProduct',
  async (productData, { rejectWithValue }) => {
    try {
      const data = await createProduct(productData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  'products/removeProduct',
  async (productId, { rejectWithValue }) => {
    try {
      await deleteProduct(productId);
      return productId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  'products/editProduct',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const updated = await updateProduct(id, data);
      return updated;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  activeCategory: 'all',
  searchQuery: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload || [];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Add Product
      .addCase(addNewProduct.fulfilled, (state, action) => {
        if (action.payload) {
          state.items.unshift(action.payload);
        }
      })
      // Remove Product
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (p) => p._id !== action.payload && p.id !== action.payload
        );
      })
      // Edit Product
      .addCase(editProduct.fulfilled, (state, action) => {
        if (action.payload) {
          const index = state.items.findIndex(
            (p) => p._id === action.payload._id || p.id === action.payload._id
          );
          if (index !== -1) {
            state.items[index] = action.payload;
          }
        }
      });
  },
});

export const { setActiveCategory, setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
