import axios from "axios";

// Direct backend API instance pointing to Express server
export const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Attach Authorization Bearer token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ==================== PRODUCT ENDPOINTS ====================

// Fetch products directly from backend DB
export const getProducts = async (category = "", search = "") => {
  const params = new URLSearchParams();
  if (category && category !== "all") params.append("category", category);
  if (search && search.trim() !== "") params.append("search", search.trim());

  let url = "/products";
  if (params.toString()) url += `?${params.toString()}`;

  const response = await api.get(url);
  return response.data?.products || [];
};

// Create product directly on backend via Multer multipart or JSON
export const createProduct = async (productData) => {
  const isFormData = productData instanceof FormData;
  const response = await api.post("/products", productData, {
    headers: isFormData ? { "Content-Type": "multipart/form-data" } : {},
  });
  return response.data?.product;
};

// Update product on backend
export const updateProduct = async (id, data) => {
  const isFormData = data instanceof FormData;
  const response = await api.put(`/products/${id}`, data, {
    headers: isFormData ? { "Content-Type": "multipart/form-data" } : {},
  });
  return response.data?.product;
};

// Delete product on backend
export const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

// Upload standalone product image
export const uploadProductImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  const response = await api.post("/products/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data?.imageUrl;
};

// ==================== AUTH ENDPOINTS ====================

// Customer Login
export const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

// Customer Register
export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

// Admin Login
export const adminLogin = async (credentials) => {
  const response = await api.post("/auth/admin/login", credentials);
  return response.data;
};

// Sync User Cart & Wishlist
export const syncUserCartWishlist = async (email, cart, wishlist) => {
  if (!email) return;
  const response = await api.post("/auth/sync", { email, cart, wishlist });
  return response.data;
};

export default api;
